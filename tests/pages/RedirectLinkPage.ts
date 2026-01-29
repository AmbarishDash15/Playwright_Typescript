import { type Page, type Locator, expect } from '@playwright/test';

export class RedirectLinkPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly redirectLink: Locator;
    constructor(page:Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.redirectLink = this.page.locator('a#redirect');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyRedirection() {
        const responsePromise: any = this.page.waitForResponse(response => 
            response.url().includes('redirect')
        )
        await this.redirectLink.click();
        const response: any = await responsePromise;
        expect(response.status() >= 300 && response.status() <= 399).toBeTruthy();
    }
}