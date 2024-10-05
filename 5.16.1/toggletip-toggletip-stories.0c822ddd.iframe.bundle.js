"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[703],{"./src/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link,L:()=>LinkModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let Link=class Link{constructor(){this.baseClass=!0,this.inline=!1}set disabled(disabled){this._disabled=disabled,this.tabindex=this.disabled?-1:null}get disabled(){return this._disabled}};Link.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--link"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],inline:[{type:core.Input},{type:core.HostBinding,args:["class.cds--link--inline"]}],disabled:[{type:core.Input},{type:core.HostBinding,args:["attr.aria-disabled"]},{type:core.HostBinding,args:["class.cds--link--disabled"]}]},Link=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLink], [ibmLink]"})],Link);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LinkModule=class LinkModule{};LinkModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Link],exports:[Link],imports:[common.CommonModule]})],LinkModule)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./src/toggletip/toggletip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toggletip_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_link=__webpack_require__("./src/link/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let ToggletipAction=class ToggletipAction{constructor(){this.toggleTipActions=!0}};ToggletipAction.propDecorators={toggleTipActions:[{type:core.HostBinding,args:["class.cds--toggletip-actions"]}]},ToggletipAction=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToggletipAction], [ibmToggletipAction]"})],ToggletipAction);let ToggletipButton=class ToggletipButton{constructor(){this.toggletipButton=!0,this.toggletipButtonType="button",this.ariaLabel="Show information"}};ToggletipButton.propDecorators={toggletipButton:[{type:core.HostBinding,args:["class.cds--toggletip-button"]}],toggletipButtonType:[{type:core.HostBinding,args:["attr.type"]}],ariaLabel:[{type:core.HostBinding,args:["attr.aria-label"]},{type:core.Input}]},ToggletipButton=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToggletipButton], [ibmToggletipButton]"})],ToggletipButton);let ToggletipContent=class ToggletipContent{constructor(){this.toggletipContent=!0}};ToggletipContent.propDecorators={toggletipContent:[{type:core.HostBinding,args:["class.cds--toggletip-content"]}]},ToggletipContent=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToggletipContent], [ibmToggletipContent]"})],ToggletipContent);let ToggletipLabel=class ToggletipLabel{constructor(){this.toggleTipLabel=!0}};ToggletipLabel.propDecorators={toggleTipLabel:[{type:core.HostBinding,args:["class.cds--toggletip-label"]}]},ToggletipLabel=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToggletipLabel], [ibmToggletipLabel]"})],ToggletipLabel);var fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),popover=__webpack_require__("./src/popover/index.ts");let Toggletip=class Toggletip extends popover.OI{constructor(hostElement,renderer){super(),this.hostElement=hostElement,this.renderer=renderer,this.id="tooltip-"+Toggletip.toggletipCounter++,this.toggletipClass=!0,this.isOpen=!1,this.documentClick=this.handleFocusOut.bind(this),this.highContrast=!0,this.dropShadow=!1}ngAfterViewInit(){(0,fromEvent.R)(this.btn.nativeElement,"click").subscribe((event=>{this.isOpen?document.removeEventListener("click",this.documentClick):document.addEventListener("click",this.documentClick),this.handleExpansion(!this.isOpen,event)})),this.isOpen&&document.addEventListener("click",this.documentClick),this.btn&&this.renderer.setAttribute(this.btn.nativeElement,"aria-controls",this.id)}hostkeys(event){open&&"Escape"===event.key&&(event.stopPropagation(),this.handleExpansion(!1,event))}handleFocusOut(event){this.hostElement.nativeElement.contains(event.target)||this.handleExpansion(!1,event)}handleExpansion(state=!1,event){this.handleChange(state,event),this.btn&&this.renderer.setAttribute(this.btn.nativeElement,"aria-expanded",this.isOpen.toString())}};Toggletip.toggletipCounter=0,Toggletip.ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],Toggletip.propDecorators={id:[{type:core.Input}],toggletipClass:[{type:core.HostBinding,args:["class.cds--toggletip"]}],isOpen:[{type:core.HostBinding,args:["class.cds--toggletip--open"]},{type:core.Input}],btn:[{type:core.ContentChild,args:[ToggletipButton,{read:core.ElementRef}]}],hostkeys:[{type:core.HostListener,args:["keyup",["$event"]]}]},Toggletip=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-toggletip, ibm-toggletip",template:'\n\t\t<ng-content select="[cdsToggletipButton]"></ng-content>\n\t\t<cds-popover-content>\n\t\t\t<ng-content select="[cdsToggletipContent]"></ng-content>\n\t\t</cds-popover-content>\n\t'})],Toggletip);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let ToggletipModule=class ToggletipModule{};ToggletipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Toggletip,ToggletipLabel,ToggletipAction,ToggletipButton,ToggletipContent],exports:[Toggletip,ToggletipLabel,ToggletipAction,ToggletipButton,ToggletipContent],imports:[common.CommonModule,popover.UU]})],ToggletipModule);const toggletip_stories={title:"Components/Toggletip",decorators:[(0,dist.moduleMetadata)({imports:[ToggletipModule,src_link.L,src_button.hJ]})],parameters:{docs:{story:{inline:!1,height:"30rem"}},layout:"centered"},component:Toggletip,subcomponents:{ToggletipAction,ToggletipButton,ToggletipContent,ToggletipLabel}},Basic=(args=>({props:args,template:'\n        <span cdsToggletipLabel>Toggletip label</span>\n        <cds-toggletip\n            [isOpen]="isOpen"\n            [align]="align"\n            (isOpenChange)="isOpenChange($event)"\n            (onClose)="onClose($event)"\n            (onOpen)="onOpen($event)">\n            <button cdsToggletipButton>\n                <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                    <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                </svg>\n            </button>\n            <div cdsToggletipContent>\n                <p>\n                    Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed\n                    do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.\n                </p>\n                <div cdsToggletipAction>\n                    <a href="#" cdsLink>Link action</a>\n                    <button cdsButton size="sm">Some button</button>\n                </div>\n            </div>\n        </cds-toggletip>\n    ',styles:["\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    "]})).bind({});Basic.args={isOpen:!0,align:"bottom"},Basic.argTypes={onOpen:{control:"Opened!"},onClose:{control:"Closed!"},isOpenChange:{control:"Is Open Change!"},align:{options:["top","bottom","left","right"],control:"select"}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <span cdsToggletipLabel>Toggletip label</span>\n        <cds-toggletip\n            [isOpen]="isOpen"\n            [align]="align"\n            (isOpenChange)="isOpenChange($event)"\n            (onClose)="onClose($event)"\n            (onOpen)="onOpen($event)">\n            <button cdsToggletipButton>\n                <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                    <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>\n                </svg>\n            </button>\n            <div cdsToggletipContent>\n                <p>\n                    Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed\n                    do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.\n                </p>\n                <div cdsToggletipAction>\n                    <a href="#" cdsLink>Link action</a>\n                    <button cdsButton size="sm">Some button</button>\n                </div>\n            </div>\n        </cds-toggletip>\n    `,\n  styles: [`\n        .tooltip-trigger {\n            box-sizing: border-box;\n            margin: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            background: white;\n            border: 1px solid var(--cds-border-subtle);\n            cursor: pointer;\n        }\n        svg { fill: var(--cds-background-inverse); }\n    `]\n})',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]}}]);