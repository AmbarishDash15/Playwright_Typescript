import { type Page, type Locator, expect } from '@playwright/test';

export class HoversPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly imageContainer: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.imageContainer = this.page.locator('div.figure');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyDefaultAbsenceOfHoverDetails() {
        const allFigures: any = await this.imageContainer.all();
        for (let figure of allFigures) {
            await expect(figure.locator('div.figcaption')).not.toBeVisible();
        }
    }
    async hoverOverImageAndVerifyText(imageNumber: number, verificationString: string) {
        const targetFigure: Locator = await this.imageContainer.nth(imageNumber - 1);
        await targetFigure.locator('img').hover();
        await expect(targetFigure.locator('div.figcaption')).toBeVisible();
        expect(await targetFigure.locator('div.figcaption h5').textContent()).toContain(verificationString);
        expect(await targetFigure.locator('div.figcaption a').textContent()).toContain('View profile');
    }
}