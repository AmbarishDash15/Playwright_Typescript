import { type Page } from '@playwright/test';
import { HomePage } from "./HomePage";
import { ABTextPage } from './ABTextPage';
import { AddRemoveElementsPage } from './AddRemoveElementsPage';
import { BasicAuthPage } from './BasicAuthPage';
import { BrokenImagesPage } from './BrokenImagesPage';
import { ChallengingDOMPage } from './ChallengingDOMPage';
import { CheckboxesPage } from './CheckboxesPage';
import { ContextMenuPage } from './ContextMenuPage';
import { DigestAuthenticationPage } from './DigestAuthenticationPage';
import { DisappearingElementsPage } from './DisapperingElementsPage';
import { DragAndDropPage } from './DragAndDropPage';
import { DropdownPage } from './DropdownPage';
import { DynamicContentPage } from './DynamicContentPage';
import { DynamicControlsPage } from './DynamicControlsPage';
import { DynamicLoadingPage } from './DynamicLoadingPage';
import { DynamicHiddenElementPage } from './DynamicHiddenElementPage';
import { DynamicRenderedElementPage } from './DynamicRenderedElementPage';
import { EntryAdPage } from './EntryAdPage';
import { ExitIntentPage } from './ExitIntentPage';
import { FileDownloadPage } from './FileDownloadPage';
import { FileUploadPage } from './FileUploadPage';
import { FloatingMenuPage } from './FloatingMenuPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { FormAuthenticationPage } from './FormAuthenticationPage';
import { SecureAreaPage } from './SecureAreaPage';
import { FramesBasePage } from './FramesBasePage';
import { NestedFramesPage } from './NestedFramesPage';
import { IFramesPage } from './IFramesPage';
import { GeolocationPage } from './GeolocationPage';
import { HorizontalSliderPage } from './HorizontalSliderPage';
import { HoversPage } from './HoversPage';
import { InfiniteScrollPage } from './InfiniteScrollPage';
import { InputsPage } from './InputsPage';
import { JQueryUIMenusPage } from './JQueryUIMenusPage';
import { JavaScriptAlertsPage } from './JavaScriptAlertsPage';
import { KeyPressesPage } from './KeyPressesPage';
import { LargeAndDeepDOMPage } from './LargeAndDeepDOMPage';
import { MultipleWindowsBasePage } from './MultipleWindowsBasePage';
import { NotificationMessagesPage } from './NotificationMessagesPage';
import { RedirectLinkPage } from './RedirectLinkPage';
import { ShadowDOMPage } from './ShadowDOMPage';
import { ShiftingContentBasePage } from './ShiftingContentBasePage';
import { ShiftingListPage } from './ShiftingListPage';
import { SlowResourcesPage } from './SlowResourcesPage';
import { SortableDataTablesPage } from './SortableDataTablesPage';

