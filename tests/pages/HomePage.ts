import { type Page, type Locator, expect} from '@playwright/test';
export class HomePage {
    readonly page: Page;
    readonly appHeading: Locator;
    readonly headerLabel: Locator;
    constructor(page: Page) {
        this.page = page;
        this.appHeading = this.page.locator('h1');
        this.headerLabel = this.page.locator('h2');
    }
    async openAppURL(appURL: string) {
        await this.page.goto('/');
    }
    async verifyApplicationHeader(appHeadingString: string) {
        await this.appHeading.waitFor();
        await expect(this.appHeading).toContainText(appHeadingString);
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.headerLabel).toContainText(pageHeaderString);
    }
    async getLinkLocator(linkText: string) {
        const linkHREF: any = await this.getHREFFromText(linkText);
        const linkLocator: Locator = this.page.locator(`a[href="/${linkHREF}"]`);
        return linkLocator;
    }
    async clickOnLink(linkText: string) {
        const linkLocator: Locator = await this.getLinkLocator(linkText);
        await linkLocator.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    async getHREFFromText(linkText: string) {
        switch (linkText) {
            case 'A/B Testing':
                return 'abtest';
            case 'Add/Remove Elements':
                return 'add_remove_elements/';
            case 'Basic Auth':
                return 'basic_auth';
            case 'Broken Images':
                return 'broken_images';
            case 'Challenging DOM':
                return 'challenging_dom';
            case 'Checkboxes':
                return 'checkboxes';
            case 'Context Menu':
                return 'context_menu';
            case 'Digest Authentication':
                return 'digest_auth';
            case 'Disappearing Elements':
                return 'disappearing_elements';
            case 'Drag and Drop':
                return 'drag_and_drop';
            case 'Dropdown':
                return 'dropdown';
            case 'Dynamic Content':
                return 'dynamic_content';
            case 'Dynamic Controls':
                return 'dynamic_controls';
            case 'Dynamic Loading':
                return 'dynamic_loading';
            case 'Entry Ad':
                return 'entry_ad';
            case 'Exit Intent':
                return 'exit_intent';
            case 'File Download':
                return 'download';
            case 'File Upload':
                return 'upload';
            case 'Floating Menu':
                return 'floating_menu';
            case 'Forgot Password':
                return 'forgot_password';
            case 'Form Authentication':
                return 'login';
            case 'Frames':
                return 'frames';
            case 'Geolocation':
                return 'geolocation';
            case 'Horizontal Slider':
                return 'horizontal_slider';
            case 'Hovers':
                return 'hovers';
            case 'Infinite Scroll':
                return 'infinite_scroll';
            case 'Inputs':
                return 'inputs';
            case 'JQuery UI Menus':
                return 'jqueryui/menu';
            case 'JavaScript Alerts':
                return 'javascript_alerts';
            case 'JavaScript onload event error':
                return 'javascript_error';
            case 'Key Presses':
                return 'key_presses';
            case 'Large & Deep DOM':
                return 'large';
            case 'Multiple Windows':
                return 'windows';
            case 'Nested Frames':
                return 'nested_frames';
            case 'Notification Messages':
                return 'notification_message';
            case 'Redirect Link':
                return 'redirector';
            case 'Secure File Download':
                return 'download_secure';
            case 'Shadow DOM':
                return 'shadowdom';
            case 'Shifting Content':
                return 'shifting_content';
            case 'Slow Resources':
                return 'slow';
            case 'Sortable Data Tables':
                return 'tables';
            case 'Status Codes':
                return 'status_codes';
            case 'Typos':
                return 'typos';
            case 'WYSIWYG Editor':
                return 'tinymce';
        }
    }
}