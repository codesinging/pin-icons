<template>
    <div class="space-x-4">
        <pin-icon-user v-for="n in 6" :key="n" :stroke-width="n" size="48"/>
    </div>
</template>

<script>
import PinIconUser from "../../../../src/icons/User/PinIconUser";

export default {
    name: "Stroke",
    components: {
        PinIconUser,
    }
}
</script>
