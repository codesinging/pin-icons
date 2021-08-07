<template>
    <div class="space-x-4">
        <pin-icon-user size="48"/>
        <pin-icon-user class="w-12 h-12"/>
        <pin-icon-user style="width: 48px; height: 48px;"/>
    </div>
</template>

<script>
import PinIconUser from "../../../../src/icons/User/PinIconUser";

export default {
    name: "Size",
    components: {
        PinIconUser,
    }
}
</script>
