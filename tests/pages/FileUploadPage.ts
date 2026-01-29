import { type Page, type Locator, expect } from '@playwright/test';

export class FileUploadPage {
    readonly page: Page;
    readonly pageHeaderBanner: Locator;
    readonly fileBrowseBtn: Locator;
    readonly uploadBtn: Locator;
    readonly uploadedFileName: Locator;
    readonly errorBanner: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderBanner = this.page.locator('div.example h3');
        this.fileBrowseBtn = this.page.locator('input#file-upload');
        this.uploadBtn = this.page.locator('input#file-submit');
        this.uploadedFileName = this.page.locator('div#uploaded-files');
        this.errorBanner = this.page.locator('h1');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderBanner).toContainText(pageHeaderString);
    }
    async uploadFile(filePath: string, fileName: string) {
        const fullFilePath: string = filePath + fileName;
        await this.fileBrowseBtn.setInputFiles(fullFilePath);
        expect(await this.fileBrowseBtn.inputValue()).toContain(fileName);
        await this.uploadBtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.pageHeaderBanner).toContainText('File Uploaded!');
        await expect(this.uploadedFileName).toContainText(fileName);
    }

    async clickUploadWithoutFile() {
        expect(await this.fileBrowseBtn.inputValue()).toBe("");
        await this.uploadBtn.click();
        await expect(this.errorBanner).toContainText('Internal Server Error');
    }

    async goBackToFileUploadPage() {
        await this.page.goBack();
    }
}