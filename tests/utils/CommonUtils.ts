import { BrowserContext, type Page, expect } from '@playwright/test';
import { PageObjectManager } from "../pages/PageObjectManager";
import * as fs from 'fs/promises';
import * as path from 'path';
export class CommonUtils {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickHomePageLink(linkText: string) {
        const pageObjectManager: any = new PageObjectManager(this.page);
        const homePage: any = pageObjectManager.getHomePage();
        await homePage.clickOnLink(linkText);
    }
    async moveMouseOutOfWindow() {
        await this.page.dispatchEvent('html','mouseleave',{ clientY: -10 });
    }
    async checkAndDeleteFile(path: string){
        try {
            await fs.unlink(path);
            await expect(fs.stat(path)).rejects.toHaveProperty('code', 'ENOENT');
        }
        catch (err: any) {
            if (err.code != 'ENOENT') {
                console.error('Error deleting the file:', err);
            }
        }
    }
    async mockEmailSent() {
        await this.page.route('**/forgot_password', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'text/html',
                body: '<html><body>Your e-mail\'s been sent!</body></html>'
            })
        })
    }
    async mockLocation() {
        const context: BrowserContext = this.page.context();
        await context.grantPermissions(['geolocation']);
        await context.setGeolocation({latitude: 40.7128, longitude: -74.006});
    }
    async getDownLoadFileName() {
        return await this.page.locator('a[href*=".png"]').first().textContent();
    }
    async  cleanFolder(downloadPath: string) {
        try {
            const entries = await fs.readdir(downloadPath, { withFileTypes: true });
            
            const deleteFilesPromises = entries
                .filter(entry => entry.isFile())
                .map(entry => fs.unlink(path.join(downloadPath, entry.name)));

            await Promise.all(deleteFilesPromises);
        } catch (err: any) {
            if (err.code !== 'ENOENT') {
                console.error('Global Cleanup Error:', err);
            }
        }
    }
}