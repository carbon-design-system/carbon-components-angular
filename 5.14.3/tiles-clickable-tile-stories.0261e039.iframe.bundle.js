"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[3719],{"./src/tiles/clickable-tile.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithLayers:()=>WithLayers,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layer/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tiles/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tiles/Clickable",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_2__.i$,_layer__WEBPACK_IMPORTED_MODULE_1__.D]})],component:___WEBPACK_IMPORTED_MODULE_2__.Oh},Basic=(args=>({props:args,template:'\n\t\t<cds-clickable-tile\n\t\t\t[disabled]="disabled"\n\t\t\t[href]="href"\n\t\t\ttarget="_blank">\n\t\t\tClick the tile to open the Carbon Design System\n\t\t</cds-clickable-tile>\n\t'})).bind({});Basic.args={href:"https://www.carbondesignsystem.com/"};const WithLayers=(args=>({props:args,template:"\n\t\t<cds-clickable-tile>\n\t\t\tFirst layer\n\t\t</cds-clickable-tile>\n\t\t<div cdsLayer>\n\t\t\t<cds-clickable-tile>\n\t\t\t\tSecond layer\n\t\t\t</cds-clickable-tile>\n\t\t\t<div cdsLayer>\n\t\t\t\t<cds-clickable-tile>Third layer</cds-clickable-tile>\n\t\t\t</div>\n\t\t</div>\n\t"})).bind({});WithLayers.parameters={controls:{disable:!0}}}}]);