import { type Page, type Locator, expect } from '@playwright/test';

export class FramesBasePage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly linkNestedFrames: Locator;
    readonly linkiFrame: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.linkNestedFrames = this.page.locator('a[href="/nested_frames"]');
        this.linkiFrame = this.page.locator('a[href="/iframe"]');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async goToNestedFramePage() {
        await this.linkNestedFrames.click();
    }
    async goToiFramePage() {
        await this.linkiFrame.click();
    }
}