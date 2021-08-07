<template>
    <div class="space-x-4">
        <pin-icon-user/>
        <pin-icon-wechat/>
    </div>
</template>

<script>
import PinIconUser from "../../../../src/icons/User/PinIconUser";
import PinIconWechat from "../../../../src/icons/Wechat/PinIconWechat";

export default {
    name: "Basic",
    components: {
        PinIconUser,
        PinIconWechat,
    }
}
</script>
