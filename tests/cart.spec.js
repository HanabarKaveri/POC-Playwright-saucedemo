import { test, expect } from "../fixtures/baseFixture";
import { testData } from "../testData/testData";

test("Verify Cart Page @regression @cart", async ({loginPage,productsPage,cartPage}) => {
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;
    
    await loginPage.navigate();
    await loginPage.login(username, password);

    

    await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
    for (const product of testData.findData.products) {
        await productsPage.addProductToCart(product);
    }
    await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
    await productsPage.openCart();



    for (const product of Object.values(testData.products)) {
        await expect(cartPage.getProductName(product.name)).toBeVisible();
        await expect(cartPage.getProductPrice(product.price)).toBeVisible();
    }
    await cartPage.clickCheckout();

});