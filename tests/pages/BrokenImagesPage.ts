import { type Page, type Locator, expect, request } from '@playwright/test';

export class BrokenImagesPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly images: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.images = this.page.locator('div.example img');
    }
    async verifyPageHeader(verificationString: string) {
        await expect(this.headerLabel).toContainText(verificationString);
    }
    async checkBrokenImage() {
        const pageURL: string = await this.page.url().replace('/broken_images','');
        const allImages: any = await this.images.all();
        const totalImgCount: number = await this.images.count();
        var brokenImgCount: number = 0;
        for (let img of allImages) {
            if(await img.getAttribute('src')) {
                var imgSource: string = pageURL+ '/' + await img.getAttribute('src');
                var response: any = await this.page.request.get(imgSource);
                if(!response.ok()) {
                    brokenImgCount++;
                }
            }
        }
        expect(brokenImgCount).toEqual(2);
        expect(brokenImgCount).toBeLessThan(totalImgCount);
    }
}