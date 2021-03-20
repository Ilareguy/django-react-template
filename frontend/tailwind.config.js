module.exports = {
    // Purging: See https://tailwindcss.com/docs/optimizing-for-production
    purge: {
        enabled: true,
        content: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './src/**/*.mdx',
            './src/**/*.css',
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
