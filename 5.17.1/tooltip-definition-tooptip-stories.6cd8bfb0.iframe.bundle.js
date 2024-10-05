"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[6274],{"./src/popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OI:()=>PopoverContainer,yk:()=>PopoverContent,UU:()=>PopoverModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PopoverContainer=class PopoverContainer{constructor(){this.onClose=new core.EventEmitter,this.onOpen=new core.EventEmitter,this.isOpenChange=new core.EventEmitter,this.caret=!0,this.dropShadow=!0,this.highContrast=!1,this.isOpen=!1,this.containerClass=!0,this.align="bottom"}get alignmentTopClass(){return"top"===this.align}get alignmentTopLeftClass(){return"top-left"===this.align}get alignmentTopRightClass(){return"top-right"===this.align}get alignmentBottomClass(){return"bottom"===this.align}get alignmentBottomLeftClass(){return"bottom-left"===this.align}get alignmentBottomRightClass(){return"bottom-right"===this.align}get alignmentLeftClass(){return"left"===this.align}get alignmentLeftTopClass(){return"left-top"===this.align}get alignmentLeftBottomClass(){return"left-bottom"===this.align}get alignmentRightClass(){return"right"===this.align}get alignmentRightTopClass(){return"right-top"===this.align}get alignmentRightBottomClass(){return"right-bottom"===this.align}handleChange(open,event){this.isOpen!==open&&this.isOpenChange.emit(open),open?this.onOpen.emit(event):this.onClose.emit(event),this.isOpen=open}};PopoverContainer.propDecorators={alignmentTopClass:[{type:core.HostBinding,args:["class.cds--popover--top"]}],alignmentTopLeftClass:[{type:core.HostBinding,args:["class.cds--popover--top-left"]}],alignmentTopRightClass:[{type:core.HostBinding,args:["class.cds--popover--top-right"]}],alignmentBottomClass:[{type:core.HostBinding,args:["class.cds--popover--bottom"]}],alignmentBottomLeftClass:[{type:core.HostBinding,args:["class.cds--popover--bottom-left"]}],alignmentBottomRightClass:[{type:core.HostBinding,args:["class.cds--popover--bottom-right"]}],alignmentLeftClass:[{type:core.HostBinding,args:["class.cds--popover--left"]}],alignmentLeftTopClass:[{type:core.HostBinding,args:["class.cds--popover--left-top"]}],alignmentLeftBottomClass:[{type:core.HostBinding,args:["class.cds--popover--left-bottom"]}],alignmentRightClass:[{type:core.HostBinding,args:["class.cds--popover--right"]}],alignmentRightTopClass:[{type:core.HostBinding,args:["class.cds--popover--right-top"]}],alignmentRightBottomClass:[{type:core.HostBinding,args:["class.cds--popover--right-bottom"]}],onClose:[{type:core.Output}],onOpen:[{type:core.Output}],isOpenChange:[{type:core.Output}],caret:[{type:core.HostBinding,args:["class.cds--popover--caret"]},{type:core.Input}],dropShadow:[{type:core.HostBinding,args:["class.cds--popover--drop-shadow"]},{type:core.Input}],highContrast:[{type:core.HostBinding,args:["class.cds--popover--high-contrast"]},{type:core.Input}],isOpen:[{type:core.HostBinding,args:["class.cds--popover--open"]},{type:core.Input}],containerClass:[{type:core.HostBinding,args:["class.cds--popover-container"]}],align:[{type:core.Input}]},PopoverContainer=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsPopover], [ibmPopover]"})],PopoverContainer);let PopoverContent=class PopoverContent{constructor(){this.popoverClass=!0}};PopoverContent.propDecorators={popoverClass:[{type:core.HostBinding,args:["class.cds--popover"]}]},PopoverContent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-popover-content, ibm-popover-content",template:'\n\t\t<span class="cds--popover-content">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t\t<span class="cds--popover-caret"></span>\n\t'})],PopoverContent);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let PopoverModule=class PopoverModule{};PopoverModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[PopoverContainer,PopoverContent],exports:[PopoverContainer,PopoverContent],imports:[common.CommonModule]})],PopoverModule)},"./src/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip,vD:()=>TooltipDefinition,z8:()=>TooltipModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),popover=__webpack_require__("./src/popover/index.ts");let Tooltip=class Tooltip extends popover.OI{constructor(){super(),this.tooltipClass=!0,this.id="tooltip-"+Tooltip.tooltipCount++,this.enterDelayMs=100,this.leaveDelayMs=300,this.disabled=!1,this.highContrast=!0,this.dropShadow=!1}mouseenter(event){setTimeout((()=>{this.handleChange(!0,event)}),this.enterDelayMs)}mouseleave(event){setTimeout((()=>{this.handleChange(!1,event)}),this.leaveDelayMs)}hostkeys(event){open&&"Escape"===event.key&&(event.stopPropagation(),this.handleChange(!1,event))}handleFocus(event){this.handleChange(!0,event)}handleFocusOut(event){this.handleChange(!1,event)}isTemplate(value){return value instanceof core.TemplateRef}ngAfterContentChecked(){if(this.wrapper){const buttonElement=this.wrapper.nativeElement.querySelector("button");buttonElement&&!buttonElement.getAttribute("aria-labelledby")&&buttonElement.setAttribute("aria-labelledby",this.id)}}};Tooltip.tooltipCount=0,Tooltip.ctorParameters=()=>[],Tooltip.propDecorators={tooltipClass:[{type:core.HostBinding,args:["class.cds--tooltip"]}],id:[{type:core.Input}],enterDelayMs:[{type:core.Input}],leaveDelayMs:[{type:core.Input}],disabled:[{type:core.Input}],description:[{type:core.Input}],wrapper:[{type:core.ViewChild,args:["contentWrapper"]}],mouseenter:[{type:core.HostListener,args:["mouseenter",["$event"]]}],mouseleave:[{type:core.HostListener,args:["mouseleave",["$event"]]}],hostkeys:[{type:core.HostListener,args:["keyup",["$event"]]}],handleFocus:[{type:core.HostListener,args:["focusin",["$event"]]}],handleFocusOut:[{type:core.HostListener,args:["focusout",["$event"]]}]},Tooltip=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tooltip, ibm-tooltip",template:'\n\t\t<span #contentWrapper>\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t\t<span\n\t\t\t*ngIf="description"\n\t\t\tclass="cds--popover"\n\t\t\t[id]="id"\n\t\t\t[attr.aria-hidden]="!isOpen"\n\t\t\trole="tooltip">\n\t\t\t<ng-container *ngIf="!disabled">\n\t\t\t\t<span class="cds--popover-content cds--tooltip-content">\n\t\t\t\t\t<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>\n\t\t\t\t\t<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description"></ng-template>\n\t\t\t\t</span>\n\t\t\t\t<span class="cds--popover-caret"></span>\n\t\t\t</ng-container>\n\t\t</span>\n\t'})],Tooltip);let TooltipDefinition=class TooltipDefinition extends popover.OI{constructor(){super(),this.id="tooltip-definition-"+TooltipDefinition.tooltipCount++,this.align="bottom",this.highContrast=!0,this.dropShadow=!1}onBlur(event){this.handleChange(!1,event)}onClick(event){this.handleChange(!this.isOpen,event)}hostkeys(event){this.isOpen&&"Escape"===event.key&&(event.stopPropagation(),this.handleChange(!1,event))}mouseleave(event){this.handleChange(!1,event)}isTemplate(value){return value instanceof core.TemplateRef}};TooltipDefinition.tooltipCount=0,TooltipDefinition.ctorParameters=()=>[],TooltipDefinition.propDecorators={id:[{type:core.Input}],align:[{type:core.Input}],description:[{type:core.Input}],hostkeys:[{type:core.HostListener,args:["keyup",["$event"]]}],mouseleave:[{type:core.HostListener,args:["mouseleave",["$event"]]}]},TooltipDefinition=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-tooltip-definition, ibm-tooltip-definition",template:'\n\t\t<button\n\t\t\tclass="cds--definition-term"\n\t\t\t[attr.aria-controls]="id"\n\t\t\t[attr.aria-expanded]="isOpen"\n\t\t\t(blur)="onBlur($event)"\n\t\t\t(click)="onClick($event)"\n\t\t\ttype="button">\n\t\t\t<ng-content></ng-content>\n\t\t</button>\n\t\t<span\n\t\t\t*ngIf="description"\n\t\t\tclass="cds--popover"\n\t\t\t[id]="id"\n\t\t\t[attr.aria-hidden]="isOpen"\n\t\t\trole="tooltip">\n\t\t\t<span class="cds--popover-content cds--definition-tooltip">\n\t\t\t\t<ng-container *ngIf="!isTemplate(description)">{{description}}</ng-container>\n\t\t\t\t<ng-template *ngIf="isTemplate(description)" [ngTemplateOutlet]="description"></ng-template>\n\t\t\t</span>\n\t\t\t<span class="cds--popover-caret"></span>\n\t\t</span>\n\t'})],TooltipDefinition);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let TooltipModule=class TooltipModule{};TooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Tooltip,TooltipDefinition],exports:[Tooltip,TooltipDefinition],imports:[common.CommonModule,popover.UU]})],TooltipModule)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./src/tooltip/definition-tooptip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tooltip/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Definition Tooltip",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.z8]})],parameters:{docs:{story:{inline:!1,iframeHeight:"18rem"}}},component:___WEBPACK_IMPORTED_MODULE_1__.vD},Basic=(args=>({props:args,template:'\n        <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a\n        <cds-tooltip-definition\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            (onOpen)="onOpen($event)"\n            (onClose)="onClose($event)"\n            (isOpenChange)="isOpenChange($event)"\n            [description]="description">\n            URL\n        </cds-tooltip-definition>\n        that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>\n    ',styles:["\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    "]})).bind({});Basic.args={isOpen:!0,caret:!0,description:"Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet.",align:"bottom"},Basic.argTypes={onOpen:{control:"Opened!"},onClose:{control:"Closed!"},isOpenChange:{control:"Is Open Change!"},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right"],control:"select"}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <p>Custom domains direct requests for your apps in this Cloud Foundry organization to a\n        <cds-tooltip-definition\n            [isOpen]="isOpen"\n            [caret]="caret"\n            [align]="align"\n            (onOpen)="onOpen($event)"\n            (onClose)="onClose($event)"\n            (isOpenChange)="isOpenChange($event)"\n            [description]="description">\n            URL\n        </cds-tooltip-definition>\n        that you own. A custom domain can be a shared domain, a shared subdomain, or a shared domain and host.</p>\n    `,\n  styles: [`\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    `]\n})',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]}}]);