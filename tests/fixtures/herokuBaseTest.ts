import { test as base } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';
import { CommonUtils } from '../utils/CommonUtils';

interface HerokuFixtures {
    pom: PageObjectManager;
    commonUtils: CommonUtils;
}

export const test = base.extend<HerokuFixtures>({
    pom: async ({ page }, use) => {
        const pom = new PageObjectManager(page);
        await use(pom);
    },
    commonUtils: async ({ page }, use) => {
        const commonUtils = new CommonUtils(page);
        await use(commonUtils);
    }
});
export { expect } from '@playwright/test';