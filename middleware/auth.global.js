export default defineNuxtRouteMiddleware((to) => {

    const session = useSession()

    if(session.user.value){
        if(to.path.startsWith('/auth') && !to.path.includes('confirmation')) {
            return navigateTo({path:'/admin/dashboard'})
        }
    }

})
