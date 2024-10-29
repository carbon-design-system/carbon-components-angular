"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[2388],{"./src/common/tab.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X9:()=>tabbableSelectorIgnoreTabIndex,ZW:()=>getFocusElementList,jv:()=>isFocusInLastItem,nW:()=>cycleTabs,o$:()=>tabbableSelector,w3:()=>isFocusInFirstItem});let tabbableSelector="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",tabbableSelectorIgnoreTabIndex="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";function getFocusElementList(element,selector=tabbableSelector){let elements=element.querySelectorAll(selector);return elements?Array.prototype.filter.call(elements,(el=>function isVisible(element){return!!(element.offsetWidth||element.offsetHeight||element.getClientRects().length)}(el))):elements}function isFocusInFirstItem(event,list){return list.length>0&&(event.target||event.srcElement)===list[0]}function isFocusInLastItem(event,list){return list.length>0&&(event.target||event.srcElement)===list[list.length-1]}function cycleTabs(event,element){if("Tab"===event.key){let list=getFocusElementList(element),focusChanged=!1;event.shiftKey?(isFocusInFirstItem(event,list)||function isElementFocused(event,element){return(event.target||event.srcElement)===element}(event,element))&&(focusChanged=function focusLastFocusableElement(list){return list.length>0&&(list[list.length-1].focus(),!0)}(list)):isFocusInLastItem(event,list)&&(focusChanged=function focusFirstFocusableElement(list){return list.length>0&&(list[0].focus(),!0)}(list)),focusChanged&&(event.preventDefault(),event.stopPropagation())}}},"./src/placeholder/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qq:()=>PlaceholderModule,Q_:()=>PlaceholderService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PlaceholderService=class PlaceholderService{constructor(){this.viewContainerRef=null,this.viewContainerMap=new Map}registerViewContainerRef(vcRef,id){id?this.viewContainerMap.set(id,vcRef):this.viewContainerRef=vcRef}createComponent(component,injector,id){return id?this.viewContainerMap.has(id)?this.viewContainerMap.get(id).createComponent(component,{index:this.viewContainerMap.size,injector}):void console.error(`No view container with id ${id} found`):this.viewContainerRef?this.viewContainerRef.createComponent(component,{index:this.viewContainerRef.length,injector}):void console.error("No view container defined! Likely due to a missing `cds-placeholder`")}destroyComponent(component){component.destroy()}hasComponentRef(component,id){return id?!(this.viewContainerMap.get(id).indexOf(component.hostView)<0):!(this.viewContainerRef.indexOf(component.hostView)<0)}hasPlaceholderRef(id){return id?this.viewContainerMap.has(id):!!this.viewContainerRef}appendElement(element,id){return id?this.viewContainerMap.get(id).element.nativeElement.appendChild(element):this.viewContainerRef.element.nativeElement.appendChild(element)}removeElement(element,id){return id?this.viewContainerMap.get(id).element.nativeElement.removeChild(element):this.viewContainerRef.element.nativeElement.removeChild(element)}hasElement(element,id){return id?this.viewContainerMap.get(id).element.nativeElement.contains(element):this.viewContainerRef.element.nativeElement.contains(element)}};PlaceholderService=(0,tslib_es6.gn)([(0,core.Injectable)()],PlaceholderService);let Placeholder=class Placeholder{constructor(placeholderService){this.placeholderService=placeholderService}ngOnInit(){this.placeholderService.registerViewContainerRef(this.viewContainerRef)}};Placeholder.ctorParameters=()=>[{type:PlaceholderService}],Placeholder.propDecorators={id:[{type:core.Input}],viewContainerRef:[{type:core.ViewChild,args:["placeholder",{read:core.ViewContainerRef,static:!0}]}]},Placeholder=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-placeholder, ibm-placeholder",template:"<div #placeholder></div>"})],Placeholder);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");const PLACEHOLDER_SERVICE_PROVIDER={provide:PlaceholderService,deps:[[new core.Optional,new core.SkipSelf,PlaceholderService]],useFactory:function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new PlaceholderService}};let PlaceholderModule=class PlaceholderModule{};PlaceholderModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Placeholder],exports:[Placeholder],providers:[PLACEHOLDER_SERVICE_PROVIDER],imports:[common.CommonModule]})],PlaceholderModule)},"./src/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DataPassing:()=>DataPassing,FormModal:()=>FormModal,Passive:()=>Passive,Simple:()=>Simple,Transactional:()=>Transactional,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),placeholder=__webpack_require__("./src/placeholder/index.ts"),input=__webpack_require__("./src/input/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),modal=__webpack_require__("./src/modal/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let AlertModalStory=class AlertModalStory{constructor(modalService){this.modalService=modalService}openModal(){this.modalService.show({type:this.modalType,label:this.modalLabel,title:this.modalTitle,content:this.modalContent,size:this.size,buttons:this.buttons,showCloseButton:this.showCloseButton})}};AlertModalStory.ctorParameters=()=>[{type:modal.Z7}],AlertModalStory.propDecorators={modalType:[{type:core.Input}],modalLabel:[{type:core.Input}],modalTitle:[{type:core.Input}],modalContent:[{type:core.Input}],buttons:[{type:core.Input}],size:[{type:core.Input}],showCloseButton:[{type:core.Input}]},AlertModalStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-alert-modal-story",template:'\n\t\t<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>\n\t'})],AlertModalStory);var Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");let InputModal=class InputModal extends modal.IX{constructor(modalText,size,data,inputValue,modalService){super(),this.modalText=modalText,this.size=size,this.data=data,this.inputValue=inputValue,this.modalService=modalService}onChange(event){this.data.next(event.target.value)}};InputModal.ctorParameters=()=>[{type:void 0,decorators:[{type:core.Inject,args:["modalText"]}]},{type:void 0,decorators:[{type:core.Inject,args:["size"]}]},{type:void 0,decorators:[{type:core.Inject,args:["data"]}]},{type:void 0,decorators:[{type:core.Inject,args:["inputValue"]}]},{type:modal.Z7}],InputModal=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-input-modal",template:'\n\t\t<cds-modal\n\t\t\t[size]="size"\n\t\t\t[open]="open"\n\t\t\t(overlaySelected)="closeModal()">\n\t\t\t<cds-modal-header (closeSelect)="closeModal()">Edit account name</cds-modal-header>\n\t\t\t<section class="cds--modal-content">\n\t\t\t\t<cds-label>\n\t\t\t\t\tAccount name\n\t\t\t\t\t<input\n\t\t\t\t\t\tcdsText\n\t\t\t\t\t\t[value]="inputValue"\n\t\t\t\t\t\t(change)="onChange($event)">\n\t\t\t\t</cds-label>\n\t\t\t</section>\n\t\t\t<cds-modal-footer>\n\t\t\t\t<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Cancel</button>\n\t\t\t\t<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Save</button>\n\t\t\t</cds-modal-footer>\n\t\t</cds-modal>\n\t'})],InputModal);let DataPassingModal=class DataPassingModal{constructor(modalService){this.modalService=modalService,this.modalText="Hello, World",this.size="md",this.modalInputValue="",this.data=new Subject.x}openModal(){this.modalService.create({component:InputModal,inputs:{modalText:this.modalText,inputValue:this.modalInputValue,size:this.size,data:this.data}})}ngAfterContentInit(){this.data.subscribe((value=>this.modalInputValue=value))}};DataPassingModal.ctorParameters=()=>[{type:modal.Z7}],DataPassingModal.propDecorators={modalText:[{type:core.Input}],size:[{type:core.Input}]},DataPassingModal=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-data-passing-modal",template:'\n\t\t<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>\n\t\t<h3>Data passed from input modal on input change: </h3>{{ modalInputValue }}\n\t'})],DataPassingModal);let SampleFormModal=class SampleFormModal extends modal.IX{};SampleFormModal=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-form-modal",template:'\n\t\t<cds-modal\n\t\t\tsize="lg"\n\t\t\topen="true"\n\t\t\t(overlaySelected)="closeModal()">\n\t\t\t<cds-modal-header (closeSelect)="closeModal()">\n\t\t\t\t<h2 cdsModalHeaderLabel>Label</h2>\n\t\t\t\t<h3 cdsModalHeaderHeading>Modal</h3>\n\t\t\t</cds-modal-header>\n\t\t\t<section cdsModalContent hasForm="true">\n\t\t\t\t<h1 cdsModalContentText class="cds--modal-content__regular-content modal-text">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus erat vel aliquam sodales.\n\t\t\t\t\tPhasellus porta velit vel libero pulvinar, sit amet semper purus volutpat.\n\t\t\t\t</h1>\n\t\t\t\t<div class="cds--text-input__field-wrapper">\n\t\t\t\t\t<cds-label helperText="Helper text">\n\t\t\t\t\t\t{{label}}\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tcdsText\n\t\t\t\t\t\t\tplaceholder="Placeholder"\n\t\t\t\t\t\t\t[autocomplete]="false">\n\t\t\t\t\t</cds-label>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<cds-modal-footer>\n\t\t\t\t<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Show secondary modal</button>\n\t\t\t\t<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>\n\t\t\t</cds-modal-footer>\n\t\t</cds-modal>\n\t',styles:["\n\t\t.modal-text {\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t"]})],SampleFormModal);let SampleModal=class SampleModal extends modal.IX{constructor(modalText,size,showCloseButton=!0,modalService){super(),this.modalText=modalText,this.size=size,this.showCloseButton=showCloseButton,this.modalService=modalService}showSecondaryModal(){this.modalService.show({label:"Secondary header label",title:"Sample secondary modal works.",content:this.modalText,size:this.size,buttons:[{text:"Cancel",type:modal.JF.secondary},{text:"OK",type:modal.JF.primary,click:()=>alert("OK button clicked")}]})}};SampleModal.ctorParameters=()=>[{type:void 0,decorators:[{type:core.Inject,args:["modalText"]}]},{type:void 0,decorators:[{type:core.Inject,args:["size"]}]},{type:void 0,decorators:[{type:core.Inject,args:["showCloseButton"]}]},{type:modal.Z7}],SampleModal=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-sample-modal",template:'\n\t\t<cds-modal\n\t\t\t[size]="size"\n\t\t\t[open]="open"\n\t\t\t(overlaySelected)="closeModal()">\n\t\t\t<cds-modal-header (closeSelect)="closeModal()" [showCloseButton]="showCloseButton">\n\t\t\t\t<h2 cdsModalHeaderLabel>Label</h2>\n\t\t\t\t<h3 cdsModalHeaderHeading>Modal</h3>\n\t\t\t</cds-modal-header>\n\t\t\t<section cdsModalContent>\n\t\t\t\t<h1>Sample modal works.</h1>\n\t\t\t\t<p cdsModalContentText>{{modalText}}</p>\n\t\t\t</section>\n\t\t\t<cds-modal-footer>\n\t\t\t\t<button class="cds--btn cds--btn--secondary" (click)="showSecondaryModal()">Show secondary modal</button>\n\t\t\t\t<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>\n\t\t\t</cds-modal-footer>\n\t\t</cds-modal>\n\t'})],SampleModal);let ModalStory=class ModalStory{constructor(modalService){this.modalService=modalService,this.modalText="Hello, World",this.size="md",this.showCloseButton=!0}openModal(){this.modalService.create({component:SampleModal,inputs:{modalText:this.modalText,size:this.size,showCloseButton:this.showCloseButton}})}};ModalStory.ctorParameters=()=>[{type:modal.Z7}],ModalStory.propDecorators={modalText:[{type:core.Input}],size:[{type:core.Input}],showCloseButton:[{type:core.Input}]},ModalStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-modal-story",template:'\n\t\t<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>\n\t'})],ModalStory);const modal_stories={title:"Components/Modal",decorators:[(0,dist.moduleMetadata)({declarations:[ModalStory,SampleModal,InputModal,DataPassingModal,AlertModalStory,SampleFormModal],imports:[modal.zk,input.gP,src_button.hJ,placeholder.Qq]})]},Basic=(args=>({props:args,template:'\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/modal.component.ts\n        --\x3e\n        <app-modal-story [modalText]="modalText" [size]="size" [showCloseButton]="showCloseButton"></app-modal-story>\n        <cds-placeholder></cds-placeholder>\n    '})).bind({});Basic.args={modalText:"Hello, world!",showCloseButton:!0};const FormModal=(args=>({props:args,template:"\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/form-modal.component.ts\n        --\x3e\n        <app-form-modal></app-form-modal>\n    "})).bind({}),Transactional=(args=>({props:args,template:'\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts\n        --\x3e\n        <app-alert-modal-story\n            [modalType]="modalType"\n            [modalLabel]="modalLabel"\n            [modalTitle]="modalTitle"\n            [modalContent]="modalContent"\n            [size]="size"\n            [showCloseButton]="showCloseButton"\n            [buttons]="buttons">\n        </app-alert-modal-story>\n        <cds-placeholder></cds-placeholder>\n    '})).bind({});Transactional.args={modalLabel:"Optional label",modalTitle:"Delete service from application",modalContent:"Are you sure you want to remove the Speech to Text service from the node-test app?",showCloseButton:!0,buttons:[{text:"Cancel",type:"Secondary"},{text:"Delete",type:"primary",click:()=>{alert("Delete button clicked!")}}]};const Passive=(args=>({props:args,template:'\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts\n        --\x3e\n        <app-alert-modal-story\n            [modalType]="modalType"\n            [modalLabel]="modalLabel"\n            [modalTitle]="modalTitle"\n            [size]="size"\n            [modalContent]="modalContent">\n        </app-alert-modal-story>\n        <cds-placeholder></cds-placeholder>\n    '})).bind({});Passive.args={modalLabel:"Optional label",modalTitle:"Delete service from application",modalContent:"Are you sure you want to remove the Speech to Text service from the node-test app?",modalType:"default"},Passive.argTypes={modalType:{options:["default","danger"],control:"select"}};const DataPassing=(args=>({props:args,template:'\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/data-passing.component.ts\n        --\x3e\n        <app-data-passing-modal\n            [modalText]="modalText"\n            [size]="size">\n        </app-data-passing-modal>\n        <cds-placeholder></cds-placeholder>\n    '})).bind({});DataPassing.args={modalText:"Hello, world!",size:"md"},DataPassing.argTypes={size:{options:["xs","sm","md","lg"],control:"select"}};const Simple=(args=>({props:args,template:'\n        <button #trigger cdsButton="primary" (click)="open = true">Open</button>\n        <cds-modal [open]="open" [trigger]="trigger" (overlaySelected)="open = false" (close)="open = false">\n            <cds-modal-header (closeSelect)="open = false" [showCloseButton]="showCloseButton">\n                <p class="cds--modal-header__label cds--type-delta">No service required</p>\n                <p class="cds--modal-header__heading cds--type-beta">A very simple modal</p>\n            </cds-modal-header>\n            <div class="cds--modal-content">\n                <p>hello world</p>\n            </div>\n            <cds-modal-footer>\n                <ng-container>\n                    <button\n                        cdsButton="primary"\n                        (click)="open = false"\n                        [attr.modal-primary-focus]="true">\n                        Okay\n                    </button>\n                </ng-container>\n            </cds-modal-footer>\n        </cds-modal>\n    '})).bind({});Simple.args={open:!0,showCloseButton:!0},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/modal.component.ts\n        --\x3e\n        <app-modal-story [modalText]="modalText" [size]="size" [showCloseButton]="showCloseButton"></app-modal-story>\n        <cds-placeholder></cds-placeholder>\n    `\n})',...Basic.parameters?.docs?.source}}},FormModal.parameters={...FormModal.parameters,docs:{...FormModal.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/form-modal.component.ts\n        --\x3e\n        <app-form-modal></app-form-modal>\n    `\n})",...FormModal.parameters?.docs?.source}}},Transactional.parameters={...Transactional.parameters,docs:{...Transactional.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts\n        --\x3e\n        <app-alert-modal-story\n            [modalType]="modalType"\n            [modalLabel]="modalLabel"\n            [modalTitle]="modalTitle"\n            [modalContent]="modalContent"\n            [size]="size"\n            [showCloseButton]="showCloseButton"\n            [buttons]="buttons">\n        </app-alert-modal-story>\n        <cds-placeholder></cds-placeholder>\n    `\n})',...Transactional.parameters?.docs?.source}}},Passive.parameters={...Passive.parameters,docs:{...Passive.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts\n        --\x3e\n        <app-alert-modal-story\n            [modalType]="modalType"\n            [modalLabel]="modalLabel"\n            [modalTitle]="modalTitle"\n            [size]="size"\n            [modalContent]="modalContent">\n        </app-alert-modal-story>\n        <cds-placeholder></cds-placeholder>\n    `\n})',...Passive.parameters?.docs?.source}}},DataPassing.parameters={...DataPassing.parameters,docs:{...DataPassing.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/data-passing.component.ts\n        --\x3e\n        <app-data-passing-modal\n            [modalText]="modalText"\n            [size]="size">\n        </app-data-passing-modal>\n        <cds-placeholder></cds-placeholder>\n    `\n})',...DataPassing.parameters?.docs?.source}}},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <button #trigger cdsButton="primary" (click)="open = true">Open</button>\n        <cds-modal [open]="open" [trigger]="trigger" (overlaySelected)="open = false" (close)="open = false">\n            <cds-modal-header (closeSelect)="open = false" [showCloseButton]="showCloseButton">\n                <p class="cds--modal-header__label cds--type-delta">No service required</p>\n                <p class="cds--modal-header__heading cds--type-beta">A very simple modal</p>\n            </cds-modal-header>\n            <div class="cds--modal-content">\n                <p>hello world</p>\n            </div>\n            <cds-modal-footer>\n                <ng-container>\n                    <button\n                        cdsButton="primary"\n                        (click)="open = false"\n                        [attr.modal-primary-focus]="true">\n                        Okay\n                    </button>\n                </ng-container>\n            </cds-modal-footer>\n        </cds-modal>\n    `\n})',...Simple.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","FormModal","Transactional","Passive","DataPassing","Simple"]}}]);