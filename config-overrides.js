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
            '@primary-color': '#000531',
            '@white': '#fff',
            '@black': '#101010',
            '@text-color': 'fade(@black, 65%)',
            '@text-color-secondary': 'fade(@black, 45%)'
        }
    })
)