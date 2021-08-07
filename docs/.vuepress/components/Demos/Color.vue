<template>
    <div class="space-x-4">
        <pin-icon-user size="48" color="red"/>
        <pin-icon-user size="48" color="#00ffff"/>
        <pin-icon-user size="48" class="text-green-500"/>
    </div>
</template>

<script>
import PinIconUser from "../../../../src/icons/User/PinIconUser";

export default {
    name: "Color",
    components: {
        PinIconUser,
    }
}
</script>
