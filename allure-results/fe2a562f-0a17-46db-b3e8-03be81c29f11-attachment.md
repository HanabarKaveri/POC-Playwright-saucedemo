# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completeCheckout.spec.js >> Verify order completion @smoke @regression @e2e
- Location: tests\completeCheckout.spec.js:4:5

# Error details

```
Error: toHaveText can be only used with Locator object, was called with Promise Promise { locator('#add-to-cart-sauce-labs-backpack') }
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
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 16 |         await expect(productsPage.getAddToCartButton(product)).toHaveText('Add to cart');
     |                                                                ^ Error: toHaveText can be only used with Locator object, was called with Promise Promise { locator('#add-to-cart-sauce-labs-backpack') }
  17 |         await productsPage.addProductToCart(product);
  18 |         await expect(productsPage.getRemoveButton(product)).toHaveText('Remove');
  19 |     }
  20 |     await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
  21 |     await productsPage.openCart();
  22 | 
  23 |  
  24 | 
  25 |     for (const product of Object.values(testData.products)) {
  26 |         await expect(cartPage.getProductName(product.name)).toBeVisible();
  27 | 
  28 |         await expect(cartPage.getProductPrice(product.price)).toBeVisible();
  29 |     }
  30 |     await cartPage.clickCheckout();
  31 | 
  32 | 
  33 | 
  34 |     await checkoutInformationPage.fillCheckoutInformation(
  35 |         testData.checkout.firstName,
  36 |         testData.checkout.lastName,
  37 |         testData.checkout.zipCode
  38 |     );
  39 |     await checkoutInformationPage.clickContinue();
  40 | 
  41 | 
  42 | 
  43 |     await expect(checkoutOverviewPage.title).toHaveText(testData.titles.overview);
  44 |     const itemTotal = parseFloat(
  45 |         (await checkoutOverviewPage.getItemTotal()).replace("Item total: $", "")
  46 |     );
  47 | 
  48 |     const tax = parseFloat(
  49 |         (await checkoutOverviewPage.getTax()).replace("Tax: $", "")
  50 |     );
  51 | 
  52 |     const grandTotal = parseFloat(
  53 |         (await checkoutOverviewPage.getGrandTotal()).replace("Total: $", "")
  54 |     );
  55 | 
  56 |     expect(grandTotal).toBeCloseTo(itemTotal + tax, 2);
  57 |     await checkoutOverviewPage.clickFinish();
  58 | 
  59 | 
  60 | 
  61 |     await expect(checkoutCompletePage.title).toHaveText(testData.titles.complete);
  62 |     await expect(checkoutCompletePage.successMessage).toHaveText(testData.messages.success);
  63 |     await checkoutCompletePage.clickBackHome();
  64 | 
  65 |     await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
  66 | });
```