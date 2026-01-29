import { type Page, type Locator, expect } from '@playwright/test';

export class InfiniteScrollPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly infiniteParagraph: Locator;
    constructor(page: Page) {
        this.page = page
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.infiniteParagraph = this.page.locator('div.jscroll-added');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyInfiniteScroll(scrollNumber: number) {
        for (let i: number = 0; i < scrollNumber; i++) {
            await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
            await this.page.waitForLoadState('domcontentloaded');
            var currentParagraphNumber = await this.infiniteParagraph.count();
            await expect(this.infiniteParagraph).toHaveCount(currentParagraphNumber,{timeout: 1000});
        }
    }
}