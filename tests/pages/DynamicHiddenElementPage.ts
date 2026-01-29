import { type Page, type Locator, expect } from '@playwright/test';
import { DynamicLoadingPage } from './DynamicLoadingPage';

export class DynamicHiddenElementPage extends DynamicLoadingPage {
    constructor(page: Page) {
        super(page);
    }
    async verifyHiddenElementBeforeClick() {
        await expect(this.elementToCheck).toBeAttached();
        await expect(this.elementToCheck).toBeHidden();
    }
}