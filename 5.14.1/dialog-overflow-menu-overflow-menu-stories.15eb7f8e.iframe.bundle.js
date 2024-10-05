"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[140],{"./node_modules/@carbon/utils-position/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _a,PLACEMENTS;__webpack_require__.d(__webpack_exports__,{FK:()=>position,ZP:()=>__WEBPACK_DEFAULT_EXPORT__}),function(PLACEMENTS){PLACEMENTS.LEFT="left",PLACEMENTS.RIGHT="right",PLACEMENTS.TOP="top",PLACEMENTS.BOTTOM="bottom"}(PLACEMENTS||(PLACEMENTS={}));var defaultPositions=((_a={})[PLACEMENTS.LEFT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left-target.offsetWidth)}},_a[PLACEMENTS.RIGHT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left+referenceRect.width)}},_a[PLACEMENTS.TOP]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top-target.offsetHeight),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a[PLACEMENTS.BOTTOM]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top+referenceRect.height),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a),windowRef="undefined"!=typeof window?window:{innerHeight:0,scrollY:0,innerWidth:0,scrollX:0},Position=function(){function Position(positions){void 0===positions&&(positions={}),this.positions=defaultPositions,this.positions=Object.assign({},defaultPositions,positions)}return Position.prototype.getRelativeOffset=function(target){for(var offsets={left:target.offsetLeft,top:target.offsetTop};target.offsetParent&&"static"===getComputedStyle(target.offsetParent).position;)offsets.left+=target.offsetLeft,offsets.top+=target.offsetTop,target=target.offsetParent;return offsets},Position.prototype.getAbsoluteOffset=function(target){for(var currentNode=target,margins={top:0,left:0};currentNode.offsetParent;){var computed=getComputedStyle(currentNode.offsetParent);"static"===computed.position&&computed.marginLeft&&computed.marginTop&&(parseInt(computed.marginTop,10)&&(margins.top+=parseInt(computed.marginTop,10)),parseInt(computed.marginLeft,10)&&(margins.left+=parseInt(computed.marginLeft,10))),currentNode=currentNode.offsetParent}var targetRect=target.getBoundingClientRect(),relativeRect=document.body.getBoundingClientRect();return{top:targetRect.top-relativeRect.top+margins.top,left:targetRect.left-relativeRect.left+margins.left}},Position.prototype.findRelative=function(reference,target,placement){var referenceOffset=this.getRelativeOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findAbsolute=function(reference,target,placement){var referenceOffset=this.getAbsoluteOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPosition=function(reference,target,placement,offsetFunction){void 0===offsetFunction&&(offsetFunction=this.getAbsoluteOffset.bind(this));var referenceOffset=offsetFunction(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPositionAt=function(offset,target,placement){return this.calculatePosition(offset,{top:0,left:0,height:0,width:0},target,placement)},Position.prototype.getPlacementBox=function(target,position){var targetBottom=target.offsetHeight+position.top,targetRight=target.offsetWidth+position.left;return{top:position.top,bottom:targetBottom,left:position.left,right:targetRight}},Position.prototype.addOffset=function(position,top,left){return void 0===top&&(top=0),void 0===left&&(left=0),Object.assign({},position,{top:position.top+top,left:position.left+left})},Position.prototype.setElement=function(element,position){element.style.top=position.top+"px",element.style.left=position.left+"px"},Position.prototype.findBestPlacement=function(reference,target,placements,containerFunction,positionFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this)),void 0===positionFunction&&(positionFunction=this.findPosition.bind(this));var weightedPlacements=placements.map((function(placement){var pos=positionFunction(reference,target,placement),box=_this.getPlacementBox(target,pos),hiddenHeight=0,hiddenWidth=0,container=containerFunction();box.top<container.top?hiddenHeight=container.top-box.top:box.bottom>container.height&&(hiddenHeight=box.bottom-container.height),box.left<container.left?hiddenWidth=container.left-box.left:box.right>container.width&&(hiddenWidth=box.right-container.width),hiddenHeight&&!hiddenWidth?hiddenWidth=1:hiddenWidth&&!hiddenHeight&&(hiddenHeight=1);var area=target.offsetHeight*target.offsetWidth;return{placement,weight:(area-hiddenHeight*hiddenWidth)/area}}));return weightedPlacements.sort((function(a,b){return b.weight-a.weight})),weightedPlacements[0].placement},Position.prototype.findBestPlacementAt=function(offset,target,placements,containerFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this));return this.findBestPlacement(null,target,placements,containerFunction,(function(_,target,placement){return _this.findPositionAt(offset,target,placement)}))},Position.prototype.defaultContainerFunction=function(){return{top:0,left:0,height:windowRef.innerHeight,width:windowRef.innerWidth}},Position.prototype.calculatePosition=function(referenceOffset,referenceRect,target,placement){return this.positions[placement]?this.positions[placement](referenceOffset,target,referenceRect):(console.error("No function found for placement, defaulting to 0,0"),{left:0,top:0})},Position}(),position=new Position;const __WEBPACK_DEFAULT_EXPORT__=Position},"./src/dialog/overflow-menu/overflow-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Custom:()=>Custom,CustomTrigger:()=>CustomTrigger,WithLink:()=>WithLink,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/dialog/index.ts"),_placeholder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/placeholder/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/index.ts"),_checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/checkbox/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Overflow Menu",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.Su,_placeholder__WEBPACK_IMPORTED_MODULE_2__.Qq,_icon__WEBPACK_IMPORTED_MODULE_3__.QX,_checkbox__WEBPACK_IMPORTED_MODULE_4__.nD]})],args:{placement:"bottom"},argTypes:{code:{control:!1}},component:___WEBPACK_IMPORTED_MODULE_1__.PQ},Basic=(args=>({props:args,template:'\n\t\t<cds-overflow-menu\n\t\t\t[placement]="placement"\n\t\t\t[open]="open"\n\t\t\t[flip]="flip"\n\t\t\t[offset]="offset">\n\t\t\t<cds-overflow-menu-option (selected)="selected($event)" (click)="click($event)">\n\t\t\t\tAn example option that is really long to show what should be done to handle long text\n\t\t\t</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option (selected)="selected($event)" innerClass="a-custom-class">Option 2</cds-overflow-menu-option>\n\t\t\t<li class="cds--overflow-menu-options__option">\n\t\t\t\t<button class="cds--overflow-menu-options__btn">A fully custom option</button>\n\t\t\t</li>\n\t\t\t<cds-overflow-menu-option (selected)="selected($event)">Option 4</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option disabled="true" (selected)="selected($event)" [divider]="true">Disabled</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</cds-overflow-menu-option>\n\t\t</cds-overflow-menu>\n\t\t<cds-placeholder></cds-placeholder>\n\t'})).bind({});Basic.args={open:!1,flip:!1,offset:{x:0,y:0}},Basic.argTypes={click:{type:"function",defaultValue:()=>{console.log("clicked!")},control:!1},selected:{type:"function",defaultValue:()=>{console.log("selected!")},control:!1}},Basic.parameters={layout:"centered"};const WithLink=(args=>({props:args,template:'\n\t\t<div>\n\t\t\t<h1 style="margin-bottom: 1rem">Bottom placement</h1>\n\t\t\t<cds-overflow-menu\n\t\t\t\t[flip]="flip"\n\t\t\t\t[offset]="offset">\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)" (click)="click($event)">\n\t\t\t\t\tAn example option that is really long to show what should be done to handle long text\n\t\t\t\t</cds-overflow-menu-option>\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" target="_blank" (selected)="selected($event)">Option 2</cds-overflow-menu-option>\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 3</cds-overflow-menu-option>\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" (selected)="selected($event)">Option 4</cds-overflow-menu-option>\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" disabled="true" (selected)="selected($event)">Disabled</cds-overflow-menu-option>\n\t\t\t\t<cds-overflow-menu-option href="https://www.ibm.com" type="danger" (selected)="selected($event)">\n\t\t\t\t\tDanger option\n\t\t\t\t</cds-overflow-menu-option>\n\t\t\t</cds-overflow-menu>\n\t\t</div>\n\t\t<cds-placeholder></cds-placeholder>\n\t'})).bind({});WithLink.args={flip:!1,offset:{x:0,y:0}},WithLink.argTypes={click:{type:"function",defaultValue:()=>{console.log("clicked!")},control:!1},selected:{type:"function",defaultValue:()=>{console.log("selected!")},control:!1}};const Custom=(args=>({props:args,template:'\n\t\t<p style="padding-bottom: 1rem;">\n\t\tWhen writing a custom template to be inserted into an overflow menu\n\t\tit becomes your responsibility to make sure tab order/keyboard nav is implemented correctly\n\t\t</p>\n\t\t<button\n\t\t\tstyle="border: none; width: 3rem; height: 3rem; background-color: lightgrey;\n\t\t\tdisplay: flex; align-items: center; justify-content: center;"\n\t\t\t[cdsOverflowMenu]="templateRef"\n\t\t\t[customPane]="true"\n\t\t\tplacement="bottom"\n\t\t\t[offset]="{ x: -8, y: 0 }">\n\t\t\t<svg cdsIcon="settings" size="16"></svg>\n\t\t</button>\n\t\t<ng-template #templateRef>\n\t\t\t<div style="padding: 0 1rem;">\n\t\t\t\t<div style="padding-top: 0.5rem; color: grey;">Columns</div>\n\t\t\t\t<div><cds-checkbox [checked]="true">Status</cds-checkbox></div>\n\t\t\t\t<div><cds-checkbox>Last modified</cds-checkbox></div>\n\t\t\t</div>\n\t\t</ng-template>\n\t'})).bind({});Custom.storyName="Custom Template";const CustomTrigger=(args=>({props:args,template:'\n\t\t<span>Overflow menu with custom trigger icon</span>\n\t\t<cds-overflow-menu\n\t\t\t[flip]="flip"\n\t\t\t[open]="open"\n\t\t\t[customTrigger]="customTrigger"\n\t\t\t[placement]="placement"\n\t\t\t[offset]="offset">\n\t\t\t<cds-overflow-menu-option (selected)="selected($event)" (click)="click($event)">Option 1</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option (selected)="selected($event)">Option 2</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option disabled="true" (selected)="selected($event)">Disabled</cds-overflow-menu-option>\n\t\t\t<cds-overflow-menu-option type="danger" (selected)="selected($event)">Danger option</cds-overflow-menu-option>\n\t\t</cds-overflow-menu>\n\t\t<cds-placeholder></cds-placeholder>\n\t\t<ng-template #customTrigger><svg cdsIcon="document" size="16"></svg></ng-template>\n\t'})).bind({});CustomTrigger.storyName="With custom trigger"},"./src/checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox,nD:()=>CheckboxModule});var CheckboxState,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");!function(CheckboxState){CheckboxState[CheckboxState.Init=0]="Init",CheckboxState[CheckboxState.Indeterminate=1]="Indeterminate",CheckboxState[CheckboxState.Checked=2]="Checked",CheckboxState[CheckboxState.Unchecked=3]="Unchecked"}(CheckboxState||(CheckboxState={}));let Checkbox=class Checkbox{constructor(changeDetectorRef){this.changeDetectorRef=changeDetectorRef,this.disabled=!1,this.skeleton=!1,this.hideLabel=!1,this.id=`checkbox-${Checkbox.checkboxCount}`,this.click=new core.EventEmitter,this.checkedChange=new core.EventEmitter,this.indeterminateChange=new core.EventEmitter,this._checked=!1,this._indeterminate=!1,this.currentCheckboxState=CheckboxState.Init,this.onTouched=()=>{},this.propagateChange=_=>{},Checkbox.checkboxCount++}set indeterminate(indeterminate){indeterminate!==this._indeterminate&&(this._indeterminate=indeterminate,this._indeterminate?this.transitionCheckboxState(CheckboxState.Indeterminate):this.transitionCheckboxState(this.checked?CheckboxState.Checked:CheckboxState.Unchecked),this.inputCheckbox&&this.inputCheckbox.nativeElement&&(this.inputCheckbox.nativeElement.indeterminate=indeterminate),this.changeDetectorRef.markForCheck(),this.indeterminateChange.emit(this._indeterminate))}get indeterminate(){return this._indeterminate}set checked(checked){this.setChecked(checked,!1)}get checked(){return this._checked}toggle(){this.setChecked(!this.checked,!0)}writeValue(value){this.setChecked(!!value,!0)}registerOnChange(fn){this.propagateChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this.disabled=isDisabled,this.changeDetectorRef.markForCheck()}focusOut(){this.onTouched()}onChange(event){event.stopPropagation()}onClick(event){if(this.click.observers.length)return event.preventDefault(),void this.click.emit();this.disabled||(this.toggle(),this.transitionCheckboxState(this._checked?CheckboxState.Checked:CheckboxState.Unchecked),this.emitChangeEvent())}transitionCheckboxState(newState){this.currentCheckboxState=newState}emitChangeEvent(){this.checkedChange.emit(this.checked),this.propagateChange(this.checked)}ngAfterViewInit(){this.indeterminate&&this.inputCheckbox&&this.inputCheckbox.nativeElement&&(this.inputCheckbox.nativeElement.indeterminate=!0)}setChecked(checked,resetIndeterminate){checked!==this._checked&&(this._checked=checked,resetIndeterminate&&this._indeterminate&&(this._indeterminate=!1,Promise.resolve().then((()=>{this.indeterminateChange.emit(this._indeterminate)}))),this.changeDetectorRef.markForCheck())}};Checkbox.checkboxCount=0,Checkbox.ctorParameters=()=>[{type:core.ChangeDetectorRef}],Checkbox.propDecorators={disabled:[{type:core.Input}],skeleton:[{type:core.Input}],hideLabel:[{type:core.Input}],name:[{type:core.Input}],id:[{type:core.Input}],required:[{type:core.Input}],value:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledby:[{type:core.Input}],indeterminate:[{type:core.Input}],checked:[{type:core.Input}],click:[{type:core.Output}],checkedChange:[{type:core.Output}],indeterminateChange:[{type:core.Output}],inputCheckbox:[{type:core.ViewChild,args:["inputCheckbox"]}],focusOut:[{type:core.HostListener,args:["focusout"]}]},Checkbox=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-checkbox, ibm-checkbox",template:'\n\t\t<div class="cds--form-item cds--checkbox-wrapper">\n\t\t\t<input\n\t\t\t\t#inputCheckbox\n\t\t\t\tclass="cds--checkbox"\n\t\t\t\ttype="checkbox"\n\t\t\t\t[id]="id + \'_input\'"\n\t\t\t\t[value]="value"\n\t\t\t\t[name]="name"\n\t\t\t\t[required]="required"\n\t\t\t\t[checked]="checked"\n\t\t\t\t[disabled]="disabled"\n\t\t\t\t[attr.aria-labelledby]="ariaLabelledby"\n\t\t\t\t(change)="onChange($event)"\n\t\t\t\t(click)="onClick($event)">\n\t\t\t<label\n\t\t\t\t[for]="id + \'_input\'"\n\t\t\t\t[attr.aria-label]="ariaLabel"\n\t\t\t\tclass="cds--checkbox-label"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--skeleton\' : skeleton\n\t\t\t\t}">\n\t\t\t\t<span [ngClass]="{\'cds--visually-hidden\' : hideLabel}" class="cds--checkbox-label-text">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t</div>\n\t',providers:[{provide:fesm2020_forms.JU,useExisting:Checkbox,multi:!0}],changeDetection:core.ChangeDetectionStrategy.OnPush})],Checkbox);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let CheckboxModule=class CheckboxModule{};CheckboxModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Checkbox],exports:[Checkbox],imports:[common.CommonModule,fesm2020_forms.u5]})],CheckboxModule)},"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root;svg.setAttribute("xmlns","http://www.w3.org/2000/svg");const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElement("title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_52__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_52__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_53__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_52__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_54__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")}}]);