export class PageObjectManager {
    readonly page: Page;
    private homePage!: HomePage;
    private abTextPage!: ABTextPage;
    private addRemoveElementsPage!: AddRemoveElementsPage;
    private basicAuthPage!: BasicAuthPage;
    private brokenImagesPage!: BrokenImagesPage;
    private challengingDOMPage!: ChallengingDOMPage;
    private checkboxesPage!: CheckboxesPage;
    private contextMenuPage!: ContextMenuPage;
    private digestAuthenticationPage!: DigestAuthenticationPage;
    private disappearingElementsPage!: DisappearingElementsPage;
    private dragAndDropPage!: DragAndDropPage;
    private dropdownPage!: DropdownPage;
    private dynamicContentPage!: DynamicContentPage;
    private dynamicControlsPage!: DynamicControlsPage;
    private dynamicLoadingPage!: DynamicLoadingPage;
    private dynamicHiddenElementPage!: DynamicHiddenElementPage;
    private dynamicRenderedElementPage!: DynamicRenderedElementPage;
    private entryADPage!: EntryAdPage;
    private exitIntentPage!: ExitIntentPage;
    private fileDownloadPage!: FileDownloadPage;
    private fileUploadPage!: FileUploadPage;
    private floatingMenuPage!: FloatingMenuPage;
    private forgotPasswordPage!: ForgotPasswordPage;
    private formAuthenticationPage!: FormAuthenticationPage;
    private secureAreaPage!: SecureAreaPage;
    private framesBasePage!: FramesBasePage;
    private nestedFramesPage!: NestedFramesPage;
    private iFramesPage!: IFramesPage;
    private geolocationPage!: GeolocationPage;
    private horizontalSliderPage!: HorizontalSliderPage;
    private hoverPage!: HoversPage;
    private infiniteScrollPage!: InfiniteScrollPage;
    private inputsPage!: InputsPage;
    private jQueryUIMenusPage!: JQueryUIMenusPage;
    private javaScriptAlertsPage!: JavaScriptAlertsPage;
    private keyPressesPage!: KeyPressesPage;
    private largeAndDeepDOMPage!: LargeAndDeepDOMPage;
    private multipleWindowsBasePage!: MultipleWindowsBasePage;
    private notificationMessagesPage!: NotificationMessagesPage;
    private redirectLinkPage!: RedirectLinkPage;
    private shadowDOMPage!: ShadowDOMPage;
    private shiftingContentBasePage!: ShiftingContentBasePage;
    private shiftingListPage!: ShiftingListPage;
    private slowResourcesPage!: SlowResourcesPage;
    private sortableDataTablesPage!: SortableDataTablesPage;
    constructor(page: Page) {
        this.page = page;
    }
    getHomePage() {
        return this.homePage ?? (this.homePage = new HomePage(this.page));
    }
    getABTextPage() {
        return this.abTextPage ?? (this.abTextPage = new ABTextPage(this.page));
    }
    getAddRemoveElementsPage() {
        return this.addRemoveElementsPage ?? (this.addRemoveElementsPage = new AddRemoveElementsPage(this.page));
    }
    getBasicAuthPage() {
        return this.basicAuthPage ?? (this.basicAuthPage = new BasicAuthPage(this.page));
    }
    getBrokenImagesPage() {
        return this.brokenImagesPage ?? (this.brokenImagesPage = new BrokenImagesPage(this.page));
    }
    getChallengingDOMPage() {
        return this.challengingDOMPage ?? (this.challengingDOMPage = new ChallengingDOMPage(this.page));
    }
    getCheckboxesPage() {
        return this.checkboxesPage ?? (this.checkboxesPage = new CheckboxesPage(this.page));
    }
    getContextMenuPage() {
        return this.contextMenuPage ?? (this.contextMenuPage = new ContextMenuPage(this.page));
    }
    getDigestAuthenticationPage() {
        return this.digestAuthenticationPage ?? (this.digestAuthenticationPage = new DigestAuthenticationPage(this.page));
    }
    getDisappearingElementsPage() {
        return this.disappearingElementsPage ?? (this.disappearingElementsPage = new DisappearingElementsPage(this.page));
    }
    getDragAndDropPage() {
        return this.dragAndDropPage ?? (this.dragAndDropPage = new DragAndDropPage(this.page));
    }
    getDropdownPage() {
        return this.dropdownPage ?? (this.dropdownPage = new DropdownPage(this.page));
    }
    getDynamicContentPage() {
        return this.dynamicContentPage ?? (this.dynamicContentPage = new DynamicContentPage(this.page));
    }
    getDynamicControlsPage() {
        return this.dynamicControlsPage ?? (this.dynamicControlsPage = new DynamicControlsPage(this.page));
    }
    getDynamicLoadingPage() {
        return this.dynamicLoadingPage ?? (this.dynamicLoadingPage = new DynamicLoadingPage(this.page));
    }
    getDynamicHiddenElementPage() {
        return this.dynamicHiddenElementPage ?? (this.dynamicHiddenElementPage = new DynamicHiddenElementPage (this.page));
    }
    getDynamicRenderedElementPage() {
        return this.dynamicRenderedElementPage ?? (this.dynamicRenderedElementPage = new DynamicRenderedElementPage(this.page));
    }
    getEntryAdPage() {
        return this.entryADPage ?? (this.entryADPage = new EntryAdPage(this.page));
    }
    getExitIntentPage() {
        return this.exitIntentPage ?? (this.exitIntentPage = new ExitIntentPage(this.page));
    }
    getFileDownloadPage() {
        return this.fileDownloadPage ?? (this.fileDownloadPage = new FileDownloadPage(this.page));
    }
    getFileUploadPage() {
        return this.fileUploadPage ?? (this.fileUploadPage = new FileUploadPage(this.page));
    }
    getFloatingMenuPage() {
        return this.floatingMenuPage ?? (this.floatingMenuPage = new FloatingMenuPage(this.page));
    }
    getForgotPasswordPage() {
        return this.forgotPasswordPage ?? (this.forgotPasswordPage = new ForgotPasswordPage(this.page));
    }
    getFormAuthenticationPage() {
        return this.formAuthenticationPage ?? (this.formAuthenticationPage = new FormAuthenticationPage(this.page));
    }
    getSecureAreaPage() {
        return this.secureAreaPage ?? (this.secureAreaPage = new SecureAreaPage(this.page));
    }
    getFramesBasePage() {
        return this.framesBasePage ?? (this.framesBasePage = new FramesBasePage(this.page));
    }
    getNestedFramesPage() {
        return this.nestedFramesPage ?? (this.nestedFramesPage = new NestedFramesPage(this.page));
    }
    getIFramesPage() {
        return this.iFramesPage ?? (this.iFramesPage = new IFramesPage(this.page));
    }
    getGeolocationPage() {
        return this.geolocationPage ?? (this.geolocationPage = new GeolocationPage(this.page));
    }
    getHorizontalSliderPage() {
        return this.horizontalSliderPage ?? (this.horizontalSliderPage = new HorizontalSliderPage(this.page));
    }
    getHoverPage() {
        return this.hoverPage ?? (this.hoverPage = new HoversPage(this.page));
    }
    getInfiniteScrollPage() {
        return this.infiniteScrollPage ?? (this.infiniteScrollPage = new InfiniteScrollPage(this.page));
    }
    getInputsPage() {
        return this.inputsPage ?? (this.inputsPage = new InputsPage(this.page));
    }
    getJQueryUIMenusPage() {
        return this.jQueryUIMenusPage ?? (this.jQueryUIMenusPage = new JQueryUIMenusPage(this.page));
    }
    getJavaScriptAlertsPage() {
        return this.javaScriptAlertsPage ?? (this.javaScriptAlertsPage = new JavaScriptAlertsPage(this.page));
    }
    getKeyPressesPage() {
        return this.keyPressesPage ?? (this.keyPressesPage = new KeyPressesPage(this.page));
    }
    getLargeAndDeepDOMPage() {
        return this.largeAndDeepDOMPage ?? (this.largeAndDeepDOMPage = new LargeAndDeepDOMPage(this.page));
    }
    getMultipleWindowsBasePage() {
        return this.multipleWindowsBasePage ?? (this.multipleWindowsBasePage = new MultipleWindowsBasePage(this.page));
    }
    getNotificationMessagesPage() {
        return this.notificationMessagesPage ?? (this.notificationMessagesPage = new NotificationMessagesPage(this.page));
    }
    getRedirectLinkPage() {
        return this.redirectLinkPage ?? (this.redirectLinkPage = new RedirectLinkPage(this.page));
    }
    getShadowDOMPage() {
        return this.shadowDOMPage ?? (this.shadowDOMPage = new ShadowDOMPage(this.page));
    }
    getShiftingContentBasePage() {
        return this.shiftingContentBasePage ?? (this.shiftingContentBasePage = new ShiftingContentBasePage(this.page));
    }
    getShiftingListPage() {
        return this.shiftingListPage ?? (this.shiftingListPage = new ShiftingListPage(this.page));
    }
    getSlowResourcesPage() {
        return this.slowResourcesPage ?? (this.slowResourcesPage = new SlowResourcesPage(this.page));
    }
    getSortableDataTablesPage() {
        return this.sortableDataTablesPage ?? (this.sortableDataTablesPage = new SortableDataTablesPage(this.page));
    }
}