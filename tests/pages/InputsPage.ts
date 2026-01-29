import { type Page, type Locator, expect } from '@playwright/test';

export class InputsPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly inputBox: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('h3');
        this.inputBox = this.page.locator('div.example input');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyNumberEntry(input: number) {
        await this.inputBox.fill(String(input));
        await expect(this.inputBox).toHaveValue(String(input));
    }
    async verifyNumberIncrementDecrement(direction: 'Up'|'Down', repeatation: number) {
        await this.inputBox.clear();
        await this.inputBox.focus();
        for (let i: number = 0; i < repeatation; i++) {
            await this.inputBox.press(`Arrow${direction}`)
            if (direction == 'Up') {
                expect(await this.inputBox.inputValue()).toBe(String(i+1));
            }
            else {
                expect(await this.inputBox.inputValue()).toBe(String(0-(i+1)));
            }
        }
    }
}