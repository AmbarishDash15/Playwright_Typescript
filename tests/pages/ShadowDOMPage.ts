import { type Page, type Locator, expect } from '@playwright/test';

export class ShadowDOMPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly shadowParent1: Locator;
    readonly shadowParent2: Locator;
    constructor(page: Page) {
        this.page= page;
        this.pageHeaderLabel = this.page.locator('div#content h1');
        this.shadowParent1 = this.page.locator('my-paragraph').first();
        this.shadowParent2 = this.page.locator('my-paragraph').last();
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyTextinFirstElement(textToVerify: string) {
        await expect(this.shadowParent1.locator('span')).toContainText(textToVerify);
    }
    async verifyTextinSecondElement(firstText: string, secondText: string) {
        await expect(this.shadowParent2.locator('li').first()).toContainText(firstText);
        await expect(this.shadowParent2.locator('li').last()).toContainText(secondText);
    }
}