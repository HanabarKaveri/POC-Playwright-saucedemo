import { test, expect } from "../fixtures/baseFixture";
import { testData } from "../testData/testData";

test("Verify checkout information @regression @checkout", async ({loginPage, productsPage, cartPage, checkoutInformationPage}) => {

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

    

    await expect(checkoutInformationPage.title).toHaveText(testData.titles.checkout);
    await checkoutInformationPage.fillCheckoutInformation(testData.checkout.firstName, testData.checkout.lastName, testData.checkout.zipCode);
    await checkoutInformationPage.clickContinue();
});