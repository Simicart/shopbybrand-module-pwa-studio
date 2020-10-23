module.exports = targets => {
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "BrandDetails",
            pattern: "/brand/:brandUrl?",
            path: require.resolve("../components/branddetails/index.js")
        });
        routes.push({
            name: "BrandList",
            pattern: "/brand.html",
            path: require.resolve("../components/brands/index.js")
        });
        return routes;
    });
};