const path = require('path');

module.exports = (config) => {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@data': path.resolve(__dirname, './src/data/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@style': path.resolve(__dirname, './src/style/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@hooks': path.resolve(__dirname, './src/hooks/')
        },
        extensions: ['.js', '.ts', '.d.ts', '.tsx']
    };

    return config;
};