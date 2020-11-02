module.exports = componentOverrideMapping = {
    [`@magento/venia-ui/lib/components/Header/header.js`]: './src/overwrites/components/header.js',
    [`@magento/venia-ui/lib/RootComponents/Product/product.gql.js`]: './src/overwrites/queries/product.gql.js',
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]: './src/overwrites/components/productFullDetail.js',
    [`@magento/venia-ui/lib//queries/getStoreConfigData.graphql`]: './src/overwrites/queries/getStoreConfigData.graphql',
    [`@magento/peregrine/lib/talons/Footer/useFooter.js`]: './src/overwrites/talons/useFooter.js'
};