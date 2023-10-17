const path = require('path');

module.exports = (config) => {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@data': path.resolve(__dirname, './src/data/'),
            '@components': path.resolve(__dirname, './src/components/')
        },
        extensions: ['.js', '.ts', '.d.ts', '.tsx']
    };

    return config;
};