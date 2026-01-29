import { type Page, type Locator, expect } from '@playwright/test';

export class EntryAdPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly pageModal: Locator;
    readonly modalTitle: Locator;
    readonly modalBody: Locator;
    readonly modalClose: Locator;
    readonly modalReEnableLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.pageModal = this.page.locator('div.modal');
        this.modalTitle = this.page.locator('div.modal-title');
        this.modalBody = this.page.locator('div.modal-body');
        this.modalClose = this.page.locator('div.modal-footer p');
        this.modalReEnableLink = this.page.locator('a#restart-ad');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyModalOnLoad(modalTitleString: string) {
        await expect(this.pageModal).toBeVisible();
        await expect(this.modalTitle).toContainText(modalTitleString);
        await expect(this.modalBody).toBeVisible();
    }
    async verifyModalNonAppearanceOnClose() {
        await this.modalClose.click();
        await this.page.reload();
        await expect(this.pageModal).toBeHidden();
    }
    async verifyModalReEnablement() {
        await expect(this.pageModal).toBeHidden();
        await expect(async () => {
            await this.modalReEnableLink.click({ force: true });
            await this.page.reload();
            await expect(this.pageModal).toBeVisible({ timeout: 3*1000 });
        }).toPass({
            intervals: [1000, 2000],
            timeout: 15*1000
        });
        await expect(this.modalTitle).toBeVisible();
        await expect(this.modalBody).toBeVisible();
    }
}