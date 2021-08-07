<template>
    <div class="space-x-4">
        <pin-icon-user size="48"/>
        <pin-icon-user size="48" class="transform rotate-90"/>
        <pin-icon-user size="48" stroke-width="8" class="border-4 border-solid p-2 box-border"/>
        <pin-icon-user size="48" stroke-width="8" class="border-4 border-solid p-2 box-border rounded"/>
        <pin-icon-user size="48" stroke-width="8" class="border-4 border-solid p-2 box-border rounded-lg"/>
        <pin-icon-user size="48" stroke-width="8" class="border-4 border-solid p-2 box-border rounded-full"/>
        <pin-icon-loading size="48" class="animate-spin"/>
        <pin-icon-rotation size="48" class="animate-spin"/>
    </div>
</template>

<script>
import PinIconUser from "../../../../src/icons/User/PinIconUser";
import PinIconLoading from "../../../../src/icons/Loading/PinIconLoading";
import PinIconRotation from "../../../../src/icons/Rotation/PinIconRotation";

export default {
    name: "Class",
    components: {
        PinIconUser,
        PinIconLoading,
        PinIconRotation,
    }
}
</script>

<style scoped>

</style>
