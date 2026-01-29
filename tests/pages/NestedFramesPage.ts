import { type Page, type Locator, expect } from '@playwright/test';

export class NestedFramesPage {
    readonly page: Page;
    readonly topFrame: Locator;
    readonly bottomFrameBody: Locator;
    readonly topLeftFrameBody: Locator;
    readonly topMiddleFrameBody: Locator;
    readonly topRightFrameBody: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topFrame = this.page.locator('frame[name="frame-top"]');
        this.bottomFrameBody = this.page.locator('frame[name="frame-bottom"]').contentFrame().locator('body');
        this.topLeftFrameBody = this.topFrame.contentFrame().locator('frame[name="frame-left"]').contentFrame().locator('body');
        this.topMiddleFrameBody = this.topFrame.contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body');
        this.topRightFrameBody = this.topFrame.contentFrame().locator('frame[name="frame-right"]').contentFrame().locator('body');
    }
    async verifyFrameContents(topLeftFrameString: string, topMiddleFrameString: string, topRightFrameString: string, bottomFrameString: string) {
        await expect(this.topLeftFrameBody).toContainText(topLeftFrameString);
        await expect(this.topMiddleFrameBody).toContainText(topMiddleFrameString);
        await expect(this.topRightFrameBody).toContainText(topRightFrameString);
        await expect(this.bottomFrameBody).toContainText(bottomFrameString);
    }
    async goBackToFramesBasePage() {
        await this.page.goBack();
    }
}