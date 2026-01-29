import { type Page, type Locator, expect } from '@playwright/test';

export class AddRemoveElementsPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly addElementBtn: Locator;
    readonly deleteButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.addElementBtn = this.page.locator('div.example button');
        this.deleteButton = this.page.locator('div#elements button');
    }
    async verifyPageHeader (verificationString: string) {
        await expect(this.headerLabel).toContainText(verificationString);
    }
    async clickAddElement() {
        await this.addElementBtn.click();
    }
    async verifyElementAdded() {
        await expect(this.deleteButton).toBeVisible();
    }
    async removeElement() {
        await this.deleteButton.click();
    }
    async verifyElementRemoved() {
        await expect(this.deleteButton).toBeHidden();
    }
}