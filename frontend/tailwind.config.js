module.exports = {
    mode: 'jit',
    // Purging: See https://tailwindcss.com/docs/optimizing-for-production
    purge: [
        './src/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
