<template>
    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <span>Icons</span>
            <span>

            </span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="(icon,index) in icons" :key="index" class="border border-gray-200 border-solid">
                <div class="bg-gray-50 flex items-center justify-center py-4">
                    <div class="border border-dashed border-gray-200 w-12 h-12">
                        <component :is="icon.name" size="48"/>
                    </div>
                </div>
                <div class="flex items-center justify-center h-10 text-sm">{{ icon.name.substring(7) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import PinIcons from "../../../src";

export default {
    name: "IconsViewer",
    components: {
        ...PinIcons
    },
    data() {
        return {
        }
    },
    computed: {
        icons() {
            return Object.values(PinIcons)
        }
    },
}
</script>

<style scoped>

</style>
