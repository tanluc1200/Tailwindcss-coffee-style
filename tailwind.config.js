/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            colors: {
                "light-coffee": "#743f2f;",
            },
        },
    },
    plugins: [],
};
