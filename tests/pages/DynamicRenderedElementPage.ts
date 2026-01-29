import { type Page, type Locator, expect } from '@playwright/test';
import { DynamicLoadingPage } from './DynamicLoadingPage';

export class DynamicRenderedElementPage extends DynamicLoadingPage {
    constructor(page: Page) {
        super(page);
    }
    async verifyUnattachedElementBeforeClick() {
        await expect(this.elementToCheck).not.toBeAttached();
    }
}