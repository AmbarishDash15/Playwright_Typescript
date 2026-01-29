import { type Page, type Locator, expect } from '@playwright/test';

export class ABTextPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly pageContent: Locator;
    constructor(page: Page){
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.pageContent = this.page.locator('div.example p');
    }
    async verifyHeaderLabel(headerLabelStr: string){
        await expect(this.headerLabel).toContainText(headerLabelStr);
    }
    async verifyPageContent(contentText: string){
        await expect(this.pageContent).toContainText(contentText);
    }
}