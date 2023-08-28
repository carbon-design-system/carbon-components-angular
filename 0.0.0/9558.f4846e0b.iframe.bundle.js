"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[9558],{"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root;svg.setAttribute("xmlns","http://www.w3.org/2000/svg");const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElement("title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_52__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_52__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_53__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_52__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_54__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")},"./src/layer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LayerDirective,D:()=>LayerModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LayerDirective=class LayerDirective{set ibmLayer(level){this.cdsLayer=level}set cdsLayer(level){"number"==typeof level&&(this._passedLevel=level,this.layer=level)}get cdsLayer(){return this._passedLevel}set layer(level){"number"==typeof level&&(this._level=Math.max(0,Math.min(level,2)),this.layerChildren&&this.layerChildren.forEach((layer=>{layer!==this&&(layer.layer="number"==typeof layer._passedLevel?layer._passedLevel:this.layer+1)})))}get layer(){return this._level}get layerOneClass(){return 0===this.layer}get layerTwoClass(){return 1===this.layer}get layerThreeClass(){return 2===this.layer}ngAfterContentInit(){"number"!=typeof this.cdsLayer&&(this.layer=1)}};LayerDirective.propDecorators={ibmLayer:[{type:core.Input}],cdsLayer:[{type:core.Input}],layerOneClass:[{type:core.HostBinding,args:["class.cds--layer-one"]}],layerTwoClass:[{type:core.HostBinding,args:["class.cds--layer-two"]}],layerThreeClass:[{type:core.HostBinding,args:["class.cds--layer-three"]}],layerChildren:[{type:core.ContentChildren,args:[LayerDirective,{descendants:!1}]}]},LayerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLayer], [ibmLayer]",exportAs:"layer"})],LayerDirective);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LayerModule=class LayerModule{};LayerModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LayerDirective],exports:[LayerDirective],imports:[common.CommonModule]})],LayerModule)},"./src/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link,L:()=>LinkModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let Link=class Link{constructor(){this.baseClass=!0,this.inline=!1}set disabled(disabled){this._disabled=disabled,this.tabindex=this.disabled?-1:null}get disabled(){return this._disabled}};Link.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--link"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],inline:[{type:core.Input},{type:core.HostBinding,args:["class.cds--link--inline"]}],disabled:[{type:core.Input},{type:core.HostBinding,args:["attr.aria-disabled"]},{type:core.HostBinding,args:["class.cds--link--disabled"]}]},Link=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLink], [ibmLink]"})],Link);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LinkModule=class LinkModule{};LinkModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Link],exports:[Link],imports:[common.CommonModule]})],LinkModule)},"./src/tiles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oh:()=>ClickableTile,wN:()=>ExpandableTile,G9:()=>SelectionTile,n9:()=>Tile,B4:()=>TileGroup,i$:()=>TilesModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs");let ClickableTile=class ClickableTile{constructor(router){this.router=router,this.theme="dark",this.href="#",this.disabled=!1,this.navigation=new core.EventEmitter}navigate(event){if(this.router&&this.route&&!this.disabled){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}}};ClickableTile.ctorParameters=()=>[{type:router.F0,decorators:[{type:core.Optional}]}],ClickableTile.propDecorators={theme:[{type:core.Input}],href:[{type:core.Input}],target:[{type:core.Input}],disabled:[{type:core.Input}],route:[{type:core.Input}],routeExtras:[{type:core.Input}],navigation:[{type:core.Output}]},ClickableTile=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-clickable-tile, ibm-clickable-tile",template:'\n\t<a\n\t\tcdsLink\n\t\tclass="cds--tile cds--tile--clickable"\n\t\t[ngClass]="{\n\t\t\t\'cds--tile--light\': theme === \'light\',\n\t\t\t\'cds--tile--disabled cds--link--disabled\' : disabled\n\t\t}"\n\t\ttabindex="0"\n\t\t(click)="navigate($event)"\n\t\t[attr.href]="disabled ? null : href"\n\t\t[attr.target]="target"\n\t\t[attr.aria-disabled]="disabled">\n\t\t<ng-content></ng-content>\n\t</a>'})],ClickableTile);var i18n=__webpack_require__("./src/i18n/index.ts"),utils=__webpack_require__("./src/utils/index.ts");let ExpandableTile=class ExpandableTile{constructor(i18n,element){this.i18n=i18n,this.element=element,this.theme="dark",this.expanded=!1,this.interactive=!1,this.tileMaxHeight=0,this.currentExpandedHeight=0,this.expand=this.i18n.getOverridable("TILES.EXPAND"),this.collapse=this.i18n.getOverridable("TILES.COLLAPSE")}set translations(value){const valueWithDefaults=(0,utils.TS)(this.i18n.getMultiple("TILES"),value);this.expand.override(valueWithDefaults.EXPAND),this.collapse.override(valueWithDefaults.COLLAPSE)}ngAfterViewInit(){this.updateMaxHeight()}get expandedHeight(){const tile=this.element.nativeElement.querySelector(".cds--tile"),tilePadding=parseInt(getComputedStyle(tile).paddingBottom,10)+parseInt(getComputedStyle(tile).paddingTop,10),expandedHeight=this.tileMaxHeight+tilePadding;return isNaN(expandedHeight)||(this.currentExpandedHeight=expandedHeight),this.currentExpandedHeight}updateMaxHeight(){this.expanded?this.tileMaxHeight=this.tileContainer.nativeElement.getBoundingClientRect().height:this.tileMaxHeight=this.element.nativeElement.querySelector(".cds--tile-content__above-the-fold").getBoundingClientRect().height}onClick(){this.expanded=!this.expanded,this.updateMaxHeight()}};ExpandableTile.ctorParameters=()=>[{type:i18n.oc},{type:core.ElementRef}],ExpandableTile.propDecorators={theme:[{type:core.Input}],expanded:[{type:core.Input}],interactive:[{type:core.Input}],translations:[{type:core.Input}],tileContainer:[{type:core.ViewChild,args:["container"]}]},ExpandableTile=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-expandable-tile, ibm-expandable-tile",template:'\n\t\t<button\n\t\t\t*ngIf="!interactive"\n\t\t\tclass="cds--tile cds--tile--expandable"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--tile--is-expanded\' : expanded,\n\t\t\t\t\'cds--tile--light\': theme === \'light\'\n\t\t\t}"\n\t\t\t[ngStyle]="{\'max-height\': expandedHeight + \'px\'}"\n\t\t\ttype="button"\n\t\t\t(click)="onClick()"\n\t\t\t[attr.aria-expanded]="expanded"\n\t\t\t[attr.title]="(expanded ? collapse.subject : expand.subject) | async">\n\t\t\t\t<ng-container *ngTemplateOutlet="expandableTileContent"></ng-container>\n\t\t</button>\n\n\t\t<div\n\t\t\t*ngIf="interactive"\n\t\t\tclass="cds--tile cds--tile--expandable cds--tile--expandable--interactive"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--tile--is-expanded\' : expanded,\n\t\t\t\t\'cds--tile--light\': theme === \'light\'\n\t\t\t}"\n\t\t\t[ngStyle]="{\'max-height\': expandedHeight + \'px\'}"\n\t\t\t[attr.title]="(expanded ? collapse.subject : expand.subject) | async">\n\t\t\t<ng-container *ngTemplateOutlet="expandableTileContent"></ng-container>\n\t\t</div>\n\n\t\t<ng-template #chevronIcon>\n\t\t\t<svg cdsIcon="chevron--down" size="16"></svg>\n\t\t</ng-template>\n\n\t\t<ng-template #expandableTileContent>\n\t\t\t<div #container>\n\t\t\t\t<div class="cds--tile-content">\n\t\t\t\t\t<ng-content select="[cdsAboveFold],[ibmAboveFold],.cds--tile-content__above-the-fold"></ng-content>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf="!interactive" class="cds--tile__chevron">\n\t\t\t\t\t<ng-container *ngTemplateOutlet="chevronIcon"></ng-container>\n\t\t\t\t</div>\n\t\t\t\t<button\n\t\t\t\t\t*ngIf="interactive"\n\t\t\t\t\tclass="cds--tile__chevron cds--tile__chevron--interactive"\n\t\t\t\t\ttype="button"\n\t\t\t\t\t(click)="onClick()"\n\t\t\t\t\t[attr.aria-expanded]="expanded"\n\t\t\t\t\t[attr.aria-label]="(expanded ? collapse.subject : expand.subject) | async">\n\t\t\t\t\t<ng-container *ngTemplateOutlet="chevronIcon"></ng-container>\n\t\t\t\t</button>\n\t\t\t\t<div class="cds--tile-content">\n\t\t\t\t\t<ng-content select="[cdsBelowFold],[ibmBelowFold],.cds--tile-content__below-the-fold"></ng-content>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t'})],ExpandableTile);let ExpandableTileAboveFoldDirective=class ExpandableTileAboveFoldDirective{constructor(){this.aboveFold=!0}};ExpandableTileAboveFoldDirective.propDecorators={aboveFold:[{type:core.HostBinding,args:["class.cds--tile-content__above-the-fold"]}]},ExpandableTileAboveFoldDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsAboveFold], [ibmAboveFold]"})],ExpandableTileAboveFoldDirective);let ExpandableTileBelowFoldDirective=class ExpandableTileBelowFoldDirective{constructor(){this.belowFold=!0}};ExpandableTileBelowFoldDirective.propDecorators={belowFold:[{type:core.HostBinding,args:["class.cds--tile-content__below-the-fold"]}]},ExpandableTileBelowFoldDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsBelowFold], [ibmBelowFold]"})],ExpandableTileBelowFoldDirective);let SelectionTile=class SelectionTile{constructor(i18n){this.i18n=i18n,this.theme="dark",this.id=`tile-${SelectionTile.tileCount}`,this.change=new core.EventEmitter,this.disabled=!1,this.name="tile-group-unbound",this.multiple=!0,this._selected=null,SelectionTile.tileCount++}set selected(value){this._selected=!!value||null,this.input&&(this.input.nativeElement.checked=this._selected)}get selected(){return!!this.input&&this.input.nativeElement.checked}ngAfterViewInit(){this.input&&setTimeout((()=>{this.input.nativeElement.checked=this._selected}))}keyboardInput(event){"Enter"!==event.key&&"Spacebar"!==event.key&&" "!==event.key||(this.selected=!this.selected,this.change.emit(event))}onChange(event){this.change.emit(event)}};SelectionTile.tileCount=0,SelectionTile.ctorParameters=()=>[{type:i18n.oc}],SelectionTile.propDecorators={theme:[{type:core.Input}],id:[{type:core.Input}],selected:[{type:core.Input}],value:[{type:core.Input}],change:[{type:core.Output}],disabled:[{type:core.Input}],input:[{type:core.ViewChild,args:["input",{static:!0}]}],keyboardInput:[{type:core.HostListener,args:["keydown",["$event"]]}]},SelectionTile=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-selection-tile, ibm-selection-tile",template:'\n\t\t<input\n\t\t\t#input\n\t\t\t[attr.tabindex]="disabled ? null : 0"\n\t\t\tclass="cds--tile-input"\n\t\t\t[id]="id"\n\t\t\t[disabled]="disabled"\n\t\t\t[type]="(multiple ? \'checkbox\': \'radio\')"\n\t\t\t[value]="value"\n\t\t\t[name]="name"\n\t\t\t(change)="onChange($event)"/>\n\t\t<label\n\t\t\tclass="cds--tile cds--tile--selectable"\n\t\t\t[for]="id"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--tile--is-selected\' : selected,\n\t\t\t\t\'cds--tile--light\': theme === \'light\',\n\t\t\t\t\'cds--tile--disabled\' : disabled\n\t\t\t}"\n\t\t\t[attr.aria-label]="i18n.get(\'TILES.TILE\') | async">\n\t\t\t<div class="cds--tile__checkmark">\n\t\t\t\t<svg width="16" height="16" viewBox="0 0 16 16">\n\t\t\t\t\t<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"\n\t\t\t\t\t\tfill-rule="evenodd"/>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<div class="cds--tile-content">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</label>\n\t'})],SelectionTile);var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");let TileGroup=class TileGroup{constructor(){this.name=`tile-group-${TileGroup.tileGroupCount}`,this.multiple=!1,this.selected=new core.EventEmitter,this.tileGroupClass=!0,this.unsubscribe$=new Subject.x,this.unsubscribeTiles$=new Subject.x,this.onChange=_=>{},this.onTouched=()=>{},TileGroup.tileGroupCount++}ngAfterContentInit(){const updateTiles=()=>{this.unsubscribeTiles$.next(),setTimeout((()=>{this.selectionTiles.forEach((tile=>{tile.name=this.name,tile.change.pipe((0,takeUntil.R)(this.unsubscribeTiles$)).subscribe((()=>{this.selected.emit({value:tile.value,selected:tile.selected,name:this.name}),this.onChange(tile.value)})),tile.multiple=this.multiple}))}))};updateTiles(),this.selectionTiles.changes.pipe((0,takeUntil.R)(this.unsubscribe$)).subscribe((_=>updateTiles()))}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.unsubscribeTiles$.next(),this.unsubscribeTiles$.complete()}writeValue(value){this.selectionTiles&&this.selectionTiles.forEach((tile=>{tile.value===value?tile.selected=!0:tile.selected=!1}))}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}isTemplate(value){return value instanceof core.TemplateRef}};TileGroup.tileGroupCount=0,TileGroup.ctorParameters=()=>[],TileGroup.propDecorators={name:[{type:core.Input}],multiple:[{type:core.Input}],legend:[{type:core.Input}],selected:[{type:core.Output}],tileGroupClass:[{type:core.HostBinding,args:["class.cds--tile-group"]}],selectionTiles:[{type:core.ContentChildren,args:[SelectionTile]}]},TileGroup=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tile-group, ibm-tile-group",template:'\n\t\t<fieldset>\n\t\t\t<legend *ngIf="legend" class="cds--label">\n\t\t\t\t<ng-template *ngIf="isTemplate(legend); else legendLabel;" [ngTemplateOutlet]="legend"></ng-template>\n\t\t\t\t<ng-template #legendLabel>{{legend}}</ng-template>\n\t\t\t</legend>\n\t\t\t<ng-content select="ibm-selection-tile,cds-selection-tile"></ng-content>\n\t\t</fieldset>',providers:[{provide:fesm2020_forms.JU,useExisting:TileGroup,multi:!0}]})],TileGroup);let Tile=class Tile{constructor(){this.tileClass=!0,this.theme="dark"}get lightThemeEnabled(){return"light"===this.theme}};Tile.propDecorators={tileClass:[{type:core.HostBinding,args:["class.cds--tile"]}],lightThemeEnabled:[{type:core.HostBinding,args:["class.cds--tile--light"]}],theme:[{type:core.Input}]},Tile=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tile, ibm-tile",template:"<ng-content></ng-content>"})],Tile);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts"),src_link=__webpack_require__("./src/link/index.ts");let TilesModule=class TilesModule{};TilesModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Tile,ClickableTile,ExpandableTileAboveFoldDirective,ExpandableTileBelowFoldDirective,ExpandableTile,SelectionTile,TileGroup],exports:[Tile,ClickableTile,ExpandableTileAboveFoldDirective,ExpandableTileBelowFoldDirective,ExpandableTile,SelectionTile,TileGroup],imports:[common.CommonModule,i18n.LU,icon.QX,src_link.L]})],TilesModule)}}]);