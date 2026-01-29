import { type Page, type Locator, expect } from '@playwright/test';

export class ShiftingContentBasePage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly menuElementLink: Locator;
    readonly imageLink: Locator;
    readonly listLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.menuElementLink = this.page.locator('a[href*="menu"]');
        this.imageLink = this.page.locator('a[href*="image"]');
        this.listLink = this.page.locator('a[href*="list"]');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async goToShiftingListContent() {
        await this.listLink.click();
    }
}