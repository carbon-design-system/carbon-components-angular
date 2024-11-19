"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[901],{"./src/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rU:()=>Link,LO:()=>LinkModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let Link=class Link{constructor(){this.baseClass=!0,this.inline=!1}set disabled(disabled){this._disabled=disabled,this.tabindex=this.disabled?-1:null}get disabled(){return this._disabled}};Link.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--link"]}],tabindex:[{type:core.HostBinding,args:["attr.tabindex"]}],inline:[{type:core.Input},{type:core.HostBinding,args:["class.cds--link--inline"]}],disabled:[{type:core.Input},{type:core.HostBinding,args:["attr.aria-disabled"]},{type:core.HostBinding,args:["class.cds--link--disabled"]}]},Link=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsLink], [ibmLink]"})],Link);let LinkIconDirective=class LinkIconDirective{constructor(){this.iconClass=!0}};LinkIconDirective.propDecorators={iconClass:[{type:core.HostBinding,args:["class.cds--link__icon"]}]},LinkIconDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[ibmLinkIcon], [cdsLinkIcon]"})],LinkIconDirective);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LinkModule=class LinkModule{};LinkModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Link,LinkIconDirective],exports:[Link,LinkIconDirective],imports:[common.CommonModule]})],LinkModule)},"./src/notification/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yj:()=>BaseNotification,PQ:()=>NotificationModule,gq:()=>NotificationService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let ActionableButton=class ActionableButton{constructor(){this.actionableButton=!0,this.type="button"}};ActionableButton.propDecorators={actionableButton:[{type:core.HostBinding,args:["class.cds--actionable-notification__action-button"]}],type:[{type:core.HostBinding,args:["attr.type"]}]},ActionableButton=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsActionableButton], [ibmActionableButton]"})],ActionableButton);let ActionableSubtitle=class ActionableSubtitle{constructor(){this.baseClass=!0}};ActionableSubtitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--actionable-notification__subtitle"]}]},ActionableSubtitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsActionableSubtitle], [ibmActionableSubtitle]"})],ActionableSubtitle);let ActionableTitle=class ActionableTitle{constructor(){this.baseClass=!0}};ActionableTitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--actionable-notification__title"]}]},ActionableTitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsActionableTitle], [ibmActionableTitle]"})],ActionableTitle);var isObservable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isObservable.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),i18n=__webpack_require__("./src/i18n/index.ts");let NotificationDisplayService=class NotificationDisplayService{constructor(applicationRef){this.applicationRef=applicationRef}close(notificationRef){notificationRef.hostView&&setTimeout((()=>{this.applicationRef.detachView(notificationRef.hostView),notificationRef.destroy()}),200)}};NotificationDisplayService.ctorParameters=()=>[{type:core.ApplicationRef}],NotificationDisplayService=(0,tslib_es6.gn)([(0,core.Injectable)()],NotificationDisplayService);let BaseNotification=class BaseNotification{constructor(notificationDisplayService,i18n){this.notificationDisplayService=notificationDisplayService,this.i18n=i18n,this.close=new core.EventEmitter,this.iconDictionary={error:"error--filled",info:"information--filled","info-square":"information--square--filled",success:"checkmark--filled",warning:"warning--filled","warning-alt":"warning--alt--filled"},this.defaultNotificationObj={title:"",message:"",type:"info",showClose:!0,closeLabel:this.i18n.get("NOTIFICATION.CLOSE_BUTTON"),role:"status"},this._notificationObj=Object.assign({},this.defaultNotificationObj)}get roleAttr(){return this._notificationObj.role}onClose(){this.close.emit()}onClick(action,event){action.click&&((0,isObservable.b)(action.click)?action.click.next({event,action}):action.click({event,action}))}destroy(){this.notificationDisplayService.close(this)}};BaseNotification.ctorParameters=()=>[{type:NotificationDisplayService},{type:i18n.oc}],BaseNotification.propDecorators={roleAttr:[{type:core.HostBinding,args:["attr.role"]}],close:[{type:core.Output}]},BaseNotification=(0,tslib_es6.gn)([(0,core.Component)({template:""})],BaseNotification);let ActionableNotification=class ActionableNotification extends BaseNotification{constructor(notificationDisplayService,i18n){super(notificationDisplayService,i18n),this.notificationDisplayService=notificationDisplayService,this.i18n=i18n,this.notificationID="notification-"+ActionableNotification.notificationCount++,this.notificationClass=!0,this.defaultNotificationObj={...this.defaultNotificationObj,variant:"inline",role:"alertdialog"}}get notificationObj(){return this._notificationObj}set notificationObj(obj){obj.closeLabel&&!(0,isObservable.b)(obj.closeLabel)&&(obj.closeLabel=(0,of.of)(obj.closeLabel)),this._notificationObj=Object.assign({},this.defaultNotificationObj,obj)}get toastVariant(){return"toast"===this.notificationObj.variant}get isError(){return"error"===this.notificationObj.type}get isInfo(){return"info"===this.notificationObj.type}get isInfoSquare(){return"info-square"===this.notificationObj.type}get isSuccess(){return"success"===this.notificationObj.type}get isWarning(){return"warning"===this.notificationObj.type}get isWarningAlt(){return"warning-alt"===this.notificationObj.type}get isLowContrast(){return this.notificationObj.lowContrast}get isCloseHidden(){return!this._notificationObj.showClose}};ActionableNotification.notificationCount=0,ActionableNotification.ctorParameters=()=>[{type:NotificationDisplayService},{type:i18n.oc}],ActionableNotification.propDecorators={notificationObj:[{type:core.Input}],notificationID:[{type:core.HostBinding,args:["attr.id"]}],notificationClass:[{type:core.HostBinding,args:["class.cds--actionable-notification"]}],toastVariant:[{type:core.HostBinding,args:["class.cds--actionable-notification--toast"]}],isError:[{type:core.HostBinding,args:["class.cds--actionable-notification--error"]}],isInfo:[{type:core.HostBinding,args:["class.cds--actionable-notification--info"]}],isInfoSquare:[{type:core.HostBinding,args:["class.cds--actionable-notification--info-square"]}],isSuccess:[{type:core.HostBinding,args:["class.cds--actionable-notification--success"]}],isWarning:[{type:core.HostBinding,args:["class.cds--actionable-notification--warning"]}],isWarningAlt:[{type:core.HostBinding,args:["class.cds--actionable-notification--warning-alt"]}],isLowContrast:[{type:core.HostBinding,args:["class.cds--actionable-notification--low-contrast"]}],isCloseHidden:[{type:core.HostBinding,args:["class.cds--actionable-notification--hide-close-button"]}]},ActionableNotification=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-actionable-notification, ibm-actionable-notification",template:'\n\t\t<div class="cds--actionable-notification__details">\n\t\t\t<svg\n\t\t\t\t[cdsIcon]="iconDictionary[notificationObj.type]"\n\t\t\t\tsize="20"\n\t\t\t\t*ngIf="notificationObj.type"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--inline-notification__icon\': notificationObj.variant === \'inline\',\n\t\t\t\t\t\'cds--toast-notification__icon\': notificationObj.variant === \'toast\'\n\t\t\t\t}"\n\t\t\t\tclass="cds--actionable-notification__icon">\n\t\t\t</svg>\n\t\t\t<div class="cds--actionable-notification__text-wrapper">\n\t\t\t\t<div class="cds--actionable-notification__content">\n\t\t\t\t\t<div *ngIf="!notificationObj.template" cdsActionableTitle [innerHTML]="notificationObj.title"></div>\n\t\t\t\t\t<div *ngIf="!notificationObj.template" cdsActionableSubtitle>\n\t\t\t\t\t\t<span [innerHTML]="notificationObj.message"></span>\n\t\t\t\t\t\t<ng-container *ngFor="let link of notificationObj.links">\n\t\t\t\t\t\t\t<a cdsLink [href]="link.href">{{link.text}}</a>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj }"></ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-container *ngIf="!notificationObj.actionsTemplate">\n\t\t\t<button\n\t\t\t\t*ngFor="let action of notificationObj.actions"\n\t\t\t\t(click)="onClick(action, $event)"\n\t\t\t\t[cdsButton]="notificationObj.variant === \'inline\' ? \'ghost\' : \'tertiary\'"\n\t\t\t\tsize="sm"\n\t\t\t\tcdsActionableButton>\n\t\t\t\t{{action.text}}\n\t\t\t</button>\n\t\t</ng-container>\n\t\t<ng-container *ngTemplateOutlet="notificationObj.actionsTemplate; context: { $implicit: notificationObj }"></ng-container>\n\t\t<button\n\t\t\t*ngIf="!isCloseHidden"\n\t\t\t(click)="onClose()"\n\t\t\tclass="cds--actionable-notification__close-button"\n\t\t\t[attr.aria-label]="notificationObj.closeLabel | async"\n\t\t\ttype="button">\n\t\t\t<svg cdsIcon="close" size="16" class="cds--actionable-notification__close-icon"></svg>\n\t\t</button>\n\t'})],ActionableNotification);let NotificationSubtitle=class NotificationSubtitle{constructor(){this.baseClass=!0}};NotificationSubtitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--inline-notification__subtitle"]}]},NotificationSubtitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsNotificationSubtitle], [ibmNotificationSubtitle]"})],NotificationSubtitle);let NotificationTitle=class NotificationTitle{constructor(){this.baseClass=!0}};NotificationTitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--inline-notification__title"]}]},NotificationTitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsNotificationTitle], [ibmNotificationTitle]"})],NotificationTitle);let Notification=class Notification extends BaseNotification{constructor(notificationDisplayService,i18n){super(notificationDisplayService,i18n),this.notificationDisplayService=notificationDisplayService,this.i18n=i18n,this.notificationID="notification-"+Notification.notificationCount++,this.notificationClass=!0}get notificationObj(){return this._notificationObj}set notificationObj(obj){obj.closeLabel&&!(0,isObservable.b)(obj.closeLabel)&&(obj.closeLabel=(0,of.of)(obj.closeLabel)),this._notificationObj=Object.assign({},this.defaultNotificationObj,obj)}get isError(){return"error"===this.notificationObj.type}get isInfo(){return"info"===this.notificationObj.type}get isInfoSquare(){return"info-square"===this.notificationObj.type}get isSuccess(){return"success"===this.notificationObj.type}get isWarning(){return"warning"===this.notificationObj.type}get isWarningAlt(){return"warning-alt"===this.notificationObj.type}get isLowContrast(){return this.notificationObj.lowContrast}get isCloseHidden(){return!this.notificationObj.showClose}};Notification.notificationCount=0,Notification.ctorParameters=()=>[{type:NotificationDisplayService},{type:i18n.oc}],Notification.propDecorators={notificationObj:[{type:core.Input}],notificationID:[{type:core.HostBinding,args:["attr.id"]}],notificationClass:[{type:core.HostBinding,args:["class.cds--inline-notification"]}],isError:[{type:core.HostBinding,args:["class.cds--inline-notification--error"]}],isInfo:[{type:core.HostBinding,args:["class.cds--inline-notification--info"]}],isInfoSquare:[{type:core.HostBinding,args:["class.cds--inline-notification--info-square"]}],isSuccess:[{type:core.HostBinding,args:["class.cds--inline-notification--success"]}],isWarning:[{type:core.HostBinding,args:["class.cds--inline-notification--warning"]}],isWarningAlt:[{type:core.HostBinding,args:["class.cds--inline-notification--warning-alt"]}],isLowContrast:[{type:core.HostBinding,args:["class.cds--inline-notification--low-contrast"]}],isCloseHidden:[{type:core.HostBinding,args:["class.cds--inline-notification--hide-close-button"]}]},Notification=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-notification, cds-inline-notification, ibm-notification, ibm-inline-notification",template:'\n\t\t<div class="cds--inline-notification__details">\n\t\t\t<svg\n\t\t\t\t[cdsIcon]="iconDictionary[notificationObj.type]"\n\t\t\t\tsize="20"\n\t\t\t\t*ngIf="notificationObj.type"\n\t\t\t\tclass="cds--inline-notification__icon">\n\t\t\t</svg>\n\t\t\t<div class="cds--inline-notification__text-wrapper">\n\t\t\t\t<div *ngIf="!notificationObj.template" cdsNotificationTitle [innerHTML]="notificationObj.title"></div>\n\t\t\t\t<div *ngIf="!notificationObj.template" cdsNotificationSubtitle>\n\t\t\t\t\t<span [innerHTML]="notificationObj.message"></span>\n\t\t\t\t</div>\n\t\t\t\t<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj}"></ng-container>\n\t\t\t</div>\n\t\t</div>\n\t\t<button\n\t\t\t*ngIf="!isCloseHidden"\n\t\t\t(click)="onClose()"\n\t\t\tclass="cds--inline-notification__close-button"\n\t\t\t[attr.aria-label]="notificationObj.closeLabel | async"\n\t\t\ttype="button">\n\t\t\t<svg cdsIcon="close" size="16" class="cds--inline-notification__close-icon"></svg>\n\t\t</button>\n\t'})],Notification);var src_button=__webpack_require__("./src/button/index.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let Toast=class Toast extends BaseNotification{constructor(notificationDisplayService,i18n){super(notificationDisplayService,i18n),this.notificationDisplayService=notificationDisplayService,this.i18n=i18n,this.toastID="toast-"+Toast.toastCount++,this.toastClass=!0}set notificationObj(obj){obj.closeLabel&&!(0,isObservable.b)(obj.closeLabel)&&(obj.closeLabel=(0,of.of)(obj.closeLabel)),this._notificationObj=Object.assign({},this.defaultNotificationObj,obj)}get notificationObj(){return this._notificationObj}get isError(){return"error"===this.notificationObj.type}get isInfo(){return"info"===this.notificationObj.type}get isInfoSquare(){return"info-square"===this.notificationObj.type}get isSuccess(){return"success"===this.notificationObj.type}get isWarning(){return"warning"===this.notificationObj.type}get isWarningAlt(){return"warning-alt"===this.notificationObj.type}get isLowContrast(){return this.notificationObj.lowContrast}get isCloseHidden(){return!this.notificationObj.showClose}ngOnInit(){this.notificationObj.closeLabel||(this.notificationObj.closeLabel=this.i18n.get().NOTIFICATION.CLOSE_BUTTON)}};Toast.toastCount=0,Toast.ctorParameters=()=>[{type:NotificationDisplayService},{type:i18n.oc}],Toast.propDecorators={notificationObj:[{type:core.Input}],toastID:[{type:core.HostBinding,args:["attr.id"]}],toastClass:[{type:core.HostBinding,args:["class.cds--toast-notification"]}],isError:[{type:core.HostBinding,args:["class.cds--toast-notification--error"]}],isInfo:[{type:core.HostBinding,args:["class.cds--toast-notification--info"]}],isInfoSquare:[{type:core.HostBinding,args:["class.cds--toast-notification--info-square"]}],isSuccess:[{type:core.HostBinding,args:["class.cds--toast-notification--success"]}],isWarning:[{type:core.HostBinding,args:["class.cds--toast-notification--warning"]}],isWarningAlt:[{type:core.HostBinding,args:["class.cds--toast-notification--warning-alt"]}],isLowContrast:[{type:core.HostBinding,args:["class.cds--toast-notification--low-contrast"]}],isCloseHidden:[{type:core.HostBinding,args:["class.cds--toast-notification--hide-close-button"]}]},Toast=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-toast, ibm-toast",template:'\n\t\t<svg\n\t\t\t[cdsIcon]="iconDictionary[notificationObj.type]"\n\t\t\tsize="20"\n\t\t\t*ngIf="notificationObj.type"\n\t\t\tclass="cds--toast-notification__icon">\n\t\t</svg>\n\t\t<div class="cds--toast-notification__details">\n\t\t\t<h3 *ngIf="!notificationObj.template" cdsToastTitle [innerHTML]="notificationObj.title"></h3>\n\t\t\t<div *ngIf="!notificationObj.template" cdsToastSubtitle>\n\t\t\t\t<span [innerHTML]="notificationObj.subtitle"></span>\n\t\t\t</div>\n\t\t\t<p *ngIf="!notificationObj.template" cdsToastCaption [innerHTML]="notificationObj.caption"></p>\n\t\t\t<ng-container *ngTemplateOutlet="notificationObj.template; context: { $implicit: notificationObj }"></ng-container>\n\t\t</div>\n\t\t<button\n\t\t\t*ngIf="!isCloseHidden"\n\t\t\tclass="cds--toast-notification__close-button"\n\t\t\ttype="button"\n\t\t\t[attr.aria-label]="notificationObj.closeLabel | async"\n\t\t\t(click)="onClose()">\n\t\t\t<svg cdsIcon="close" size="16" class="cds--toast-notification__close-icon"></svg>\n\t\t</button>\n\t'})],Toast);let ToastTitle=class ToastTitle{constructor(){this.baseClass=!0}};ToastTitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--toast-notification__title"]}]},ToastTitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToastTitle], [ibmToastTitle]"})],ToastTitle);let ToastSubtitle=class ToastSubtitle{constructor(){this.baseClass=!0}};ToastSubtitle.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--toast-notification__subtitle"]}]},ToastSubtitle=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToastSubtitle], [ibmToastSubtitle]"})],ToastSubtitle);let ToastCaption=class ToastCaption{constructor(){this.baseClass=!0}};ToastCaption.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--toast-notification__caption"]}]},ToastCaption=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsToastCaption], [ibmToastCaption]"})],ToastCaption);let NotificationService=class NotificationService{constructor(injector,viewContainer,ngZone){this.injector=injector,this.viewContainer=viewContainer,this.ngZone=ngZone,this.notificationRefs=new Array,this.onClose=new core.EventEmitter}showNotification(notificationObj,notificationComp=Notification){const notificationRef=this.viewContainer.createComponent(notificationComp);if(notificationRef.instance.notificationObj=notificationObj,this.notificationRefs.push(notificationRef),this.onClose=notificationRef.instance.close,notificationObj.target)document.querySelector(notificationObj.target).appendChild(notificationRef.location.nativeElement);else{let body=document.querySelector("body"),notificationClassName="notification-overlay",notificationList=body.querySelector(`.${notificationClassName}`);notificationList||(notificationList=document.createElement("div"),notificationList.className=notificationClassName,body.appendChild(notificationList)),notificationList.firstChild?notificationList.insertBefore(notificationRef.location.nativeElement,notificationList.firstChild):notificationList.appendChild(notificationRef.location.nativeElement)}return notificationObj.duration&&notificationObj.duration>0&&this.ngZone.runOutsideAngular((()=>{setTimeout((()=>{this.ngZone.run((()=>{this.close(notificationRef)}))}),notificationObj.duration)})),notificationObj.smart&&this.ngZone.runOutsideAngular((()=>{setTimeout((()=>{this.ngZone.run((()=>{this.close(notificationRef)}))}),this.getSmartTimeout(notificationObj))})),this.onClose.subscribe((()=>{this.close(notificationRef)})),notificationRef.instance.componentRef=notificationRef,notificationRef.instance}showToast(notificationObj,notificationComp=Toast){return this.showNotification(notificationObj,notificationComp)}showActionable(notificationObj,notificationComp=ActionableNotification){return this.showNotification(notificationObj,notificationComp)}close(notificationRef){if(notificationRef)if(notificationRef instanceof Notification)this.close(notificationRef.componentRef);else{notificationRef.destroy();const index=this.notificationRefs.indexOf(notificationRef);-1!==index&&this.notificationRefs.splice(index,1)}}getSmartTimeout(notificationObj){let timeout=600;switch(timeout+=notificationObj.duration||0,notificationObj.type){case"info":case"info-square":case"success":default:break;case"danger":timeout+=3e3;break;case"warning":case"warning-alt":timeout+=1500}return timeout+=450*notificationObj.message.trim().split(/\s+/).length,timeout}ngOnDestroy(){this.notificationRefs.forEach((ref=>{ref.destroy()}))}};NotificationService.ctorParameters=()=>[{type:core.Injector},{type:core.ViewContainerRef},{type:core.NgZone}],NotificationService=(0,tslib_es6.gn)([(0,core.Injectable)()],NotificationService);var experimental=__webpack_require__("./src/experimental/index.ts"),src_link=__webpack_require__("./src/link/index.ts"),icon=__webpack_require__("./src/icon/index.ts");let NotificationModule=class NotificationModule{};NotificationModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ActionableButton,ActionableNotification,ActionableTitle,ActionableSubtitle,BaseNotification,Notification,Toast,ToastTitle,ToastSubtitle,ToastCaption,NotificationTitle,NotificationSubtitle],exports:[Notification,ActionableButton,ActionableNotification,ActionableTitle,ActionableSubtitle,Toast,ToastTitle,ToastSubtitle,ToastCaption,NotificationTitle,NotificationSubtitle],imports:[src_button.hJ,common.CommonModule,i18n.LU,experimental.OV,src_link.LO,icon.QX],providers:[NotificationService,NotificationDisplayService]})],NotificationModule)}}]);