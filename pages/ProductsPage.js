export class ProductsPage {

    constructor(page) {
        this.page = page;

        this.productsTitle = page.getByText('Products');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addProductToCart(productName) {
        await this.page.locator(`#add-to-cart-${productName}`).click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async getCartBadgeCount() {
        return await this.cartBadge.textContent();
    }
    
    getAddToCartButton(productName) {
        return this.page.locator(`#add-to-cart-${productName}`);
    }

    getRemoveButton(productName) {
        return this.page.locator(`#remove-${productName}`);
    }
}
