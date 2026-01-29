import { type Page, type Locator, expect } from '@playwright/test';

export class IFramesPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly notificationCloseButton: Locator;
    readonly iFrame: Locator;
    readonly iFrameTextBody: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.notificationCloseButton = this.page.locator('div.tox-icon');
        this.iFrame = this.page.locator('iframe#mce_0_ifr');
        this.iFrameTextBody = this.iFrame.contentFrame().locator('body#tinymce');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async checkAndCloseNotification() {
        await this.page.waitForLoadState('domcontentloaded');
        if(await this.notificationCloseButton.isVisible({timeout: 5*1000})) {
            await this.notificationCloseButton.click({ force: true});
        }
        await expect(this.notificationCloseButton).not.toBeVisible();
    }
    async verifyiFrameTextContent(textContentiFrame: string) {
        await expect(this.iFrameTextBody).toContainText(textContentiFrame);
    }
}