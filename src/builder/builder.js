const path = require('path')
const fs = require('fs')
const del = require('del')

const iconPark = require('@icon-park/svg')
const sources = require('./sources')

class Builder {
    prefix = 'PinIcon'

    successfulCount = 0
    failedCount = 0

    successfulComponents = []
    failedComponents = []

    baseDir = ''
    srcDir = ''

    constructor() {
        this.baseDir = path.resolve(__dirname, '../..')
        this.srcDir = path.join(this.baseDir, 'src')
    }

    clean() {
        del.sync(path.join(this.srcDir, 'icons', '*'))
        del.sync(path.join(this.srcDir,'list.js'))
        del.sync(path.join(this.srcDir,'index.js'))
    }

    svgContent(name) {
        let svg = iconPark[name]
        return svg ? svg({}) : ''
    }

    stubContent(filename) {
        let stubDir = path.join(this.srcDir, 'builder/stubs');
        return fs.readFileSync(path.resolve(stubDir, filename)).toString()
    }

    createBuilder(name) {
        let svgContent = this.svgContent(name)

        if (!svgContent) {
            return false
        }

        let vueTemplate = svgContent
            .replace('<?xml version="1.0" encoding="UTF-8"?>', '')
            .replace('width="1em"', ':width="size"')
            .replace('height="1em"', ':height="size"')
            .replace(/stroke="currentColor"/g, ':stroke="color"')
            .replace(/fill="currentColor"/g, ':fill="color"')
            .replace(/stroke-width="4"/g, ':stroke-width="strokeWidth"')

        let saveName = sources[name]
        let componentName = this.prefix + saveName

        let componentContent = this.stubContent('vue.vue')
            .replace('__NAME__', componentName)
            .replace('<div>__SVG__</div>', vueTemplate)

        let indexContent = this.stubContent('index.js')
            .replace(/__NAME__/g, componentName)

        return {
            name,
            saveName,
            componentName,
            svgContent,
            componentContent,
            indexContent,
        }
    }

    createComponent(name) {
        let builder = this.createBuilder(name)

        if (builder) {
            let saveDir = path.join(this.srcDir, 'icons', builder.saveName)

            if (!fs.existsSync(saveDir)) {
                fs.mkdirSync(saveDir)
            }

            fs.writeFileSync(path.join(saveDir, builder.componentName + '.vue'), builder.componentContent)
            fs.writeFileSync(path.join(saveDir, builder.componentName + '.svg'), builder.svgContent)
            fs.writeFileSync(path.join(saveDir, 'index' + '.js'), builder.indexContent)
            console.log('Created component: ' + builder.componentName)
            this.successfulCount++
            this.successfulComponents.push(builder)
        } else {
            this.failedCount++
            this.failedComponents.push(name)
            console.log('Failed to create: ' + name)
        }
    }

    createComponents() {
        Object.keys(sources).forEach(name => {
            this.createComponent(name)
        })
    }

    createList() {
        let indexes = this.successfulComponents.map(item => `"${item.saveName}"`).join(",\n    ")

        let content = this.stubContent('list.js')
            .replace('__ICONS__', indexes)

        let filename = path.join(this.srcDir, 'list.js')

        fs.writeFileSync(filename, content)

        console.log('Created list: ' + filename)
    }

    createMain() {
        let imports = this.successfulComponents.map(item => `import _${item.componentName} from "./icons/${item.saveName}"`).join("\n")
        let exports = this.successfulComponents.map(item => `export const ${item.componentName} = _${item.componentName}`).join("\n")
        let icons = this.successfulComponents.map(item=>item.componentName).join(",\n    ")

        let content = this.stubContent('main.js')
            .replace('__IMPORTS__', imports)
            .replace('__EXPORTS__', exports)
            .replace('__ICONS__', icons)

        let filename = path.join(this.srcDir, 'index.js')

        fs.writeFileSync(filename, content)

        console.log('Created main:' + filename)
    }

    printResult() {
        console.log(`Component creation result: ${this.successfulCount} successes, ${this.failedCount} errors`)

        if (this.failedCount) {
            console.log('Component failed: ', this.failedComponents)
        }
    }
}

module.exports = new Builder()
