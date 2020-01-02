const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#0060FF',
            '@white': '#fff',
            '@black': '#000',
            '@text-color': 'fade(@black, 65%)',
            '@text-color-secondary': 'fade(@black, 45%)'
        }
    })
)