import { type Page, type Locator, expect } from '@playwright/test';

export class SlowResourcesPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyResourceResponseTime() {
        const responsePromise: any = this.page.waitForResponse(response => 
            response.url().includes('slow'),
            { timeout: 40*1000}
        );
        const response: any = await responsePromise;
        expect(response.status()).toBe(503);
    }
}