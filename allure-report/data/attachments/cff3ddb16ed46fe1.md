# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: products.spec.js >> Verify user can add products to cart @smoke @regression
- Location: tests\products.spec.js:5:5

# Error details

```
TypeError: productsPage.addBackpackToCart is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Backpack" [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: Sauce Labs Backpack
            - generic [ref=e41]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e42]:
            - generic [ref=e43]: $29.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link "Sauce Labs Bike Light" [ref=e47] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - link "Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e51]: Sauce Labs Bike Light
            - generic [ref=e52]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e53]:
            - generic [ref=e54]: $9.99
            - button "Add to cart" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e58] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt"
        - generic [ref=e59]:
          - generic [ref=e60]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e61] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e62]: Sauce Labs Bolt T-Shirt
            - generic [ref=e63]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - generic [ref=e67]:
        - link "Sauce Labs Fleece Jacket" [ref=e69] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e70]
        - generic [ref=e71]:
          - generic [ref=e72]:
            - link "Sauce Labs Fleece Jacket" [ref=e73] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e74]: Sauce Labs Fleece Jacket
            - generic [ref=e75]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e76]:
            - generic [ref=e77]: $49.99
            - button "Add to cart" [ref=e78] [cursor=pointer]
      - generic [ref=e79]:
        - link "Sauce Labs Onesie" [ref=e81] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie"
        - generic [ref=e82]:
          - generic [ref=e83]:
            - link "Sauce Labs Onesie" [ref=e84] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e85]: Sauce Labs Onesie
            - generic [ref=e86]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e87]:
            - generic [ref=e88]: $7.99
            - button "Add to cart" [ref=e89] [cursor=pointer]
      - generic [ref=e90]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e92] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e93]
        - generic [ref=e94]:
          - generic [ref=e95]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e97]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e98]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e99]:
            - generic [ref=e100]: $15.99
            - button "Add to cart" [ref=e101] [cursor=pointer]
  - contentinfo [ref=e102]:
    - list [ref=e103]:
      - listitem [ref=e104]:
        - link "Twitter" [ref=e105] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e106]:
        - link "Facebook" [ref=e107] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e108]:
        - link "LinkedIn" [ref=e109] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e110]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from "../fixtures/baseFixture";
  2  | import { testData } from "../testData/testData";
  3  | // import { ProductsPage } from "../pages/ProductsPage";
  4  | 
  5  | test("Verify user can add products to cart @smoke @regression",
  6  | async ({ loginPage, productsPage }) => {
  7  |  
  8  |     await loginPage.navigate();
  9  |  
  10 |     await loginPage.login(
  11 |         testData.credentials.username,
  12 |         testData.credentials.password
  13 |     );
  14 |  
  15 |     await expect(productsPage.productsTitle)
  16 |         .toHaveText(testData.titles.products);
  17 | 
  18 |     for(const product of testData.findData.products){
> 19 |         await productsPage.addBackpackToCart(product);
     |                            ^ TypeError: productsPage.addBackpackToCart is not a function
  20 |     }
  21 |  
  22 |     await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
  23 | });
  24 |  
```