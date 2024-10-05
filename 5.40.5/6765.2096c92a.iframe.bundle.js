"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[6765],{"./src/ui-shell/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p5:()=>UIShellModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),src_button=__webpack_require__("./src/button/index.ts"),i18n=__webpack_require__("./src/i18n/index.ts"),icon=__webpack_require__("./src/icon/index.ts"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs");let Header=class Header{constructor(i18n,domSanitizer,router){this.i18n=i18n,this.domSanitizer=domSanitizer,this.router=router,this.brand="IBM",this.useRouter=!1,this.navigation=new core.EventEmitter,this._href="#"}set href(v){this._href=v}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}isTemplate(value){return value instanceof core.TemplateRef}navigate(event){if(this.router&&this.route){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}else"#"===this._href&&event.preventDefault()}};Header.ctorParameters=()=>[{type:i18n.oc},{type:platform_browser.DomSanitizer},{type:router.F0,decorators:[{type:core.Optional}]}],Header.propDecorators={skipTo:[{type:core.Input}],name:[{type:core.Input}],brand:[{type:core.Input}],href:[{type:core.Input}],route:[{type:core.Input}],routeExtras:[{type:core.Input}],useRouter:[{type:core.Input}],navigation:[{type:core.Output}]},Header=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header, ibm-header",template:'\n\t\t<header\n\t\t\tclass="cds--header"\n\t\t\t[attr.aria-label]="brand + \' \' + name">\n\t\t\t<a\n\t\t\t\t*ngIf="skipTo"\n\t\t\t\tclass="cds--skip-to-content"\n\t\t\t\t[href]="skipTo"\n\t\t\t\ttabindex="0">\n\t\t\t\t{{ i18n.get("UI_SHELL.SKIP_TO") | async }}\n\t\t\t</a>\n\t\t\t<ng-content select="cds-hamburger,ibm-hamburger"></ng-content>\n\t\t\t<ng-template\n\t\t\t\t*ngIf="isTemplate(brand)"\n\t\t\t\t[ngTemplateOutlet]="brand">\n\t\t\t</ng-template>\n\t\t\t<ng-container *ngIf="!isTemplate(brand)" [ngSwitch]="useRouter">\n\t\t\t\t<a\n\t\t\t\t\t*ngSwitchCase="false"\n\t\t\t\t\tclass="cds--header__name"\n\t\t\t\t\t[href]="href"\n\t\t\t\t\t(click)="navigate($event)">\n\t\t\t\t\t<span class="cds--header__name--prefix">{{brand}}&nbsp;</span>\n\t\t\t\t\t{{name}}\n\t\t\t\t</a>\n\t\t\t\t<a\n\t\t\t\t\t*ngSwitchCase="true"\n\t\t\t\t\tclass="cds--header__name"\n\t\t\t\t\t[routerLink]="route">\n\t\t\t\t\t<span class="cds--header__name--prefix">{{brand}}&nbsp;</span>\n\t\t\t\t\t{{name}}\n\t\t\t\t</a>\n\t\t\t</ng-container>\n\t\t\t<ng-content></ng-content>\n\t\t</header>\n\t'})],Header);let HeaderItem=class HeaderItem{constructor(domSanitizer,router){this.domSanitizer=domSanitizer,this.router=router,this.role="listitem",this.useRouter=!1,this.navigation=new core.EventEmitter,this._href="#"}set href(v){void 0!==v&&(this._href=v)}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}navigate(event){if(this.router&&this.route){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}else"#"===this._href&&event.preventDefault()}};HeaderItem.ctorParameters=()=>[{type:platform_browser.DomSanitizer},{type:router.F0,decorators:[{type:core.Optional}]}],HeaderItem.propDecorators={role:[{type:core.HostBinding,args:["attr.role"]}],href:[{type:core.Input}],useRouter:[{type:core.Input}],activeLinkClass:[{type:core.Input}],isCurrentPage:[{type:core.Input}],route:[{type:core.Input}],routeExtras:[{type:core.Input}],navigation:[{type:core.Output}]},HeaderItem=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header-item, ibm-header-item",template:'\n\t\t<ng-container [ngSwitch]="useRouter">\n\t\t\t<ng-template #content><ng-content></ng-content></ng-template>\n\t\t\t<a\n\t\t\t\t*ngSwitchCase="false"\n\t\t\t\tclass="cds--header__menu-item"\n\t\t\t\ttabindex="0"\n\t\t\t\t[ngClass]="{\'cds--header__menu-item--current\' : isCurrentPage}"\n\t\t\t\t[href]="href"\n\t\t\t\t(click)="navigate($event)">\n\t\t\t\t<ng-container *ngTemplateOutlet="content"></ng-container>\n\t\t\t</a>\n\t\t\t<a\n\t\t\t\t*ngSwitchCase="true"\n\t\t\t\tclass="cds--header__menu-item"\n\t\t\t\t[routerLinkActive]="[\'cds--header__menu-item--current\']"\n\t\t\t\ttabindex="0"\n\t\t\t\t[ngClass]="{\'cds--header__menu-item--current\' : isCurrentPage}"\n\t\t\t\t[routerLink]="route"\n\t\t\t\t[routerLinkActive]="activeLinkClass">\n\t\t\t\t<ng-container *ngTemplateOutlet="content"></ng-container>\n\t\t\t</a>\n\t\t</ng-container>\n\t',styles:["\n\t\t:host {\n\t\t\tdisplay: list-item;\n\t\t}\n\t"]})],HeaderItem);let HeaderMenu=class HeaderMenu{constructor(domSanitizer,elementRef){this.domSanitizer=domSanitizer,this.elementRef=elementRef,this.subMenu=!0,this.role="listitem",this.trigger="click",this.expanded=!1,this._href="#"}set href(v){void 0!==v&&(this._href=v)}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}onClick(){"click"===this.trigger&&(this.expanded=!this.expanded)}onMouseOver(){"mouseover"===this.trigger&&(this.expanded=!0)}onMouseOut(){"mouseover"===this.trigger&&(this.expanded=!1)}onFocusOut(event){this.elementRef.nativeElement.contains(event.relatedTarget)||(this.expanded=!1)}navigate(event){"#"===this._href&&event.preventDefault()}};HeaderMenu.ctorParameters=()=>[{type:platform_browser.DomSanitizer},{type:core.ElementRef}],HeaderMenu.propDecorators={subMenu:[{type:core.HostBinding,args:["class.cds--header__submenu"]}],role:[{type:core.HostBinding,args:["attr.role"]}],title:[{type:core.Input}],href:[{type:core.Input}],trigger:[{type:core.Input}],headerItems:[{type:core.Input}],icon:[{type:core.Input}],onClick:[{type:core.HostListener,args:["click"]}],onMouseOver:[{type:core.HostListener,args:["mouseover"]}],onMouseOut:[{type:core.HostListener,args:["mouseout"]}],onFocusOut:[{type:core.HostListener,args:["focusout",["$event"]]}]},HeaderMenu=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header-menu, ibm-header-menu",template:'\n\t\t<a\n\t\t\tclass="cds--header__menu-item cds--header__menu-title"\n\t\t\t[href]="href"\n\t\t\ttabindex="0"\n\t\t\taria-haspopup="menu"\n\t\t\t[attr.aria-expanded]="expanded"\n\t\t\t(click)="navigate($event)">\n\t\t\t{{title}}\n\t\t\t<ng-template *ngIf="icon; else defaultIcon" [ngTemplateOutlet]="icon"></ng-template>\n\t\t\t<ng-template #defaultIcon>\n\t\t\t\t<svg class="cds--header__menu-arrow" width="12" height="7" aria-hidden="true">\n\t\t\t\t\t<path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />\n\t\t\t\t</svg>\n\t\t\t</ng-template>\n\t\t</a>\n\t\t<div class="cds--header__menu" [attr.aria-label]="title">\n\t\t\t<ng-content></ng-content>\n\t\t\t<ng-container *ngFor="let headerItem of headerItems">\n\t\t\t\t<cds-header-item\n\t\t\t\t\t[href]="headerItem.href"\n\t\t\t\t\t[route]="headerItem.route"\n\t\t\t\t\t[routeExtras]="headerItem.routeExtras">\n\t\t\t\t\t{{ headerItem.content }}\n\t\t\t\t</cds-header-item>\n\t\t\t</ng-container>\n\t\t</div>\n\t',styles:["\n\t\t:host {\n\t\t\tdisplay: list-item;\n\t\t}\n\t"]})],HeaderMenu);let HeaderNavigation=class HeaderNavigation{constructor(){this.height=100}};HeaderNavigation.propDecorators={height:[{type:core.HostBinding,args:["style.height.%"]}],ariaLabel:[{type:core.Input}],navigationItems:[{type:core.Input}]},HeaderNavigation=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header-navigation, ibm-header-navigation",template:'\n\t\t<nav class="cds--header__nav" [attr.aria-label]="ariaLabel">\n\t\t\t<div class="cds--header__menu-bar" role="list">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t\t<ng-container *ngFor="let navigationItem of navigationItems">\n\t\t\t\t\t<cds-header-item\n\t\t\t\t\t\t*ngIf="navigationItem.type === \'item\'"\n\t\t\t\t\t\t[href]="navigationItem.href"\n\t\t\t\t\t\t[route]="navigationItem.route"\n\t\t\t\t\t\t[routeExtras]="navigationItem.routeExtras"\n\t\t\t\t\t\t[isCurrentPage]="!!navigationItem.isCurrentPage">\n\t\t\t\t\t\t{{ navigationItem.content }}\n\t\t\t\t\t</cds-header-item>\n\t\t\t\t\t<cds-header-menu\n\t\t\t\t\t\t*ngIf="navigationItem.type === \'menu\'"\n\t\t\t\t\t\t[href]="navigationItem.href"\n\t\t\t\t\t\t[title]="navigationItem.title"\n\t\t\t\t\t\t[trigger]="navigationItem.trigger ? navigationItem.trigger : \'click\'"\n\t\t\t\t\t\t[headerItems]="navigationItem.menuItems">\n\t\t\t\t\t</cds-header-menu>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</nav>\n\t'})],HeaderNavigation);let HeaderGlobal=class HeaderGlobal{constructor(){this.hostClass=!0}};HeaderGlobal.propDecorators={hostClass:[{type:core.HostBinding,args:["class.cds--header__global"]}]},HeaderGlobal=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header-global, ibm-header-global",template:"\n\t\t<ng-content></ng-content>\n\t"})],HeaderGlobal);let HeaderAction=class HeaderAction extends src_button.HL{constructor(){super(...arguments),this.active=!1,this.activeChange=new core.EventEmitter,this.selected=new core.EventEmitter}onClick(){this.active=!this.active,this.selected.emit(this.active),this.activeChange.emit(this.active)}};HeaderAction.propDecorators={description:[{type:core.Input}],ariaLabel:[{type:core.Input}],active:[{type:core.Input}],activeChange:[{type:core.Output}],selected:[{type:core.Output}]},HeaderAction=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-header-action, ibm-header-action",template:'\n\t\t<cds-icon-button\n\t\t\t[buttonNgClass]="{\n\t\t\t\t\'cds--header__action\': true,\n\t\t\t\t\'cds--header__action--active\': active\n\t\t\t}"\n\t\t\t(click)="onClick()"\n\t\t\t[align]="align"\n\t\t\t[caret]="caret"\n\t\t\t[dropShadow]="dropShadow"\n\t\t\t[highContrast]="highContrast"\n\t\t\t[isOpen]="isOpen"\n\t\t\t[enterDelayMs]="enterDelayMs"\n\t\t\t[leaveDelayMs]="leaveDelayMs"\n\t\t\t[description]="description"\n\t\t\t[buttonAttributes]="{\n\t\t\t\t\'aria-label\': ariaLabel\n\t\t\t}">\n\t\t\t<ng-content></ng-content>\n\t\t</cds-icon-button>\n\t'})],HeaderAction);let Hamburger=class Hamburger{constructor(i18n){this.i18n=i18n,this.active=!1,this.activeTitle=this.i18n.get().UI_SHELL.HEADER.CLOSE_MENU,this.inactiveTitle=this.i18n.get().UI_SHELL.HEADER.OPEN_MENU,this.selected=new core.EventEmitter}doClick(){this.selected.emit(this.active)}};Hamburger.ctorParameters=()=>[{type:i18n.oc}],Hamburger.propDecorators={active:[{type:core.Input}],activeTitle:[{type:core.Input}],inactiveTitle:[{type:core.Input}],selected:[{type:core.Output}]},Hamburger=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-hamburger, ibm-hamburger",template:'\n\t\t<button\n\t\t\ttype="button"\n\t\t\t(click)="doClick()"\n\t\t\t[ngClass]="{\'cds--header__action--active\': active}"\n\t\t\tclass="cds--header__menu-trigger cds--header__action cds--header__menu-toggle"\n\t\t\t[attr.aria-label]="active ? activeTitle : inactiveTitle"\n\t\t\t[attr.title]="active ? activeTitle : inactiveTitle">\n\t\t\t<svg *ngIf="!active" cdsIcon="menu" size="20"></svg>\n\t\t\t<svg *ngIf="active" cdsIcon="close" size="20"></svg>\n\t\t</button>\n\t'})],Hamburger);let HeaderModule=class HeaderModule{};HeaderModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Header,HeaderItem,HeaderMenu,HeaderNavigation,HeaderGlobal,HeaderAction,Hamburger],imports:[common.CommonModule,src_button.hJ,i18n.LU,icon.QX,router.Bz],exports:[Header,HeaderItem,HeaderMenu,HeaderNavigation,HeaderGlobal,HeaderAction,Hamburger]})],HeaderModule);let SideNav=class SideNav{constructor(i18n){this.i18n=i18n,this.hostClass=!0,this.ariaLabel="Side navigation",this.expanded=!0,this.hidden=!1,this.rail=!1,this.ux=!0,this.allowExpansion=!1,this.useRouter=!1}toggle(){this.expanded=!this.expanded}};SideNav.ctorParameters=()=>[{type:i18n.oc}],SideNav.propDecorators={hostClass:[{type:core.HostBinding,args:["class.cds--side-nav"]}],ariaLabel:[{type:core.Input}],expanded:[{type:core.HostBinding,args:["class.cds--side-nav--expanded"]},{type:core.Input}],hidden:[{type:core.HostBinding,args:["class.cds--side-nav--hidden"]},{type:core.Input}],rail:[{type:core.HostBinding,args:["class.cds--side-nav--rail"]},{type:core.Input}],ux:[{type:core.HostBinding,args:["class.cds--side-nav__navigation"]}],allowExpansion:[{type:core.Input}],navigationItems:[{type:core.Input}],useRouter:[{type:core.Input}]},SideNav=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-sidenav, ibm-sidenav",template:'\n\t\t<nav class="cds--side-nav__items" [attr.aria-label]="ariaLabel">\n\t\t\t<ng-content select="cds-sidenav-header,ibm-sidenav-header"></ng-content>\n\t\t\t<div role="list">\n\t\t\t\t<div class="cds--side-nav__header-navigation cds--side-nav__header-divider">\n\t\t\t\t\t<ng-container *ngFor="let navigationItem of navigationItems">\n\t\t\t\t\t\t<cds-sidenav-item\n\t\t\t\t\t\t\t*ngIf="navigationItem.type === \'item\'"\n\t\t\t\t\t\t\t[href]="navigationItem.href"\n\t\t\t\t\t\t\t[route]="navigationItem.route"\n\t\t\t\t\t\t\t[routeExtras]="navigationItem.routeExtras"\n\t\t\t\t\t\t\t[useRouter]="useRouter"\n\t\t\t\t\t\t\t[title]="navigationItem.title">\n\t\t\t\t\t\t\t{{ navigationItem.content }}\n\t\t\t\t\t\t</cds-sidenav-item>\n\t\t\t\t\t\t<cds-sidenav-menu\n\t\t\t\t\t\t\t*ngIf="navigationItem.type === \'menu\'"\n\t\t\t\t\t\t\t[title]="navigationItem.title"\n\t\t\t\t\t\t\t[useRouter]="useRouter"\n\t\t\t\t\t\t\t[menuItems]="navigationItem.menuItems">\n\t\t\t\t\t\t</cds-sidenav-menu>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t\t<footer class="cds--side-nav__footer">\n\t\t\t\t<button\n\t\t\t\t\t*ngIf="allowExpansion"\n\t\t\t\t\tclass="cds--side-nav__toggle"\n\t\t\t\t\ttype="button"\n\t\t\t\t\t[title]="(expanded ? i18n.get(\'UI_SHELL.SIDE_NAV.TOGGLE_CLOSE\') : i18n.get(\'UI_SHELL.SIDE_NAV.TOGGLE_OPEN\')) | async"\n\t\t\t\t\t(click)="toggle()">\n\t\t\t\t\t<div class="cds--side-nav__icon">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\t*ngIf="expanded"\n\t\t\t\t\t\t\tfocusable="false"\n\t\t\t\t\t\t\tpreserveAspectRatio="xMidYMid meet"\n\t\t\t\t\t\t\tstyle="will-change: transform;"\n\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\t\twidth="20"\n\t\t\t\t\t\t\theight="20"\n\t\t\t\t\t\t\tviewBox="0 0 32 32"\n\t\t\t\t\t\t\taria-hidden="true">\n\t\t\t\t\t\t\t<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\t*ngIf="!expanded"\n\t\t\t\t\t\t\tfocusable="false"\n\t\t\t\t\t\t\tpreserveAspectRatio="xMidYMid meet"\n\t\t\t\t\t\t\tstyle="will-change: transform;"\n\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\t\twidth="20"\n\t\t\t\t\t\t\theight="20"\n\t\t\t\t\t\t\tviewBox="0 0 32 32"\n\t\t\t\t\t\t\taria-hidden="true">\n\t\t\t\t\t\t\t<path d="M22 16L12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="cds--assistive-text">\n\t\t\t\t\t\t{{(expanded ? i18n.get(\'UI_SHELL.SIDE_NAV.TOGGLE_CLOSE\') : i18n.get(\'UI_SHELL.SIDE_NAV.TOGGLE_OPEN\')) | async}}\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</footer>\n\t\t</nav>\n\t',encapsulation:core.ViewEncapsulation.None})],SideNav);let SideNavItem=class SideNavItem{constructor(domSanitizer,router){this.domSanitizer=domSanitizer,this.router=router,this.useRouter=!1,this.active=!1,this.isSubMenu=!1,this.navigation=new core.EventEmitter,this.selected=new core.EventEmitter,this.role="listitem",this._href="#"}set href(v){void 0!==v&&(this._href=v)}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}get sideNav(){return!this.isSubMenu}get menuItem(){return this.isSubMenu}ngOnChanges(changes){changes.active&&this.selected.emit(this.active)}navigate(event){if(this.router&&this.route){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}else"#"===this._href&&event.preventDefault()}};SideNavItem.ctorParameters=()=>[{type:platform_browser.DomSanitizer},{type:router.F0,decorators:[{type:core.Optional}]}],SideNavItem.propDecorators={href:[{type:core.Input}],useRouter:[{type:core.Input}],sideNav:[{type:core.HostBinding,args:["class.cds--side-nav__item"]}],menuItem:[{type:core.HostBinding,args:["class.cds--side-nav__menu-item"]}],active:[{type:core.Input}],route:[{type:core.Input}],isSubMenu:[{type:core.Input}],routeExtras:[{type:core.Input}],title:[{type:core.Input}],navigation:[{type:core.Output}],selected:[{type:core.Output}],role:[{type:core.HostBinding,args:["attr.role"]}]},SideNavItem=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-sidenav-item, ibm-sidenav-item",template:'\n\t\t<a *ngIf="!useRouter; else sidenavItemRouterTpl"\n\t\t\tclass="cds--side-nav__link"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--side-nav__item--active\': active\n\t\t\t}"\n\t\t\t[href]="href"\n\t\t\t[attr.aria-current]="(active ? \'page\' : null)"\n\t\t\t[attr.title]="title ? title : null"\n\t\t\t(click)="navigate($event)">\n\t\t\t<ng-template [ngTemplateOutlet]="sidenavItemContentTpl"></ng-template>\n\t\t</a>\n\n\t\t<ng-template #sidenavItemRouterTpl>\n\t\t\t<a\n\t\t\t\t[attr.title]="title ? title : null"\n\t\t\t\t[routerLink]="route"\n\t\t\t\t[routeExtras]="routeExtras"\n\t\t\t\trouterLinkActive="cds--side-nav__item--active"\n\t\t\t\tariaCurrentWhenActive="page"\n\t\t\t\tclass="cds--side-nav__link">\n\t\t\t\t<ng-template [ngTemplateOutlet]="sidenavItemContentTpl"></ng-template>\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #sidenavItemContentTpl>\n\t\t\t<div *ngIf="!isSubMenu" class="cds--side-nav__icon">\n\t\t\t\t<ng-content select="svg, [icon]"></ng-content>\n\t\t\t</div>\n\t\t\t<span class="cds--side-nav__link-text">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</span>\n\t\t</ng-template>\n\t',styles:["\n\t\t:host {\n\t\t\tdisplay: list-item;\n\t\t}\n\t"]})],SideNavItem);var Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");let SideNavMenu=class SideNavMenu{constructor(){this.navItem=!0,this.navItemIcon=!0,this.role="listitem",this.useRouter=!1,this.expanded=!1,this.hasActiveChild=!1,this.activeItemsSubscription=new Subscription.w0}get navItemActive(){return this.hasActiveChild}ngAfterContentInit(){setTimeout((()=>{this.sidenavItems.forEach((item=>{item.isSubMenu=!0,this.findActiveChildren();const activeItemSubscription=item.selected.subscribe((()=>{this.findActiveChildren()}));this.activeItemsSubscription.add(activeItemSubscription)})),this.sidenavItems.changes.subscribe((()=>{this.sidenavItems.forEach((item=>{item.isSubMenu=!0,this.findActiveChildren();const activeItemSubscription=item.selected.subscribe((()=>{this.findActiveChildren()}));this.activeItemsSubscription.add(activeItemSubscription)}))}))}))}ngOnDestroy(){this.activeItemsSubscription.unsubscribe()}toggle(){this.expanded=!this.expanded}findActiveChildren(){this.hasActiveChild=this.sidenavItems.some((item=>item.active))}};SideNavMenu.propDecorators={navItem:[{type:core.HostBinding,args:["class.cds--side-nav__item"]}],navItemIcon:[{type:core.HostBinding,args:["class.cds--side-nav__item--icon"]}],navItemActive:[{type:core.HostBinding,args:["class.cds--side-nav__item--active"]}],role:[{type:core.HostBinding,args:["attr.role"]}],useRouter:[{type:core.Input}],title:[{type:core.Input}],expanded:[{type:core.Input}],hasActiveChild:[{type:core.Input}],menuItems:[{type:core.Input}],sidenavItems:[{type:core.ContentChildren,args:[SideNavItem]}]},SideNavMenu=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-sidenav-menu, ibm-sidenav-menu",template:'\n\t\t<button\n\t\t\t(click)="toggle()"\n\t\t\tclass="cds--side-nav__submenu"\n\t\t\taria-haspopup="true"\n\t\t\t[attr.aria-expanded]="expanded"\n\t\t\ttype="button">\n\t\t\t<div class="cds--side-nav__icon">\n\t\t\t\t<ng-content select="svg, [icon]"></ng-content>\n\t\t\t</div>\n\t\t\t<span class="cds--side-nav__submenu-title">{{title}}</span>\n\t\t\t<div class="cds--side-nav__icon cds--side-nav__icon--small cds--side-nav__submenu-chevron">\n\t\t\t\t<svg\n\t\t\t\t\tfocusable="false"\n\t\t\t\t\tpreserveAspectRatio="xMidYMid meet"\n\t\t\t\t\tstyle="will-change: transform;"\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\twidth="20"\n\t\t\t\t\theight="20"\n\t\t\t\t\tviewBox="0 0 32 32"\n\t\t\t\t\taria-hidden="true">\n\t\t\t\t\t<path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</button>\n\t\t<div class="cds--side-nav__menu" role="list">\n\t\t\t<ng-content></ng-content>\n\t\t\t<ng-container *ngFor="let menuItem of menuItems">\n\t\t\t\t<cds-sidenav-item\n\t\t\t\t\t[href]="menuItem.href"\n\t\t\t\t\t[route]="menuItem.route"\n\t\t\t\t\t[routeExtras]="menuItem.routeExtras"\n\t\t\t\t\t[useRouter]="useRouter"\n\t\t\t\t\t[isSubMenu]="true">\n\t\t\t\t\t{{ menuItem.content }}\n\t\t\t\t</cds-sidenav-item>\n\t\t\t</ng-container>\n\t\t</div>\n\t'})],SideNavMenu);var keys=__webpack_require__("./node_modules/lodash/keys.js"),keys_default=__webpack_require__.n(keys);let RouterLinkExtendedDirective=class RouterLinkExtendedDirective extends router.yS{ngOnChanges(changes){changes.routeExtras&&this.routeExtras&&keys_default()(this.routeExtras).forEach((routeExtraProperty=>this[routeExtraProperty]=this.routeExtras[routeExtraProperty])),super.ngOnChanges(changes)}};RouterLinkExtendedDirective.propDecorators={routeExtras:[{type:core.Input}]},RouterLinkExtendedDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[routerLink]"})],RouterLinkExtendedDirective);let SideNavModule=class SideNavModule{};SideNavModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[SideNav,SideNavItem,SideNavMenu,RouterLinkExtendedDirective],imports:[common.CommonModule,i18n.LU,router.Bz],exports:[SideNav,SideNavItem,SideNavMenu]})],SideNavModule);let Panel=class Panel{constructor(){this.expanded=!1}};Panel.propDecorators={expanded:[{type:core.Input}],ariaLabel:[{type:core.Input}]},Panel=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-panel, ibm-panel",template:'\n\t\t<div\n\t\t\tclass="cds--header-panel"\n\t\t\t[attr.aria-label]="ariaLabel"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--header-panel--expanded\': expanded\n\t\t\t}">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t'})],Panel);let SwitcherList=class SwitcherList{constructor(){this.switcher=!0,this.role="list"}};SwitcherList.propDecorators={switcher:[{type:core.HostBinding,args:["class.cds--switcher"]}],role:[{type:core.HostBinding,args:["attr.role"]}]},SwitcherList=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-switcher-list, ibm-switcher-list",template:"\n\t\t\t<ng-content></ng-content>\n\t",styles:["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]})],SwitcherList);let SwitcherListItem=class SwitcherListItem{constructor(domSanitizer,router){this.domSanitizer=domSanitizer,this.router=router,this.active=!1,this.navigation=new core.EventEmitter,this.itemClass=!0,this.itemRole="listitem",this._href="#",this._target=""}set href(value){this._href=value}get href(){return this.domSanitizer.bypassSecurityTrustUrl(this._href)}set target(value){this._target=value}get target(){return this._target}navigate(event){if(this.router&&this.route){event.preventDefault();const status=this.router.navigate(this.route,this.routeExtras);this.navigation.emit(status)}else"#"===this._href&&event.preventDefault()}};SwitcherListItem.ctorParameters=()=>[{type:platform_browser.DomSanitizer},{type:router.F0,decorators:[{type:core.Optional}]}],SwitcherListItem.propDecorators={active:[{type:core.Input}],route:[{type:core.Input}],routeExtras:[{type:core.Input}],href:[{type:core.Input}],navigation:[{type:core.Output}],target:[{type:core.Input}],itemClass:[{type:core.HostBinding,args:["class.cds--switcher__item"]}],itemRole:[{type:core.HostBinding,args:["attr.role"]}]},SwitcherListItem=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-switcher-list-item, ibm-switcher-list-item",template:'\n\t\t<a\n\t\t\tclass="cds--switcher__item-link"\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--switcher__item-link--selected\': active\n\t\t\t}"\n\t\t\t[href]="href"\n\t\t\t[target]="target"\n\t\t\t(click)="navigate($event)">\n\t\t\t<ng-content></ng-content>\n\t\t</a>\n\t'})],SwitcherListItem);let PanelModule=class PanelModule{};PanelModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Panel,SwitcherList,SwitcherListItem],imports:[common.CommonModule,i18n.LU],exports:[Panel,SwitcherList,SwitcherListItem]})],PanelModule);let UIShellModule=class UIShellModule{};UIShellModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,i18n.LU,HeaderModule,SideNavModule,PanelModule],exports:[HeaderModule,SideNavModule,PanelModule]})],UIShellModule)}}]);