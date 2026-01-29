import { type Page, type Locator, expect } from '@playwright/test';
import fs from 'fs/promises';
import { CommonUtils } from '../utils/CommonUtils';

export class FileDownloadPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly commonUtils: CommonUtils;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.commonUtils = new CommonUtils(this.page);
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async downloadFile(downloadPath: string, fileName: string) {
        const downloadLink = await this.page.locator('a', { hasText: fileName });
        const fileFullPath: string = downloadPath + fileName;
        await this.commonUtils.checkAndDeleteFile(fileFullPath);
        const downloadPromise: any = this.page.waitForEvent('download');
        await downloadLink.click();
        const downloadFile: any = await downloadPromise;
        await downloadFile.saveAs(fileFullPath);
        await expect(fs.stat(fileFullPath)).toBeTruthy();
    }
}