import { type Page, type Locator, expect } from '@playwright/test';

export class DragAndDropPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly leftBox: Locator;
    readonly rightBox: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('h3');
        this.leftBox = this.page.locator('div#column-a');
        this.rightBox = this.page.locator('div#column-b');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async performAndVerifyDragDrop() {
        const leftBoxLetter: any = await this.leftBox.locator('header').textContent();
        const rightBoxLetter: any = await this.rightBox.locator('header').textContent();
        await this.leftBox.dragTo(this.rightBox);
        await expect(this.leftBox).toContainText(rightBoxLetter);
        await expect(this.rightBox).toContainText(leftBoxLetter);
    }
}