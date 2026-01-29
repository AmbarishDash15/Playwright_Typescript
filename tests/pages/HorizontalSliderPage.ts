import { type Page, type Locator, expect } from '@playwright/test';

export class HorizontalSliderPage {
    readonly page: Page;
    readonly pageHeaderLabel: Locator;
    readonly horizontalSlider: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pageHeaderLabel = this.page.locator('div.example h3');
        this.horizontalSlider = this.page.locator('input[type="range"]');
    }
    async verifyPageHeader(pageHeaderString: string) {
        await expect(this.pageHeaderLabel).toContainText(pageHeaderString);
    }
    async moveSliderWithKey(targetValue: number) {
        await this.horizontalSlider.focus();
        var currentValue: number = Number(await this.horizontalSlider.inputValue());
        const valueDiff: number = targetValue - currentValue;
        const sliderStep: number = Number(await this.horizontalSlider.getAttribute('step'));
        while(currentValue != targetValue) {
            if(valueDiff > 0) {
                await this.horizontalSlider.press('ArrowRight');
                currentValue = currentValue + sliderStep;
            }
            else {
                await this.horizontalSlider.press('ArrowLeft');
                currentValue = currentValue - sliderStep;
            }
        }
        const newValue: number = Number(await this.horizontalSlider.getAttribute('value'));
        await expect(this.horizontalSlider).toHaveValue(String(targetValue));
    }
    async moveSliderWithMouse(targetValue: number) {
        var initialValue: number = Number(await this.horizontalSlider.inputValue());
        if(initialValue != 0){
            await this.horizontalSlider.focus();
            await this.page.keyboard.press('Home');
            initialValue = 0;
        }
        const sliderBox: any = await this.horizontalSlider.boundingBox();
        const targetPercent: number = (targetValue - initialValue) * (sliderBox.width/5);
        await this.page.mouse.move(sliderBox.x+sliderBox.width/2, sliderBox.y + sliderBox.height/2);
        await this.page.mouse.down();
        await this.page.mouse.move(sliderBox.x + targetPercent, sliderBox.y + sliderBox.height/2);
        await this.page.mouse.up();
        await expect(this.horizontalSlider).toHaveValue(String(targetValue))
    }
}