# SimiCart ShopByBrand

## 1. Prepare your Magento site
If you are using your own magento site, make sure it's:
- Magento 2.4.* or >= 2.3.5
- Got Mageplaza Shopbybrand and ShopbybrandGraphQl installed

## 2. Init project
```
npm init @magento/pwa@1.1.2
```

Fill in with your project information and cd into it.

## 3. Start the project

From the root directory of the project you created above, clone the repository:

```
  git clone https://github.com/Simicart/shopbybrand-module-pwa-studio ./@simicart/shopbybrand
```

## 4. Modify .env

Change the .env MAGENTO_BACKEND_URL with your magento site URL, or use our demo URL:

```
  MAGENTO_BACKEND_URL=https://mp.pwa-commerce.com/
```
## 5. Modify package.json

Modify the dependencies of project to add shopbybrand extension.

```
  "dependencies": {
    "@magento/pwa-buildpack": "~7.0.0",
    "@simicart/shopbybrand": "link:./@simicart/shopbybrand"
  },
```

## 6. Install and Start Project

```
  yarn install && yarn watch
```
