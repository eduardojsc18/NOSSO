export default defineNuxtRouteMiddleware((to) => {

    const session = useSession()

    if (!session.isLogged.value) {
        if (to.path === '/auth/login') {
            return
        }
    }

    if(session.user.value){
        if(to.path.startsWith('/auth') && !to.path.includes('/auth/confirmation')) {
            return navigateTo({path:'/admin/dashboard'})
        }
    }

})
