import { expect } from '@playwright/test';
 
export class LoginPage {
 
    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
 
    async navigate() {
        await this.page.goto('/');
    }
 
    async enterUsername(username) {
        await this.username.fill(username);
    }
 
    async enterPassword(password) {
        await this.password.fill(password);
    }
 
    async clickLogin() {
        await this.loginButton.click();
    }
 
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}