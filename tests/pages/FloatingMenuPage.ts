import { type Page, type Locator, expect } from '@playwright/test';

export class FloatingMenuPage {
    readonly page: Page;
    readonly pageHeaderBanner: Locator;
    readonly floatingMenuAll: Locator;
    readonly floatingHomeLink: Locator;
    readonly floatingNewsLink: Locator;
    readonly floatingContactLink: Locator;
    readonly floatingAboutLink: Locator;
    readonly pageFooter: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderBanner = this.page.locator('div.example h3');
        this.floatingMenuAll = this.page.locator('div#menu');
        this.floatingHomeLink = this.page.locator('a[href*="home"]');
        this.floatingNewsLink = this.page.locator('a[href*="news"]');
        this.floatingContactLink = this.page.locator('a[href*="contact"]');
        this.floatingAboutLink = this.page.locator('a[href*="about"]');
        this.pageFooter = this.page.locator('div#page-footer');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderBanner).toContainText(pageHeaderString);
    }
    async verifyFloatingMenuOnPageLoad() {
        await expect(this.floatingMenuAll).toBeInViewport();
        expect(await this.floatingMenuAll.locator('a').count()).toBe(4);
        await expect(this.floatingHomeLink).toBeInViewport();
        await expect(this.floatingNewsLink).toBeInViewport();
        await expect(this.floatingContactLink).toBeInViewport();
        await expect(this.floatingAboutLink).toBeInViewport();
    }
    async scrollToMiddleAndVerifyMenu() {
        const footerBoundingBox: any = await this.pageFooter.boundingBox();
        const boundingY: any = footerBoundingBox.y;
        await this.page.mouse.wheel(0, boundingY);
        await expect(this.floatingMenuAll).toBeInViewport();
        expect(await this.floatingMenuAll.locator('a').count()).toBe(4);
        await expect(this.floatingHomeLink).toBeInViewport();
        await expect(this.floatingNewsLink).toBeInViewport();
        await expect(this.floatingContactLink).toBeInViewport();
        await expect(this.floatingAboutLink).toBeInViewport();
    }
    async scrollToEndAndVerifyOfMenu() {
        await this.pageFooter.scrollIntoViewIfNeeded();
        await expect(this.floatingMenuAll).toBeInViewport();
        expect(await this.floatingMenuAll.locator('a').count()).toBe(4);
        await expect(this.floatingHomeLink).toBeInViewport();
        await expect(this.floatingNewsLink).toBeInViewport();
        await expect(this.floatingContactLink).toBeInViewport();
        await expect(this.floatingAboutLink).toBeInViewport();
    }
}