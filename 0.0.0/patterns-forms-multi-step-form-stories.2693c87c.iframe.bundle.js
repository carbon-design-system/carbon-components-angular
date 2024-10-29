"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[4232],{"./src/breadcrumb/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aG:()=>Breadcrumb,UN:()=>BreadcrumbItemComponent,wH:()=>BreadcrumbModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs");let BreadcrumbItemComponent=class BreadcrumbItemComponent{constructor(domSanitizer,router){this.domSanitizer=domSanitizer,this.router=router,this.navigation=new core.EventEmitter,this.skeleton=!1,this.ariaCurrent="page",this.current=!1,this.itemClass=!0}set href(v){this._href=v}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}useTemplate(){return this.skeleton||this._href||this.route}navigate(event){if(this.router&&this.route){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}}};BreadcrumbItemComponent.ctorParameters=()=>[{type:platform_browser.DomSanitizer},{type:router.F0,decorators:[{type:core.Optional}]}],BreadcrumbItemComponent.propDecorators={href:[{type:core.Input}],route:[{type:core.Input}],routeExtras:[{type:core.Input}],navigation:[{type:core.Output}],skeleton:[{type:core.Input}],ariaCurrent:[{type:core.Input}],current:[{type:core.HostBinding,args:["class.cds--breadcrumb-item--current"]},{type:core.Input}],itemClass:[{type:core.HostBinding,args:["class.cds--breadcrumb-item"]}]},BreadcrumbItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-breadcrumb-item, ibm-breadcrumb-item",template:'\n\t<a\n\t\tclass="cds--link"\n\t\t[href]="(skeleton ? \'/#\' : href)"\n\t\t(click)="navigate($event)"\n\t\t[attr.aria-current]="(current ? ariaCurrent : null)"\n\t\t*ngIf="useTemplate(); else content">\n\t\t<ng-container *ngTemplateOutlet="content"></ng-container>\n\t</a>\n\t<ng-template #content>\n\t\t<ng-content></ng-content>\n\t</ng-template>'})],BreadcrumbItemComponent);var i18n=__webpack_require__("./src/i18n/index.ts");let Breadcrumb=class Breadcrumb{constructor(i18n,router){this.i18n=i18n,this.router=router,this.noTrailingSlash=!1,this.ariaLabel=this.i18n.get().BREADCRUMB.LABEL,this.autoAlign=!1,this.description=this.i18n.get().BREADCRUMB.OVERFLOW_MENU_DESCRIPTION,this.navigation=new core.EventEmitter,this._skeleton=!1}set skeleton(value){this._skeleton=value,this.updateChildren()}get skeleton(){return this._skeleton}set threshold(threshold){this._threshold=threshold,(isNaN(threshold)||threshold<4)&&(this._threshold=4)}get threshold(){return this._threshold}get shouldShowContent(){return!this.items}get shouldShowOverflow(){return!!this.items&&this.items.length>this.threshold}get first(){return this.shouldShowOverflow?this.items[0]:null}get overflowItems(){return this.shouldShowOverflow?this.items.slice(1,this.items.length-2):[]}get secondLast(){return this.shouldShowOverflow?this.items[this.items.length-2]:null}get last(){return this.shouldShowOverflow?this.items[this.items.length-1]:null}ngAfterContentInit(){this.updateChildren()}navigate(event,item){if(this.router&&item.route){event.preventDefault();const status=this.router.navigate(item.route,item.routeExtras);this.navigation.emit(status)}}updateChildren(){this.children&&this.children.toArray().forEach((child=>child.skeleton=this.skeleton))}};Breadcrumb.ctorParameters=()=>[{type:i18n.oc},{type:router.F0,decorators:[{type:core.Optional}]}],Breadcrumb.propDecorators={children:[{type:core.ContentChildren,args:[BreadcrumbItemComponent]}],items:[{type:core.Input}],noTrailingSlash:[{type:core.Input}],ariaLabel:[{type:core.Input}],skeleton:[{type:core.Input}],threshold:[{type:core.Input}],autoAlign:[{type:core.Input}],description:[{type:core.Input}],navigation:[{type:core.Output}]},Breadcrumb=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-breadcrumb, ibm-breadcrumb",template:'\n\t<nav #nav class="cds--breadcrumb"\n\t\t[ngClass]="{\n\t\t\t\'cds--skeleton\' : skeleton,\n\t\t\t\'cds--breadcrumb--no-trailing-slash\' : noTrailingSlash\n\t\t}"\n\t\t[attr.aria-label]="ariaLabel">\n\t\t<ng-template [ngIf]="shouldShowContent">\n\t\t\t<ng-content></ng-content>\n\t\t</ng-template>\n\t\t<ng-template [ngIf]="!shouldShowOverflow">\n\t\t\t<cds-breadcrumb-item\n\t\t\t\t*ngFor="let item of items"\n\t\t\t\t[href]="item.href"\n\t\t\t\t[route]="item.route"\n\t\t\t\t[routeExtras]="item.routeExtras"\n\t\t\t\t[current]="item.current"\n\t\t\t\t[ariaCurrent]="item.ariaCurrent"\n\t\t\t\t(navigation)="navigation.emit($event)">\n\t\t\t\t<ng-container *ngIf="!item.template">{{item.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf="item.template"\n\t\t\t\t\t[ngTemplateOutlet]="item.template"\n\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: item }">\n\t\t\t\t</ng-template>\n\t\t\t</cds-breadcrumb-item>\n\t\t</ng-template>\n\t\t<ng-template [ngIf]="shouldShowOverflow">\n\t\t\t<cds-breadcrumb-item\n\t\t\t\t[href]="first?.href"\n\t\t\t\t[route]="first?.route"\n\t\t\t\t[routeExtras]="first?.routeExtras"\n\t\t\t\t[current]="first?.current"\n\t\t\t\t[ariaCurrent]="first?.ariaCurrent"\n\t\t\t\t(navigation)="navigation.emit($event)">\n\t\t\t\t<ng-container *ngIf="!first?.template">{{first?.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf="first?.template"\n\t\t\t\t\t[ngTemplateOutlet]="first?.template"\n\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: first }">\n\t\t\t\t</ng-template>\n\t\t\t</cds-breadcrumb-item>\n\t\t\t<cds-breadcrumb-item>\n\t\t\t\t<ng-template #overflowMenuTrigger>\n\t\t\t\t\t<svg class="cds--overflow-menu__icon" cdsIcon="overflow-menu--horizontal" size="16"></svg>\n\t\t\t\t</ng-template>\n\t\t\t\t<cds-overflow-menu\n\t\t\t\t\t[customTrigger]="overflowMenuTrigger"\n\t\t\t\t\ttriggerClass="cds--btn--icon-only"\n\t\t\t\t\t[description]="description"\n\t\t\t\t\t[autoAlign]="autoAlign">\n\t\t\t\t\t<li class="cds--overflow-menu-options__option"\n\t\t\t\t\t\t*ngFor="let item of overflowItems">\n\t\t\t\t\t\t<a class="cds--overflow-menu-options__btn"\n\t\t\t\t\t\t\thref="{{item?.href}}"\n\t\t\t\t\t\t\t(click)="navigate($event, item)"\n\t\t\t\t\t\t\tstyle="text-decoration: none;">\n\t\t\t\t\t\t\t<ng-container *ngIf="!item?.template">{{item?.content}}</ng-container>\n\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t*ngIf="item?.template"\n\t\t\t\t\t\t\t\t[ngTemplateOutlet]="item?.template"\n\t\t\t\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: item }">\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</cds-overflow-menu>\n\t\t\t</cds-breadcrumb-item>\n\t\t\t<cds-breadcrumb-item\n\t\t\t\t[href]="secondLast?.href"\n\t\t\t\t[route]="secondLast?.route"\n\t\t\t\t[routeExtras]="secondLast?.routeExtras"\n\t\t\t\t[current]="secondLast?.current"\n\t\t\t\t[ariaCurrent]="secondLast?.ariaCurrent"\n\t\t\t\t(navigation)="navigation.emit($event)">\n\t\t\t\t<ng-container *ngIf="!secondLast?.template">{{secondLast?.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf="secondLast?.template"\n\t\t\t\t\t[ngTemplateOutlet]="secondLast?.template"\n\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: secondLast }">\n\t\t\t\t</ng-template>\n\t\t\t</cds-breadcrumb-item>\n\t\t\t<cds-breadcrumb-item\n\t\t\t\t[href]="last?.href"\n\t\t\t\t[route]="last?.route"\n\t\t\t\t[routeExtras]="last?.routeExtras"\n\t\t\t\t[current]="last?.current"\n\t\t\t\t[ariaCurrent]="last?.ariaCurrent"\n\t\t\t\t(navigation)="navigation.emit($event)">\n\t\t\t\t<ng-container *ngIf="!last?.template">{{last?.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf="last?.template"\n\t\t\t\t\t[ngTemplateOutlet]="last?.template"\n\t\t\t\t\t[ngTemplateOutletContext]="{ $implicit: last }">\n\t\t\t\t</ng-template>\n\t\t\t</cds-breadcrumb-item>\n\t\t</ng-template>\n\t</nav>'})],Breadcrumb);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),dialog=__webpack_require__("./src/dialog/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),icon=__webpack_require__("./src/icon/index.ts");let BreadcrumbModule=class BreadcrumbModule{};BreadcrumbModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Breadcrumb,BreadcrumbItemComponent],exports:[Breadcrumb,BreadcrumbItemComponent],imports:[common.CommonModule,src_button.hJ,dialog.Su,i18n.LU,icon.QX]})],BreadcrumbModule)},"./src/grid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iK:()=>ColumnDirective,lj:()=>GridDirective,zE:()=>GridModule,vZ:()=>RowDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");let GridService=class GridService{constructor(){this.gridSubject=new BehaviorSubject.X(!1),this.cssGridEnabled=!1,this.gridObservable=this.gridSubject.asObservable()}updateGridType(enableCssGrid){this.cssGridEnabled!==enableCssGrid&&(this.cssGridEnabled=!0,this.gridSubject.next(enableCssGrid))}};GridService.ctorParameters=()=>[],GridService=(0,tslib_es6.gn)([(0,core.Injectable)()],GridService);let ColumnDirective=class ColumnDirective{constructor(gridService){this.gridService=gridService,this.class="",this.columnNumbers={},this.offsets={},this.columnHang=!1,this._columnClasses=[],this.isCssGrid=!1,this.subscription=new Subscription.w0}get columnClasses(){return this._columnClasses.join(" ")}set columnClasses(classes){this._columnClasses=classes.split(" ")}ngOnInit(){this.gridService?this.subscription=this.gridService.gridObservable.subscribe((isCssGrid=>{this.isCssGrid=isCssGrid,this.updateColumnClasses()})):this.updateColumnClasses()}ngOnChanges(){this.updateColumnClasses()}ngOnDestroy(){this.subscription.unsubscribe()}updateColumnClasses(){try{this._columnClasses=[];const columnKeys=Object.keys(this.columnNumbers);this.isCssGrid?(this._columnClasses.push("cds--css-grid-column"),this.columnHang&&this._columnClasses.push("cds--grid-column-hang"),columnKeys.forEach((key=>{"auto"===this.columnNumbers[key]?this._columnClasses.push(`cds--${key}:col-span-auto`):"object"==typeof this.columnNumbers[key]?(this.columnNumbers[key].start&&this._columnClasses.push(`cds--${key}:col-start-${this.columnNumbers[key].start}`),this.columnNumbers[key].end&&this._columnClasses.push(`cds--${key}:col-end-${this.columnNumbers[key].end}`),this.columnNumbers[key].span&&this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key].span}`)):this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key]}`)})),Object.keys(this.offsets).forEach((key=>{this._columnClasses.push(`cds--${key}:col-start${this.offsets[key]+1}`)}))):(columnKeys.length<=0&&this._columnClasses.push("cds--col"),columnKeys.forEach((key=>{"nobreak"===this.columnNumbers[key]?this._columnClasses.push(`cds--col-${key}`):this._columnClasses.push(`cds--col-${key}-${this.columnNumbers[key]}`)})),Object.keys(this.offsets).forEach((key=>{this._columnClasses.push(`cds--offset-${key}-${this.offsets[key]}`)})))}catch(err){console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`)}this.class&&this._columnClasses.push(this.class)}};ColumnDirective.ctorParameters=()=>[{type:GridService,decorators:[{type:core.Optional}]}],ColumnDirective.propDecorators={columnClasses:[{type:core.HostBinding,args:["class"]}],class:[{type:core.Input}],columnNumbers:[{type:core.Input}],offsets:[{type:core.Input}],columnHang:[{type:core.Input}]},ColumnDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsCol], [ibmCol]"})],ColumnDirective);let RowDirective=class RowDirective{constructor(){this.baseClass=!0,this.condensed=!1,this.narrow=!1}};RowDirective.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--row"]}],condensed:[{type:core.HostBinding,args:["class.cds--row--condensed"]},{type:core.Input}],narrow:[{type:core.HostBinding,args:["class.cds--row--narrow"]},{type:core.Input}]},RowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsRow], [ibmRow]"})],RowDirective);let GridDirective=class GridDirective{constructor(gridService){this.gridService=gridService,this.condensed=!1,this.narrow=!1,this.fullWidth=!1,this.cssGridEnabled=!1,this.isSubgrid=!1,this.subscription=new Subscription.w0}set useCssGrid(enable){this.cssGridEnabled=enable,this.gridService.updateGridType(enable)}get flexGrid(){return!this.cssGridEnabled}get flexCondensed(){return!this.cssGridEnabled&&this.condensed}get flexNarrow(){return!this.cssGridEnabled&&this.narrow}get flexFullWidth(){return!this.cssGridEnabled&&this.fullWidth}get ccsGrid(){return this.cssGridEnabled&&!this.isSubgrid}get ccsCondensed(){return this.cssGridEnabled&&!this.isSubgrid&&this.condensed}get ccsNarrow(){return this.cssGridEnabled&&!this.isSubgrid&&this.narrow}get ccsFullWidth(){return this.cssGridEnabled&&!this.isSubgrid&&this.fullWidth}get subGrid(){return this.cssGridEnabled&&this.isSubgrid}get subCondensed(){return this.cssGridEnabled&&this.isSubgrid&&this.condensed}get subNarrow(){return this.cssGridEnabled&&this.isSubgrid&&this.narrow}get subFullWidth(){return this.cssGridEnabled&&this.isSubgrid&&this.fullWidth}ngOnInit(){this.subscription=this.gridService.gridObservable.subscribe((isCssGrid=>{this.cssGridEnabled=isCssGrid}))}set cssGridChildren(list){this.cssGridEnabled&&list.forEach((grid=>{grid!==this&&(grid.isSubgrid=!0)}))}ngOnDestroy(){this.subscription.unsubscribe()}};GridDirective.ctorParameters=()=>[{type:GridService}],GridDirective.propDecorators={condensed:[{type:core.Input}],narrow:[{type:core.Input}],fullWidth:[{type:core.Input}],useCssGrid:[{type:core.Input}],flexGrid:[{type:core.HostBinding,args:["class.cds--grid"]}],flexCondensed:[{type:core.HostBinding,args:["class.cds--grid--condensed"]}],flexNarrow:[{type:core.HostBinding,args:["class.cds--grid--narrow"]}],flexFullWidth:[{type:core.HostBinding,args:["class.cds--grid--full-width"]}],ccsGrid:[{type:core.HostBinding,args:["class.cds--css-grid"]}],ccsCondensed:[{type:core.HostBinding,args:["class.cds--css-grid--condensed"]}],ccsNarrow:[{type:core.HostBinding,args:["class.cds--css-grid--narrow"]}],ccsFullWidth:[{type:core.HostBinding,args:["class.cds--css-grid--full-width"]}],subGrid:[{type:core.HostBinding,args:["class.cds--subgrid"]}],subCondensed:[{type:core.HostBinding,args:["class.cds--subgrid--condensed"]}],subNarrow:[{type:core.HostBinding,args:["class.cds--subgrid--narrow"]}],subFullWidth:[{type:core.HostBinding,args:["class.cds--subgrid--wide"]}],cssGridChildren:[{type:core.ContentChildren,args:[GridDirective,{descendants:!0}]}]},GridDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsGrid], [ibmGrid]",providers:[{provide:GridService,deps:[[new core.Optional,new core.SkipSelf,GridService]],useFactory:parentService=>parentService||new GridService}]})],GridDirective);let GridModule=class GridModule{};GridModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ColumnDirective,GridDirective,RowDirective],exports:[ColumnDirective,GridDirective,RowDirective],providers:[GridService],imports:[common.CommonModule]})],GridModule)},"./src/progress-indicator/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>ProgressIndicator,_:()=>ProgressIndicatorModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),i18n=__webpack_require__("./src/i18n/index.ts");let ProgressIndicator=class ProgressIndicator{constructor(i18n){this.i18n=i18n,this.stepSelected=new core.EventEmitter,this.translations=this.i18n.get().PROGRESS_INDICATOR,this.orientation="horizontal",this.skeleton=!1,this.spacing="default",this.statusIcons={current:"incomplete",complete:"checkmark--outline",invalid:"warning",incomplete:"circle-dash"}}get current(){return this._current}set current(current){this._current=current,this.setProgressIndicatorStates()}static skeletonSteps(stepCount){const steps=[];for(let i=0;i<stepCount;i++)steps.push({complete:!1});return steps}onClick(index){index!==this.current&&"function"==typeof this.steps[index].onClick&&this.steps[index].onClick(),this.stepSelected.emit({step:this.steps[index],index})}getCurrentState(index){return index===this.current?"current":this.steps[index].invalid?"invalid":this.steps[index].complete?"complete":"incomplete"}setProgressIndicatorStates(){void 0!==this.steps&&this.steps.forEach(((step,index)=>{index<this.current?step.complete=!0:step.complete=!1}))}};ProgressIndicator.ctorParameters=()=>[{type:i18n.oc}],ProgressIndicator.propDecorators={current:[{type:core.Input}],steps:[{type:core.Input}],stepSelected:[{type:core.Output}],translations:[{type:core.Input}],orientation:[{type:core.Input}],skeleton:[{type:core.Input}],spacing:[{type:core.Input}]},ProgressIndicator=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-progress-indicator, ibm-progress-indicator",template:'\n\t<ul\n\t\tdata-progress\n\t\tdata-progress-current\n\t\tclass="cds--progress"\n\t\t[ngClass]="{\n\t\t\t\'cds--skeleton\': skeleton,\n\t\t\t\'cds--progress--vertical\': (orientation === \'vertical\'),\n\t\t\t\'cds--progress--space-equal\': spacing === \'equal\' && orientation !== \'vertical\'\n\t\t}">\n\t\t<li\n\t\t\tclass="cds--progress-step"\n\t\t\t*ngFor="let step of steps; let i = index"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--progress-step--disabled\' : step.disabled,\n\t\t\t\t\'cds--progress-step--complete\' : step.complete,\n\t\t\t\t\'cds--progress-step--incomplete\' : !step.complete && i !== current,\n\t\t\t\t\'cds--progress-step--current\': i === current\n\t\t\t}">\n\t\t\t<button\n\t\t\t\ttype="button"\n\t\t\t\tclass="cds--progress-step-button"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--progress-step-button--unclickable\': !step.onClick || current === i\n\t\t\t\t}"\n\t\t\t\t[disabled]="step.disabled"\n\t\t\t\t[attr.aria-disabled]="step.disabled"\n\t\t\t\t[tabindex]="(current !== i && step.onClick && !step.disabled) ? 0 : -1"\n\t\t\t\t[title]="step.label"\n\t\t\t\t(click)="onClick(i)">\n\t\t\t\t<span class="cds--assistive-text">\n\t\t\t\t\t{{this.translations[getCurrentState(i)?.toUpperCase()]}}\n\t\t\t\t</span>\n\t\t\t\t<svg\n\t\t\t\t\t[cdsIcon]="statusIcons[getCurrentState(i)]"\n\t\t\t\t\tsize="16"\n\t\t\t\t\t[ngClass]="{\n\t\t\t\t\t\t\'cds--progress__warning\': step.invalid && i !== current\n\t\t\t\t\t}">\n\t\t\t\t\t<title *ngIf="step.description">{{step.description}}</title>\n\t\t\t\t</svg>\n\t\t\t\t<div class="cds--progress-text">\n\t\t\t\t\t<p class="cds--progress-label">{{step.label}}</p>\n\t\t\t\t\t<p *ngIf="step.secondaryLabel" class="cds--progress-optional">{{step.secondaryLabel}}</p>\n\t\t\t\t</div>\n\t\t\t\t<span class="cds--progress-line"></span>\n\t\t\t</button>\n\t\t</li>\n\t</ul>\n\t'})],ProgressIndicator);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts");let ProgressIndicatorModule=class ProgressIndicatorModule{};ProgressIndicatorModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ProgressIndicator],exports:[ProgressIndicator],imports:[common.CommonModule,icon.QX,i18n.LU]})],ProgressIndicatorModule)},"./src/patterns/forms/multi-step-form.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiStep:()=>MultiStep,__namedExportsOrder:()=>__namedExportsOrder,default:()=>multi_step_form_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),grid=__webpack_require__("./src/grid/index.ts"),ui_shell=__webpack_require__("./src/ui-shell/index.ts"),dropdown=__webpack_require__("./src/dropdown/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),input=__webpack_require__("./src/input/index.ts"),progress_indicator=__webpack_require__("./src/progress-indicator/index.ts"),breadcrumb=__webpack_require__("./src/breadcrumb/index.ts"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MultiStepFormStory=class MultiStepFormStory{constructor(formBuilder){this.formBuilder=formBuilder,this.steps=[{label:"Step 1",complete:!0},{label:"Step 2",current:!0,complete:!1},{label:"Step 3",complete:!1,invalid:!0},{label:"Step 4",complete:!1,secondaryLabel:"Optional"}],this.resourceGroups=[{content:"None"},{content:"Resource group 1"},{content:"Resource group 2"}],this.currentStep=1}ngOnInit(){document.querySelector(".sb-show-main")?.classList.add("full-page"),this.step2FormGroup=this.formBuilder.group({workspaceName:new fesm2020_forms.NI,resourceGroup:new fesm2020_forms.NI,purpose:new fesm2020_forms.NI}),this.step2FormGroup.get("resourceGroup")?.setValue("None")}ngOnDestroy(){document.querySelector(".sb-show-main")?.classList.remove("full-page")}changeStep(step){this.currentStep=step}};MultiStepFormStory.ctorParameters=()=>[{type:fesm2020_forms.qu}],MultiStepFormStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-multi-step-form",template:'\n        <div cdsGrid>\n            <div cdsRow class="header">\n                <cds-header name="Patterns">\n                    <cds-hamburger></cds-hamburger>\n                </cds-header>\n            </div>\n            <div cdsRow>\n                <div cdsCol [columnNumbers]="{\'lg\': 8, \'md\': 8, \'sm\': 8}">\n                    <cds-breadcrumb [noTrailingSlash]="noTrailingSlash">\n                        <cds-breadcrumb-item href="#1">\n                            Dashboard\n                        </cds-breadcrumb-item>\n                    </cds-breadcrumb>\n                </div>\n            </div>\n            <div cdsRow class="sub-heading">\n                <div cdsCol [columnNumbers]="{\'lg\': 8, \'md\': 8, \'sm\': 8}">\n                    <h4>Vertical multi-step form</h4>\n                </div>\n            </div>\n            <div cdsRow>\n                <div\n                    cdsCol\n                    [columnNumbers]="{\'lg\': 2, \'md\': 2, \'sm\': 2}"\n                    class="indicator-wrapper">\n                    <div class="indicator">\n                        <cds-progress-indicator\n                            orientation="vertical"\n                            [steps]="steps"\n                            [current]="currentStep">\n                        </cds-progress-indicator>\n                    </div>\n                </div>\n                <div cdsCol [columnNumbers]="{\'lg\': 6, \'md\': 6, \'sm\': 6}" [ngSwitch]="currentStep">\n                    <ng-container *ngSwitchCase="1">\n                        <form [formGroup]="step2FormGroup">\n                            <div cdsGrid>\n                                <div cdsRow>\n                                    <h4>Create a new workspace</h4>\n                                    <label class="form-label">\n                                        When you create a workspace, you connect IBM Cloud\n                                        Schematics to existing Github / Gitlab repos that host\n                                        your Terraform templates.\n                                    </label>\n                                </div>\n                                <div cdsRow class="form-item">\n                                    <cds-label>\n                                        Workspace name\n                                        <input\n                                            cdsText\n                                            [autocomplete]="false"\n                                            formControlName="workspaceName">\n                                    </cds-label>\n                                </div>\n                                <div cdsRow class="form-item">\n                                    <cds-dropdown\n                                        class="dropdown"\n                                        label="Resource group"\n                                        value="content"\n                                        formControlName="resourceGroup"\n                                        [dropUp]="false">\n                                        <cds-dropdown-list [items]="resourceGroups"></cds-dropdown-list>\n                                    </cds-dropdown>\n                                </div>\n                                <div cdsRow class="form-item">\n                                    <cds-label>\n                                        Description (optional)\n                                        <textarea\n                                            cdsTextArea\n                                            placeholder="What is the purpose of this workspace?"\n                                            formControlName="purpose"\n                                            [rows]="3"\n                                            aria-label="textarea"></textarea>\n                                    </cds-label>\n                                </div>\n                                <div cdsRow class="form-item">\n                                    <button cdsButton (click)="changeStep(2)">Step 3</button>\n                                </div>\n                            </div>\n                        </form>\n                    </ng-container>\n                    <ng-container *ngSwitchCase="2">\n                        <div cdsGrid>\n                            <div cdsRow>\n                                Step 3 form!\n                            </div>\n                            <div cdsRow class="form-item">\n                                <button cdsButton (click)="changeStep(1)">Step 2</button>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    ',styles:["\n\t\t.header {\n\t\t\tmargin-bottom: 5rem;\n\t\t}\n\n\t\t.indicator-wrapper {\n\t\t\tbackground-color: #f4f4f4;\n\t\t}\n\n\t\t.sub-heading {\n\t\t\tmargin-bottom: 1.5rem;\n\t\t}\n\n\t\t.indicator {\n\t\t\tmargin-top: 1rem;\n\t\t}\n\n\t\t.form-label {\n\t\t\tmargin-top: 0.7rem;\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\n\t\t.dropdown {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.form-item {\n\t\t\tmargin-top: 1.5rem;\n\t\t}\n\t"]})],MultiStepFormStory);const multi_step_form_stories={title:"Pattern/Forms",decorators:[(0,dist.moduleMetadata)({declarations:[MultiStepFormStory],imports:[src_button.hJ,grid.zE,ui_shell.p5,progress_indicator._,breadcrumb.wH,fesm2020_forms.UX,input.gP,dropdown.kW]})]},MultiStep=(args=>({props:args,template:"\n        \x3c!--\n            app-* components are for demo purposes only.\n            You can create your own implementation by using the component source as an example.\n        --\x3e\n        <app-multi-step-form></app-multi-step-form>\n    "})).bind({});MultiStep.parameters={...MultiStep.parameters,docs:{...MultiStep.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n        \x3c!--\n            app-* components are for demo purposes only.\n            You can create your own implementation by using the component source as an example.\n        --\x3e\n        <app-multi-step-form></app-multi-step-form>\n    `\n})",...MultiStep.parameters?.docs?.source}}};const __namedExportsOrder=["MultiStep"]}}]);