import { test } from './fixtures/herokuBaseTest';
import { KeyPressesPage } from './pages/KeyPressesPage';
//test.describe.configure({mode: 'parallel'});

test.use({
    httpCredentials: {
            username: 'admin',
            password: 'admin',
        }
})

test.beforeEach(async ({ pom }) => {
    const homePage: any = pom.getHomePage();
    await homePage.openAppURL();
})

test('Verify Home Page', async ({ pom }) => {
    const homePage: any = pom.getHomePage();
    await homePage.verifyApplicationHeader('Welcome to the-internet');
    await homePage.verifyPageHeader('Available Examples');
})

test('A/B Testing', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('A/B Testing');
    const abTestPage: any = pom.getABTextPage();
    await abTestPage.verifyHeaderLabel('A/B Test ');
    await abTestPage.verifyPageContent('Also known as split testing.');
})

test('Add/Remove Elements', async ({ pom, commonUtils }) => {   
    await commonUtils.clickHomePageLink('Add/Remove Elements');
    const addRemoveElementsPage: any = pom.getAddRemoveElementsPage();
    await addRemoveElementsPage.verifyPageHeader('Add/Remove Elements');
    await addRemoveElementsPage.clickAddElement();
    await addRemoveElementsPage.verifyElementAdded();
    await addRemoveElementsPage.removeElement();
    await addRemoveElementsPage.verifyElementRemoved();
})

test('Basic Auth', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Basic Auth');
    const basiAuthPage: any = pom.getBasicAuthPage();
    await basiAuthPage.verifyPageHeader('Basic Auth');
    await basiAuthPage.verifyPageContent('Congratulations');
})

test('Broken Image', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Broken Images');
    const brokenImagesPage: any = pom.getBrokenImagesPage();
    await brokenImagesPage.verifyPageHeader('Broken Images');
    await brokenImagesPage.checkBrokenImage();
})

test('Challenging DOM',async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Challenging DOM');
    const challengingDOMPage: any = pom.getChallengingDOMPage();
    await challengingDOMPage.verifyPageHeader('Challenging DOM');
    await challengingDOMPage.verifyButtons();
    await challengingDOMPage.verifyTableColumn('Action');
    await challengingDOMPage.verifyColumnValueForRowText('Apeirian5', 'Amet', 'Consequuntur5');
})

test('Checkboxes', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Checkboxes');
    const checkboxesPage: any = pom.getCheckboxesPage();
    await checkboxesPage.verifyPageHeader('Checkboxes');
    await checkboxesPage.defaultCheckStatus();
    await checkboxesPage.checkAndVerifyCheckBox1();
    await checkboxesPage.uncheckAndVerifyCheckbox2();
})

test('Context Menu', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Context Menu');
    const contextMenuPage: any = pom.getContextMenuPage();
    await contextMenuPage.verifyPageHeader('Context Menu');
    await contextMenuPage.validateContextMenuDialogMsg('You selected a context menu');
})

test('Digest Authentication', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Digest Authentication');
    const basiAuthPage: any = pom.getBasicAuthPage();
    await basiAuthPage.verifyPageHeader('Digest Auth');
    await basiAuthPage.verifyPageContent('Congratulations');
})

test('Disappearing Elements', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Disappearing Elements');
    const disappearingElementsPage: any = pom.getDisappearingElementsPage();
    await disappearingElementsPage.verifyPageHeaderLabel('Disappearing Elements');
    await disappearingElementsPage.verifyFixedLinks();
    await disappearingElementsPage.verifyDisappearingLink();
})

test('Drag and Drop', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Drag and Drop');
    const dragAndDropPage: any = pom.getDragAndDropPage();
    await dragAndDropPage.verifyPageHeader('Drag and Drop');
    await dragAndDropPage.performAndVerifyDragDrop();
})

test('Dropdown', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Dropdown');
    const dropdownPage: any = pom.getDropdownPage();
    await dropdownPage.verifyPageHeader('Dropdown');
    await dropdownPage.selectDropdown('1');
})

