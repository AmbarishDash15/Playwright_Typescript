import { type Page, type Locator, expect } from '@playwright/test';

export class LargeAndDeepDOMPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly siblingRoot: Locator;
    readonly tableElement: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.siblingRoot = this.page.locator('div.tier-1.item-1');
        this.tableElement = this.page.locator('table#large-table');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifyFirstAndLastElementText(firstElementText: string, lastElementText: string) {
        const textContent: any = await this.siblingRoot.textContent();
        const textArray: string = textContent.trim().split('\n');
        const firstText: string = textArray[0].trim();
        const lastText: string = textArray[textArray.length - 1].trim();
        expect(firstText).toBe(firstElementText);
        expect(lastText).toBe(lastElementText);
    }
    async verifyTextWithTierAndItem(tierNumber: string, itemNumber: string, textToVerify: string) {
        const itemTextContent: any = await this.siblingRoot.locator(`div.tier-${tierNumber}.item-${itemNumber}`).textContent();
        const elementText: string = itemTextContent.trim().split('\n')[0].trim();
        expect(elementText).toBe(textToVerify);
    }
    async verifyTableRowsAndColumns(rowCount: string, colCount: number){
        expect(await this.tableElement.locator('tbody tr').count()).toBe(rowCount);
        expect(await this.tableElement.locator('th').count()).toBe(colCount);
    }
    async verifyTableCellText(rowNumber: string, colNumber: string, textToVerify: string) {
        //tr.row-5 td.column-3
        expect(await this.page.locator(`tr.row-${rowNumber}`).locator(`td.column-${colNumber}`).textContent()).toContain(textToVerify);
    }
}