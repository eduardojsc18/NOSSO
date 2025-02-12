// https://nuxt.com/docs/api/configuration/nuxt-config
import { pt } from 'vuetify/locale'
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
            defaults: {
                VTextField: {
                    variant: 'outlined',
                    bgColor: '#fdfdfd',
                    rounded: 'lg'
                },
                VTextarea: {
                    variant: 'outlined',
                    bgColor: '#fdfdfd',
                    rounded: 'lg'
                },
                VSelect: {
                    variant: 'outlined',
                    bgColor: '#fdfdfd',
                    rounded: 'lg'
                },
                VAutocomplete: {
                    variant: 'outlined',
                    bgColor: '#fdfdfd',
                    rounded: 'lg'
                },
                VCard: {
                    rounded: 'lg',
                },
                VBtn: {
                    rounded: 'lg',
                },
                vListItem: {
                    rounded: 'xl'
                },
                vList: {
                    rounded: 'lg'
                },
                VDateInput: {
                    variant: 'outlined',
                    bgColor: '#fdfdfd',
                    rounded: 'lg',
                    prependIcon: '',
                    prependInnerIcon: 'mdi-calendar'
                },
                VMenu: {
                    contentClass: 'rounded-lg mt-2'
                }
            },
            locale: {
                locale: 'pt',
                messages: { pt }
            }
        },
        moduleOptions: {

        }
    },

    supabase: {
        redirectOptions: {
            login: '/auth/login',
            callback: '/auth/confirmation',
            exclude: [
                '/',
                '/^\/index/', // usando regex para pegar variações
            ],
        },
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
        // base64: true,
        // fontsDir: 'assets/fonts',
        // overwriting: true,
        families: {
            Inter: true,
        },
    },

    devtools: {enabled: true},
})