test('Dynamic Content', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Dynamic Content');
    const dynamicContentPage: any = pom.getDynamicContentPage();
    await dynamicContentPage.verifyPageHeader('Dynamic Content');
    await dynamicContentPage.checkDynamicContent();
    await dynamicContentPage.convertAndVerifyToStatic();
})

test('Dynamic Controls', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Dynamic Controls');
    const dynamicControlsPage: any = pom.getDynamicControlsPage();
    await dynamicControlsPage.verifyPageHeader('Dynamic Controls');
    await dynamicControlsPage.verifyDefaultState();
    await dynamicControlsPage.removeCheckbox();
    await dynamicControlsPage.reAddCheckBox();
    await dynamicControlsPage.enableTextBox();
    await dynamicControlsPage.reDisableTextbox();
})

test('Dynamic Loading', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Dynamic Loading');
    const dynamicLoadingPage: any = pom.getDynamicLoadingPage();
    await dynamicLoadingPage.verifyPageHeader('Dynamically Loaded Page Elements');
    await dynamicLoadingPage.goToDynamicHiddenElementPage();
    const dynamicHiddenElementPage: any = pom.getDynamicHiddenElementPage();
    await dynamicLoadingPage.verifyChildPageHeader('Example 1: Element on page that is hidden');
    await dynamicHiddenElementPage.verifyHiddenElementBeforeClick();
    await dynamicHiddenElementPage.verifyElementsAfterClick('Hello World!');
    await dynamicHiddenElementPage.goBackToBasePage();
    await dynamicLoadingPage.goToDynamicRenderedElementPage();
    const dynamicRenderedElementPage: any = pom.getDynamicRenderedElementPage();
    await dynamicLoadingPage.verifyChildPageHeader('Example 2: Element rendered after the fact');
    await dynamicRenderedElementPage.verifyUnattachedElementBeforeClick();
    await dynamicRenderedElementPage.verifyElementsAfterClick('Hello World!');
})

test('Entry Ad', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Entry Ad');
    const entryAdPage: any = pom.getEntryAdPage();
    await entryAdPage.verifyPageHeader('Entry Ad');
    await entryAdPage.verifyModalOnLoad('This is a modal window');
    await entryAdPage.verifyModalNonAppearanceOnClose();
    await entryAdPage.verifyModalReEnablement();
})

test('Exit Intent', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Exit Intent');
    const exitIntentPage: any = pom.getExitIntentPage();
    await exitIntentPage.verifyPageHeader('Exit Intent');
    await exitIntentPage.verifyModalAppearanceOnMouseExit('This is a modal window');
    await exitIntentPage.verifyModalDisablementOnClose();
})

test('File Download', async ({ pom, commonUtils }) => {
    const downloadFolder: string = './downloads/';
    await commonUtils.cleanFolder(downloadFolder);
    await commonUtils.clickHomePageLink('File Download');
    const fileDownloadPage: any = pom.getFileDownloadPage();
    await fileDownloadPage.verifyPageHeader('File Download');
    const filename: any = await commonUtils.getDownLoadFileName();
    await fileDownloadPage.downloadFile(downloadFolder, filename);
})

test('File Upload', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('File Upload');
    const fileUploadPage: any = pom.getFileUploadPage();
    await fileUploadPage.verifyPageHeader('File Uploader');
    await fileUploadPage.clickUploadWithoutFile();
    await fileUploadPage.goBackToFileUploadPage();
    await fileUploadPage.uploadFile('./uploadfilesample/', 'file_upload.txt');
})

test('Floating Menu', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Floating Menu');
    const floatingMenuPage: any = pom.getFloatingMenuPage();
    await floatingMenuPage.verifyPageHeader('Floating Menu');
    await floatingMenuPage.verifyFloatingMenuOnPageLoad();
    await floatingMenuPage.scrollToMiddleAndVerifyMenu();
    await floatingMenuPage.scrollToEndAndVerifyOfMenu();
})

test('Forgot Password', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Forgot Password');
    const forgotPasswordPage: any = pom.getForgotPasswordPage();
    await forgotPasswordPage.verifyPageHeader('Forgot Password');
    await forgotPasswordPage.verifyEnterEmailAndRetrievePassword('test.id@email.test')
})

