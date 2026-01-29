import { type Page, type Locator, expect } from '@playwright/test';

export class DigestAuthenticationPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly pageContentText: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.pageContentText = this.page.locator('div.example p');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.headerLabel).toContainText(pageHeaderString);
    }
    async verifyPageContent(pageContentString: string) {
        await expect(this.pageContentText).toContainText(pageContentString);
    }
}