import { type Page, type Locator, expect } from '@playwright/test';

export class DynamicContentPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly imageContent: Locator;
    readonly textContent: Locator;
    readonly staticLink: Locator;
    constructor (page: Page) {
        this.page = page;
        this.pageHeaderLabel = page.locator('h3');
        this.imageContent = page.locator('div.large-2 img');
        this.textContent = page.locator('div.large-centered div.large-10');
        this.staticLink = page.locator('a[href*="static"]');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async checkDynamicContent() {
        await this.page.waitForLoadState('domcontentloaded');
        const image1Src: any = await this.imageContent.first().getAttribute('src');
        const image2Src: any = await this.imageContent.nth(1).getAttribute('src');
        const image3Src: any = await this.imageContent.last().getAttribute('src');
        const text1Content: any = await this.textContent.first().textContent();
        const text2Content: any = await this.textContent.nth(1).textContent();
        const text3Content: any = await this.textContent.last().textContent();
        var contentChanged: boolean = false;
        await this.page.reload();
        await this.page.waitForLoadState('domcontentloaded');
        if (await this.imageContent.first().getAttribute('src') != image1Src ||
            await this.imageContent.nth(1).getAttribute('src') != image2Src ||
            await this.imageContent.last().getAttribute('src') != image3Src ||
            await this.textContent.first().textContent() != text1Content ||
            await this.textContent.nth(1).textContent() != text2Content ||
            await this.textContent.last().textContent() != text3Content) {
                contentChanged = true;
            }
        expect(contentChanged).toBeTruthy();
    }
    async convertAndVerifyToStatic() {
        await this.staticLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        const image1Src: any = await this.imageContent.first().getAttribute('src');
        const image2Src: any = await this.imageContent.nth(1).getAttribute('src');
        const text1Content: any = await this.textContent.first().textContent();
        const text2Content: any = await this.textContent.nth(1).textContent();
        await this.page.reload();
        await this.page.waitForLoadState('domcontentloaded');
        expect.soft(await this.imageContent.first().getAttribute('src')).toBe(image1Src);
        expect.soft(await this.imageContent.nth(1).getAttribute('src')).toBe(image2Src);
        expect.soft(await this.textContent.first().textContent()).toBe(text1Content);
        expect.soft(await this.textContent.nth(1).textContent()).toBe(text2Content);
    }
}