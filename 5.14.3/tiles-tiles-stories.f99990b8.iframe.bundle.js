"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[3280],{"./src/tiles/tiles.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Skeleton:()=>Skeleton,WithLayers:()=>WithLayers,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layer/index.ts"),_skeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/skeleton/index.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tiles/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tiles",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_3__.i$,_layer__WEBPACK_IMPORTED_MODULE_1__.D,_skeleton__WEBPACK_IMPORTED_MODULE_2__.mL]})],component:___WEBPACK_IMPORTED_MODULE_3__.n9},Basic=(args=>({props:args,template:"\n\t\t<cds-tile>\n\t\t\tTile content goes here...\n\t\t</cds-tile>\n\t"})).bind({}),WithLayers=(args=>({props:args,template:"\n\t\t<cds-tile>\n\t\t\tFirst layer\n\t\t</cds-tile>\n\t\t<div cdsLayer>\n\t\t\t<cds-tile>\n\t\t\t\tSecond layer\n\t\t\t</cds-tile>\n\t\t\t<div cdsLayer>\n\t\t\t\t<cds-tile>Third layer</cds-tile>\n\t\t\t</div>\n\t\t</div>\n\t"})).bind({}),Skeleton=(args=>({props:args,template:'\n\t\t<cds-tile>\n\t\t\t<div class="skeleton-placeholder">\n\t\t\t\t<cds-skeleton-placeholder></cds-skeleton-placeholder>\n\t\t\t</div>\n\t\t\t<div class="skeleton-text">\n\t\t\t\t<cds-skeleton-text [lines]="3"></cds-skeleton-text>\n\t\t\t</div>\n\t\t</cds-tile>\n\t',styles:["\n\t\t.skeleton-placeholder {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t"]})).bind({})},"./src/skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mL:()=>SkeletonModule,uK:()=>SkeletonPlaceholder});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let SkeletonPlaceholder=class SkeletonPlaceholder{};SkeletonPlaceholder=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-skeleton-placeholder, ibm-skeleton-placeholder",template:'\n\t\t<div class="cds--skeleton__placeholder"></div>'})],SkeletonPlaceholder);let SkeletonText=class SkeletonText{constructor(){this.lines=5,this.minLineWidth=100,this.maxLineWidth=300}getRandomInt(min,max){return""+(Math.floor(Math.random()*(max-min+1)+min)+"px")}ngOnChanges(){this.lineWidths=Array.from(Array(this.lines).keys()).map((num=>this.getRandomInt(this.minLineWidth,this.maxLineWidth)))}};SkeletonText.propDecorators={lines:[{type:core.Input}],minLineWidth:[{type:core.Input}],maxLineWidth:[{type:core.Input}]},SkeletonText=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-skeleton-text, ibm-skeleton-text",template:'\n\t\t<p\n\t\t\t*ngFor="let width of lineWidths"\n\t\t\tclass="cds--skeleton__text"\n\t\t\t[style.width]="width">\n\t\t</p>\n\t'})],SkeletonText);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let SkeletonModule=class SkeletonModule{};SkeletonModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[SkeletonPlaceholder,SkeletonText],exports:[SkeletonPlaceholder,SkeletonText],imports:[common.CommonModule]})],SkeletonModule)}}]);