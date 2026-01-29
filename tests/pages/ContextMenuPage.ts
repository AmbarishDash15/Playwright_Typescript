import { type Page, type Locator, expect } from '@playwright/test';

export class ContextMenuPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly targetBox: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerLabel = page.locator('h3');
        this.targetBox = page.locator('div#hot-spot');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.headerLabel).toContainText(pageHeaderString);
    }
    async validateContextMenuDialogMsg(diloagMessage: string) {
        this.page.on('dialog', async(dialog) => {
            expect(await dialog.message()).toBe(diloagMessage);
            await dialog.accept();
        })
        await this.targetBox.click({button: 'right'})
    }
}