"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[4277],{"./src/patterns/dialogs/modal-with-table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithDataTable:()=>WithDataTable,default:()=>modal_with_table_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),modal=__webpack_require__("./src/modal/index.ts"),table=__webpack_require__("./src/table/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),progress_indicator=__webpack_require__("./src/progress-indicator/index.ts"),src_link=__webpack_require__("./src/link/index.ts");let ModalWithTableStory=class ModalWithTableStory extends modal.IX{constructor(){super(...arguments),this.steps=[{text:"General",state:["complete"]},{text:"Select nodes",state:["current"]},{text:"Select widgets",state:["incomplete"]}],this.current=1,this.model=new table.G0,this.dataset=[[new table.r8({data:"800"}),new table.r8({data:"East Sadye"}),new table.r8({data:"Store"}),new table.r8({data:"US"})],[new table.r8({data:"500"}),new table.r8({data:"Lueilwitzview"}),new table.r8({data:"Store"}),new table.r8({data:"US"})],[new table.r8({data:"120"}),new table.r8({data:"East Arcelyside"}),new table.r8({data:"Store"}),new table.r8({data:"France"})],[new table.r8({data:"119"}),new table.r8({data:"West Dylan"}),new table.r8({data:"Store"}),new table.r8({data:"Argentina"})],[new table.r8({data:"54"}),new table.r8({data:"Brandynberg"}),new table.r8({data:"Store"}),new table.r8({data:"Japan"})],[new table.r8({data:"15"}),new table.r8({data:"Stoltenbergport"}),new table.r8({data:"Store"}),new table.r8({data:"Canada"})],[new table.r8({data:"12"}),new table.r8({data:"Rheabury"}),new table.r8({data:"Store"}),new table.r8({data:"US"})]]}ngOnInit(){this.model.header=[new table.jr({data:"Node ID"}),new table.jr({data:"Node name"}),new table.jr({data:"Node type"}),new table.jr({data:"Country"})],this.model.data=this.dataset}onSearch(searchString){this.model.data=this.dataset.filter((row=>row[0].data.toLowerCase().includes(searchString)))}};ModalWithTableStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-modal-with-table",template:'\n\t\t<cds-modal\n\t\t\tsize="lg"\n\t\t\t[open]="true"\n\t\t\t(overlaySelected)="closeModal()">\n\t\t\t<cds-modal-header>\n\t\t\t\t<h3 cdsModalHeaderHeading>Create workspace</h3>\n\t\t\t</cds-modal-header>\n\t\t\t<section cdsModalContent [hasForm]="true">\n\t\t\t\t<div class="progress-wrapper">\n\t\t\t\t\t<cds-progress-indicator\n\t\t\t\t\t\t[steps]="steps"\n\t\t\t\t\t\t[current]="current"\n\t\t\t\t\t\tspacing="equal">\n\t\t\t\t\t</cds-progress-indicator>\n\t\t\t\t</div>\n\t\t\t\t<cds-table-container>\n\t\t\t\t\t<cds-table-toolbar size="md">\n\t\t\t\t\t\t<cds-table-toolbar-content>\n\t\t\t\t\t\t\t<cds-table-toolbar-search\n\t\t\t\t\t\t\t\t[expandable]="true"\n\t\t\t\t\t\t\t\tplaceholder="Search node ID"\n\t\t\t\t\t\t\t\t(valueChange)="onSearch($event)">\n\t\t\t\t\t\t\t</cds-table-toolbar-search>\n\t\t\t\t\t\t\t<button cdsButton="ghost" class="toolbar-action" size="sm">\n\t\t\t\t\t\t\t\t<svg size="16" class="cds--toolbar-action__icon" cdsIcon="Data_2"></svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</cds-table-toolbar-content>\n\t\t\t\t\t</cds-table-toolbar>\n\t\t\t\t\t<cds-table\n\t\t\t\t\t\t[model]="model"\n\t\t\t\t\t\tsize="sh"\n\t\t\t\t\t\t[showSelectionColumn]="true"\n\t\t\t\t\t\t[sortable]="false"\n\t\t\t\t\t\t[striped]="false"\n\t\t\t\t\t\t[isDataGrid]="false">\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</cds-table>\n\t\t\t\t</cds-table-container>\n\t\t\t</section>\n\t\t\t<cds-modal-footer>\n\t\t\t\t<a href="#" cdsLink [disabled]="disabled" [inline]="inline">Cancel</a>\n\t\t\t\t<div class="buttons-wrapper">\n\t\t\t\t\t<button class="modal-button" cdsButton="secondary">Previous</button>\n\t\t\t\t\t<button class="modal-button" cdsButton="primary">Next</button>\n\t\t\t\t</div>\n\t\t\t</cds-modal-footer>\n\t\t</cds-modal>\n\t',encapsulation:core.ViewEncapsulation.None,styles:["\n\t\t.cds--modal-content {\n\t\t\t/* !important is needed to prevent override from media queries. */\n\t\t\tpadding-left: 0 !important;\n\t\t\tpadding-right: 0 !important;\n\t\t}\n\n\t\t.progress-wrapper {\n\t\t\tmargin-top: 2rem;\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding-left: 1rem;\n\t\t\tpadding-right: 1rem;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.buttons-wrapper {\n\t\t\twidth: 50%;\n\t\t}\n\n\t\t.modal-button{\n\t\t\twidth: 50%;\n\t\t}\n\n\t\t.cds--link {\n\t\t\tposition: absolute;\n\t\t\talign-self: center;\n\t\t\tleft: 1rem;\n\t\t}\n\t"]})],ModalWithTableStory);const modal_with_table_stories={title:"Pattern/Dialogs",decorators:[(0,dist.moduleMetadata)({declarations:[ModalWithTableStory],imports:[modal.zk,table.U$,src_button.hJ,progress_indicator._,src_link.L]})]},WithDataTable=(args=>({props:args,template:"\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source as an example.\n\t\t--\x3e\n\t\t<app-modal-with-table></app-modal-with-table>\n\t"})).bind({})},"./src/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link,L:()=>LinkModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let Link=class Link{constructor(){this.baseClass=!0,this.inline=!1}set disabled(disabled){this._disabled=disabled,this.tabindex=this.disabled?-1:null}get disabled(){return this._disabled}};Link.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--link"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],inline:[{type:core.Input},{type:core.HostBinding,args:["class.cds--link--inline"]}],disabled:[{type:core.Input},{type:core.HostBinding,args:["attr.aria-disabled"]},{type:core.HostBinding,args:["class.cds--link--disabled"]}]},Link=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLink], [ibmLink]"})],Link);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LinkModule=class LinkModule{};LinkModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Link],exports:[Link],imports:[common.CommonModule]})],LinkModule)},"./src/progress-indicator/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>ProgressIndicator,_:()=>ProgressIndicatorModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),i18n=__webpack_require__("./src/i18n/index.ts");let ProgressIndicator=class ProgressIndicator{constructor(i18n){this.i18n=i18n,this.stepSelected=new core.EventEmitter,this.translations=this.i18n.get().PROGRESS_INDICATOR,this.orientation="horizontal",this.skeleton=!1,this.spacing="default",this.statusIcons={current:"incomplete",complete:"checkmark--outline",invalid:"warning",incomplete:"circle-dash"}}get current(){return this._current}set current(current){this._current=current,this.setProgressIndicatorStates()}static skeletonSteps(stepCount){const steps=[];for(let i=0;i<stepCount;i++)steps.push({complete:!1});return steps}onClick(index){index!==this.current&&"function"==typeof this.steps[index].onClick&&this.steps[index].onClick(),this.stepSelected.emit({step:this.steps[index],index})}getCurrentState(index){return index===this.current?"current":this.steps[index].invalid?"invalid":this.steps[index].complete?"complete":"incomplete"}setProgressIndicatorStates(){void 0!==this.steps&&this.steps.forEach(((step,index)=>{index<this.current?step.complete=!0:step.complete=!1}))}};ProgressIndicator.ctorParameters=()=>[{type:i18n.oc}],ProgressIndicator.propDecorators={current:[{type:core.Input}],steps:[{type:core.Input}],stepSelected:[{type:core.Output}],translations:[{type:core.Input}],orientation:[{type:core.Input}],skeleton:[{type:core.Input}],spacing:[{type:core.Input}]},ProgressIndicator=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-progress-indicator, ibm-progress-indicator",template:'\n\t<ul\n\t\tdata-progress\n\t\tdata-progress-current\n\t\tclass="cds--progress"\n\t\t[ngClass]="{\n\t\t\t\'cds--skeleton\': skeleton,\n\t\t\t\'cds--progress--vertical\': (orientation === \'vertical\'),\n\t\t\t\'cds--progress--space-equal\': spacing === \'equal\' && orientation !== \'vertical\'\n\t\t}">\n\t\t<li\n\t\t\tclass="cds--progress-step"\n\t\t\t*ngFor="let step of steps; let i = index"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--progress-step--disabled\' : step.disabled,\n\t\t\t\t\'cds--progress-step--complete\' : step.complete,\n\t\t\t\t\'cds--progress-step--incomplete\' : !step.complete && i !== current,\n\t\t\t\t\'cds--progress-step--current\': i === current\n\t\t\t}">\n\t\t\t<button\n\t\t\t\ttype="button"\n\t\t\t\tclass="cds--progress-step-button"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--progress-step-button--unclickable\': !step.onClick || current === i\n\t\t\t\t}"\n\t\t\t\t[disabled]="step.disabled"\n\t\t\t\t[attr.aria-disabled]="step.disabled"\n\t\t\t\t[tabindex]="(current !== i && step.onClick && !step.disabled) ? 0 : -1"\n\t\t\t\t[title]="step.label"\n\t\t\t\t(click)="onClick(i)">\n\t\t\t\t<span class="cds--assistive-text">\n\t\t\t\t\t{{this.translations[getCurrentState(i)?.toUpperCase()]}}\n\t\t\t\t</span>\n\t\t\t\t<svg\n\t\t\t\t\t[cdsIcon]="statusIcons[getCurrentState(i)]"\n\t\t\t\t\tsize="16"\n\t\t\t\t\t[ngClass]="{\n\t\t\t\t\t\t\'cds--progress__warning\': step.invalid && i !== current\n\t\t\t\t\t}">\n\t\t\t\t\t<title *ngIf="step.description">{{step.description}}</title>\n\t\t\t\t</svg>\n\t\t\t\t<div class="cds--progress-text">\n\t\t\t\t\t<p class="cds--progress-label">{{step.label}}</p>\n\t\t\t\t\t<p *ngIf="step.secondaryLabel" class="cds--progress-optional">{{step.secondaryLabel}}</p>\n\t\t\t\t</div>\n\t\t\t\t<span class="cds--progress-line"></span>\n\t\t\t</button>\n\t\t</li>\n\t</ul>\n\t'})],ProgressIndicator);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts");let ProgressIndicatorModule=class ProgressIndicatorModule{};ProgressIndicatorModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ProgressIndicator],exports:[ProgressIndicator],imports:[common.CommonModule,icon.QX,i18n.LU]})],ProgressIndicatorModule)}}]);