/*
 * Copyright (c) 2021, the KIJ Company.
 * All rights reserved.
 */

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ],
};
