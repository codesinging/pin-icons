<template>
    <div class="mt-4 border border-solid border-gray-200">
        <div class="p-4">
            <component :is="'Demos-' + name"/>
        </div>
        <div v-if="visible" class="px-4 border-0 border-t border-solid border-gray-200">
            <slot></slot>
        </div>
        <div @click="visible = !visible" class="flex items-center justify-center h-12 border-0 border-t border-solid border-gray-200 cursor-pointer">
            {{ visible ? '隐藏代码' : '显示代码' }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Demo",
    props: {
        name: {
            type: String,
            default: ''
        },
        codeVisible: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            visible: this.codeVisible
        }
    },
}
</script>

<style scoped>

</style>
