import { type Page, type Locator, expect } from '@playwright/test';
import { CommonUtils } from '../utils/CommonUtils';
import fs from 'fs/promises';

export class JQueryUIMenusPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly menuItemDisabled: Locator;
    readonly menuItemEnabled: Locator;
    readonly menuItemDownloads: Locator;
    readonly menuItemBackToJQueryUI: Locator;
    readonly menuItemPDF: Locator;
    readonly menuItemCSV: Locator;
    readonly menuItemExcel: Locator;
    readonly commonUtils: CommonUtils;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.menuItemDisabled = this.page.locator('li#ui-id-1');
        this.menuItemEnabled = this.page.locator('li#ui-id-3');
        this.menuItemDownloads = this.page.locator('li#ui-id-4');
        this.menuItemBackToJQueryUI = this.page.locator('li#ui-id-8');
        this.menuItemPDF = this.page.locator('li#ui-id-5');
        this.menuItemCSV = this.page.locator('li#ui-id-6');
        this.menuItemExcel = this.page.locator('li#ui-id-7');
        this.commonUtils = new CommonUtils(this.page);
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyMenuItemStates() {
        await expect(this.menuItemDisabled).toBeVisible();
        await expect(this.menuItemDisabled).toBeDisabled();
        await expect(this.menuItemEnabled).toBeVisible();
        await expect(this.menuItemEnabled).toBeEnabled();
        await this.menuItemEnabled.hover();
        await expect(this.menuItemDownloads).toBeVisible();
        await expect(this.menuItemDownloads).toBeEnabled();
        await expect(this.menuItemBackToJQueryUI).toBeVisible();
        await expect(this.menuItemBackToJQueryUI).toBeEnabled();
        await this.menuItemDownloads.hover();
        await expect(this.menuItemPDF).toBeVisible();
        await expect(this.menuItemPDF).toBeEnabled();
        await expect(this.menuItemCSV).toBeVisible();
        await expect(this.menuItemCSV).toBeEnabled();
        await expect(this.menuItemExcel).toBeVisible();
        await expect(this.menuItemExcel).toBeEnabled();
    }
    async verifyClickOnBackToJQueryUI() {
        await this.menuItemEnabled.hover();
        await this.menuItemBackToJQueryUI.click();
        await expect(this.page.locator('div.example h3')).toContainText('JQuery UI');
        await this.page.goBack();
    }
    async verifyClickAndDownloadOptions(fileDownloadPath: string) {
        await this.menuItemEnabled.hover();
        await this.menuItemDownloads.hover();
        const pdfFileHref: any = await this.menuItemPDF.locator('a').getAttribute('href');
        const csvFileHref: any = await this.menuItemCSV.locator('a').getAttribute('href');
        const excelFileHref: any = await this.menuItemExcel.locator('a').getAttribute('href');
        const pdfFileName: string = pdfFileHref.split('/')[4];
        const csvFileName: string = csvFileHref.split('/')[4];
        const excelFileName: string = excelFileHref.split('/')[4];
        await this.commonUtils.checkAndDeleteFile(fileDownloadPath + pdfFileName);
        await this.commonUtils.checkAndDeleteFile(fileDownloadPath + csvFileName);
        await this.commonUtils.checkAndDeleteFile(fileDownloadPath + excelFileName);
        var downloadPromise: any = this.page.waitForEvent('download');
        await this.menuItemPDF.click();
        var downloadFile: any = await downloadPromise;
        await downloadFile.saveAs(fileDownloadPath + pdfFileName);
        await expect(fs.stat(fileDownloadPath + pdfFileName)).toBeTruthy();
        await this.menuItemEnabled.hover();
        await this.menuItemDownloads.hover();
        downloadPromise = this.page.waitForEvent('download');
        await this.menuItemCSV.click();
        downloadFile = await downloadPromise;
        await downloadFile.saveAs(fileDownloadPath + csvFileName);
        await expect(fs.stat(fileDownloadPath + csvFileName)).toBeTruthy();
        await this.menuItemEnabled.hover();
        await this.menuItemDownloads.hover();
        downloadPromise = this.page.waitForEvent('download');
        await this.menuItemExcel.click();
        downloadFile = await downloadPromise;
        await downloadFile.saveAs(fileDownloadPath + excelFileName);
        await expect(fs.stat(fileDownloadPath + excelFileName)).toBeTruthy();
    }
}