export default defineNuxtRouteMiddleware((to) => {

    const session = useSession()

    if (!session.isLogged) {
        if (to.path === '/auth/login') {
            return
        }
    }

    if(session.user.value){

        const route = useRoute()
        const hasCode = !!route?.query?.code

        if (to.path === '/' && hasCode) {
            return navigateTo({path: '/auth/confirmation'})
        }

        if(to.path.startsWith('/auth') && !to.path.includes('/auth/confirmation')) {
            return navigateTo({path:'/admin/dashboard'})
        }
    }

})
