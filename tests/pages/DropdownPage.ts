import { type Page, type Locator, expect } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly selectBox: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('h3');
        this.selectBox = this.page.locator('select#dropdown');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async selectDropdown(optionToSelect: string) {
        expect(await this.selectBox.inputValue()).not.toBe(optionToSelect);
        await this.selectBox.selectOption(optionToSelect);
        expect(await this.selectBox.inputValue()).toBe(optionToSelect);
    }
}