const builder = require('./src/builder/builder')

exports.test = async () => {
    console.log(builder)
}

exports.build = async () => {
    await builder.clean()
    await builder.createComponents()
    await builder.createList()
    await builder.createMain()
    await builder.printResult()
}
