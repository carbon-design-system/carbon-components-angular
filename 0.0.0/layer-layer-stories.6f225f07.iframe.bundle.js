"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[5455],{"./src/layer/layer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomOrder:()=>CustomOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layer/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Layer",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.D]})],parameters:{controls:{disable:!0}},component:___WEBPACK_IMPORTED_MODULE_1__.A},Basic=(args=>({props:args,template:'\n\t\t<div class="example-layer">Layer 0</div>\n\t\t<div cdsLayer>\n\t\t\t<div class="example-layer">Layer 1</div>\n\t\t\t<div cdsLayer>\n\t\t\t\t<div class="example-layer">Layer 2</div>\n\t\t\t</div>\n\t\t</div>\n\t',styles:[".example-layer {\n\t\t\tpadding: 1rem;\n\t\t\tbackground: var(--cds-layer);\n\t\t\tcolor: theme.$text-primary;\n\t\t}"]})).bind({}),CustomOrder=(args=>({props:args,template:'\n\t\t<div class="example-layer">Layer 0</div>\n\t\t<div cdsLayer>\n\t\t\t<div class="example-layer">Layer 1</div>\n\t\t\t<div cdsLayer>\n\t\t\t\t<div class="example-layer">Layer 2</div>\n\t\t\t\t\x3c!-- Reset layer, child layer will auto increment or you can pass in layer of your choice --\x3e\n\t\t\t\t<div [cdsLayer]="0">\n\t\t\t\t\t<div class="example-layer">Layer 0</div>\n\t\t\t\t\t<div [cdsLayer]="1">\n\t\t\t\t\t\t<div class="example-layer">Layer 1</div>\n\t\t\t\t\t\t<div cdsLayer>\n\t\t\t\t\t\t\t<div class="example-layer">Layer 2</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',styles:[".example-layer {\n\t\t\tpadding: 1rem;\n\t\t\tbackground: var(--cds-layer);\n\t\t\tcolor: theme.$text-primary;\n\t\t}"]})).bind({})},"./src/layer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LayerDirective,D:()=>LayerModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LayerDirective=class LayerDirective{set ibmLayer(level){this.cdsLayer=level}set cdsLayer(level){"number"==typeof level&&(this._passedLevel=level,this.layer=level)}get cdsLayer(){return this._passedLevel}set layer(level){"number"==typeof level&&(this._level=Math.max(0,Math.min(level,2)),this.layerChildren&&this.layerChildren.forEach((layer=>{layer!==this&&(layer.layer="number"==typeof layer._passedLevel?layer._passedLevel:this.layer+1)})))}get layer(){return this._level}get layerOneClass(){return 0===this.layer}get layerTwoClass(){return 1===this.layer}get layerThreeClass(){return 2===this.layer}ngAfterContentInit(){"number"!=typeof this.cdsLayer&&(this.layer=1)}};LayerDirective.propDecorators={ibmLayer:[{type:core.Input}],cdsLayer:[{type:core.Input}],layerOneClass:[{type:core.HostBinding,args:["class.cds--layer-one"]}],layerTwoClass:[{type:core.HostBinding,args:["class.cds--layer-two"]}],layerThreeClass:[{type:core.HostBinding,args:["class.cds--layer-three"]}],layerChildren:[{type:core.ContentChildren,args:[LayerDirective,{descendants:!1}]}]},LayerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLayer], [ibmLayer]",exportAs:"layer"})],LayerDirective);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LayerModule=class LayerModule{};LayerModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LayerDirective],exports:[LayerDirective],imports:[common.CommonModule]})],LayerModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);