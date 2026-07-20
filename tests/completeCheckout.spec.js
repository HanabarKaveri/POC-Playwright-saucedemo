import { test, expect } from "../fixtures/baseFixture";
import { testData } from "../testData/testData";

test("Verify order completion @smoke @regression @e2e", async ({loginPage, productsPage, cartPage, checkoutInformationPage, checkoutOverviewPage, checkoutCompletePage}) => {
    
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;
    
    await loginPage.navigate();
    await loginPage.login(username,password);



    await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
    for (const product of testData.findData.products) {
        await expect(productsPage.getAddToCartButton(product)).toHaveText('Add to cart');
        await productsPage.addProductToCart(product);
        await expect(productsPage.getRemoveButton(product)).toHaveText('Remove');
    }
    await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
    await expect(productsPage.cartIcon).toBeVisible();
    await productsPage.openCart();

 

    await expect(cartPage.title).toHaveText('Your Cart');
    for (const product of Object.values(testData.products)) {
        await expect(cartPage.getProductName(product.name)).toBeVisible();

        await expect(cartPage.getProductPrice(product.price)).toBeVisible();
    }
    await expect(cartPage.checkoutButton).toBeVisible();
    await expect(cartPage.checkoutButton).toBeEnabled();
    await cartPage.clickCheckout();



    await expect(checkoutInformationPage.title).toHaveText('Checkout: Your Information');
    await checkoutInformationPage.fillCheckoutInformation(
        testData.checkout.firstName,
        testData.checkout.lastName,
        testData.checkout.zipCode
    );
    
    await expect(checkoutInformationPage.continueButton).toBeVisible();
    await expect(checkoutInformationPage.continueButton).toBeEnabled();

    await checkoutInformationPage.clickContinue();



    await expect(checkoutOverviewPage.title).toHaveText(testData.titles.overview);
    const itemTotal = parseFloat(
        (await checkoutOverviewPage.getItemTotal()).replace("Item total: $", "")
    );

    const tax = parseFloat(
        (await checkoutOverviewPage.getTax()).replace("Tax: $", "")
    );

    const grandTotal = parseFloat(
        (await checkoutOverviewPage.getGrandTotal()).replace("Total: $", "")
    );

    expect(grandTotal).toBeCloseTo(itemTotal + tax, 2);
    await expect(checkoutOverviewPage.finishButton).toBeVisible();
    await expect(checkoutOverviewPage.finishButton).toBeEnabled();
    await checkoutOverviewPage.clickFinish();



    await expect(checkoutCompletePage.title).toHaveText(testData.titles.complete);
    await expect(checkoutCompletePage.successMessage).toHaveText(testData.messages.success);
    await expect(checkoutCompletePage.backHomeButton).toBeVisible();

    await expect(checkoutCompletePage.backHomeButton).toBeEnabled();
    await checkoutCompletePage.clickBackHome();

    await expect(productsPage.productsTitle).toHaveText(testData.titles.products);
});