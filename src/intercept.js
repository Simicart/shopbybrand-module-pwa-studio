const componentOverrideMapping = require('./componentOverrideMapping');
const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');

/**
 * Custom intercept file for the extension
 * By default you can only use target of @magento/pwa-buildpack.
 *
 * If do want extend @magento/peregrine or @magento/venia-ui
 * you should add them to peerDependencies to your package.json
 *
 * If you want to add overwrites for @magento/venia-ui components you can use
 * moduleOverrideWebpackPlugin and componentOverrideMapping
 */
module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        /**
         *  Wee need to activated esModules and cssModules to allow build pack to load our extension
         * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
         */
        flags[targets.name] = { esModules: true, cssModules: true, graphqlQueries: true };
    });
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "BrandCategory",
            pattern: "/brand/category/:categoryUrl?",
            path: require.resolve("./components/category/index.js")
        });
        routes.push({
            name: "BrandDetails",
            pattern: "/brand/:brandUrl?",
            path: require.resolve("./components/branddetails/index.js")
        });
        routes.push({
            name: "BrandList",
            pattern: "/brand.html",
            path: require.resolve("./components/brands/index.js")
        });
        return routes;
    });
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    })
};
