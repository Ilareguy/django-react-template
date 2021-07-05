module.exports = {
    // Purging: See https://tailwindcss.com/docs/optimizing-for-production
    purge: {
        enabled: (process.env.CSS_PURGE === 'true'),
        content: [
            './static/main.js',
        ]
    },
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
