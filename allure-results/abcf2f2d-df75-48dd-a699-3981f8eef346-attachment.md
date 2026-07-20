# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutOverview.spec.js >> Verify checkout overview @regression @checkout
- Location: tests\checkoutOverview.spec.js:4:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: getByText('Total:') resolved to 2 elements:
    1) <div data-test="subtotal-label" class="summary_subtotal_label">Item total: $39.98</div> aka locator('[data-test="subtotal-label"]')
    2) <div data-test="total-label" class="summary_total_label">Total: $43.18</div> aka locator('[data-test="total-label"]')

Call log:
  - waiting for getByText('Total:')

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
      - generic [ref=e16]: "Checkout: Overview"
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
            - generic [ref=e29]: $29.99
        - generic [ref=e30]:
          - generic [ref=e31]: "1"
          - generic [ref=e32]:
            - link "Sauce Labs Bike Light" [ref=e33] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e34]: Sauce Labs Bike Light
            - generic [ref=e35]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e37]: $9.99
      - generic [ref=e38]:
        - generic [ref=e39]: "Payment Information:"
        - generic [ref=e40]: "SauceCard #31337"
        - generic [ref=e41]: "Shipping Information:"
        - generic [ref=e42]: Free Pony Express Delivery!
        - generic [ref=e43]: Price Total
        - generic [ref=e44]: "Item total: $39.98"
        - generic [ref=e45]: "Tax: $3.20"
        - generic [ref=e46]: "Total: $43.18"
        - generic [ref=e47]:
          - button "Go back Cancel" [ref=e48] [cursor=pointer]:
            - img "Go back" [ref=e49]
            - text: Cancel
          - button "Finish" [ref=e50] [cursor=pointer]
  - contentinfo [ref=e51]:
    - list [ref=e52]:
      - listitem [ref=e53]:
        - link "Twitter" [ref=e54] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e55]:
        - link "Facebook" [ref=e56] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e57]:
        - link "LinkedIn" [ref=e58] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e59]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | export class CheckoutOverviewPage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  | 
  6  |         this.title = page.getByText('Checkout: Overview');
  7  |         this.itemTotal = page.getByText('Item total:', { exact: false });
  8  |         this.tax = page.getByText('Tax:', { exact: false });
  9  |         this.total = page.getByText('Total:', { exact: false });
  10 |         this.finishButton = page.getByRole('button', { name: 'Finish' });
  11 |     }
  12 | 
  13 |     async getItemTotal() {
  14 |         return await this.itemTotal.textContent();
  15 |     }
  16 | 
  17 |     async getTax() {
  18 |         return await this.tax.textContent();
  19 |     }
  20 | 
  21 |     async getGrandTotal() {
> 22 |         return await this.total.textContent();
     |                                 ^ Error: locator.textContent: Error: strict mode violation: getByText('Total:') resolved to 2 elements:
  23 |     }
  24 | 
  25 |     async clickFinish() {
  26 |         await this.finishButton.click();
  27 |     }
  28 | }
```