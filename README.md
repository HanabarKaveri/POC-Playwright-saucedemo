# Playwright project - SauceDemo

## Overview
This project is an End-to-End test automation framework developed using Playwright with JavaScript and follows the Page Object Model (POM) design pattern. Automates and verifies key user actions in the SauceDemo application, from login to successful order completion.

## Test Scenario
**Scenario:** End-to-End Purchase Flow (E-Commerce)   
**URL:** https://www.saucedemo.com  
**Testing Type:** Functional Testing (Happy Path)

### Pre-Conditions16 
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
