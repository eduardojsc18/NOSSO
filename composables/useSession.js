import {computed} from "vue";

export function useSession() {

    const user = useSupabaseUser()
    const session = useSupabaseSession()
    const supabase = useSupabaseClient()
    const config = useRuntimeConfig()

    const signInWithGithub = async () => {
        return await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${config.public.siteUrl}/auth/confirmation`,
            },
        })
    }
    const signOut = async () => {
        return await supabase.auth.signOut()
    }

    const isLogged = computed(() => {
        return Boolean(user.value)
    })

    return {
        user,
        session,
        signInWithGithub,
        signOut,
        isLogged
    }
}
