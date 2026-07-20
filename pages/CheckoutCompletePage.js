export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

        this.title = page.getByText('Checkout: Complete!');
        this.successMessage = page.getByText('Thank you for your order!');
        this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }

    async clickBackHome() {
        await this.backHomeButton.click();
    }
}
