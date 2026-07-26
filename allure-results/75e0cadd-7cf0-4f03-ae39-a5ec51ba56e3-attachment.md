# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completeCheckout.spec.js >> Verify order completion @smoke @regression @e2e
- Location: tests\completeCheckout.spec.js:4:5

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "2"
      - generic [ref=e16]: Your Cart
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]:
              - generic [ref=e29]: $29.99
              - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - generic [ref=e32]: "1"
          - generic [ref=e33]:
            - link "Sauce Labs Bike Light" [ref=e34] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e35]: Sauce Labs Bike Light
            - generic [ref=e36]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e37]:
              - generic [ref=e38]: $9.99
              - button "Remove" [ref=e39] [cursor=pointer]
      - generic [ref=e40]:
        - button "Go back Continue Shopping" [ref=e41] [cursor=pointer]:
          - img "Go back" [ref=e42]
          - text: Continue Shopping
        - button "Checkout" [ref=e43] [cursor=pointer]
  - contentinfo [ref=e44]:
    - list [ref=e45]:
      - listitem [ref=e46]:
        - link "Twitter" [ref=e47] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e48]:
        - link "Facebook" [ref=e49] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e50]:
        - link "LinkedIn" [ref=e51] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e52]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from "../fixtures/baseFixture";
  2  | import { testData } from "../testData/testData";
  3  | 
  4  | test("Verify order completion @smoke @regression @e2e", async ({loginPage, productsPage, cartPage, checkoutInformationPage, checkoutOverviewPage, checkoutCompletePage}) => {
  5  |     
  6  |     const username = process.env.SAUCE_USERNAME;
  7  |     const password = process.env.SAUCE_PASSWORD;
  8  |     
  9  |     await loginPage.navigate();
  10 |     await loginPage.login(username,password);
  11 | 
  12 | 
  13 | 
  14 |     await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
  15 |     for (const product of testData.findData.products) {
  16 |         await expect(productsPage.getAddToCartButton(product)).toHaveText('Add to cart');
  17 |         await productsPage.addProductToCart(product);
  18 |         await expect(productsPage.getRemoveButton(product)).toHaveText('Remove');
  19 |     }
  20 |     await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
  21 |     await expect(productsPage.cartIcon).toBeVisible();
  22 |     await productsPage.openCart();
  23 | 
  24 |  
  25 | 
  26 |     await expect(cartPage.title).toHaveText('Your Cart');
  27 |     for (const product of Object.values(testData.products)) {
  28 |         await expect(cartPage.getProductName(product.name)).toBeVisible();
  29 | 
  30 |         await expect(cartPage.getProductPrice(product.price)).toBeVisible();
  31 |     }
> 32 |     await expect(cartPage.checkoutButton).toBeVisible();
     |                                           ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  33 |     await expect(cartPage.checkoutButton).toBeEnabled();
  34 |     await cartPage.clickCheckout();
  35 | 
  36 | 
  37 | 
  38 |     await expect(checkoutInformationPage.title).toHaveText('Checkout: Your Information');
  39 |     await checkoutInformationPage.fillCheckoutInformation(
  40 |         testData.checkout.firstName,
  41 |         testData.checkout.lastName,
  42 |         testData.checkout.zipCode
  43 |     );
  44 |     
  45 |     await expect(checkoutInformationPage.continueButton).toBeVisible();
  46 |     await expect(checkoutInformationPage.continueButton).toBeEnabled();
  47 | 
  48 |     await checkoutInformationPage.clickContinue();
  49 | 
  50 | 
  51 | 
  52 |     await expect(checkoutOverviewPage.title).toHaveText(testData.titles.overview);
  53 |     const itemTotal = parseFloat(
  54 |         (await checkoutOverviewPage.getItemTotal()).replace("Item total: $", "")
  55 |     );
  56 | 
  57 |     const tax = parseFloat(
  58 |         (await checkoutOverviewPage.getTax()).replace("Tax: $", "")
  59 |     );
  60 | 
  61 |     const grandTotal = parseFloat(
  62 |         (await checkoutOverviewPage.getGrandTotal()).replace("Total: $", "")
  63 |     );
  64 | 
  65 |     expect(grandTotal).toBeCloseTo(itemTotal + tax, 2);
  66 |     await expect(checkoutOverviewPage.finishButton).toBeVisible();
  67 |     await expect(checkoutOverviewPage.finishButton).toBeEnabled();
  68 |     await checkoutOverviewPage.clickFinish();
  69 | 
  70 | 
  71 | 
  72 |     await expect(checkoutCompletePage.title).toHaveText(testData.titles.complete);
  73 |     await expect(checkoutCompletePage.successMessage).toHaveText(testData.messages.success);
  74 |     await expect(checkoutCompletePage.backHomeButton).toBeVisible();
  75 | 
  76 |     await expect(checkoutCompletePage.backHomeButton).toBeEnabled();
  77 |     await checkoutCompletePage.clickBackHome();
  78 | 
  79 |     await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
  80 | });
```