test('Form Authentication', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Form Authentication');
    const formAuthenticationPage: any = pom.getFormAuthenticationPage();
    await formAuthenticationPage.verifyPageHeader('Login Page');
    await formAuthenticationPage.loginWithValidCredential('tomsmith', 'SuperSecretPassword!');
    const secureAreaPage: any = pom.getSecureAreaPage();
    await secureAreaPage.verifyLoginSuccess('Welcome to the Secure Area');
    await secureAreaPage.logoutFromSecureArea();
    await formAuthenticationPage.loginWithInvalidCredential('invalid', 'invalid')
})

test('Frames', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Frames');
    const framesBasePage: any = pom.getFramesBasePage();
    await framesBasePage.verifyPageHeader('Frames');
    await framesBasePage.goToNestedFramePage();
    const nestedFramesPage: any = pom.getNestedFramesPage();
    await nestedFramesPage.verifyFrameContents('LEFT', 'MIDDLE', 'RIGHT', 'BOTTOM');
    await nestedFramesPage.goBackToFramesBasePage();
    await framesBasePage.goToiFramePage();
    const iFramePage: any = pom.getIFramesPage();
    await iFramePage.verifyPageHeader('An iFrame containing the TinyMCE WYSIWYG Editor');
    await iFramePage.checkAndCloseNotification();
    await iFramePage.verifyiFrameTextContent('Your content goes here.');
})

test('Geolocation', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Geolocation');
    const geolocationPage: any = pom.getGeolocationPage();
    await geolocationPage.verifyPageHeader('Geolocation');
    await geolocationPage.verifyLocationCoordinates('40.7128', '-74.006');
})

test('Horizontal Slider', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Horizontal Slider');
    const horizontalSliderPage: any = pom.getHorizontalSliderPage();
    await horizontalSliderPage.verifyPageHeader('Horizontal Slider');
    await horizontalSliderPage.moveSliderWithMouse(3.5);
    await horizontalSliderPage.moveSliderWithMouse(1);
    await horizontalSliderPage.moveSliderWithKey(4);
    await horizontalSliderPage.moveSliderWithKey(2);
})

test('Hovers', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Hovers');
    const hoverPage: any = pom.getHoverPage();
    await hoverPage.verifyPageHeader('Hovers');
    await hoverPage.verifyDefaultAbsenceOfHoverDetails();
    await hoverPage.hoverOverImageAndVerifyText(1, 'name: user1');
    await hoverPage.hoverOverImageAndVerifyText(2, 'name: user2');
    await hoverPage.hoverOverImageAndVerifyText(3, 'name: user3');
})

test('Infinite Scroll', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Infinite Scroll');
    const infiniteScrollPage: any = pom.getInfiniteScrollPage();
    await infiniteScrollPage.verifyPageHeader('Infinite Scroll');
    await infiniteScrollPage.verifyInfiniteScroll(5);
})

test('Inputs', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Inputs');
    const inputsPage: any = pom.getInputsPage();
    await inputsPage.verifyPageHeader('Inputs');
    await inputsPage.verifyNumberEntry(108);
    await inputsPage.verifyNumberIncrementDecrement('Up',8);
    await inputsPage.verifyNumberIncrementDecrement('Down',10);
})

test('JQuery UI Menus', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('JQuery UI Menus');
    const jQueryUIMenusPage: any = pom.getJQueryUIMenusPage();
    await jQueryUIMenusPage.verifyPageHeader('JQueryUI - Menu');
    await jQueryUIMenusPage.verifyMenuItemStates();
    await jQueryUIMenusPage.verifyClickOnBackToJQueryUI();
    await jQueryUIMenusPage.verifyClickAndDownloadOptions('./downloads/');
})

test('JavaScript Alerts', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('JavaScript Alerts');
    const javaScriptAlertsPage: any = pom.getJavaScriptAlertsPage();
    await javaScriptAlertsPage.verifyPageHeader('JavaScript Alerts');
    await javaScriptAlertsPage.verifyJSAlert('You successfully clicked an alert');
    await javaScriptAlertsPage.verifyJSConfirm('Ok');
    await javaScriptAlertsPage.verifyJSConfirm('Cancel');
    await javaScriptAlertsPage.verifyJSPromptOkWithText('check');
    await javaScriptAlertsPage.verifyJSPromptCancel();
})

