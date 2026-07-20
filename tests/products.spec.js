import { test, expect } from "../fixtures/baseFixture";
import { testData } from "../testData/testData";

test("Verify user can add products to cart @smoke @products",
async ({ loginPage, productsPage }) => {

    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;
 
    await loginPage.navigate();
    await loginPage.login(username, password);
 
    await expect(productsPage.productsTitle).toHaveText(testData.titles.products);

    for(const product of testData.findData.products){
        await productsPage.addProductToCart(product);
    }
 
    await expect(productsPage.cartBadge).toHaveText(testData.findData.products.length.toString());
});
 









