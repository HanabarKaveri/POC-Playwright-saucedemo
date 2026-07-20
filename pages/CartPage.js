export class CartPage {

    constructor(page) {
        this.page = page;

        this.title = page.getByText('Your Cart');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    getProductName(productName) {
        return this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: productName });
    }

    getProductPrice(productPrice) {
        return this.page.locator('[data-test="inventory-item-price"]').filter({ hasText: productPrice });
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}