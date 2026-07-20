export class CheckoutOverviewPage {

    constructor(page) {
        this.page = page;

        this.title = page.getByText('Checkout: Overview');
        this.itemTotal = page.getByText('Item total:', { exact: false });
        this.tax = page.getByText('Tax:', { exact: false });
        this.total = page.locator('.summary_total_label');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }

    async getItemTotal() {
        return await this.itemTotal.textContent();
    }

    async getTax() {
        return await this.tax.textContent();
    }

    async getGrandTotal() {
        return await this.total.textContent();
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}