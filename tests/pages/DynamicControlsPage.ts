import { type Page, type Locator, expect } from '@playwright/test';

export class DynamicControlsPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly checkboxAddRemove: Locator;
    readonly btnAddRemove: Locator;
    readonly msgAddRemove: Locator;
    readonly textboxEnableDisable: Locator;
    readonly btnEnableDisable: Locator;
    readonly msgEnableDisable: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('h4').first();
        this.checkboxAddRemove = this.page.locator('input[type="checkbox"]');
        this.btnAddRemove = this.page.locator('form#checkbox-example button');
        this.msgAddRemove = this.page.locator('form#checkbox-example p');
        this.textboxEnableDisable = this.page.locator('input[type="text"]');
        this.btnEnableDisable = this.page.locator('form#input-example button');
        this.msgEnableDisable = this.page.locator('form#input-example p');
    }
    async verifyPageHeader(pageHeaderLabel: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderLabel);
    }
    async verifyDefaultState() {
        await expect(this.checkboxAddRemove).toBeVisible();
        await expect(this.textboxEnableDisable).toBeDisabled();
    }
    async removeCheckbox() {
        await expect(this.checkboxAddRemove).toBeVisible();
        await this.btnAddRemove.click();
        await expect(this.checkboxAddRemove).toBeHidden();
        await expect(this.msgAddRemove).toContainText('It\'s gone!');
    }
    async reAddCheckBox() {
        await expect(this.checkboxAddRemove).toBeHidden();
        await this.btnAddRemove.click();
        await expect(this.checkboxAddRemove).toBeVisible();
        await expect(this.msgAddRemove).toContainText('It\'s back!');
    }
    async enableTextBox() {
        await expect(this.textboxEnableDisable).toBeDisabled();
        await this.btnEnableDisable.click();
        await expect(this.textboxEnableDisable).toBeEnabled();
        await expect(this.msgEnableDisable).toContainText('It\'s enabled!');
        await this.textboxEnableDisable.fill('Textbox is enabled');
        expect(await this.textboxEnableDisable.inputValue()).toBe('Textbox is enabled');
    }
    async reDisableTextbox() {
        await expect(this.textboxEnableDisable).toBeEnabled();
        await this.btnEnableDisable.click();
        await expect(this.textboxEnableDisable).toBeDisabled();
        await expect(this.msgEnableDisable).toContainText('It\'s disabled!');
    }
}