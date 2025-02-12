export const useLayoutStore = defineStore('layout', () => {

    const rail = ref(true)
    const railWidth = 220
    const sidebarWidth = 80

    const { mobile } = useDisplay()

    watch(() => rail, (val) => {
        rail.value = mobile ? false : val;
    }, { immediate: true })

    return {
        rail,
        railWidth,
        sidebarWidth,
    }

}, {persist: true})
