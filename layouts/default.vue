<template>
    <v-app theme="dark">
        <v-layout class="!min-h-screen">
            <v-navigation-drawer
                v-model="drawer"
                :rail="mdAndDown || layout.rail"
                :rail-width="layout.railWidth"
                :width="layout.sidebarWidth"
                :temporary="md"
                border="0"
            >
                <template v-slot:prepend>
                    <div class="mt-3 px-2">
                        <div
                            class="bg-orange-700 overflow-hidden rounded-lg h-12 flex items-center justify-center p-2 text-center text-white font-satoshi-black !text-2xl"
                            :class="{'aspect-square !size-13 mx-auto': !layout.rail}"
                        >
                            <p class="!drop-shadow leading-none">N<span v-if="layout.rail">OSSO</span></p>
                        </div>
                    </div>
                </template>
                <v-list density="compact" class="box-border mt-10" :class="{'xl:w-[110%]': !mdAndDown && !layout.rail}" nav>

                    <div class="mb-2" :class="layout.rail ? 'pl-4' : 'pl-2'">
                        <p class="font-medium !text-ellipsis overflow-hidden text-xs text-orange-500 ">Dashboard</p>
                    </div>

                    <NuxtLink to="/admin/dashboard">
                        <v-list-item
                            value="Dashboard"
                            active="active"
                            variant="text"
                            color="orange"
                            base-color="grey-darken-2"
                            class="mb-1 !rounded-xl"
                            height="55"
                            density="comfortable"
                            v-tooltip="'Dashboard'"
                        >
                            <template v-slot:default="{ item }">
                                <div class="flex items-center font-medium text-sm gap-2 line-clamp-1 whitespace-nowrap pl-[15px] " :class="{'pl-[18px]': !layout.rail}">
                                    <v-icon icon="mdi-home-city" v-bind="item"/>
                                    {{ mdAndDown || layout.rail ? 'Dashboard' : '' }}
                                </div>
                            </template>
                        </v-list-item>
                    </NuxtLink>

                </v-list>
            </v-navigation-drawer>
            <v-app-bar class="px-3" height="70" elevation="0">
                <v-app-bar-nav-icon
                        class="lg:!block xl:!hidden"
                        variant="outlined"
                        color="deep-orange-lighten-2"
                        size="40"
                        density="compact"
                        @click.stop="drawer = !drawer"
                />
                <v-app-bar-nav-icon
                        class="!hidden xl:!block"
                        variant="tonal"
                        color="deep-orange-lighten-2"
                        size="40"
                        density="compact"
                        @click.stop="layout.rail = !layout.rail"
                />
                <v-spacer />
                <v-list-item
                    variant="tonal"
                    color="deep-orange-lighten-2"
                    density="compact"
                    :title="me.user_metadata.full_name"
                    rounded="xl"
                    class="!pl-1 pr-5"
                    :prepend-avatar="me.user_metadata.avatar_url"
                    @click.stop="execSignOut"
                />
            </v-app-bar>
            <v-main class="dark:bg-[#212121]">
                <div class="mx-3 !rounded-2xl shadow-md bg-[#eef2f6] dark:bg-neutral-800 flex min-h-screen flex-col">
                    <div id="container-page" class="p-5 xl:container xl:mx-auto grow has-[[data-container=false]]:!min-w-full">
                        <NuxtPage />
                    </div>
                </div>
                <div class="mt-5 px-4 py-2 text-center w-100">
                    {{ new Date().getFullYear() }} — <strong>NOSSO</strong>
                </div>
            </v-main>

<!--            <UiFlashMessage />-->

        </v-layout>
    </v-app>
</template>
<script setup>
const { md, mdAndDown } = useDisplay()

const layout = useLayoutStore()
const router = useRouter()
const session = useSession()

const drawer = ref(true)

const me = session.user.value

const execSignOut = async () => {
    await session.signOut()
    await router.push('/auth/login')
}
</script>
<style scoped>

</style>
