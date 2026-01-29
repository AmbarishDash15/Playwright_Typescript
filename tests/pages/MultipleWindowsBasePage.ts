import { type Page, type Locator, expect } from '@playwright/test';

export class MultipleWindowsBasePage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly newWindowLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.newWindowLink = this.page.locator('div.example a');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyNewWindow() {
        const context = this.page.context();
        const [newPage]: any = await Promise.all([
            context.waitForEvent('page'),
            this.newWindowLink.click()
        ])
        expect(await newPage.url()).toContain('windows/new');
    }
}