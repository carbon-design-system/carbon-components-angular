"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[1127],{"./node_modules/@carbon/utils-position/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _a,PLACEMENTS;__webpack_require__.d(__webpack_exports__,{FK:()=>position,ZP:()=>__WEBPACK_DEFAULT_EXPORT__}),function(PLACEMENTS){PLACEMENTS.LEFT="left",PLACEMENTS.RIGHT="right",PLACEMENTS.TOP="top",PLACEMENTS.BOTTOM="bottom"}(PLACEMENTS||(PLACEMENTS={}));var defaultPositions=((_a={})[PLACEMENTS.LEFT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left-target.offsetWidth)}},_a[PLACEMENTS.RIGHT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left+referenceRect.width)}},_a[PLACEMENTS.TOP]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top-target.offsetHeight),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a[PLACEMENTS.BOTTOM]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top+referenceRect.height),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a),windowRef="undefined"!=typeof window?window:{innerHeight:0,scrollY:0,innerWidth:0,scrollX:0},Position=function(){function Position(positions){void 0===positions&&(positions={}),this.positions=defaultPositions,this.positions=Object.assign({},defaultPositions,positions)}return Position.prototype.getRelativeOffset=function(target){for(var offsets={left:target.offsetLeft,top:target.offsetTop};target.offsetParent&&"static"===getComputedStyle(target.offsetParent).position;)offsets.left+=target.offsetLeft,offsets.top+=target.offsetTop,target=target.offsetParent;return offsets},Position.prototype.getAbsoluteOffset=function(target){for(var currentNode=target,margins={top:0,left:0};currentNode.offsetParent;){var computed=getComputedStyle(currentNode.offsetParent);"static"===computed.position&&computed.marginLeft&&computed.marginTop&&(parseInt(computed.marginTop,10)&&(margins.top+=parseInt(computed.marginTop,10)),parseInt(computed.marginLeft,10)&&(margins.left+=parseInt(computed.marginLeft,10))),currentNode=currentNode.offsetParent}var targetRect=target.getBoundingClientRect(),relativeRect=document.body.getBoundingClientRect();return{top:targetRect.top-relativeRect.top+margins.top,left:targetRect.left-relativeRect.left+margins.left}},Position.prototype.findRelative=function(reference,target,placement){var referenceOffset=this.getRelativeOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findAbsolute=function(reference,target,placement){var referenceOffset=this.getAbsoluteOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPosition=function(reference,target,placement,offsetFunction){void 0===offsetFunction&&(offsetFunction=this.getAbsoluteOffset.bind(this));var referenceOffset=offsetFunction(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPositionAt=function(offset,target,placement){return this.calculatePosition(offset,{top:0,left:0,height:0,width:0},target,placement)},Position.prototype.getPlacementBox=function(target,position){var targetBottom=target.offsetHeight+position.top,targetRight=target.offsetWidth+position.left;return{top:position.top,bottom:targetBottom,left:position.left,right:targetRight}},Position.prototype.addOffset=function(position,top,left){return void 0===top&&(top=0),void 0===left&&(left=0),Object.assign({},position,{top:position.top+top,left:position.left+left})},Position.prototype.setElement=function(element,position){element.style.top=position.top+"px",element.style.left=position.left+"px"},Position.prototype.findBestPlacement=function(reference,target,placements,containerFunction,positionFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this)),void 0===positionFunction&&(positionFunction=this.findPosition.bind(this));var weightedPlacements=placements.map((function(placement){var pos=positionFunction(reference,target,placement),box=_this.getPlacementBox(target,pos),hiddenHeight=0,hiddenWidth=0,container=containerFunction();box.top<container.top?hiddenHeight=container.top-box.top:box.bottom>container.height&&(hiddenHeight=box.bottom-container.height),box.left<container.left?hiddenWidth=container.left-box.left:box.right>container.width&&(hiddenWidth=box.right-container.width),hiddenHeight&&!hiddenWidth?hiddenWidth=1:hiddenWidth&&!hiddenHeight&&(hiddenHeight=1);var area=target.offsetHeight*target.offsetWidth;return{placement,weight:(area-hiddenHeight*hiddenWidth)/area}}));return weightedPlacements.sort((function(a,b){return b.weight-a.weight})),weightedPlacements[0].placement},Position.prototype.findBestPlacementAt=function(offset,target,placements,containerFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this));return this.findBestPlacement(null,target,placements,containerFunction,(function(_,target,placement){return _this.findPositionAt(offset,target,placement)}))},Position.prototype.defaultContainerFunction=function(){return{top:0,left:0,height:windowRef.innerHeight,width:windowRef.innerWidth}},Position.prototype.calculatePosition=function(referenceOffset,referenceRect,target,placement){return this.positions[placement]?this.positions[placement](referenceOffset,target,referenceRect):(console.error("No function found for placement, defaulting to 0,0"),{left:0,top:0})},Position}(),position=new Position;const __WEBPACK_DEFAULT_EXPORT__=Position},"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root,xmlns="http://www.w3.org/2000/svg";svg.setAttribute("xmlns",xmlns);const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString(),fill:icon.attrs.fill}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElementNS(xmlns,"title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/folder/16.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js"),_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/@carbon/icons/es/view/16.js"),_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@carbon/icons/es/view--off/16.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_55__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_55__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__.Z,_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_56__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_55__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_57__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")},"./src/search/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Search,t:()=>SearchModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),search_componentngResource=__webpack_require__("./src/search/search.component.html?ngResource"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),i18n=__webpack_require__("./src/i18n/index.ts");let Search=class Search{constructor(elementRef,i18n){this.elementRef=elementRef,this.i18n=i18n,this.theme="dark",this.size="md",this.disabled=!1,this.toolbar=!1,this.expandable=!1,this.skeleton=!1,this.active=!1,this.tableSearch=!1,this.id=`search-${Search.searchCount}`,this.value="",this.autocomplete="on",this.label=this.i18n.get().SEARCH.LABEL,this.placeholder=this.i18n.get().SEARCH.PLACEHOLDER,this.clearButtonTitle=this.i18n.get().SEARCH.CLEAR_BUTTON,this.searchTitle="",this.fluid=!1,this.valueChange=new core.EventEmitter,this.open=new core.EventEmitter,this.clear=new core.EventEmitter,this.search=new core.EventEmitter,this.isComposing=!1,this.onTouched=()=>{},this.propagateChange=_=>{},Search.searchCount++}get containerClass(){return!(this.toolbar||this.expandable)}get fluidSkeletonClass(){return this.skeleton&&this.fluid}writeValue(value){this.value=value}registerOnChange(fn){this.propagateChange=fn}registerOnTouched(fn){this.onTouched=fn}onSearch(search){this.isComposing||(this.value=search,this.doValueChange())}onEnter(){this.search.emit(this.value)}clearSearch(){this.value="",this.clear.emit(),this.propagateChange(this.value)}doValueChange(){this.valueChange.emit(this.value),this.propagateChange(this.value)}openSearch(){this.active=!0,this.open.emit(this.active),setTimeout((()=>this.inputRef.nativeElement.focus()))}keyDown(event){(this.toolbar||this.expandable)&&("Escape"===event.key?""===this.value&&(this.active=!1,this.open.emit(this.active)):"Enter"===event.key&&this.openSearch()),"Escape"===event.key&&""!==this.value&&this.clearSearch()}focusOut(event){this.onTouched(),(this.expandable||this.toolbar)&&this.inputRef&&""===this.inputRef.nativeElement.value&&!this.elementRef.nativeElement.contains(event.relatedTarget)&&(this.active=!1,this.open.emit(this.active))}focusIn(event){this.onTouched(),!this.expandable&&!this.toolbar||!this.inputRef||event.relatedTarget||this.elementRef.nativeElement.contains(event.relatedTarget)||this.openSearch()}compositionStart(event){this.isComposing=!0}compositionEnd(event){this.isComposing=!1,this.onSearch(this.value+event.data)}};Search.searchCount=0,Search.ctorParameters=()=>[{type:core.ElementRef},{type:i18n.oc}],Search.propDecorators={containerClass:[{type:core.HostBinding,args:["class.cds--form-item"]}],fluidSkeletonClass:[{type:core.HostBinding,args:["class.cds--text-input--fluid__skeleton"]}],theme:[{type:core.Input}],size:[{type:core.Input}],disabled:[{type:core.Input}],toolbar:[{type:core.Input}],expandable:[{type:core.Input}],skeleton:[{type:core.Input}],active:[{type:core.Input}],tableSearch:[{type:core.Input}],name:[{type:core.Input}],id:[{type:core.Input}],required:[{type:core.Input}],value:[{type:core.Input}],autocomplete:[{type:core.Input}],label:[{type:core.Input}],placeholder:[{type:core.Input}],clearButtonTitle:[{type:core.Input}],searchTitle:[{type:core.Input}],ariaLabel:[{type:core.Input}],fluid:[{type:core.Input}],valueChange:[{type:core.Output}],open:[{type:core.Output}],clear:[{type:core.Output}],search:[{type:core.Output}],inputRef:[{type:core.ViewChild,args:["input"]}],keyDown:[{type:core.HostListener,args:["keydown",["$event"]]}],focusOut:[{type:core.HostListener,args:["focusout",["$event"]]}],focusIn:[{type:core.HostListener,args:["focusin",["$event"]]}],compositionStart:[{type:core.HostListener,args:["compositionstart",["$event"]]}],compositionEnd:[{type:core.HostListener,args:["compositionend",["$event"]]}]},Search=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-search, ibm-search",template:search_componentngResource,providers:[{provide:fesm2020_forms.JU,useExisting:Search,multi:!0}]})],Search);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts");let SearchModule=class SearchModule{};SearchModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Search],exports:[Search],imports:[fesm2020_forms.u5,common.CommonModule,i18n.LU,icon.QX]})],SearchModule)},"./src/search/search.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Fluid:()=>Fluid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/search/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Search",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.t]})],args:{expandable:!1,placeholder:"Search",disabled:!1,skeleton:!1,size:"md",theme:"dark",autocomplete:"on",fluid:!1},argTypes:{expandable:{type:"boolean",defaultValue:!1},size:{options:["sm","md","lg"],control:"radio"},theme:{options:["light","dark"],control:"radio"},autocomplete:{options:["on","off"],control:"radio"},clear:{action:"Cleared!"},valueChange:{action:"Value changed!"}},component:___WEBPACK_IMPORTED_MODULE_1__.o},Template=args=>({props:args,template:'\n        <cds-search\n            [theme]="theme"\n            [placeholder]="placeholder"\n            [autocomplete]="autocomplete"\n            [disabled]="disabled"\n            [size]="size"\n            (valueChange)="valueChange($event)"\n            (clear)="clear()"\n            [fluid]="fluid"\n            [skeleton]="skeleton"\n            [expandable]="expandable">\n        </cds-search>\n    '}),Basic=Template.bind({}),Fluid=Template.bind({});Fluid.args={fluid:!0},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-search\n            [theme]="theme"\n            [placeholder]="placeholder"\n            [autocomplete]="autocomplete"\n            [disabled]="disabled"\n            [size]="size"\n            (valueChange)="valueChange($event)"\n            (clear)="clear()"\n            [fluid]="fluid"\n            [skeleton]="skeleton"\n            [expandable]="expandable">\n        </cds-search>\n    `\n})',...Basic.parameters?.docs?.source}}},Fluid.parameters={...Fluid.parameters,docs:{...Fluid.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-search\n            [theme]="theme"\n            [placeholder]="placeholder"\n            [autocomplete]="autocomplete"\n            [disabled]="disabled"\n            [size]="size"\n            (valueChange)="valueChange($event)"\n            (clear)="clear()"\n            [fluid]="fluid"\n            [skeleton]="skeleton"\n            [expandable]="expandable">\n        </cds-search>\n    `\n})',...Fluid.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Fluid"]},"./src/search/search.component.html?ngResource":module=>{module.exports='<div\n\tclass="cds--search"\n\t[ngClass]="{\n\t\t\'cds--search--sm\': size === \'sm\',\n\t\t\'cds--search--md\': size === \'md\',\n\t\t\'cds--search--lg\': size === \'lg\',\n\t\t\'cds--search--light\': theme === \'light\',\n\t\t\'cds--skeleton\': skeleton && !fluid,\n\t\t\'cds--search--expandable\': expandable && !tableSearch,\n\t\t\'cds--search--expanded\': expandable && !tableSearch && active,\n\t\t\'cds--toolbar-search\': toolbar && !expandable,\n\t\t\'cds--toolbar-search--active\': toolbar && !expandable && active,\n\t\t\'cds--toolbar-search-container-persistent\': tableSearch && !expandable,\n\t\t\'cds--toolbar-search-container-expandable\': tableSearch && expandable,\n\t\t\'cds--toolbar-search-container-active\': tableSearch && expandable && active,\n\t\t\'cds--search--fluid\': fluid,\n\t\t\'cds--search--disabled\': disabled\n\t}"\n\trole="search"\n\t[attr.aria-label]="ariaLabel"\n\t(click)="openSearch()">\n\t<label\n\t\tclass="cds--label"\n\t\t[for]="id"\n\t\t[ngClass]="{ \'cds--skeleton\': skeleton && fluid }">\n\t\t{{ !skeleton ? label : \'\'}}\n\t</label>\n\n\t<div *ngIf="skeleton; else enableInput" class="cds--text-input cds--skeleton"></div>\n\t<ng-template #enableInput>\n\t\t<input\n\t\t\t#input\n\t\t\tclass="cds--search-input"\n\t\t\t[type]="tableSearch || !toolbar ? \'text\' : \'search\'"\n\t\t\t[id]="id"\n\t\t\t[value]="value"\n\t\t\t[autocomplete]="autocomplete"\n\t\t\t[placeholder]="placeholder"\n\t\t\t[disabled]="disabled"\n\t\t\t[required]="required"\n\t\t\t(input)="onSearch($event.target.value)"\n\t\t\t(keyup.enter)="onEnter()"/>\n\t\t<button\n\t\t\t*ngIf="!tableSearch && toolbar"\n\t\t\tclass="cds--toolbar-search__btn"\n\t\t\t(click)="openSearch()"\n\t\t\taria-label="Open search">\n\t\t\t<svg cdsIcon="search" size="16" class="cds--search-magnifier-icon"></svg>\n\t\t</button>\n\t\t<svg\n\t\t\tcdsIcon="search"\n\t\t\t*ngIf="tableSearch || !toolbar"\n\t\t\tclass="cds--search-magnifier-icon"\n\t\t\tsize="16">\n\t\t</svg>\n\t</ng-template>\n\n\t<button\n\t\t*ngIf="tableSearch || !toolbar"\n\t\tclass="cds--search-close"\n\t\t[ngClass]="{\n\t\t\t\'cds--search-close--hidden\': !value || value.length === 0\n\t\t}"\n\t\t[title]="clearButtonTitle"\n\t\t(click)="clearSearch()">\n\t\t<span class="cds--visually-hidden">{{ clearButtonTitle }}</span>\n\t\t<svg cdsIcon="close" size="16"></svg>\n\t</button>\n</div>\n'}}]);