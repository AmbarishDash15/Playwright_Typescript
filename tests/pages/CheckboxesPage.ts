import { type Page, type Locator, expect } from '@playwright/test';

export class CheckboxesPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.checkbox1 = this.page.locator('input[type="checkbox"]').first();
        this.checkbox2 = this.page.locator('input[type="checkbox"]').last();
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.headerLabel).toContainText(pageHeaderString);
    }
    async defaultCheckStatus() {
        await expect(this.checkbox1).not.toBeChecked();
        await expect(this.checkbox2).toBeChecked();
    }
    async checkAndVerifyCheckBox1() {
        await this.checkbox1.check();
        await expect(this.checkbox1).toBeChecked({ checked: true });
    }
    async uncheckAndVerifyCheckbox2() {
        await this.checkbox2.uncheck();
        await expect(this.checkbox2).toBeChecked({ checked: false });
    }
}