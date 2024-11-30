"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[2722],{"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root,xmlns="http://www.w3.org/2000/svg";svg.setAttribute("xmlns",xmlns);const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString(),fill:icon.attrs.fill}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElementNS(xmlns,"title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/folder/16.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js"),_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/@carbon/icons/es/view/16.js"),_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@carbon/icons/es/view--off/16.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_55__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_55__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__.Z,_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_56__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_55__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_57__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")},"./src/context-menu/context-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>context_menu_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icon=__webpack_require__("./src/icon/index.ts");let ContextMenuDividerComponent=class ContextMenuDividerComponent{constructor(){this.dividerClass=!0,this.role="separator"}};ContextMenuDividerComponent.propDecorators={dividerClass:[{type:core.HostBinding,args:["class.cds--menu-item-divider"]}],role:[{type:core.HostBinding,args:["attr.role"]}]},ContextMenuDividerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-context-menu-divider, ibm-context-menu-divider",template:""})],ContextMenuDividerComponent);var Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");let ContextMenuSelectionService=class ContextMenuSelectionService{constructor(){this.selectionSubject=new ReplaySubject.t(1),this.value=[],this.selectionObservable=this.selectionSubject.asObservable()}selectRadio(value){value&&(this.selectionSubject.next(value),this.value=[value])}selectCheckbox(value){value&&(this.value.includes(value)?this.value=this.value.filter((v=>v!==value)):this.value.push(value),this.selectionSubject.next(this.value))}selectCheckboxes(value){value&&(this.value=value,this.selectionSubject.next(value))}};ContextMenuSelectionService.ctorParameters=()=>[],ContextMenuSelectionService=(0,tslib_es6.gn)([(0,core.Injectable)()],ContextMenuSelectionService);let ContextMenuGroupComponent=class ContextMenuGroupComponent{constructor(contextMenuSelectionService){this.contextMenuSelectionService=contextMenuSelectionService,this.role="group",this.label=null,this.value=[],this.type=null,this.valueChange=new core.EventEmitter,this.subscription=new Subscription.w0}get radioGroup(){return"radio"===this.type}get group(){return"checkbox"===this.type}ngOnInit(){const{selectionObservable}=this.contextMenuSelectionService,subscription=selectionObservable.subscribe((value=>{this.valueChange.emit(value)}));this.subscription.add(subscription)}ngOnChanges(changes){changes.value&&("radio"===this.type&&this.contextMenuSelectionService.selectRadio(changes.value.currentValue),"checkbox"===this.type&&this.contextMenuSelectionService.selectCheckboxes(changes.value.currentValue))}ngOnDestroy(){this.subscription.unsubscribe()}};ContextMenuGroupComponent.ctorParameters=()=>[{type:ContextMenuSelectionService}],ContextMenuGroupComponent.propDecorators={role:[{type:core.HostBinding,args:["attr.role"]}],radioGroup:[{type:core.HostBinding,args:["class.cds--menu-item-radio-group"]}],group:[{type:core.HostBinding,args:["class.cds--menu-item-group"]}],label:[{type:core.HostBinding,args:["attr.aria-label"]},{type:core.Input}],value:[{type:core.Input}],type:[{type:core.Input}],valueChange:[{type:core.Output}]},ContextMenuGroupComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-context-menu-group, ibm-context-menu-group",template:"\n\t\t<ng-content></ng-content>\n\t",providers:[ContextMenuSelectionService]})],ContextMenuGroupComponent);let ContextMenuComponent=class ContextMenuComponent{constructor(elementRef){this.elementRef=elementRef,this.open=!1,this.position={left:0,top:0},this.contextMenu=!0,this.role="menu",this.tabindex="-1"}get contextMenuOpen(){return this.open}get showMenu(){return this.open}get leftPosition(){return this.position.left}get topPosition(){return this.position.top}get classIcons(){return this.elementRef.nativeElement.querySelector(".cds--menu-item .cds--menu-item__icon svg")}ngOnChanges(changes){changes.open&&changes.open.currentValue&&this.focusMenu()}focusMenu(){setTimeout((()=>{this.elementRef.nativeElement.querySelector(".cds--menu-item").focus()}))}handleNavigation(event){const list=this.elementRef.nativeElement,subMenus=Array.from(list.querySelectorAll("cds-context-menu[role=menu]")),menuItems=Array.from(list.querySelectorAll(".cds--menu-item")).filter((menuItem=>!subMenus.some((subMenu=>subMenu.contains(menuItem))))),currentIndex=menuItems.findIndex((menuItem=>0===parseInt(menuItem.getAttribute("tabindex"),10))),currentMenuItem=menuItems[currentIndex];switch(event.key){case"ArrowDown":document.activeElement===list?menuItems[0].focus():-1!==currentIndex&&currentIndex<menuItems.length-1&&menuItems[currentIndex+1].focus();break;case"ArrowUp":document.activeElement===list?menuItems[menuItems.length-1].focus():-1!==currentIndex&&currentIndex>0&&menuItems[currentIndex-1].focus();break;case"ArrowRight":-1!==currentIndex&&subMenus.some((subMenu=>currentMenuItem.contains(subMenu)))&&currentMenuItem.click();break;case"ArrowLeft":{const parent=currentMenuItem.parentElement.closest(".cds--menu-item, .cds--menu-item");parent&&parent.focus();break}}}};ContextMenuComponent.ctorParameters=()=>[{type:core.ElementRef}],ContextMenuComponent.propDecorators={open:[{type:core.Input}],position:[{type:core.Input}],contextMenu:[{type:core.HostBinding,args:["class.cds--menu"]}],contextMenuOpen:[{type:core.HostBinding,args:["class.cds--menu--open"]}],showMenu:[{type:core.HostBinding,args:["class.cds--menu--shown"]}],role:[{type:core.HostBinding,args:["attr.role"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],leftPosition:[{type:core.HostBinding,args:["style.left.px"]}],topPosition:[{type:core.HostBinding,args:["style.top.px"]}],classIcons:[{type:core.HostBinding,args:["class.cds--menu--with-icons"]}],handleNavigation:[{type:core.HostListener,args:["keydown",["$event"]]}]},ContextMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-context-menu, ibm-context-menu",template:"\n\t\t\t<ng-content></ng-content>\n\t",styles:["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]})],ContextMenuComponent);let ContextMenuItemComponent=class ContextMenuItemComponent{constructor(elementRef,contextMenuSelectionService){this.elementRef=elementRef,this.contextMenuSelectionService=contextMenuSelectionService,this.optionClass=!0,this.role="menuitem",this.tabindex=-1,this.ariaHasPopup=null,this.ariaExpanded=null,this.label="",this.info="",this.type=null,this.checked=!1,this.icon="",this.value="",this.checkedChange=new core.EventEmitter,this.hasChildren=!1,this.selectable=!1,this.subscriptions=new Subscription.w0}get ariaChecked(){return"checkbox"===this.type?!!this.checked:null}ngOnInit(){switch(this.type){case"checkbox":this.role="menuitemcheckbox",this.selectable=!0;break;case"radio":this.role="menuitemradio",this.selectable=!0;break;default:this.role="menuitem"}if(this.type&&this.contextMenuSelectionService&&this.value){const{selectionObservable}=this.contextMenuSelectionService,subscription=selectionObservable.subscribe((value=>{"radio"===this.type&&this.handleSelection(value===this.value),"checkbox"===this.type&&this.handleSelection(value.includes(this.value))}));this.subscriptions.add(subscription)}}ngAfterContentInit(){this.childContextMenu&&(this.hasChildren=!0,this.ariaHasPopup=!0,this.ariaExpanded=!1)}handleClick(event){event.stopPropagation(),this.hasChildren&&(this.openSubMenu(),this.childContextMenu.focusMenu()),this.type&&this.handleSelection(!this.checked),this.contextMenuSelectionService&&("radio"===this.type&&this.contextMenuSelectionService.selectRadio(this.value),"checkbox"===this.type&&this.contextMenuSelectionService.selectCheckbox(this.value))}handleSelection(selected){this.checked=selected,this.checkedChange.emit(this.checked)}openSubMenu(){if(this.childContextMenu){this.childContextMenu.open=!0,this.ariaExpanded=!0;const dimensions=this.elementRef.nativeElement.getBoundingClientRect();this.childContextMenu.position.left=dimensions.left+dimensions.width,this.childContextMenu.position.top=dimensions.top-4}}closeSubMenu(){this.childContextMenu&&(this.childContextMenu.open=!1,this.ariaExpanded=!1)}handleMouseOver(){this.openSubMenu()}handleMouseOut(){this.closeSubMenu()}handleFocus(){this.tabindex=0,this.hasChildren&&this.ariaExpanded&&this.closeSubMenu()}handleBlur(){this.tabindex=-1}focusItem(){this.elementRef.nativeElement.focus()}ngOnDestroy(){this.subscriptions.unsubscribe()}};ContextMenuItemComponent.ctorParameters=()=>[{type:core.ElementRef},{type:ContextMenuSelectionService,decorators:[{type:core.Optional}]}],ContextMenuItemComponent.propDecorators={optionClass:[{type:core.HostBinding,args:["class.cds--menu-item"]}],role:[{type:core.HostBinding,args:["attr.role"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],ariaHasPopup:[{type:core.HostBinding,args:["attr.aria-haspopup"]}],ariaExpanded:[{type:core.HostBinding,args:["attr.aria-expanded"]}],ariaChecked:[{type:core.HostBinding,args:["attr.aria-checked"]}],label:[{type:core.Input}],info:[{type:core.Input}],type:[{type:core.Input}],checked:[{type:core.Input}],icon:[{type:core.Input}],value:[{type:core.Input}],checkedChange:[{type:core.Output}],childContextMenu:[{type:core.ContentChild,args:[ContextMenuComponent,{static:!0}]}],handleClick:[{type:core.HostListener,args:["keydown.enter",["$event"]]},{type:core.HostListener,args:["keydown.space",["$event"]]},{type:core.HostListener,args:["click",["$event"]]}],handleMouseOver:[{type:core.HostListener,args:["mouseover"]}],handleMouseOut:[{type:core.HostListener,args:["mouseout"]}],handleFocus:[{type:core.HostListener,args:["focus"]}],handleBlur:[{type:core.HostListener,args:["blur"]}]},ContextMenuItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-context-menu-item, ibm-context-menu-item",template:'\n\t\t<div class="cds--menu-item__icon">\n\t\t\t<svg *ngIf="selectable && checked" cdsIcon="checkmark" size="16"></svg>\n\t\t\t<svg *ngIf="!selectable && icon" [cdsIcon]="icon" size="16"></svg>\n\t\t</div>\n\t\t<div class="cds--menu-item__label" [title]="label">{{label}}</div>\n\t\t<div class="cds--menu-item__shortcut">\n\t\t\t<ng-container *ngIf="info">{{info}}</ng-container>\n\t\t\t<svg *ngIf="hasChildren" cdsIcon="caret--right" size="16"></svg>\n\t\t</div>\n\t\t<ng-content></ng-content>\n\t',styles:["\n\t\t:host {\n\t\t\tgrid-template-columns: 1rem 1fr max-content;\n\t\t}\n\t"]})],ContextMenuItemComponent);let ContextMenuModule=class ContextMenuModule{};ContextMenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ContextMenuDividerComponent,ContextMenuGroupComponent,ContextMenuItemComponent,ContextMenuComponent],exports:[ContextMenuDividerComponent,ContextMenuGroupComponent,ContextMenuItemComponent,ContextMenuComponent],imports:[common.CommonModule,icon.QX]})],ContextMenuModule);const context_menu_stories={title:"Components/Context Menu",decorators:[(0,dist.moduleMetadata)({imports:[ContextMenuModule]})],args:{position:{top:0,left:0},open:!0,checkboxGroupValue:["a","b"],radioGroupValue:"one"},argTypes:{onRadioChange:{action:"Radio menu change!"},onCheckboxChange:{action:"Radio menu change!"}},component:ContextMenuComponent,subcomponents:{ContextMenuDividerComponent,ContextMenuItemComponent,ContextMenuGroupComponent},parameters:{docs:{story:{height:"25rem"}}}},Basic=(args=>({props:args,template:'\n        <cds-context-menu [open]="open" [position]="position">\n            <cds-context-menu-item label="Cut" info="⌘X"></cds-context-menu-item>\n            <cds-context-menu-item label="Option with icon" icon="calendar"></cds-context-menu-item>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-item type="checkbox" label="Enable magic"></cds-context-menu-item>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-group label="Selection group">\n                <cds-context-menu-item type="checkbox" label="Blue"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Red" [checked]="true"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Black"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Green"></cds-context-menu-item>\n            </cds-context-menu-group>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-item label="Radio flyout">\n                <cds-context-menu>\n                    <cds-context-menu-group\n                        type="radio"\n                        [value]="radioGroupValue"\n                        (valueChange)="onRadioChange($event)">\n                        <cds-context-menu-item type="radio" label="Radio one" value="one"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio two" value="two"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio three" value="three"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio four" value="four"></cds-context-menu-item>\n                    </cds-context-menu-group>\n                </cds-context-menu>\n            </cds-context-menu-item>\n            <cds-context-menu-item label="Checkbox flyout">\n                <cds-context-menu>\n                    <cds-context-menu-group\n                        type="checkbox"\n                        [value]="checkboxGroupValue"\n                        (valueChange)="onCheckboxChange($event)">\n                        <cds-context-menu-item type="checkbox" label="Selectable item a" value="a"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item b" value="b"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item c" value="c"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item d" value="d"></cds-context-menu-item>\n                    </cds-context-menu-group>\n                </cds-context-menu>\n            </cds-context-menu-item>\n        </cds-context-menu>\n    '})).bind({});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-context-menu [open]="open" [position]="position">\n            <cds-context-menu-item label="Cut" info="⌘X"></cds-context-menu-item>\n            <cds-context-menu-item label="Option with icon" icon="calendar"></cds-context-menu-item>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-item type="checkbox" label="Enable magic"></cds-context-menu-item>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-group label="Selection group">\n                <cds-context-menu-item type="checkbox" label="Blue"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Red" [checked]="true"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Black"></cds-context-menu-item>\n                <cds-context-menu-item type="checkbox" label="Green"></cds-context-menu-item>\n            </cds-context-menu-group>\n            <cds-context-menu-divider></cds-context-menu-divider>\n            <cds-context-menu-item label="Radio flyout">\n                <cds-context-menu>\n                    <cds-context-menu-group\n                        type="radio"\n                        [value]="radioGroupValue"\n                        (valueChange)="onRadioChange($event)">\n                        <cds-context-menu-item type="radio" label="Radio one" value="one"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio two" value="two"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio three" value="three"></cds-context-menu-item>\n                        <cds-context-menu-item type="radio" label="Radio four" value="four"></cds-context-menu-item>\n                    </cds-context-menu-group>\n                </cds-context-menu>\n            </cds-context-menu-item>\n            <cds-context-menu-item label="Checkbox flyout">\n                <cds-context-menu>\n                    <cds-context-menu-group\n                        type="checkbox"\n                        [value]="checkboxGroupValue"\n                        (valueChange)="onCheckboxChange($event)">\n                        <cds-context-menu-item type="checkbox" label="Selectable item a" value="a"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item b" value="b"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item c" value="c"></cds-context-menu-item>\n                        <cds-context-menu-item type="checkbox" label="Selectable item d" value="d"></cds-context-menu-item>\n                    </cds-context-menu-group>\n                </cds-context-menu>\n            </cds-context-menu-item>\n        </cds-context-menu>\n    `\n})',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]}}]);