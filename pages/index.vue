<template>
    <div class="min-h-screen flex bg-neutral-800 justify-center items-center">
        <v-card class="mx-auto">
            <v-card-title>
                SOU UMA LANDING PAGE
            </v-card-title>
            <v-card-text>

            </v-card-text>
            <v-card-actions>
                <NuxtLink to="/auth/login">
                    <v-btn text="FAZER LOGIN" variant="tonal" class="w-full" color="orange"/>
                </NuxtLink>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script setup>

definePageMeta({
    layout: 'landing-page'
})
</script>
<style scoped>

</style>
