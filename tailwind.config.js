/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'satoshi-variable': ['"Satoshi-Variable"', 'sans-serif'],
                'satoshi-variableItalic': ['"Satoshi-VariableItalic"', 'sans-serif'],
                'satoshi-light': ['"Satoshi-Light"', 'sans-serif'],
                'satoshi-lightItalic': ['"Satoshi-LightItalic"', 'sans-serif'],
                'satoshi-regular': ['"Satoshi-Regular"', 'sans-serif'],
                'satoshi-italic': ['"Satoshi-Italic"', 'sans-serif'],
                'satoshi-medium': ['"Satoshi-Medium"', 'sans-serif'],
                'satoshi-mediumItalic': ['"Satoshi-MediumItalic', 'sans-serif'],
                'satoshi-bold': ['"Satoshi-Bold"', 'sans-serif'],
                'satoshi-boldItalic': ['"Satoshi-BoldItalic"', 'sans-serif'],
                'satoshi-black': ['"Satoshi-Black"', 'sans-serif'],
                'satoshi-blackItalic': ['"Satoshi-BlackItalic"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

