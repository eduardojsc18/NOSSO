// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        'vuetify-nuxt-module',
        '@nuxtjs/google-fonts',
    ],

    css: ['~/assets/css/main.css'],
    tailwindcss: {
        cssPath: ['~/assets/css/main.css', { injectPosition: "first" }],
    },

    vuetify: {
        vuetifyOptions: {
            labComponents: true,
        },
        moduleOptions: {

        }
    },

    routeRules: {
        '/': { redirect: { to: '/admin/dashboard'} },
    },

    runtimeConfig: {
        public: {
            nodeEnv: process.env.NODE_ENV,
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
            siteUrl: process.env.SITE_URL,
        },
    },

    googleFonts: {
        base64: true,
        fontsDir: 'assets/fonts',
        overwriting: true,
        families: {
            Inter: true,
        },
    },

    devtools: {enabled: true},
})
