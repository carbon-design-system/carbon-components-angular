"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[9672],{"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root,xmlns="http://www.w3.org/2000/svg";svg.setAttribute("xmlns",xmlns);const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString(),fill:icon.attrs.fill}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElementNS(xmlns,"title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/folder/16.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js"),_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/@carbon/icons/es/view/16.js"),_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@carbon/icons/es/view--off/16.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_55__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_55__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__.Z,_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_56__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_55__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_57__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")},"./src/select/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xo:()=>OptGroup,Wx:()=>Option,Ph:()=>Select,An:()=>SelectModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let OptGroup=class OptGroup{constructor(){this.inputClass="cds--select-optgroup"}};OptGroup.propDecorators={inputClass:[{type:core.HostBinding,args:["class"]}]},OptGroup=(0,tslib_es6.gn)([(0,core.Directive)({selector:"optgroup"})],OptGroup);let Option=class Option{constructor(){this.inputClass="cds--select-option"}};Option.propDecorators={inputClass:[{type:core.HostBinding,args:["class"]}]},Option=(0,tslib_es6.gn)([(0,core.Directive)({selector:"option"})],Option);var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let Select=class Select{constructor(){this.display="default",this.warn=!1,this.id="select-"+Select.selectCount++,this.size="md",this.disabled=!1,this.skeleton=!1,this.invalid=!1,this.readonly=!1,this.theme="dark",this.fluid=!1,this.valueChange=new core.EventEmitter,this.focused=!1,this.onChangeHandler=_=>{},this.onTouchedHandler=()=>{}}set value(v){this._value=v,this.select&&(this.select.nativeElement.value=this._value)}get value(){return this._value}ngAfterViewInit(){void 0!==this.value&&null!==this.value&&this.select&&this.select.nativeElement.value!==this.value&&(this.select.nativeElement.value=this.value)}writeValue(obj){this.value=obj}registerOnChange(fn){this.onChangeHandler=fn}registerOnTouched(fn){this.onTouchedHandler=fn}setDisabledState(isDisabled){this.disabled=isDisabled}onChange(event){this.value=event.target.value,this.onChangeHandler(event.target.value),this.valueChange.emit(event.target.value)}focusOut(){this.onTouchedHandler()}isTemplate(value){return value instanceof core.TemplateRef}onMouseDown(event){this.readonly&&(event.preventDefault(),event.target.focus())}onKeyDown(event){this.readonly&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"," "].includes(event.key)&&event.preventDefault()}handleFocus(event){this.focused="focus"===event.type}};Select.selectCount=0,Select.propDecorators={value:[{type:core.Input}],display:[{type:core.Input}],label:[{type:core.Input}],helperText:[{type:core.Input}],invalidText:[{type:core.Input}],warn:[{type:core.Input}],warnText:[{type:core.Input}],id:[{type:core.Input}],size:[{type:core.Input}],disabled:[{type:core.Input}],skeleton:[{type:core.Input}],invalid:[{type:core.Input}],readonly:[{type:core.Input}],theme:[{type:core.Input}],ariaLabel:[{type:core.Input}],fluid:[{type:core.Input}],valueChange:[{type:core.Output}],select:[{type:core.ViewChild,args:["select"]}],focusOut:[{type:core.HostListener,args:["focusout"]}]},Select=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-select, ibm-select",template:'\n\t\t<div\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--form-item\': !skeleton,\n\t\t\t\t\'cds--select--fluid\': fluid && !skeleton\n\t\t\t}">\n\t\t\t<ng-container *ngIf="skeleton && !fluid">\n\t\t\t\t<div *ngIf="label" class="cds--label cds--skeleton"></div>\n\t\t\t\t<div class="cds--select cds--skeleton"></div>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf="skeleton && fluid">\n\t\t\t\t<div class="cds--list-box__wrapper--fluid">\n\t\t\t\t\t<div class="cds--list-box cds--skeleton">\n\t\t\t\t\t\t<div class="cds--list-box__label"></div>\n\t\t\t\t\t\t<div class="cds--list-box__field"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t\t<div\n\t\t\t\t*ngIf="!skeleton"\n\t\t\t\tclass="cds--select"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--select--inline\': display === \'inline\',\n\t\t\t\t\t\'cds--select--light\': theme === \'light\',\n\t\t\t\t\t\'cds--select--invalid\': invalid,\n\t\t\t\t\t\'cds--select--warning\': warn,\n\t\t\t\t\t\'cds--select--disabled\': disabled,\n\t\t\t\t\t\'cds--select--readonly\': readonly,\n\t\t\t\t\t\'cds--select--fluid--invalid\': fluid && invalid,\n\t\t\t\t\t\'cds--select--fluid--focus\': fluid && focused\n\t\t\t\t}">\n\t\t\t\t<label\n\t\t\t\t\t*ngIf="label"\n\t\t\t\t\t[for]="id"\n\t\t\t\t\tclass="cds--label"\n\t\t\t\t\t[ngClass]="{\'cds--label--disabled\': disabled}">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>\n\t\t\t\t</label>\n\t\t\t\t<div *ngIf="display === \'inline\'; else noInline" class="cds--select-input--inline__wrapper">\n\t\t\t\t\t<ng-container *ngTemplateOutlet="noInline"></ng-container>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf="helperText && !invalid && !warn && !skeleton && !fluid"\n\t\t\t\t\tclass="cds--form__helper-text"\n\t\t\t\t\t[ngClass]="{\n\t\t\t\t\t\t\'cds--form__helper-text--disabled\': disabled\n\t\t\t\t\t}">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\x3c!-- select element: dynamically projected based on \'display\' variant --\x3e\n\t\t<ng-template #noInline>\n\t\t\t<div class="cds--select-input__wrapper" [attr.data-invalid]="(invalid ? true : null)">\n\t\t\t\t<select\n\t\t\t\t\t#select\n\t\t\t\t\t[attr.id]="id"\n\t\t\t\t\t[attr.aria-label]="ariaLabel"\n\t\t\t\t\t[disabled]="disabled"\n\t\t\t\t\t(change)="onChange($event)"\n\t\t\t\t\t[attr.aria-invalid]="invalid ? \'true\' : null"\n\t\t\t\t\t[attr.aria-readonly]="readonly ? \'true\' : null"\n\t\t\t\t\tclass="cds--select-input"\n\t\t\t\t\t[ngClass]="{\n\t\t\t\t\t\t\'cds--select-input--sm\': size === \'sm\',\n\t\t\t\t\t\t\'cds--select-input--md\': size === \'md\',\n\t\t\t\t\t\t\'cds--select-input--lg\': size === \'lg\'\n\t\t\t\t\t}"\n\t\t\t\t\t(mousedown)="onMouseDown($event)"\n\t\t\t\t\t(keydown)="onKeyDown($event)"\n\t\t\t\t\t(focus)="fluid ? handleFocus($event) : null"\n\t\t\t\t\t(blur)="fluid ? handleFocus($event) : null">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</select>\n\t\t\t\t<svg\n\t\t\t\t\tfocusable="false"\n\t\t\t\t\tpreserveAspectRatio="xMidYMid meet"\n\t\t\t\t\tstyle="will-change: transform;"\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\tclass="cds--select__arrow"\n\t\t\t\t\twidth="16"\n\t\t\t\t\theight="16"\n\t\t\t\t\tviewBox="0 0 16 16"\n\t\t\t\t\taria-hidden="true">\n\t\t\t\t\t<path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg\n\t\t\t\t\t*ngIf="invalid"\n\t\t\t\t\tcdsIcon="warning--filled"\n\t\t\t\t\tsize="16"\n\t\t\t\t\tclass="cds--select__invalid-icon">\n\t\t\t\t</svg>\n\t\t\t\t<svg\n\t\t\t\t\t*ngIf="!invalid && warn"\n\t\t\t\t\tcdsIcon="warning--alt--filled"\n\t\t\t\t\tsize="16"\n\t\t\t\t\tclass="cds--select__invalid-icon cds--select__invalid-icon--warning">\n\t\t\t\t</svg>\n\t\t\t\t<ng-container *ngIf="fluid">\n\t\t\t\t\t<hr class="cds--select__divider" />\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf="invalid && invalidText" role="alert" class="cds--form-requirement" aria-live="polite">\n\t\t\t\t\t\t<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>\n\t\t\t\t\t\t<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf="!invalid && warn" class="cds--form-requirement">\n\t\t\t\t\t\t<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>\n\t\t\t\t\t\t<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<ng-container *ngIf="!fluid">\n\t\t\t\t<div\n\t\t\t\t\t*ngIf="invalid && invalidText" role="alert" class="cds--form-requirement" aria-live="polite">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf="!invalid && warn" class="cds--form-requirement">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</ng-template>\n\t',providers:[{provide:fesm2020_forms.JU,useExisting:Select,multi:!0}]})],Select);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts");let SelectModule=class SelectModule{};SelectModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Select,Option,OptGroup],exports:[Select,Option,OptGroup],imports:[common.CommonModule,fesm2020_forms.u5,icon.QX]})],SelectModule)}}]);