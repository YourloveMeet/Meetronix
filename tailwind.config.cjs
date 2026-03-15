/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#FAF7F2",
                "cream-dark": "#F2EDE4",
                "warm-white": "#FFFCF8",
                terracotta: "#C4622D",
                "terra-light": "#E8896A",
                "terra-dark": "#9A4520",
                "terra-muted": "#F0D5C8",
                charcoal: "#1C1917",
                "text-primary": "#2C2420",
                "text-secondary": "#7A6A62",
                "text-muted": "#AFA099",
                border: "var(--border)",
                "border-strong": "var(--border-strong)",
                "glass-bg": "var(--glass-bg)",
                "glass-border": "var(--glass-border)",
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'blob': 'warm-blob 12s infinite ease-in-out',
            },
            keyframes: {
                'warm-blob': {
                    '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: 0.1 },
                    '33%': { transform: 'translate(40px, -60px) scale(1.2)', opacity: 0.08 },
                    '66%': { transform: 'translate(-30px, 30px) scale(0.9)', opacity: 0.12 },
                    '100%': { transform: 'translate(0px, 0px) scale(1)', opacity: 0.1 },
                }
            }
        },
    },
    plugins: [],
}
