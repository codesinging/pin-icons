import PinIconApplicationStore from "./PinIconApplicationStore.vue";

PinIconApplicationStore.install = Vue => {
    Vue.component(PinIconApplicationStore.name, PinIconApplicationStore)
}

export default PinIconApplicationStore
