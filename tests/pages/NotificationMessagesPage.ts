import { type Page, type Locator, expect } from '@playwright/test';

export class NotificationMessagesPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly flashMessages: Locator;
    readonly linkNewMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.flashMessages = this.page.locator('div#flash');
        this.linkNewMessage = this.page.locator('div.example a')
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyNotificationFlashMessage(msgText: string) {
        for(let retryCount: number = 0; retryCount < 10; retryCount++) {
            var flashMessage: any = await this.flashMessages.textContent();
            if(flashMessage.includes(msgText)) {
                break;
            }
            else {
                await this.linkNewMessage.click();
                await this.page.waitForLoadState('domcontentloaded');
            }
        }
        await expect(this.flashMessages).toContainText(msgText);
    }
}