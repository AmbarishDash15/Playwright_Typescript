import { type Page, type Locator, expect } from '@playwright/test';

export class ShiftingListPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly listItems: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.listItems = this.page.locator('div.large-6');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyListItemPresence(listItemText: string) {
        for(let repeater: number = 0; repeater < 5; repeater++) {
            await expect(this.listItems).toContainText(listItemText);
            await this.page.reload();
        }
    }
}