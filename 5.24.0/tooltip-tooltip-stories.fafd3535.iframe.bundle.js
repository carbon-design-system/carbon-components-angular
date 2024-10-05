"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[4253],{"./src/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OI:()=>PopoverContainer,yk:()=>PopoverContent,UU:()=>PopoverModule});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs");let PopoverContainer=class PopoverContainer{constructor(elementRef,ngZone,renderer,changeDetectorRef){this.elementRef=elementRef,this.ngZone=ngZone,this.renderer=renderer,this.changeDetectorRef=changeDetectorRef,this._align="bottom",this.alignmentClassPrefix="cds--popover--",this.onClose=new core.EventEmitter,this.onOpen=new core.EventEmitter,this.isOpenChange=new core.EventEmitter,this.caret=!0,this.dropShadow=!0,this.highContrast=!1,this.autoAlign=!1,this.containerClass=!0,this.isOpen=!1}set align(alignment){if(!alignment)return;const previousAlignment=this._align;switch(alignment){case"top-left":this._align="top-start";break;case"top-right":this._align="top-end";break;case"bottom-left":this._align="bottom-start";break;case"bottom-right":this._align="bottom-end";break;case"left-top":this._align="left-start";break;case"left-bottom":this._align="left-end";break;case"right-top":this._align="right-start";break;case"right-bottom":this._align="right-end";break;default:this._align=alignment}this.updateAlignmentClass(this._align,previousAlignment)}handleChange(open,event){if(this.isOpen!==open&&event&&this.isOpenChange.emit(open),open){if(event&&this.onOpen.emit(event),this.autoAlign){if(this.caretRef){const computedStyle=getComputedStyle(this.caretRef),offset=computedStyle.getPropertyValue("--cds-popover-offset"),height=computedStyle.getPropertyValue("--cds-popover-caret-height");this.caretOffset=(offset?.includes("px")?Number(offset.split("px",1)[0]):16*Number(offset.split("rem",1)[0]))||10,this.caretHeight=(height?.includes("px")?Number(height.split("px",1)[0]):16*Number(height.split("rem",1)[0]))||6}this.elementRef.nativeElement&&this.popoverContentRef&&(this.unmountFloatingElement=(0,floating_ui_dom.Me)(this.elementRef.nativeElement,this.popoverContentRef,this.recomputePosition.bind(this)))}}else this.cleanUp(),event&&this.onClose.emit(event);this.isOpen=open,this.changeDetectorRef.markForCheck()}roundByDPR(value){const dpr=window.devicePixelRatio||1;return Math.round(value*dpr)/dpr}recomputePosition(){var _this=this;this.ngZone.runOutsideAngular((0,asyncToGenerator.Z)((function*(){const{x,y,placement,middlewareData}=yield(0,floating_ui_dom.oo)(_this.elementRef.nativeElement,_this.popoverContentRef,{placement:_this._align,strategy:"fixed",middleware:[(0,floating_ui_core.cv)(_this.caretOffset),(0,floating_ui_dom.RR)({fallbackAxisSideDirection:"start"}),(0,floating_ui_dom.x7)({element:_this.caretRef})]}),previousAlignment=_this._align;if(_this._align=placement,_this.updateAlignmentClass(_this._align,previousAlignment),Object.assign(_this.popoverContentRef.style,{position:"fixed",top:"0",left:"0",transform:`translate(${_this.roundByDPR(x)}px,${_this.roundByDPR(y)}px)`}),middlewareData.arrow){const{x:arrowX,y:arrowY}=middlewareData.arrow,staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]];_this.caretRef.style.left=null!=arrowX?`${arrowX}px`:"",_this.caretRef.style.top=null!=arrowY?`${arrowY}px`:"",_this.caretRef.style.right="",_this.caretRef.style.bottom="",staticSide&&(_this.caretRef.style[staticSide]=-_this.caretHeight+"px")}})))}ngOnChanges(changes){const originalState=this.isOpen;this.handleChange(!1),changes.autoAlign&&!changes.autoAlign.firstChange&&(this.popoverContentRef=this.elementRef.nativeElement.querySelector(".cds--popover-content"),this.popoverContentRef.setAttribute("style",""),this.caretRef=this.elementRef.nativeElement.querySelector("span.cds--popover-caret")),this.handleChange(originalState)}ngAfterViewInit(){this.initializeReferences()}initializeReferences(){this.updateAlignmentClass(this._align),this.popoverContentRef=this.elementRef.nativeElement.querySelector(".cds--popover-content"),this.caretRef=this.elementRef.nativeElement.querySelector("span.cds--popover-caret"),this.handleChange(this.isOpen)}ngOnDestroy(){this.cleanUp()}cleanUp(){this.unmountFloatingElement&&this.unmountFloatingElement(),this.unmountFloatingElement=void 0}updateAlignmentClass(newAlignment,previousAlignment){if(this.elementRef.nativeElement&&previousAlignment!==newAlignment){const regexp=new RegExp("right|top|left|bottom");this.elementRef.nativeElement.classList.forEach((className=>{regexp.test(className)&&this.renderer.removeClass(this.elementRef.nativeElement,`${className}`)})),this.renderer.addClass(this.elementRef.nativeElement,`${this.alignmentClassPrefix}${newAlignment}`)}}};PopoverContainer.ctorParameters=()=>[{type:core.ElementRef},{type:core.NgZone},{type:core.Renderer2},{type:core.ChangeDetectorRef}],PopoverContainer.propDecorators={align:[{type:core.Input}],onClose:[{type:core.Output}],onOpen:[{type:core.Output}],isOpenChange:[{type:core.Output}],caret:[{type:core.HostBinding,args:["class.cds--popover--caret"]},{type:core.Input}],dropShadow:[{type:core.HostBinding,args:["class.cds--popover--drop-shadow"]},{type:core.Input}],highContrast:[{type:core.HostBinding,args:["class.cds--popover--high-contrast"]},{type:core.Input}],autoAlign:[{type:core.HostBinding,args:["class.cds--popover--auto-align"]},{type:core.Input}],containerClass:[{type:core.HostBinding,args:["class.cds--popover-container"]}],isOpen:[{type:core.Input},{type:core.HostBinding,args:["class.cds--popover--open"]}]},PopoverContainer=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsPopover], [ibmPopover]"})],PopoverContainer);let PopoverContent=class PopoverContent{constructor(changeDetectorRef){this.changeDetectorRef=changeDetectorRef,this.popoverClass=!0,this.autoAlign=!1}ngAfterViewInit(){this.popoverContent&&(this.autoAlign=!!this.popoverContent.nativeElement.closest(".cds--popover--auto-align"),this.changeDetectorRef.detectChanges())}};PopoverContent.ctorParameters=()=>[{type:core.ChangeDetectorRef}],PopoverContent.propDecorators={popoverClass:[{type:core.HostBinding,args:["class.cds--popover"]}],popoverContent:[{type:core.ViewChild,args:["content"]}]},PopoverContent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-popover-content, ibm-popover-content",template:'\n\t\t<span class="cds--popover-content" #content>\n\t\t\t<div>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t\t<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>\n\t\t</span>\n\t\t<span *ngIf="!autoAlign" class="cds--popover-caret"></span>\n\t'})],PopoverContent);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let PopoverModule=class PopoverModule{};PopoverModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[PopoverContainer,PopoverContent],exports:[PopoverContainer,PopoverContent],imports:[common.CommonModule]})],PopoverModule)},"./src/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip,vD:()=>TooltipDefinition,z8:()=>TooltipModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),popover=__webpack_require__("./src/popover/index.ts");let Tooltip=class Tooltip extends popover.OI{constructor(elementRef,ngZone,renderer,changeDetectorRef){super(elementRef,ngZone,renderer,changeDetectorRef),this.elementRef=elementRef,this.ngZone=ngZone,this.renderer=renderer,this.changeDetectorRef=changeDetectorRef,this.tooltipClass=!0,this.id="tooltip-"+Tooltip.tooltipCount++,this.enterDelayMs=100,this.leaveDelayMs=300,this.disabled=!1,this.highContrast=!0,this.dropShadow=!1}mouseenter(event){setTimeout((()=>{this.handleChange(!0,event)}),this.enterDelayMs)}mouseleave(event){setTimeout((()=>{this.handleChange(!1,event)}),this.leaveDelayMs)}hostkeys(event){open&&"Escape"===event.key&&(event.stopPropagation(),this.handleChange(!1,event))}handleFocus(event){this.handleChange(!0,event)}handleFocusOut(event){this.handleChange(!1,event)}isTemplate(value){return value instanceof core.TemplateRef}ngAfterContentChecked(){if(this.wrapper){const buttonElement=this.wrapper.nativeElement.querySelector("button");buttonElement&&!buttonElement.getAttribute("aria-labelledby")&&buttonElement.setAttribute("aria-labelledby",this.id)}}};Tooltip.tooltipCount=0,Tooltip.ctorParameters=()=>[{type:core.ElementRef},{type:core.NgZone},{type:core.Renderer2},{type:core.ChangeDetectorRef}],Tooltip.propDecorators={tooltipClass:[{type:core.HostBinding,args:["class.cds--tooltip"]}],id:[{type:core.Input}],enterDelayMs:[{type:core.Input}],leaveDelayMs:[{type:core.Input}],disabled:[{type:core.Input}],description:[{type:core.Input}],templateContext:[{type:core.Input}],wrapper:[{type:core.ViewChild,args:["contentWrapper"]}],mouseenter:[{type:core.HostListener,args:["mouseenter",["$event"]]}],mouseleave:[{type:core.HostListener,args:["mouseleave",["$event"]]}],hostkeys:[{type:core.HostListener,args:["keyup",["$event"]]}],handleFocus:[{type:core.HostListener,args:["focusin",["$event"]]}],handleFocusOut:[{type:core.HostListener,args:["focusout",["$event"]]}]},Tooltip=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tooltip, ibm-tooltip",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n\t\t<span #contentWrapper>\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t\t<span\n\t\t\t*ngIf="description"\n\t\t\tclass="cds--popover"\n\t\t\t[id]="id"\n\t\t\t[attr.aria-hidden]="!isOpen"\n\t\t\trole="tooltip">\n\t\t\t<ng-container *ngIf="!disabled">\n\t\t\t\t<span class="cds--popover-content cds--tooltip-content">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>\n\t\t\t\t\t<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf="!autoAlign" class="cds--popover-caret"></span>\n\t\t\t</ng-container>\n\t\t</span>\n\t'})],Tooltip);let TooltipDefinition=class TooltipDefinition extends popover.OI{constructor(elementRef,ngZone,renderer,changeDetectorRef){super(elementRef,ngZone,renderer,changeDetectorRef),this.elementRef=elementRef,this.ngZone=ngZone,this.renderer=renderer,this.changeDetectorRef=changeDetectorRef,this.id="tooltip-definition-"+TooltipDefinition.tooltipCount++,this.highContrast=!0,this.dropShadow=!1}onBlur(event){this.handleChange(!1,event)}onClick(event){this.handleChange(!this.isOpen,event)}hostkeys(event){this.isOpen&&"Escape"===event.key&&(event.stopPropagation(),this.handleChange(!1,event))}mouseleave(event){this.handleChange(!1,event)}isTemplate(value){return value instanceof core.TemplateRef}};TooltipDefinition.tooltipCount=0,TooltipDefinition.ctorParameters=()=>[{type:core.ElementRef},{type:core.NgZone},{type:core.Renderer2},{type:core.ChangeDetectorRef}],TooltipDefinition.propDecorators={id:[{type:core.Input}],description:[{type:core.Input}],templateContext:[{type:core.Input}],hostkeys:[{type:core.HostListener,args:["keyup",["$event"]]}],mouseleave:[{type:core.HostListener,args:["mouseleave",["$event"]]}]},TooltipDefinition=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tooltip-definition, ibm-tooltip-definition",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n\t\t<button\n\t\t\tclass="cds--definition-term"\n\t\t\t[attr.aria-controls]="id"\n\t\t\t[attr.aria-expanded]="isOpen"\n\t\t\t(blur)="onBlur($event)"\n\t\t\t(click)="onClick($event)"\n\t\t\ttype="button">\n\t\t\t<ng-content></ng-content>\n\t\t</button>\n\t\t<span\n\t\t\t*ngIf="description"\n\t\t\tclass="cds--popover"\n\t\t\t[id]="id"\n\t\t\t[attr.aria-hidden]="isOpen"\n\t\t\trole="tooltip">\n\t\t\t<span class="cds--popover-content cds--definition-tooltip">\n\t\t\t\t<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>\n\t\t\t\t<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description" [ngTemplateOutletContext]="{ $implicit: templateContext }"></ng-template>\n\t\t\t\t<span *ngIf="autoAlign" class="cds--popover-caret cds--popover--auto-align"></span>\n\t\t\t</span>\n\t\t\t<span *ngIf="!autoAlign" class="cds--popover-caret"></span>\n\t\t</span>\n\t'})],TooltipDefinition);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let TooltipModule=class TooltipModule{};TooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Tooltip,TooltipDefinition],exports:[Tooltip,TooltipDefinition],imports:[common.CommonModule,popover.UU]})],TooltipModule)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./src/tooltip/tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Ellipses:()=>Ellipses,WithAutoAlign:()=>WithAutoAlign,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tooltip/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.z8]})],args:{isOpen:!0,caret:!0,description:"Occassionally, services are updated in a specified time window to ensure no down time for customers.",align:"bottom",autoAlign:!1},argTypes:{autoAlign:{control:!1},onOpen:{control:"Opened!"},onClose:{control:"Closed!"},isOpenChange:{control:"Is Open Change!"},align:{options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],control:"select"}},component:___WEBPACK_IMPORTED_MODULE_1__.u},Basic=(args=>({props:args,template:'\n        <cds-tooltip\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            (onOpen)="onOpen($event)"\n            (onClose)="onClose($event)"\n            (isOpenChange)="isOpenChange($event)"\n            [description]="description">\n            <button type="button" class="tooltip-trigger">\n                <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                    <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                </svg>\n            </button>\n        </cds-tooltip>\n    ',styles:["\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    "]})).bind({});Basic.parameters={docs:{story:{inline:!1,iframeHeight:"18rem"}},layout:"centered"};const Ellipses=(args=>({props:args,template:'\n        <cds-tooltip\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            description="Tooltip for ellipsis because I can and I am really really long">\n            <span class="overflowText">\n                Tooltip for ellipsis because I can and I am really really long\n            </span>\n        </cds-tooltip>\n    ',styles:["\n        .overflowText {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            width: 100px;\n            display: inline-block;\n        }\n    "]})).bind({});Ellipses.argTypes={description:{control:!1}},Ellipses.parameters={docs:{story:{inline:!1,iframeHeight:"18rem"}},layout:"centered"};const WithAutoAlign=(args=>({props:args,template:'\n        <div style="height:3000px">\n            Scrolling will update the position of the popover:\n            <div style="position: absolute; top: 500px; left: 500px;">\n                <cds-tooltip\n                    [isOpen]="isOpen"\n                    [caret]="caret"\n                    [align]="align"\n                    [autoAlign]="true"\n                    (onOpen)="onOpen($event)"\n                    (onClose)="onClose($event)"\n                    (isOpenChange)="isOpenChange($event)"\n                    [description]="description">\n                    <button type="button" class="tooltip-trigger">\n                        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                            <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                        </svg>\n                    </button>\n                </cds-tooltip>\n            </div>\n        </div>\n    ',styles:["\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    "]})).bind({});WithAutoAlign.args={autoAlign:!0,align:"top"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-tooltip\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            (onOpen)="onOpen($event)"\n            (onClose)="onClose($event)"\n            (isOpenChange)="isOpenChange($event)"\n            [description]="description">\n            <button type="button" class="tooltip-trigger">\n                <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                    <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                </svg>\n            </button>\n        </cds-tooltip>\n    `,\n  styles: [`\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    `]\n})',...Basic.parameters?.docs?.source}}},Ellipses.parameters={...Ellipses.parameters,docs:{...Ellipses.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-tooltip\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            description="Tooltip for ellipsis because I can and I am really really long">\n            <span class="overflowText">\n                Tooltip for ellipsis because I can and I am really really long\n            </span>\n        </cds-tooltip>\n    `,\n  styles: [`\n        .overflowText {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            width: 100px;\n            display: inline-block;\n        }\n    `]\n})',...Ellipses.parameters?.docs?.source}}},WithAutoAlign.parameters={...WithAutoAlign.parameters,docs:{...WithAutoAlign.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <div style="height:3000px">\n            Scrolling will update the position of the popover:\n            <div style="position: absolute; top: 500px; left: 500px;">\n                <cds-tooltip\n                    [isOpen]="isOpen"\n                    [caret]="caret"\n                    [align]="align"\n                    [autoAlign]="true"\n                    (onOpen)="onOpen($event)"\n                    (onClose)="onClose($event)"\n                    (isOpenChange)="isOpenChange($event)"\n                    [description]="description">\n                    <button type="button" class="tooltip-trigger">\n                        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                            <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                        </svg>\n                    </button>\n                </cds-tooltip>\n            </div>\n        </div>\n    `,\n  styles: [`\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    `]\n})',...WithAutoAlign.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Ellipses","WithAutoAlign"]}}]);