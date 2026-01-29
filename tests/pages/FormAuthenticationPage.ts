import { type Page, type Locator, expect } from '@playwright/test';

export class FormAuthenticationPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly userNameTxtbx: Locator;
    readonly passwordTxtbx: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h2');
        this.userNameTxtbx = this.page.locator('input#username');
        this.passwordTxtbx = this.page.locator('input#password');
        this.loginButton = this.page.locator('button.radius');
        this.flashMessage = this.page.locator('div#flash');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async loginWithValidCredential(username: string, password: string) {
        await this.userNameTxtbx.fill(username);
        expect(await this.userNameTxtbx.inputValue()).toBe(username);
        await this.passwordTxtbx.fill(password);
        await this.loginButton.click();
    }
    async loginWithInvalidCredential(username: string, password: string) {
        await this.userNameTxtbx.fill(username);
        expect(await this.userNameTxtbx.inputValue()).toBe(username);
        await this.passwordTxtbx.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.flashMessage).toContainText('Your username is invalid!');
    }
}