# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login @smoke @login
- Location: tests\login.spec.js:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": kaveribasavar.hanab
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from "../fixtures/baseFixture";
  2  | import { testData } from "../testData/testData";
  3  |  
  4  | test("Login @smoke @login", async ({ page, loginPage }) => {
  5  |  
  6  |     const username = process.env.USERNAME;
  7  |     const password = process.env.PASSWORD;
  8  |     await loginPage.navigate();
  9  |  
  10 |     await loginPage.login(username, password);
  11 |  
> 12 |     await expect(page).toHaveURL(/inventory/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  13 |     await expect(page.locator('[data-test="title"]')).toHaveText(testData.titles.products);
  14 |  
  15 | });
```