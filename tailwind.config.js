module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                'fira-code': ['"Fira Code"', 'monospace'],
            },
            colors: {
                primary: {
                    purple: "#c778dd",
                    dark: "#282c33",
                },
                text: {
                    white: "#ffffff",
                    gray: "#abb2bf",
                },
                border: {
                    gray: "#abb2bf",
                },
            },
        },
    },
    plugins: [],
};