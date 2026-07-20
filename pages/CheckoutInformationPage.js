export class CheckoutInformationPage {

    constructor(page) {
        this.page = page;

        this.title = page.getByText('Checkout: Your Information');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}