test('Key Presses', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Key Presses');
    const keyPressesPage: any = pom.getKeyPressesPage();
    await keyPressesPage.verifyPageHeader('Key Presses');
    await keyPressesPage.verifyKeyPresses('Control');
    await keyPressesPage.verifyKeyPresses('Shift');
    await keyPressesPage.verifyKeyPresses('Backspace');
})

test('Large & Deep DOM', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Large & Deep DOM');
    const largeAndDeepDOMPage: any = pom.getLargeAndDeepDOMPage();
    await largeAndDeepDOMPage.verifyPageHeader('Large & Deep DOM');
    await largeAndDeepDOMPage.verifyFirstAndLastElementText('1.1', '50.3');
    await largeAndDeepDOMPage.verifyTextWithTierAndItem('20', '2', '20.2');
    await largeAndDeepDOMPage.verifyTableRowsAndColumns(50,50);
    await largeAndDeepDOMPage.verifyTableCellText('33','32','33.32');
})

test('Multiple Windows', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Multiple Windows');
    const multipleWindowsBasePage: any = pom.getMultipleWindowsBasePage();
    await multipleWindowsBasePage.verifyPageHeader('Opening a new window');
    await multipleWindowsBasePage.verifyNewWindow();
})

test('Nested Frames', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Nested Frames');
    const nestedFramesPage = pom.getNestedFramesPage();
    await nestedFramesPage.verifyFrameContents('LEFT', 'MIDDLE', 'RIGHT', 'BOTTOM');
    await nestedFramesPage.goBackToFramesBasePage();
})

test('Notification Messages', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Notification Messages');
    const notificationMessagesPage: any = pom.getNotificationMessagesPage();
    await notificationMessagesPage.verifyPageHeader('Notification Message');
    await notificationMessagesPage.verifyNotificationFlashMessage('Action successful');
    await notificationMessagesPage.verifyNotificationFlashMessage('Action unsuccesful, please try again');
})

test('Redirect Link', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Redirect Link');
    const redirectLinkPage: any = pom.getRedirectLinkPage();
    await redirectLinkPage.verifyPageHeader('Redirection');
    await redirectLinkPage.verifyRedirection();
})

test('Secure File Download', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Secure File Download');
    const downloadFolder: string = './downloads/';
    await commonUtils.cleanFolder(downloadFolder);
    const fileDownloadPage: any = pom.getFileDownloadPage();
    await fileDownloadPage.verifyPageHeader('Secure File Downloader');
    const filename: any = await commonUtils.getDownLoadFileName();
    await fileDownloadPage.downloadFile(downloadFolder, filename);
})

test('Shadow DOM', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Shadow DOM');
    const shadowDOMPage: any = pom.getShadowDOMPage();
    await shadowDOMPage.verifyPageHeader('Simple template');
    await shadowDOMPage.verifyTextinFirstElement('Let\'s have some different text!');
    await shadowDOMPage.verifyTextinSecondElement('Let\'s have some different text!', 'In a list!')
})

test('Shifting Content', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Shifting Content');
    const shiftingContentBasePage: any = pom.getShiftingContentBasePage();
    await shiftingContentBasePage.verifyPageHeader('Shifting Content');
    await shiftingContentBasePage.goToShiftingListContent();
    const shiftingListPage: any = pom.getShiftingListPage();
    await shiftingListPage.verifyListItemPresence('Important Information You\'re Looking For');
})

test('Slow Resources', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Slow Resources');
    const slowResourcesPage: any = pom.getSlowResourcesPage();
    await slowResourcesPage.verifyPageHeader('Slow Resources');
    await slowResourcesPage.verifyResourceResponseTime();
})

test('Sortable Data Tables', async ({ pom, commonUtils }) => {
    await commonUtils.clickHomePageLink('Sortable Data Tables');
    const sortableDataTablesPage: any = pom.getSortableDataTablesPage();
    await sortableDataTablesPage.verifyPageHeader('Data Tables');
})