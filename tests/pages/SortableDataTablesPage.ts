import { type Page, type Locator, expect } from '@playwright/test';

export class SortableDataTablesPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly tableExample1: Locator;
    readonly tableExample2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.tableExample1 = this.page.locator('table#table1');
        this.tableExample2 = this.page.locator('table#table2');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async verifySortingTable1(columnName: string) {
        const colNumber: number = 0;
        
    }
}