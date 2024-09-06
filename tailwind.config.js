/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Dark_Gray: "hsl(0, 0%, 55%)",
                c_Very_Dark_Gray: "hsl(0, 0%, 41%)",
            },
            fontFamily: {
                alata: ["Alata", "sans-serif"],
                josefin: ["Josefin Sans", "system-ui"]
            }
        },
    },
    plugins: [],
}

