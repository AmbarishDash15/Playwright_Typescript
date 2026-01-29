import { type Page, type Locator, expect } from '@playwright/test';

export class ChallengingDOMPage {
    readonly page: Page;
    readonly headerLabel: Locator;
    readonly allButtons: Locator;
    readonly successButton: Locator;
    readonly alertButton: Locator;
    readonly pageTable: Locator;
    readonly tableHeader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerLabel = this.page.locator('h3');
        this.allButtons = this.page.locator('a.button');
        this.successButton = this.page.locator('a.success');
        this.alertButton = this.page.locator('a.alert');
        this.pageTable = this.page.locator('table:visible');
        this.tableHeader = this.pageTable.locator('thead').locator('th');
    }
    async verifyPageHeader(verificationString: string) {
        await expect(this.headerLabel).toContainText(verificationString);
    }
    async verifyButtons() {
        expect(await this.allButtons.count()).toBe(3);
        await expect(this.successButton).toBeVisible();
        await expect(this.alertButton).toBeVisible();
    }
    async verifyTableColumn(colNameToCheck: string) {
        const colArr = await this.tableHeader.all();
        var boolColFound: boolean = false;
        for (let col of colArr) {
            if (await col.textContent() === colNameToCheck) {
                boolColFound = true;
                break;
            }
        }
        expect(boolColFound).toBeTruthy();
    }
    async verifyColumnValueForRowText(rowValue: string, colName: string, colValue: string) {
        const colNameArr: any = await this.tableHeader.allTextContents();
        const colNumber: number = colNameArr.indexOf(colName);
        const rowArr: Locator = this.pageTable.locator('tr').filter({ hasText: rowValue });
        expect(await rowArr.locator('td').nth(colNumber).textContent()).toBe(colValue);
    }
}