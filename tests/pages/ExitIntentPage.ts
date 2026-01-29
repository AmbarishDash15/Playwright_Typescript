import { type Page, type Locator, expect } from '@playwright/test';
import { CommonUtils } from '../utils/CommonUtils';

export class ExitIntentPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly pageModal: Locator;
    readonly modalTitle: Locator;
    readonly modalBody: Locator;
    readonly modalClose: Locator;
    readonly commonUtils: CommonUtils;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.pageModal = this.page.locator('div.modal');
        this.modalTitle = this.page.locator('div.modal-title');
        this.modalBody = this.page.locator('div.modal-body');
        this.modalClose = this.page.locator('div.modal-footer p');
        this.commonUtils = new CommonUtils(this.page);
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyModalAppearanceOnMouseExit(modalTitleString: string) {
        await this.commonUtils.moveMouseOutOfWindow();
        await expect(this.pageModal).toBeVisible();
        await expect(this.modalTitle).toContainText(modalTitleString);
        await expect(this.modalBody).toBeVisible();
    }
    async verifyModalDisablementOnClose() {
        await expect(this.pageModal).toBeVisible();
        await this.modalClose.click();
        await this.commonUtils.moveMouseOutOfWindow();
        await expect(this.pageModal).toBeHidden();
    }
}