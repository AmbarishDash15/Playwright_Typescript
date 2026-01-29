import { type Page, type Locator, expect } from '@playwright/test';
import { CommonUtils } from '../utils/CommonUtils';

export class GeolocationPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly whereAmIBtn: Locator;
    readonly commonUtils: CommonUtils;
    readonly locLatitude: Locator;
    readonly locLongitude: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.whereAmIBtn = this.page.locator('button');
        this.commonUtils = new CommonUtils(this.page);
        this.locLatitude = this.page.locator('div#lat-value');
        this.locLongitude = this.page.locator('div#long-value');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyLocationCoordinates(latitudeValue: string, longitudeValue: string) {
        await this.commonUtils.mockLocation();
        await this.whereAmIBtn.click();
        await expect(this.locLatitude).toContainText(latitudeValue);
        await expect(this.locLongitude).toContainText(longitudeValue);
    }
}