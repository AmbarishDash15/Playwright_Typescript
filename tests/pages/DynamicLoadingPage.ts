import { type Page, type Locator, expect } from '@playwright/test';

export class DynamicLoadingPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly linkExample1: Locator;
    readonly linkExample2: Locator;
    readonly childPageHeader: Locator;
    readonly elementToCheck: Locator;
    readonly buttonStart: Locator;
    readonly loadingBar: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('h3');
        this.linkExample1 = this.page.locator('a[href="/dynamic_loading/1"]');
        this.linkExample2 = this.page.locator('a[href="/dynamic_loading/2"]');
        this.elementToCheck = this.page.locator('div#finish');
        this.childPageHeader = this.page.locator('div.example > h4');
        this.buttonStart = this.page.locator('div#start button');
        this.loadingBar = this.page.locator('div#loading');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyChildPageHeader(childPageHeaderString: string) {
        await expect(this.childPageHeader).toContainText(childPageHeaderString);
    }
    async goToDynamicHiddenElementPage() {
        await this.linkExample1.click();
    }
    async goToDynamicRenderedElementPage() {
        await this.linkExample2.click();
    }
    async verifyElementsAfterClick(stringToCheck: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.buttonStart.click();
        await expect(this.loadingBar).toBeVisible();
        expect(await this.loadingBar.textContent()).toContain('Loading...');
        await expect(this.loadingBar).toBeHidden({ timeout: 10*1000 });
        await expect(this.elementToCheck).toBeVisible();
        await expect(this.elementToCheck).toContainText(stringToCheck);
    }
    async goBackToBasePage() {
        await this.page.goBack();
    }
}