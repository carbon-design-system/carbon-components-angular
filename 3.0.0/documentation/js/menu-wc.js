'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">carbon-components-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccordionModule.html" data-type="entity-link">AccordionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccordionModule-c136e8caa27e0f82845d38efc7d05aba"' : 'data-target="#xs-components-links-module-AccordionModule-c136e8caa27e0f82845d38efc7d05aba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccordionModule-c136e8caa27e0f82845d38efc7d05aba"' :
                                            'id="xs-components-links-module-AccordionModule-c136e8caa27e0f82845d38efc7d05aba"' }>
                                            <li class="link">
                                                <a href="components/Accordion.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Accordion</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccordionItem.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionItem</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BreadcrumbModule.html" data-type="entity-link">BreadcrumbModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BreadcrumbModule-6e7d095d71b5240afc7e1e56074ade57"' : 'data-target="#xs-components-links-module-BreadcrumbModule-6e7d095d71b5240afc7e1e56074ade57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BreadcrumbModule-6e7d095d71b5240afc7e1e56074ade57"' :
                                            'id="xs-components-links-module-BreadcrumbModule-6e7d095d71b5240afc7e1e56074ade57"' }>
                                            <li class="link">
                                                <a href="components/Breadcrumb.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Breadcrumb</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonModule.html" data-type="entity-link">ButtonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ButtonModule-07f2c699bc196612a7117b4ee4aeecee"' : 'data-target="#xs-directives-links-module-ButtonModule-07f2c699bc196612a7117b4ee4aeecee"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ButtonModule-07f2c699bc196612a7117b4ee4aeecee"' :
                                        'id="xs-directives-links-module-ButtonModule-07f2c699bc196612a7117b4ee4aeecee"' }>
                                        <li class="link">
                                            <a href="directives/Button.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">Button</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckboxModule.html" data-type="entity-link">CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckboxModule-c36d85633c23ec3b5179f1965bfc99d6"' : 'data-target="#xs-components-links-module-CheckboxModule-c36d85633c23ec3b5179f1965bfc99d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckboxModule-c36d85633c23ec3b5179f1965bfc99d6"' :
                                            'id="xs-components-links-module-CheckboxModule-c36d85633c23ec3b5179f1965bfc99d6"' }>
                                            <li class="link">
                                                <a href="components/Checkbox.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Checkbox</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodeSnippetModule.html" data-type="entity-link">CodeSnippetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CodeSnippetModule-6fd901fa5a22ab15679ff22c643b287f"' : 'data-target="#xs-components-links-module-CodeSnippetModule-6fd901fa5a22ab15679ff22c643b287f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CodeSnippetModule-6fd901fa5a22ab15679ff22c643b287f"' :
                                            'id="xs-components-links-module-CodeSnippetModule-6fd901fa5a22ab15679ff22c643b287f"' }>
                                            <li class="link">
                                                <a href="components/CodeSnippet.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeSnippet</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComboBoxModule.html" data-type="entity-link">ComboBoxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComboBoxModule-d5c398f48d314d20badd15f5845936bc"' : 'data-target="#xs-components-links-module-ComboBoxModule-d5c398f48d314d20badd15f5845936bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComboBoxModule-d5c398f48d314d20badd15f5845936bc"' :
                                            'id="xs-components-links-module-ComboBoxModule-d5c398f48d314d20badd15f5845936bc"' }>
                                            <li class="link">
                                                <a href="components/ComboBox.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComboBox</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentSwitcherModule.html" data-type="entity-link">ContentSwitcherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' : 'data-target="#xs-components-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' :
                                            'id="xs-components-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' }>
                                            <li class="link">
                                                <a href="components/ContentSwitcher.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentSwitcher</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' : 'data-target="#xs-directives-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' :
                                        'id="xs-directives-links-module-ContentSwitcherModule-6c842c94345cef3671c78253da7d3f40"' }>
                                        <li class="link">
                                            <a href="directives/ContentSwitcherOption.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentSwitcherOption</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatePickerInputModule.html" data-type="entity-link">DatePickerInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatePickerInputModule-904e4bc3fc1b0434f34af2efb2954ee2"' : 'data-target="#xs-components-links-module-DatePickerInputModule-904e4bc3fc1b0434f34af2efb2954ee2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatePickerInputModule-904e4bc3fc1b0434f34af2efb2954ee2"' :
                                            'id="xs-components-links-module-DatePickerInputModule-904e4bc3fc1b0434f34af2efb2954ee2"' }>
                                            <li class="link">
                                                <a href="components/DatePickerInput.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatePickerInput</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatePickerModule.html" data-type="entity-link">DatePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatePickerModule-3e4566a59b39920b76d2a7aa916df940"' : 'data-target="#xs-components-links-module-DatePickerModule-3e4566a59b39920b76d2a7aa916df940"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatePickerModule-3e4566a59b39920b76d2a7aa916df940"' :
                                            'id="xs-components-links-module-DatePickerModule-3e4566a59b39920b76d2a7aa916df940"' }>
                                            <li class="link">
                                                <a href="components/DatePicker.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatePicker</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DialogModule.html" data-type="entity-link">DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' : 'data-target="#xs-components-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' :
                                            'id="xs-components-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                            <li class="link">
                                                <a href="components/Dialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogPlaceholder.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogPlaceholder</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverflowMenu.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverflowMenu</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverflowMenuOption.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverflowMenuOption</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverflowMenuPane.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverflowMenuPane</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tooltip.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tooltip</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipDefinition.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipDefinition</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipIcon.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipIcon</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' : 'data-target="#xs-directives-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' :
                                        'id="xs-directives-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                        <li class="link">
                                            <a href="directives/DialogDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/EllipsisTooltip.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">EllipsisTooltip</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverflowMenuDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverflowMenuDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TooltipDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' : 'data-target="#xs-injectables-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' :
                                        'id="xs-injectables-links-module-DialogModule-7bf055ce5dea4031c029006f0d145f96"' }>
                                        <li class="link">
                                            <a href="injectables/DialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DropdownModule.html" data-type="entity-link">DropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' : 'data-target="#xs-components-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' :
                                            'id="xs-components-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                            <li class="link">
                                                <a href="components/Dropdown.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dropdown</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DropdownList.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownList</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' : 'data-target="#xs-directives-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' :
                                        'id="xs-directives-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                        <li class="link">
                                            <a href="directives/ScrollableList.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollableList</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' : 'data-target="#xs-injectables-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' :
                                        'id="xs-injectables-links-module-DropdownModule-09ff006bcba06b27dff5d7176d3c2739"' }>
                                        <li class="link">
                                            <a href="injectables/DropdownService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DropdownService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperimentalModule.html" data-type="entity-link">ExperimentalModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExperimentalModule-77b17fb64de10ac757d42abd06a4fcd6"' : 'data-target="#xs-injectables-links-module-ExperimentalModule-77b17fb64de10ac757d42abd06a4fcd6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExperimentalModule-77b17fb64de10ac757d42abd06a4fcd6"' :
                                        'id="xs-injectables-links-module-ExperimentalModule-77b17fb64de10ac757d42abd06a4fcd6"' }>
                                        <li class="link">
                                            <a href="injectables/ExperimentalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ExperimentalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploaderModule.html" data-type="entity-link">FileUploaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FileUploaderModule-570c6f844e13896095b296a902cf9844"' : 'data-target="#xs-components-links-module-FileUploaderModule-570c6f844e13896095b296a902cf9844"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FileUploaderModule-570c6f844e13896095b296a902cf9844"' :
                                            'id="xs-components-links-module-FileUploaderModule-570c6f844e13896095b296a902cf9844"' }>
                                            <li class="link">
                                                <a href="components/File.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">File</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploader.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploader</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GridModule.html" data-type="entity-link">GridModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-GridModule-4928c13344c1de37190d80a4ebeda85a"' : 'data-target="#xs-directives-links-module-GridModule-4928c13344c1de37190d80a4ebeda85a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-GridModule-4928c13344c1de37190d80a4ebeda85a"' :
                                        'id="xs-directives-links-module-GridModule-4928c13344c1de37190d80a4ebeda85a"' }>
                                        <li class="link">
                                            <a href="directives/ColumnDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColumnDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RowDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RowDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/I18nModule.html" data-type="entity-link">I18nModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' : 'data-target="#xs-injectables-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' :
                                        'id="xs-injectables-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' }>
                                        <li class="link">
                                            <a href="injectables/I18n.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>I18n</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' : 'data-target="#xs-pipes-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' :
                                            'id="xs-pipes-links-module-I18nModule-4974549e44d2f1f710b5b3e2b280ada2"' }>
                                            <li class="link">
                                                <a href="pipes/ReplacePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReplacePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InlineLoadingModule.html" data-type="entity-link">InlineLoadingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InlineLoadingModule-230ade384de4c3d1532d5753cd6fd812"' : 'data-target="#xs-components-links-module-InlineLoadingModule-230ade384de4c3d1532d5753cd6fd812"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InlineLoadingModule-230ade384de4c3d1532d5753cd6fd812"' :
                                            'id="xs-components-links-module-InlineLoadingModule-230ade384de4c3d1532d5753cd6fd812"' }>
                                            <li class="link">
                                                <a href="components/InlineLoading.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InlineLoading</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputModule.html" data-type="entity-link">InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' : 'data-target="#xs-components-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' :
                                            'id="xs-components-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' }>
                                            <li class="link">
                                                <a href="components/Label.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Label</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' : 'data-target="#xs-directives-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' :
                                        'id="xs-directives-links-module-InputModule-9aff0dfb0d1443645b34feb2036ceadd"' }>
                                        <li class="link">
                                            <a href="directives/TextArea.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextArea</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TextInput.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextInput</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LinkModule.html" data-type="entity-link">LinkModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LinkModule-9a277dd395b38a9f893b96f987f40c23"' : 'data-target="#xs-directives-links-module-LinkModule-9a277dd395b38a9f893b96f987f40c23"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LinkModule-9a277dd395b38a9f893b96f987f40c23"' :
                                        'id="xs-directives-links-module-LinkModule-9a277dd395b38a9f893b96f987f40c23"' }>
                                        <li class="link">
                                            <a href="directives/Link.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">Link</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link">ListModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ListModule-3f443d86744ed48488e8cf1f343a85a7"' : 'data-target="#xs-directives-links-module-ListModule-3f443d86744ed48488e8cf1f343a85a7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ListModule-3f443d86744ed48488e8cf1f343a85a7"' :
                                        'id="xs-directives-links-module-ListModule-3f443d86744ed48488e8cf1f343a85a7"' }>
                                        <li class="link">
                                            <a href="directives/List.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">List</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ListItemDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListItemDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoadingModule.html" data-type="entity-link">LoadingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoadingModule-2f8a7df4b2e1dd2a973cae724acc87d9"' : 'data-target="#xs-components-links-module-LoadingModule-2f8a7df4b2e1dd2a973cae724acc87d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoadingModule-2f8a7df4b2e1dd2a973cae724acc87d9"' :
                                            'id="xs-components-links-module-LoadingModule-2f8a7df4b2e1dd2a973cae724acc87d9"' }>
                                            <li class="link">
                                                <a href="components/Loading.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Loading</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' : 'data-target="#xs-components-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' :
                                            'id="xs-components-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' }>
                                            <li class="link">
                                                <a href="components/AlertModal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertModal</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Modal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Modal</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFooter.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFooter</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalHeader.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalHeader</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalPlaceholder.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalPlaceholder</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Overlay.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Overlay</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' : 'data-target="#xs-injectables-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' :
                                        'id="xs-injectables-links-module-ModalModule-4d3443a4c2d242e8474a7309f85c706b"' }>
                                        <li class="link">
                                            <a href="injectables/ModalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ModalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NFormsModule.html" data-type="entity-link">NFormsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link">NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' : 'data-target="#xs-components-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' :
                                            'id="xs-components-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' }>
                                            <li class="link">
                                                <a href="components/Notification.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Notification</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Toast.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Toast</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' : 'data-target="#xs-injectables-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' :
                                        'id="xs-injectables-links-module-NotificationModule-05b656212b130df9117ec11e70686099"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationDisplayService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotificationDisplayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NumberModule.html" data-type="entity-link">NumberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NumberModule-c8cf79598e0842513da597947681c53d"' : 'data-target="#xs-components-links-module-NumberModule-c8cf79598e0842513da597947681c53d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NumberModule-c8cf79598e0842513da597947681c53d"' :
                                            'id="xs-components-links-module-NumberModule-c8cf79598e0842513da597947681c53d"' }>
                                            <li class="link">
                                                <a href="components/Number.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Number</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link">PaginationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaginationModule-c55705505b68204cb3ef1a55dfde6ece"' : 'data-target="#xs-components-links-module-PaginationModule-c55705505b68204cb3ef1a55dfde6ece"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaginationModule-c55705505b68204cb3ef1a55dfde6ece"' :
                                            'id="xs-components-links-module-PaginationModule-c55705505b68204cb3ef1a55dfde6ece"' }>
                                            <li class="link">
                                                <a href="components/Pagination.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Pagination</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlaceholderModule.html" data-type="entity-link">PlaceholderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlaceholderModule-29a3305f4a7465aede73cfc241755474"' : 'data-target="#xs-components-links-module-PlaceholderModule-29a3305f4a7465aede73cfc241755474"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlaceholderModule-29a3305f4a7465aede73cfc241755474"' :
                                            'id="xs-components-links-module-PlaceholderModule-29a3305f4a7465aede73cfc241755474"' }>
                                            <li class="link">
                                                <a href="components/Placeholder.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Placeholder</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProgressIndicatorModule.html" data-type="entity-link">ProgressIndicatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProgressIndicatorModule-249903de74ad770b61a7a8c7469b1070"' : 'data-target="#xs-components-links-module-ProgressIndicatorModule-249903de74ad770b61a7a8c7469b1070"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProgressIndicatorModule-249903de74ad770b61a7a8c7469b1070"' :
                                            'id="xs-components-links-module-ProgressIndicatorModule-249903de74ad770b61a7a8c7469b1070"' }>
                                            <li class="link">
                                                <a href="components/ProgressIndicator.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressIndicator</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RadioModule.html" data-type="entity-link">RadioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RadioModule-6d822410aa25836fa0a4da076a147c94"' : 'data-target="#xs-components-links-module-RadioModule-6d822410aa25836fa0a4da076a147c94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioModule-6d822410aa25836fa0a4da076a147c94"' :
                                            'id="xs-components-links-module-RadioModule-6d822410aa25836fa0a4da076a147c94"' }>
                                            <li class="link">
                                                <a href="components/Radio.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Radio</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioGroup.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadioGroup</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SampleModule.html" data-type="entity-link">SampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SampleModule-2b9dd99a98cd465bf9917f307783a2a2"' : 'data-target="#xs-components-links-module-SampleModule-2b9dd99a98cd465bf9917f307783a2a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SampleModule-2b9dd99a98cd465bf9917f307783a2a2"' :
                                            'id="xs-components-links-module-SampleModule-2b9dd99a98cd465bf9917f307783a2a2"' }>
                                            <li class="link">
                                                <a href="components/Sample.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Sample</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SampleSub.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SampleSub</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link">SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-7f95a9e8cb093737e948d5fc9470d3d7"' : 'data-target="#xs-components-links-module-SearchModule-7f95a9e8cb093737e948d5fc9470d3d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-7f95a9e8cb093737e948d5fc9470d3d7"' :
                                            'id="xs-components-links-module-SearchModule-7f95a9e8cb093737e948d5fc9470d3d7"' }>
                                            <li class="link">
                                                <a href="components/Search.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Search</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectModule.html" data-type="entity-link">SelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' : 'data-target="#xs-components-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' :
                                            'id="xs-components-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' }>
                                            <li class="link">
                                                <a href="components/Select.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Select</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' : 'data-target="#xs-directives-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' :
                                        'id="xs-directives-links-module-SelectModule-9d04006252c3f63be6b251f42dc0c459"' }>
                                        <li class="link">
                                            <a href="directives/OptGroup.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">OptGroup</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/Option.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">Option</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderModule.html" data-type="entity-link">SliderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderModule-2dfa3072672fe7ef15532912237ab25f"' : 'data-target="#xs-components-links-module-SliderModule-2dfa3072672fe7ef15532912237ab25f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderModule-2dfa3072672fe7ef15532912237ab25f"' :
                                            'id="xs-components-links-module-SliderModule-2dfa3072672fe7ef15532912237ab25f"' }>
                                            <li class="link">
                                                <a href="components/Slider.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Slider</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StructuredListModule.html" data-type="entity-link">StructuredListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StructuredListModule-5932c1eddc3cc45c1c71ccae1bc08a3f"' : 'data-target="#xs-components-links-module-StructuredListModule-5932c1eddc3cc45c1c71ccae1bc08a3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StructuredListModule-5932c1eddc3cc45c1c71ccae1bc08a3f"' :
                                            'id="xs-components-links-module-StructuredListModule-5932c1eddc3cc45c1c71ccae1bc08a3f"' }>
                                            <li class="link">
                                                <a href="components/ListColumn.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListColumn</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListHeader.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListHeader</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListRow.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListRow</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StructuredList.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StructuredList</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link">TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' : 'data-target="#xs-components-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' :
                                            'id="xs-components-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' }>
                                            <li class="link">
                                                <a href="components/Table.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Table</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableToolbar.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableToolbar</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableToolbarActions.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableToolbarActions</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableToolbarContent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableToolbarContent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableToolbarSearch.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableToolbarSearch</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' : 'data-target="#xs-directives-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' :
                                        'id="xs-directives-links-module-TableModule-526c968dfcb3379e05bdc54c0d619402"' }>
                                        <li class="link">
                                            <a href="directives/DataGridFocus.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataGridFocus</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ExpandedRowHover.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpandedRowHover</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsModule.html" data-type="entity-link">TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsModule-5aa2cf4669e04339321b082fd267b053"' : 'data-target="#xs-components-links-module-TabsModule-5aa2cf4669e04339321b082fd267b053"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsModule-5aa2cf4669e04339321b082fd267b053"' :
                                            'id="xs-components-links-module-TabsModule-5aa2cf4669e04339321b082fd267b053"' }>
                                            <li class="link">
                                                <a href="components/Tab.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabHeaders.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabHeaders</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tabs.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tabs</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link">TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TagModule-0431f404fa590716b802188031e4d962"' : 'data-target="#xs-components-links-module-TagModule-0431f404fa590716b802188031e4d962"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TagModule-0431f404fa590716b802188031e4d962"' :
                                            'id="xs-components-links-module-TagModule-0431f404fa590716b802188031e4d962"' }>
                                            <li class="link">
                                                <a href="components/Tag.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tag</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagFilter.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagFilter</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TilesModule.html" data-type="entity-link">TilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TilesModule-dbc62c08b968118bcc781380e5c17706"' : 'data-target="#xs-components-links-module-TilesModule-dbc62c08b968118bcc781380e5c17706"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TilesModule-dbc62c08b968118bcc781380e5c17706"' :
                                            'id="xs-components-links-module-TilesModule-dbc62c08b968118bcc781380e5c17706"' }>
                                            <li class="link">
                                                <a href="components/ClickableTile.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickableTile</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpandableTile.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpandableTile</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectionTile.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectionTile</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tile.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tile</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TileGroup.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TileGroup</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToggleModule.html" data-type="entity-link">ToggleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToggleModule-e672a87f4bb509cc3f6a5003f557c2a6"' : 'data-target="#xs-components-links-module-ToggleModule-e672a87f4bb509cc3f6a5003f557c2a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToggleModule-e672a87f4bb509cc3f6a5003f557c2a6"' :
                                            'id="xs-components-links-module-ToggleModule-e672a87f4bb509cc3f6a5003f557c2a6"' }>
                                            <li class="link">
                                                <a href="components/Toggle.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Toggle</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UIShellModule.html" data-type="entity-link">UIShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UIShellModule-b4f6b977784f9521e940ac7ea3011237"' : 'data-target="#xs-components-links-module-UIShellModule-b4f6b977784f9521e940ac7ea3011237"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UIShellModule-b4f6b977784f9521e940ac7ea3011237"' :
                                            'id="xs-components-links-module-UIShellModule-b4f6b977784f9521e940ac7ea3011237"' }>
                                            <li class="link">
                                                <a href="components/Hamburger.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Hamburger</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Header.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Header</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderAction.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderAction</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderGlobal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderGlobal</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderItem.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderItem</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderMenu.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderMenu</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNavigation.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderNavigation</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNav.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNav</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavHeader.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNavHeader</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavItem.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNavItem</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavMenu.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideNavMenu</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractDropdownView.html" data-type="entity-link">AbstractDropdownView</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModal.html" data-type="entity-link">BaseModal</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckboxChange.html" data-type="entity-link">CheckboxChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModalContainer.html" data-type="entity-link">ModalContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberChange.html" data-type="entity-link">NumberChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationModel.html" data-type="entity-link">PaginationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadioChange.html" data-type="entity-link">RadioChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/SampleBase.html" data-type="entity-link">SampleBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchChange.html" data-type="entity-link">SearchChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableHeaderItem.html" data-type="entity-link">TableHeaderItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableItem.html" data-type="entity-link">TableItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableModel.html" data-type="entity-link">TableModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToggleChange.html" data-type="entity-link">ToggleChange</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PlaceholderService.html" data-type="entity-link">PlaceholderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AbsolutePosition.html" data-type="entity-link">AbsolutePosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertModalData.html" data-type="entity-link">AlertModalData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbItem.html" data-type="entity-link">BreadcrumbItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogConfig.html" data-type="entity-link">DialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Experiment.html" data-type="entity-link">Experiment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileItem.html" data-type="entity-link">FileItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListItem.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalButton.html" data-type="entity-link">ModalButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationContent.html" data-type="entity-link">NotificationContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SampleInterface.html" data-type="entity-link">SampleInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TileSelection.html" data-type="entity-link">TileSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToastContent.html" data-type="entity-link">ToastContent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});