/*
 * Copyright (c) 2021, the KIJ Company.
 * All rights reserved.
 */

module.exports = {
    style: {
        postcss: {
            plugins: [
                require("postcss-import"),
                require("tailwindcss"),
                require("autoprefixer")
            ]
        }
    }
};
