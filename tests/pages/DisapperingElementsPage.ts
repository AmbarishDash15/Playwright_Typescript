import { type Page, type Locator, expect } from '@playwright/test';

export class DisappearingElementsPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly allLinks: Locator;
    readonly homeLink: Locator;
    readonly aboutLink: Locator;
    readonly contactUsLink: Locator;
    readonly portfolioLink: Locator;
    readonly galleryLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = page.locator('h3');
        this.allLinks = page.locator('ul a');
        this.homeLink = page.locator('a', { hasText: 'Home' });
        this.aboutLink = page.locator('a', { hasText: 'About' });
        this.contactUsLink = page.locator('a', { hasText: 'Contact Us' });
        this.portfolioLink = page.locator('a', { hasText: 'Portfolio' });
        this.galleryLink = page.locator('a', { hasText: 'Gallery' });
    }
    async verifyPageHeaderLabel(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyFixedLinks() {
        await expect(this.homeLink).toBeVisible();
        await expect(this.aboutLink).toBeVisible();
        await expect(this.contactUsLink).toBeVisible();
        await expect(this.portfolioLink).toBeVisible();
    }
    async verifyDisappearingLink() {
        const noOfElements: number = await this.allLinks.count();
        while (noOfElements == await this.allLinks.count()) {
            await this.page.reload({waitUntil: 'networkidle'});
        }
        if (noOfElements == 5) {
            await expect(this.galleryLink).toBeHidden();
        }
        else {
            await expect(this.galleryLink).toBeVisible();
        }
    }
}