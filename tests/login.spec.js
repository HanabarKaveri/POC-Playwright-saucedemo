import { test, expect } from "../fixtures/baseFixture";
import { testData } from "../testData/testData";
 
test("Login @smoke @login", async ({ page, loginPage }) => {
 
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;
    await loginPage.navigate();
 
    await loginPage.login(username, password);
 
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('[data-test="title"]')).toHaveText(testData.titles.products);
 
});


























/*
Bro, for presentation you can explain it like this in a smooth flow from start to end:

***

### Introduction

I developed an **End-to-End Test Automation Framework** for the SauceDemo application using **Playwright with JavaScript** by implementing the **Page Object Model (POM)** design pattern. The framework automates the complete user purchase journey dynamically, including login, product selection, cart validation, checkout process, order completion, and business validation of pricing calculations. Product selection is data-driven and dynamic, where products are fetched from external test data instead of being hardcoded in the test script.

***

### Project Structure

The framework is organized into multiple layers to achieve maintainability, reusability, and scalability. The **tests** folder contains the test specifications that represent business scenarios. The **pages** folder contains Page Object classes where all locators and page-specific actions are encapsulated. The **fixtures** folder is used for dependency injection, allowing page objects to be initialized automatically before test execution. The **testData** folder stores centralized test data such as user information, product details, expected page titles, prices, and success messages. Environment-specific configurations such as application URL and credentials are externalized in the **.env** file to avoid hardcoding sensitive information.

***

### Page Object Model Implementation

The framework follows the Page Object Model design pattern where each application page is represented as a separate class. Every page class contains locators and reusable methods related to that page. For example, the Login Page contains methods for authentication, the Products Page contains methods for adding products to the cart, and the Checkout Pages contain methods for order processing. This design separates test logic from UI implementation, making locator maintenance easier and improving code reusability.

***

### Configuration and Execution Setup

The framework configuration is managed through the **playwright.config.js** file. This file controls browser execution, parallel execution, reporting, screenshots, trace collection, video recording, retries, and environment configuration. The framework uses Microsoft Edge as the execution browser and integrates both HTML and Allure reports for result analysis. Screenshots and videos are automatically captured for failed test executions to simplify debugging and failure investigation.

***

### Test Execution Flow

Execution begins by launching the application using the Base URL configured in the environment file. The framework retrieves user credentials securely through environment variables and performs authentication using reusable login methods. After successful login, the framework validates navigation to the Products page and dynamically adds products to the cart based on the product list available in the test data file. During this process, assertions are performed to validate page titles, button states, cart badge counts, product names, and product prices.

The framework then proceeds through the checkout workflow by entering customer information, validating checkout pages, verifying order summary values, and calculating pricing information. Business validation is performed by comparing the Grand Total against the sum of Item Total and Tax using calculated values retrieved from the application. Finally, the framework completes the order, validates the success confirmation message, returns to the Products page, and confirms successful completion of the End-to-End transaction.

***

### Conclusion

This framework demonstrates the implementation of modern test automation practices including **Page Object Model, Data-Driven Testing, Environment Configuration Management, Fixture-Based Dependency Injection, Dynamic Locator Handling, Assertion-Based Validation, Reporting Integration, and End-to-End Business Flow Validation**, resulting in a scalable and maintainable automation solution.
*/