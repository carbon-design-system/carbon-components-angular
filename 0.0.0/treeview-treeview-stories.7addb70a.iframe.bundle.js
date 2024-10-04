"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[6456],{"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root;svg.setAttribute("xmlns","http://www.w3.org/2000/svg");const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElement("title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/folder/16.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js"),_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/@carbon/icons/es/view/16.js"),_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@carbon/icons/es/view--off/16.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_55__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_55__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_folder_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_view_16__WEBPACK_IMPORTED_MODULE_53__.Z,_carbon_icons_es_view_off_16__WEBPACK_IMPORTED_MODULE_54__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_51__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_52__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_56__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_55__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_57__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")},"./src/treeview/treeview.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ProjectedContent:()=>ProjectedContent,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>treeview_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),icon=__webpack_require__("./src/icon/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");let TreeViewService=class TreeViewService{constructor(){this.contentProjected=!0,this.isMultiSelect=!1,this.selectionSubject=new ReplaySubject.t(1),this.focusNodeSubject=new ReplaySubject.t(1),this.value=new Map,this.selectionObservable=this.selectionSubject.asObservable(),this.focusNodeObservable=this.focusNodeSubject.asObservable()}focusNode(node){this.focusNodeSubject.next(node)}selectNode(node){node&&(this.isMultiSelect||this.value.clear(),this.value.set(node.id,node),this.selectionSubject.next(this.value))}deselectNode(node){node&&(this.value.delete(node.id),this.selectionSubject.next(this.value))}deselectAllNodes(){this.value.clear(),this.selectionSubject.next(this.value)}};TreeViewService.ctorParameters=()=>[],TreeViewService=(0,tslib_es6.gn)([(0,core.Injectable)()],TreeViewService);let TreeViewComponent=class TreeViewComponent{constructor(document,treeViewService,elementRef){this.document=document,this.treeViewService=treeViewService,this.elementRef=elementRef,this.id="tree-view-"+TreeViewComponent.treeViewCount++,this.size="sm",this.select=new core.EventEmitter,this.toggle=new core.EventEmitter,this._tree=[]}set tree(treeNodes){this._tree=treeNodes.map((node=>this.copyNode(node))),this.treeViewService.contentProjected=!1}get tree(){return this._tree}set isMultiSelect(isMulti){this.treeViewService.isMultiSelect=isMulti}ngOnInit(){this.subscription=this.treeViewService.selectionObservable.subscribe((nodesMap=>{const nodes=[...nodesMap.values()];this.select.emit(this.treeViewService.isMultiSelect?nodes:nodes[0])})),this.subscription.add(this.treeViewService.focusNodeObservable.subscribe((node=>this.onNodeFocusChange(node))))}ngOnDestroy(){this.subscription.unsubscribe()}ngAfterViewInit(){this.treeWalker=this.document.createTreeWalker(this.root.nativeElement,NodeFilter.SHOW_ELEMENT,{acceptNode:function(node){return node.classList.contains("cds--tree-node--disabled")?NodeFilter.FILTER_REJECT:node.matches("div.cds--tree-node")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})}navigateTree(event){"ArrowUp"===event.key&&this.treeWalker.previousNode()?.focus(),"ArrowDown"===event.key&&this.treeWalker.nextNode()?.focus()}onNodeToggle(eventOnNode){eventOnNode&&this.toggle.emit(eventOnNode.node)}onNodeFocusChange(node){this.treeWalker.currentNode=node?this.elementRef.nativeElement.querySelector(`#${CSS.escape(node.id)}`):this.treeWalker.root}isTemplate(value){return value instanceof core.TemplateRef}isProjected(){return this.treeViewService.contentProjected}copyNode(node){const copiedNode=Object.assign({},node);return node.children&&(copiedNode.children=node.children.map((child=>this.copyNode(child)))),copiedNode}};TreeViewComponent.treeViewCount=0,TreeViewComponent.ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]},{type:TreeViewService},{type:core.ElementRef}],TreeViewComponent.propDecorators={tree:[{type:core.Input}],id:[{type:core.Input}],label:[{type:core.Input}],labelContext:[{type:core.Input}],size:[{type:core.Input}],isMultiSelect:[{type:core.Input}],select:[{type:core.Output}],toggle:[{type:core.Output}],root:[{type:core.ViewChild,args:["treeWrapper"]}]},TreeViewComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tree-view",template:'\n\t\t<label\n\t\t\t*ngIf="label"\n\t\t\t[id]="id"\n\t\t\tclass="cds--label">\n\t\t\t<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>\n\t\t\t<ng-template\n\t\t\t\t*ngIf="isTemplate(label)"\n\t\t\t\t[ngTemplateOutlet]="label"\n\t\t\t\t[ngTemplateOutletContext]="{ $implicit: labelContext }">\n\t\t\t</ng-template>\n\t\t</label>\n\t\t<div\n\t\t\tclass="cds--tree"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--tree--sm\': size === \'sm\',\n\t\t\t\t\'cds--tree--xs\': size === \'xs\'\n\t\t\t}"\n\t\t\t[attr.aria-label]="label ? label : null"\n\t\t\t[attr.aria-labelledby]="!label ? id : null"\n\t\t\t[attr.aria-multiselectable]="isMultiSelect || null"\n\t\t\trole="tree"\n\t\t\t(keydown)="navigateTree($event)"\n\t\t\t#treeWrapper>\n\t\t\t<ng-container *ngIf="isProjected(); else notProjected">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ng-container>\n\t\t\t<ng-template #notProjected>\n\t\t\t\t<cds-tree-node\n\t\t\t\t\t*ngFor="let node of tree"\n\t\t\t\t\t[node]="node"\n\t\t\t\t\t(nodetoggle)="onNodeToggle($event)">\n\t\t\t\t</cds-tree-node>\n\t\t\t</ng-template>\n\t\t</div>\n\t',providers:[TreeViewService]})],TreeViewComponent);let TreeNodeComponent=class TreeNodeComponent{constructor(treeViewService){this.treeViewService=treeViewService,this.id="tree-node-"+TreeNodeComponent.treeNodeCount++,this.active=!1,this.disabled=!1,this.selectable=!0,this.expanded=!1,this.selected=!1,this.gap=0,this.children=[],this.depth=0,this.nodeFocus=new core.EventEmitter,this.nodeBlur=new core.EventEmitter,this.nodeSelect=new core.EventEmitter,this.nodetoggle=new core.EventEmitter}set node(node){this._node=node,this.id=node.id??this.id,this.active=node.active??this.active,this.disabled=node.disabled??this.disabled,this.selectable=node.selectable??this.selectable,this.expanded=node.expanded??this.expanded,this.label=node.label??this.label,this.labelContext=node.labelContext??this.labelContext,this.value=node.value??this.value,this.icon=node.icon??this.icon,this.selected=node.selected??this.selected,this.depth=node.depth??this.depth,this.gap=node.gap??this.gap,this.children=node.children??this.children,this.iconContext=node.iconText??this.iconContext}get node(){return this._node}ngAfterContentChecked(){this.offset=this.calculateOffset()}ngOnInit(){this.subscription=this.treeViewService.selectionObservable.subscribe((value=>{this.selected=this.selectable&&value.has(this.id),this.active=this.selectable&&this.selected}))}ngOnDestroy(){this.subscription?.unsubscribe()}nodeClick(event){if(!this.disabled)if(event.target.parentElement.focus(),this.selectable||0===this.children.length){this.selected=!0,this.active=!0;const node={id:this.id,label:this.label,value:this.value};this.treeViewService.selectNode(node),this.nodeSelect.emit(node)}else this.toggleExpanded(event)}calculateOffset(){return this.children.length&&this.icon?this.depth+1+.5*this.depth:this.children.length?this.depth+1:this.icon?this.depth+2+.5*this.depth:this.depth+this.gap+2.5}emitFocusEvent(event){const node={id:this.id,label:this.label,value:this.value};this.nodeFocus.emit({node,event}),this.treeViewService.focusNode(node)}emitBlurEvent(event){this.nodeBlur.emit({node:{id:this.id,label:this.label,value:this.value},event})}toggleExpanded(event){this.disabled||(this.nodetoggle.emit({node:{id:this.id,label:this.label,value:this.value},event}),this.expanded=!this.expanded,event.stopPropagation())}navigateTree(event){"ArrowLeft"!==event.key&&"ArrowRight"!==event.key&&"Enter"!==event.key||event.stopPropagation(),"ArrowLeft"===event.key&&this.expanded&&this.children&&this.toggleExpanded(event),"ArrowRight"===event.key&&!this.expanded&&this.children&&this.toggleExpanded(event),"Enter"===event.key&&(event.preventDefault(),this.nodeClick(event))}isTemplate(value){return value instanceof core.TemplateRef}isProjected(){return this.treeViewService.contentProjected}};TreeNodeComponent.treeNodeCount=0,TreeNodeComponent.ctorParameters=()=>[{type:TreeViewService}],TreeNodeComponent.propDecorators={id:[{type:core.Input}],active:[{type:core.Input}],disabled:[{type:core.Input}],selectable:[{type:core.Input}],expanded:[{type:core.Input}],label:[{type:core.Input}],labelContext:[{type:core.Input}],selected:[{type:core.Input}],value:[{type:core.Input}],icon:[{type:core.Input}],iconContext:[{type:core.Input}],gap:[{type:core.Input}],children:[{type:core.Input}],depth:[{type:core.Input}],node:[{type:core.Input}],nodeFocus:[{type:core.Output}],nodeBlur:[{type:core.Output}],nodeSelect:[{type:core.Output}],nodetoggle:[{type:core.Output}]},TreeNodeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tree-node",template:'\n\t\t<div\n\t\t\t[id]="id"\n\t\t\tclass="cds--tree-node"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--tree-node--active\': active,\n\t\t\t\t\'cds--tree-node--disabled\': disabled,\n\t\t\t\t\'cds--tree-node--selected\': selected,\n\t\t\t\t\'cds--tree-leaf-node\': !children.length,\n\t\t\t\t\'cds--tree-parent-node\': children.length,\n\t\t\t\t\'cds--tree-node--with-icon\': icon\n\t\t\t}"\n\t\t\t[attr.aria-expanded]="expanded || null"\n\t\t\t[attr.aria-current]="active || null"\n\t\t\t[attr.aria-selected]="disabled ? null : selected"\n\t\t\t[attr.aria-disabled]="disabled"\n\t\t\trole="treeitem"\n\t\t\t[attr.tabindex]="selected ? 0 : -1"\n\t\t\t(focus)="emitFocusEvent($event)"\n\t\t\t(blur)="emitBlurEvent($event)"\n\t\t\t(keydown)="navigateTree($event)">\n\t\t\t<div\n\t\t\t\t*ngIf="!children.length"\n\t\t\t\tclass="cds--tree-node__label"\n\t\t\t\t[style.padding-inline-start.rem]="offset"\n\t\t\t\t[style.margin-inline-start.rem]="-offset"\n\t\t\t\t(click)="nodeClick($event)">\n\t\t\t\t\x3c!-- Icon --\x3e\n\t\t\t\t<ng-container *ngIf="icon && !isTemplate(icon)">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tclass="cds--tree-node__icon"\n\t\t\t\t\t\t[cdsIcon]="icon"\n\t\t\t\t\t\tsize="16">\n\t\t\t\t\t</svg>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-template *ngIf="isTemplate(icon)" [ngTemplateOutlet]="icon"></ng-template>\n\t\t\t\t<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf="isTemplate(label)"\n\t\t\t\t\t[ngTemplateOutlet]="label"\n\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: labelContext }">\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\t*ngIf="children.length"\n\t\t\t\tclass="cds--tree-node__label"\n\t\t\t\t[style.padding-inline-start.rem]="offset"\n\t\t\t\t[style.margin-inline-start.rem]="-offset"\n\t\t\t\trole="group"\n\t\t\t\t(click)="nodeClick($event)">\n\t\t\t\t<span\n\t\t\t\t\tclass="cds--tree-parent-node__toggle"\n\t\t\t\t\t[attr.disabled]="disabled || null"\n\t\t\t\t\t(click)="toggleExpanded($event)">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tclass="cds--tree-parent-node__toggle-icon"\n\t\t\t\t\t\t[ngClass]="{\'cds--tree-parent-node__toggle-icon--expanded\' : expanded}"\n\t\t\t\t\t\tibmIcon="caret--down"\n\t\t\t\t\t\tsize="16">\n\t\t\t\t\t</svg>\n\t\t\t\t</span>\n\t\t\t\t<span class="cds--tree-node__label__details">\n\t\t\t\t\t\x3c!-- Icon --\x3e\n\t\t\t\t\t<ng-container *ngIf="icon && !isTemplate(icon)">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\tclass="cds--tree-node__icon"\n\t\t\t\t\t\t\t[cdsIcon]="icon"\n\t\t\t\t\t\t\tsize="16">\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t*ngIf="isTemplate(icon)"\n\t\t\t\t\t\t[ngTemplateOutlet]="icon"\n\t\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: iconContext }">\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t*ngIf="isTemplate(label)"\n\t\t\t\t\t\t[ngTemplateOutlet]="label"\n\t\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: labelContext }">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\t*ngIf="expanded"\n\t\t\t\trole="group"\n\t\t\t\tclass="cds--tree-node__children">\n\t\t\t\t<ng-container *ngIf="isProjected(); else notProjected">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-template #notProjected>\n\t\t\t\t\t<cds-tree-node\n\t\t\t\t\t\t*ngFor="let childNode of children"\n\t\t\t\t\t\t[node]="childNode"\n\t\t\t\t\t\t[depth]="depth + 1"\n\t\t\t\t\t\t[disabled]="disabled"\n\t\t\t\t\t\t(nodetoggle)="nodetoggle.emit($event)">\n\t\t\t\t\t</cds-tree-node>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t'})],TreeNodeComponent);let TreeviewModule=class TreeviewModule{};TreeviewModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[TreeViewComponent,TreeNodeComponent],exports:[TreeViewComponent,TreeNodeComponent],imports:[common.CommonModule,icon.QX]})],TreeviewModule);let IconTreeviewDemoComponent=class IconTreeviewDemoComponent{constructor(){this.tree=[]}ngAfterViewInit(){this.tree=[{id:"1",value:"Artificial intelligence",label:"Artificial intelligence",icon:this.documentIcon},{id:"2",value:"Blockchain",label:"Blockchain",icon:this.documentIcon},{id:"3",value:"Business automation",label:"Business automation",children:[{id:"3-1",value:"Business process automation",label:"Business process automation",icon:this.documentIcon},{id:"3-2",value:"Business process mapping",label:"Business process mapping",icon:this.documentIcon}],icon:"folder"},{id:"4",value:"Business operations",label:"Business operations",icon:this.documentIcon},{id:"5",value:"Cloud computing",label:"Cloud computing",expanded:!0,children:[{id:"5-1",value:"Containers",label:"Containers",icon:this.documentIcon},{id:"5-2",value:"Databases",label:"Databases",icon:this.documentIcon},{id:"5-3",value:"DevOps",label:"DevOps",expanded:!0,children:[{id:"5-4",value:"Solutions",label:"Solutions",icon:this.documentIcon},{id:"5-5",value:"Case studies",label:"Case studies",expanded:!0,children:[{id:"5-6",value:"Resources",label:"Resources",icon:this.documentIcon}],icon:"folder"}],icon:"folder"}],icon:"folder"},{id:"6",value:"Data & Analytics",label:"Data & Analytics",children:[{id:"6-1",value:"Big data",label:"Big data",icon:this.documentIcon},{id:"6-2",value:"Business intelligence",label:"Business intelligence",icon:this.documentIcon}],icon:"folder"},{id:"7",value:"IT infrastructure",label:"IT infrastructure",expanded:!0,disabled:!0,children:[{id:"7-1",value:"Data storage",label:"Data storage",icon:this.documentIcon},{id:"7-2",value:"Enterprise servers",label:"Enterprise servers",icon:this.documentIcon},{id:"8",value:"Hybrid cloud infrastructure",label:"Hybrid cloud infrastructure",expanded:!0,children:[{id:"8-1",value:"Insights",label:"Insights",icon:this.documentIcon},{id:"8-2",value:"Benefits",label:"Benefits",icon:this.documentIcon}],icon:"folder"}],icon:"folder"}]}};IconTreeviewDemoComponent.propDecorators={documentIcon:[{type:core.ViewChild,args:["document"]}]},IconTreeviewDemoComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-treeview-icon-component",template:'\n\t\t<cds-tree-view\n\t\t\tlabel="Tree view"\n\t\t\tstyle="width: 18rem; display: block;"\n\t\t\t[tree]="tree">\n\t\t</cds-tree-view>\n\n\t\t<ng-template #document>\n\t\t\t<svg cdsIcon="document" class="cds--tree-node__icon" size="16"></svg>\n\t\t</ng-template>\n\t'})],IconTreeviewDemoComponent);const treeview_stories={title:"Components/Tree view",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TreeviewModule,icon.QX],declarations:[IconTreeviewDemoComponent]})],component:TreeViewComponent,subcomponents:TreeNodeComponent,args:{size:"sm",isMultiSelect:!1},argTypes:{size:{options:["xs","sm"],control:"radio"},onSelect:{action:"clicked"}}},nodes=[{id:"1",value:"Artificial intelligence",label:"Artificial intelligence"},{id:"2",value:"Blockchain",label:"Blockchain"},{id:"3",value:"Business automation",label:"Business automation",children:[{id:"3-1",value:"Business process automation",label:"Business process automation"},{id:"3-2",value:"Business process mapping",label:"Business process mapping"}]},{id:"4",value:"Business operations",label:"Business operations"},{id:"5",value:"Cloud computing",label:"Cloud computing",expanded:!0,children:[{id:"5-1",value:"Containers",label:"Containers"},{id:"5-2",value:"Databases",label:"Databases"},{id:"5-3",value:"DevOps",label:"DevOps",expanded:!0,children:[{id:"5-4",value:"Solutions",label:"Solutions"},{id:"5-5",value:"Case studies",label:"Case studies",expanded:!0,children:[{id:"5-6",value:"Resources",label:"Resources"}]}]}]},{id:"6",value:"Data & Analytics",label:"Data & Analytics",children:[{id:"6-1",value:"Big data",label:"Big data"},{id:"6-2",value:"Business intelligence",label:"Business intelligence"}]},{id:"7",value:"Not selectable node",label:"Not selectable node",selectable:!1,children:[{id:"7-1",value:"Child 1",label:"Child 1"},{id:"7-2",value:"Child 2",label:"Child 2"}]},{id:"8",value:"IT infrastructure",label:"IT infrastructure",expanded:!0,disabled:!0,children:[{id:"8-1",value:"Data storage",label:"Data storage"},{id:"8-2",value:"Enterprise servers",label:"Enterprise servers"},{id:"9",value:"Hybrid cloud infrastructure",label:"Hybrid cloud infrastructure",expanded:!0,children:[{id:"9-1",value:"Insights",label:"Insights"},{id:"9-2",value:"Benefits",label:"Benefits"}]}]}],Basic=(args=>({props:args,template:'\n        <cds-tree-view\n            label="Tree view"\n            style="width: 18rem; display: block;"\n            [size]="size"\n            [tree]="tree"\n            [isMultiSelect]="isMultiSelect"\n            (select)="onSelect($event)">\n        </cds-tree-view>\n    '})).bind({});Basic.args={tree:nodes},Basic.argTypes={tree:{control:!1}};const ProjectedContent=(args=>({props:args,template:'\n        <cds-tree-view\n            label="Tree view"\n            style="width: 18rem; display: block;"\n            [size]="size"\n            [isMultiSelect]="isMultiSelect"\n            (select)="onSelect($event)">\n\n            <ng-template #nodeTemplateRef let-node="node" let-depth="depth" let-disabled="disabled">\n\n                <cds-tree-node\n                    [node]="node"\n                    [depth]="depth"\n                    [disabled]="disabled">\n                    <ng-container *ngIf="node.children && node.children.length">\n                        <ng-container *ngFor="let child of node.children; let i = index;">\n                        \x3c!-- Increase the depth by 1 --\x3e\n                            <ng-container\n                                *ngTemplateOutlet="nodeTemplateRef; context: {node: child, depth: depth + 1, disabled };">\n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n                </cds-tree-node>\n\n            </ng-template>\n\n            <ng-container *ngFor="let node of tree">\n                <ng-container\n                    *ngTemplateOutlet="nodeTemplateRef; context: {node: node, depth: 0, disabled: node.disabled };">\n                </ng-container>\n            </ng-container>\n        </cds-tree-view>\n    '})).bind({});ProjectedContent.args={tree:nodes},ProjectedContent.argTypes={tree:{control:!1}};const WithIcons=(args=>({props:args,template:"\n        <app-treeview-icon-component></app-treeview-icon-component>\n    "})).bind({});WithIcons.argTypes={tree:{control:!1}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-tree-view\n            label="Tree view"\n            style="width: 18rem; display: block;"\n            [size]="size"\n            [tree]="tree"\n            [isMultiSelect]="isMultiSelect"\n            (select)="onSelect($event)">\n        </cds-tree-view>\n    `\n})',...Basic.parameters?.docs?.source}}},ProjectedContent.parameters={...ProjectedContent.parameters,docs:{...ProjectedContent.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-tree-view\n            label="Tree view"\n            style="width: 18rem; display: block;"\n            [size]="size"\n            [isMultiSelect]="isMultiSelect"\n            (select)="onSelect($event)">\n\n            <ng-template #nodeTemplateRef let-node="node" let-depth="depth" let-disabled="disabled">\n\n                <cds-tree-node\n                    [node]="node"\n                    [depth]="depth"\n                    [disabled]="disabled">\n                    <ng-container *ngIf="node.children && node.children.length">\n                        <ng-container *ngFor="let child of node.children; let i = index;">\n                        \x3c!-- Increase the depth by 1 --\x3e\n                            <ng-container\n                                *ngTemplateOutlet="nodeTemplateRef; context: {node: child, depth: depth + 1, disabled };">\n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n                </cds-tree-node>\n\n            </ng-template>\n\n            <ng-container *ngFor="let node of tree">\n                <ng-container\n                    *ngTemplateOutlet="nodeTemplateRef; context: {node: node, depth: 0, disabled: node.disabled };">\n                </ng-container>\n            </ng-container>\n        </cds-tree-view>\n    `\n})',...ProjectedContent.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n        <app-treeview-icon-component></app-treeview-icon-component>\n    `\n})",...WithIcons.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","ProjectedContent","WithIcons"]}}]);