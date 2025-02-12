<template>
    <div class="">
        <v-card
            elevation="8"
            max-width="448"
            rounded="lg"
            class="!w-full"
        >
            <v-card-title>
                Autenticação
            </v-card-title>
            <v-card-text>
                <v-btn
                        color="indigo"
                        size="large"
                        variant="tonal"
                        prepend-icon="mdi-github"
                        block
                        @click="signInWithOAuth"
                >
                    Entrar
                </v-btn>
            </v-card-text>

        </v-card>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'auth',
})

const session = useSession()

const signInWithOAuth = async () => {
    await session.signInWithGithub()
}
</script>
<style scoped>

</style>
