import { type Page, type Locator, expect } from '@playwright/test';
import { CommonUtils } from '../utils/CommonUtils';

export class ForgotPasswordPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly emailTxtbox: Locator;
    readonly retrievePasswordBtn: Locator;
    readonly emailSentLabel: Locator;
    readonly commonUtils: CommonUtils;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h2');
        this.emailTxtbox = this.page.locator('input#email');
        this.retrievePasswordBtn = this.page.locator('button#form_submit');
        this.emailSentLabel = this.page.locator('body');
        this.commonUtils = new CommonUtils(this.page);
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyEnterEmailAndRetrievePassword(emailIDString: string) {
        await this.commonUtils.mockEmailSent();
        await this.emailTxtbox.fill(emailIDString);
        expect(await this.emailTxtbox.inputValue()).toBe(emailIDString);
        await this.retrievePasswordBtn.click();
        await expect(this.emailSentLabel).toContainText('Your e-mail\'s been sent!');
    }
}