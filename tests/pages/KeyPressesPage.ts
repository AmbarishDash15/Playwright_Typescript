import { type Page, type Locator, expect } from '@playwright/test';

export class KeyPressesPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly inputBox: Locator;
    readonly resultsText: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.inputBox = this.page.locator('input#target');
        this.resultsText = this.page.locator('p#result');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyKeyPresses(keyValue: string) {
        switch (keyValue) {
            case 'Backspace' :
                await this.inputBox.focus();
                await this.inputBox.press('Backspace');
                await expect(this.resultsText).toContainText('You entered: BACK_SPACE');
                break;
            case 'Tab':
                await this.inputBox.focus();
                await this.inputBox.press('Tab');
                await expect(this.resultsText).toContainText('You entered: TAB');
                break;
            case 'Delete':
                await this.inputBox.focus();
                await this.inputBox.press('Delete');
                await expect(this.resultsText).toContainText('You entered: DELETE');
                break;
            case 'Shift':
                await this.inputBox.focus();
                await this.inputBox.press('Shift');
                await expect(this.resultsText).toContainText('You entered: SHIFT');
                break;
            case 'Control':
                await this.inputBox.focus();
                await this.inputBox.press('Control');
                await expect(this.resultsText).toContainText('You entered: CONTROL');
                break;
        }
    }
}