import { type Page, type Locator, expect } from '@playwright/test';

export class JavaScriptAlertsPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly btnJSAlert: Locator;
    readonly btnJSConfirm: Locator;
    readonly btnJSPrompt: Locator;
    readonly result: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.btnJSAlert = this.page.locator('button[onclick*="Alert"]');
        this.btnJSConfirm = this.page.locator('button[onclick*="Confirm"]');
        this.btnJSPrompt = this.page.locator('button[onclick*="Prompt"]');
        this.result = this.page.locator('p#result');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyJSAlert(alertVerificationText: string) {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS Alert');
            await dialog.accept();
        })
        await this.btnJSAlert.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.result).toContainText(alertVerificationText);
    }
    async verifyJSConfirm(optionToClick: 'Ok'|'Cancel') {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS Confirm');
            optionToClick == 'Ok'?await dialog.accept():await dialog.dismiss();
        })
        await this.btnJSConfirm.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.result).toContainText('You clicked: '+optionToClick);
    }
    async verifyJSPromptOkWithText(textToEnter: string) {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS prompt');
            await dialog.accept(textToEnter);
        })
        await this.btnJSPrompt.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.result).toContainText('You entered: '+textToEnter);
    }
    async verifyJSPromptCancel() {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS prompt');
            await dialog.dismiss();
        })
        await this.btnJSPrompt.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.result).toContainText('You entered: null');
    }
}