# Playwright project - SauceDemo

## Overview
This project is an End-to-End test automation framework developed using Playwright with JavaScript and follows the Page Object Model (POM) design pattern. Automates and verifies key user actions in the SauceDemo application, from login to successful order completion.

## Test Scenario
**Scenario:** End-to-End Purchase Flow (E-Commerce)   
**URL:** https://www.saucedemo.com  
**Testing Type:** Functional Testing (Happy Path)

## Project Structure
```text
Playwright-POM-Framework
│
├── pages
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutInformationPage.js
│   ├── CheckoutOverviewPage.js
│   └── CheckoutCompletePage.js
│
├── tests
│   └── cart.spec.js
│   └── checkoutInformation.spec.js
│   └── checkoutOverview.spec.js
│   └── completeCheckout.spec.js
│   └── login.spec.js
│   └── products.spec.js
│
├── fixtures
│   └── baseFixture.js
│
├── test-data
│   └── testData.js
│
├── .env
├── github_push.sh
├── playwright.config.js
├── package.json
└── README.md
```

### Pre-Conditions
Browser launched
- Application URL loaded
- Valid user credentials available
- Username: `standard_user`
- Password: `secret_sauce`

### Scenario Flow
1. Login with valid credentials.
2. Verify Products page is displayed.
3. Add Sauce Labs Backpack to cart.
4. Add Sauce Labs Bike Light to cart.
5. Verify cart badge count updates correctly.
6. Open cart and verify selected products.
7. Proceed to checkout.
8. Enter customer information.
9. Verify item total, tax, and grand total.
10. Complete the purchase.
11. Verify order confirmation message.
12. Return to the Products page.

### Assertions
- Cart badge count matches the number of selected items.
- Product names and prices are displayed correctly.
- Grand total equals item total plus tax.
- Confirmation message exactly matches:
    `Thank you for your order!`
- User is redirected back to the Products page after clicking **Back Home**.

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

## Execution Steps
1. Install project dependencies.
```
npm install
```
2. Install Playwright browsers.
```
npx playwright install
```
3. Execute all tests.
```
npx playwright test
```
4. Execute specific tests.
```
npx playwright test tests/completeCheckout.spec.js5
```
5. Generate the Allure report.
```
npx allure generate allure-results --clean
```
6. Open the Allure report.
```
allure open allure-report
```

## Conclusion
This Playwright automation framework successfully tests the complete purchase flow of the SauceDemo application. The Page Object Model (POM) structure helps keep the code organized, easy to understand, and easy to update. The framework provides reliable test execution and validates the main user journey from login to successful order placement.
