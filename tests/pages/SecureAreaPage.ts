import { type Page, type Locator, expect } from '@playwright/test';

export class SecureAreaPage {
    readonly page: Page;
    readonly secureAreaFlashMsg: Locator;
    readonly pageHeaderLabel: Locator;
    readonly securePageMsg: Locator;
    readonly logoutButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.secureAreaFlashMsg = this.page.locator('div#flash');
        this.pageHeaderLabel = this.page.locator('div.example h2');
        this.securePageMsg = this.page.locator('div.example h4');
        this.logoutButton = this.page.locator('div.example a');
    }
    async verifyLoginSuccess(loginSuccessMsg: string) {
        await expect(this.secureAreaFlashMsg).toContainText('You logged into a secure area!');
        await expect(this.pageHeaderLabel).toContainText('Secure Area');
        await expect(this.securePageMsg).toContainText(loginSuccessMsg);
    }
    async logoutFromSecureArea() {
        await this.logoutButton.click();
        await expect(this.secureAreaFlashMsg).toContainText('You logged out of the secure area!')
    }
}