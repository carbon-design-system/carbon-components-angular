"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[6310],{"./src/file-uploader/file-uploader.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DragAndDrop:()=>DragAndDrop,NgModel:()=>NgModel,ReactiveForms:()=>ReactiveForms,Skeleton:()=>Skeleton,default:()=>file_uploader_stories});var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),i18n=__webpack_require__("./src/i18n/index.ts");const noop=()=>{};let FileUploader=class FileUploader{constructor(i18n){this.i18n=i18n,this.buttonText=this.i18n.get().FILE_UPLOADER.OPEN,this.buttonType="primary",this.accept=[],this.multiple=!0,this.skeleton=!1,this.fileItemSize="lg",this.drop=!1,this.fileUploaderId=`file-uploader-${FileUploader.fileUploaderCount}`,this.files=new Set,this.disabled=!1,this.filesChange=new core.EventEmitter,this.dragOver=!1,this.onTouchedCallback=noop,this.onChangeCallback=noop,FileUploader.fileUploaderCount++}get value(){return this.files}set value(v){v!==this.files&&(this.files=v,this.onChangeCallback(v))}onBlur(){this.onTouchedCallback()}get fileList(){return Array.from(this.fileInput.nativeElement.files)}writeValue(value){value!==this.value&&(this.files=value)}createFileItem(file){return{uploaded:!1,state:"edit",invalid:!1,invalidText:"",file}}onFilesAdded(){const newFiles=new Set(this.files);this.multiple||newFiles.clear();for(let file of this.fileList){const fileItem=this.createFileItem(file);newFiles.add(fileItem)}this.value=newFiles,this.filesChange.emit(newFiles)}onDragOver(event){event.stopPropagation(),event.preventDefault(),this.disabled||(this.dragOver=!0)}onDragLeave(event){event.stopPropagation(),event.preventDefault(),this.dragOver=!1}onDrop(event){if(event.stopPropagation(),event.preventDefault(),this.disabled)return;const transferredFiles=Array.from(event.dataTransfer.files),newFiles=new Set(this.files);transferredFiles.filter((({name,type})=>{const fileExtension=name.split(".").pop().replace(/^/,".");return this.accept.includes(type)||this.accept.includes(fileExtension)||!this.accept.length})).forEach((file=>{if(!newFiles.size||this.multiple){const fileItem=this.createFileItem(file);newFiles.add(fileItem)}})),this.value=newFiles,this.filesChange.emit(newFiles),this.dragOver=!1}removeFile(fileItem){if(this.files&&this.files.has(fileItem)){const newFiles=new Set(this.files);newFiles.delete(fileItem),this.filesChange.emit(newFiles),this.value=newFiles}this.fileInput.nativeElement.value=""}isTemplate(value){return value instanceof core.TemplateRef}registerOnTouched(fn){this.onTouchedCallback=fn}registerOnChange(fn){this.onChangeCallback=fn}setDisabledState(isDisabled){this.disabled=isDisabled}};FileUploader.fileUploaderCount=0,FileUploader.ctorParameters=()=>[{type:i18n.oc}],FileUploader.propDecorators={buttonText:[{type:core.Input}],buttonType:[{type:core.Input}],title:[{type:core.Input}],description:[{type:core.Input}],accept:[{type:core.Input}],multiple:[{type:core.Input}],skeleton:[{type:core.Input}],size:[{type:core.Input}],fileItemSize:[{type:core.Input}],drop:[{type:core.Input}],dropText:[{type:core.Input}],fileUploaderId:[{type:core.Input}],fileInput:[{type:core.ViewChild,args:["fileInput"]}],files:[{type:core.Input}],disabled:[{type:core.Input}],filesChange:[{type:core.Output}]},FileUploader=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-file-uploader, ibm-file-uploader",template:'\n\t\t<ng-container *ngIf="!skeleton; else skeletonTemplate">\n\t\t\t<label [for]="fileUploaderId" class="cds--file--label">{{title}}</label>\n\t\t\t<p class="cds--label-description" role="alert">{{description}}</p>\n\t\t\t<div class="cds--file">\n\t\t\t\t<label\n\t\t\t\t\t*ngIf="drop"\n\t\t\t\t\tclass="cds--file-browse-btn"\n\t\t\t\t\t(keyup.enter)="fileInput.click()"\n\t\t\t\t\t(keyup.space)="fileInput.click()"\n\t\t\t\t\t[ngClass]="{\'cds--file-browse-btn--disabled\': disabled}"\n\t\t\t\t\ttabindex="0">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass="cds--file__drop-container"\n\t\t\t\t\t\t[ngClass]="{\'cds--file__drop-container--drag-over\': dragOver}"\n\t\t\t\t\t\trole="button"\n\t\t\t\t\t\t(click)="fileInput.click()"\n\t\t\t\t\t\t[attr.for]="fileUploaderId"\n\t\t\t\t\t\t(dragover)="onDragOver($event)"\n\t\t\t\t\t\t(dragleave)="onDragLeave($event)"\n\t\t\t\t\t\t(drop)="onDrop($event)">\n\t\t\t\t\t\t<ng-container *ngIf="!isTemplate(dropText)">{{dropText}}</ng-container>\n\t\t\t\t\t\t<ng-template *ngIf="isTemplate(dropText)" [ngTemplateOutlet]="dropText"></ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t\t<button\n\t\t\t\t\t*ngIf="!drop"\n\t\t\t\t\ttype="button"\n\t\t\t\t\t[cdsButton]="buttonType"\n\t\t\t\t\t(click)="fileInput.click()"\n\t\t\t\t\t[attr.for]="fileUploaderId"\n\t\t\t\t\t[size]="size"\n\t\t\t\t\t[disabled]="disabled">\n\t\t\t\t\t{{buttonText}}\n\t\t\t\t</button>\n\t\t\t\t<input\n\t\t\t\t\t#fileInput\n\t\t\t\t\ttype="file"\n\t\t\t\t\tclass="cds--file-input"\n\t\t\t\t\t[accept]="accept"\n\t\t\t\t\t[id]="fileUploaderId"\n\t\t\t\t\t[multiple]="multiple"\n\t\t\t\t\ttabindex="-1"\n\t\t\t\t\t(change)="onFilesAdded()"\n\t\t\t\t\t[disabled]="disabled"/>\n\t\t\t\t<div class="cds--file-container">\n\t\t\t\t\t<ng-container *ngFor="let fileItem of files">\n\t\t\t\t\t\t<cds-file\n\t\t\t\t\t\t\t[fileItem]="fileItem"\n\t\t\t\t\t\t\t(remove)="removeFile(fileItem)"\n\t\t\t\t\t\t\t[size]="fileItemSize">\n\t\t\t\t\t\t</cds-file>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\n\t\t<ng-template #skeletonTemplate>\n\t\t\t<div class="cds--skeleton__text" style="width: 100px"></div>\n\t\t\t<div class="cds--skeleton__text" style="width: 225px"></div>\n\t\t\t<button cdsButton skeleton="true"></button>\n\t\t</ng-template>\n\t',providers:[{provide:fesm2020_forms.JU,useExisting:FileUploader,multi:!0}]})],FileUploader);let FileComponent=class FileComponent{constructor(i18n){this.i18n=i18n,this.translations=this.i18n.get().FILE_UPLOADER,this.size="lg",this.remove=new core.EventEmitter,this.selectedFile=!0}get isInvalidText(){return this.fileItem.invalidText}get fileSizeSmall(){return"sm"===this.size}get fileSizeMedium(){return"md"===this.size}get fileSizeLarge(){return"lg"===this.size}ngOnDestroy(){this.remove.emit()}};FileComponent.ctorParameters=()=>[{type:i18n.oc}],FileComponent.propDecorators={translations:[{type:core.Input}],fileItem:[{type:core.Input}],size:[{type:core.Input}],remove:[{type:core.Output}],selectedFile:[{type:core.HostBinding,args:["class.cds--file__selected-file"]}],isInvalidText:[{type:core.HostBinding,args:["class.cds--file__selected-file--invalid"]}],fileSizeSmall:[{type:core.HostBinding,args:["class.cds--file__selected-file--sm"]}],fileSizeMedium:[{type:core.HostBinding,args:["class.cds--file__selected-file--md"]}],fileSizeLarge:[{type:core.HostBinding,args:["class.cds--file__selected-file--lg"]}]},FileComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-file, ibm-file",template:'\n\t\t<p class="cds--file-filename" [title]="fileItem.file.name">{{fileItem.file.name}}</p>\n\t\t<span\n\t\t\t*ngIf="fileItem.state === \'edit\'"\n\t\t\tclass="cds--file__state-container">\n\t\t\t<svg\n\t\t\t\t*ngIf="isInvalidText"\n\t\t\t\tcdsIcon="warning--filled"\n\t\t\t\tclass="cds--file--invalid"\n\t\t\t\tsize="16">\n\t\t\t</svg>\n\t\t\t<button\n\t\t\t\ttype="button"\n\t\t\t\tclass="cds--file-close"\n\t\t\t\t[attr.aria-label]="translations.REMOVE_BUTTON"\n\t\t\t\ttabindex="0"\n\t\t\t\t(click)="remove.emit()"\n\t\t\t\t(keyup.enter)="remove.emit()"\n\t\t\t\t(keyup.space)="remove.emit()">\n\t\t\t\t<svg cdsIcon="close" size="16"></svg>\n\t\t\t</button>\n\t\t</span>\n\t\t<span *ngIf="fileItem.state === \'upload\'">\n\t\t\t<div class="cds--inline-loading__animation">\n\t\t\t\t<cds-loading size="sm"></cds-loading>\n\t\t\t</div>\n\t\t</span>\n\t\t<span *ngIf="fileItem.state === \'complete\'" class="cds--file__state-container">\n\t\t\t<svg\n\t\t\t\tcdsIcon="checkmark--filled"\n\t\t\t\tsize="16"\n\t\t\t\tclass="cds--file-complete"\n\t\t\t\t[ariaLabel]="translations.CHECKMARK">\n\t\t\t</svg>\n\t\t</span>\n\t\t<div class="cds--form-requirement" role="alert" *ngIf="fileItem.invalid">\n\t\t\t<div class="cds--form-requirement__title">{{fileItem.invalidTitle}}</div>\n\t\t\t<p class="cds--form-requirement__supplement">{{fileItem.invalidText}}</p>\n\t\t</div>\n\t'})],FileComponent);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),src_button=__webpack_require__("./src/button/index.ts"),loading=__webpack_require__("./src/loading/index.ts"),icon=__webpack_require__("./src/icon/index.ts");let FileUploaderModule=class FileUploaderModule{};FileUploaderModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[FileUploader,FileComponent],exports:[FileUploader,FileComponent],imports:[common.CommonModule,src_button.hJ,loading.I,icon.QX]})],FileUploaderModule);var notification=__webpack_require__("./src/notification/index.ts"),file_type=__webpack_require__("./node_modules/file-type/index.js");let DragAndDropStory=class DragAndDropStory{constructor(){this.files=new Set,this.accept=[".jpg",".png"],this.dropText="Drag and drop files here of upload",this.disabled=!1,this.fileItemSize="lg",this.maxSize=5e5}onDropped(event){const transferredFiles=Array.from(event),readFileAndCheckType=fileObj=>new Promise(((resolve,reject)=>{let fileExtension,mime,reader=new FileReader;reader.readAsArrayBuffer(fileObj.file),reader.onload=()=>{if(reader.result){const type=file_type(reader.result);type?(fileExtension=type.ext.replace(/^/,"."),mime=type.mime):(fileExtension=fileObj.file.name.split(".").pop().replace(/^/,"."),mime=fileObj.file.type)}resolve({file:fileObj,accept:this.accept.includes(fileExtension)||this.accept.includes(mime)||!this.accept.length})},reader.onerror=error=>{reject(error)}})),promises=transferredFiles.map((file=>readFileAndCheckType(file)));Promise.all(promises).then((filePromiseArray=>filePromiseArray.filter((filePromise=>filePromise.accept)).map((acceptedFile=>acceptedFile.file)))).then((acceptedFiles=>this.files=new Set(acceptedFiles))).catch((error=>console.log(error)))}onUpload(){this.files.forEach((fileItem=>{fileItem.uploaded||(fileItem.file.size<this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="complete",fileItem.uploaded=!0,console.log(fileItem)}),1500)),fileItem.file.size>this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="edit",fileItem.invalid=!0,fileItem.invalidText="File size exceeds limit"}),1500)))}))}};DragAndDropStory.propDecorators={files:[{type:core.Input}],title:[{type:core.Input}],description:[{type:core.Input}],accept:[{type:core.Input}],multiple:[{type:core.Input}],dropText:[{type:core.Input}],disabled:[{type:core.Input}],fileItemSize:[{type:core.Input}]},DragAndDropStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-drop-file-uploader",template:'\n\t\t<cds-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[skeleton]="skeleton"\n\t\t\t[(files)]="files"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\tdrop="true"\n\t\t\t[dropText]="dropText"\n\t\t\t(filesChange)="onDropped($event)"\n\t\t\t[disabled]="disabled">\n\t\t</cds-file-uploader>\n\t\t<button\n\t\t\tcdsButton\n\t\t\t*ngIf="files && files.size > 0"\n\t\t\t(click)="onUpload()"\n\t\t\tstyle="margin-top:20px">\n\t\t\tUpload\n\t\t</button>\n\t'})],DragAndDropStory);let NgModelFileUploaderStory=class NgModelFileUploaderStory{constructor(){this.buttonType="primary",this.size="md",this.disabled=!1,this.fileItemSize="lg",this.model=new Set,this.maxSize=5e5}removeFiles(){this.model=new Set}onUpload(){this.model.forEach((fileItem=>{fileItem.uploaded||(fileItem.file.size<this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="complete",fileItem.uploaded=!0,console.log(fileItem)}),1500)),fileItem.file.size>this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="edit",fileItem.invalid=!0,fileItem.invalidTitle="File size exceeds limit",fileItem.invalidText="500kb max file size. Select a new file and try again."}),1500)))}))}};NgModelFileUploaderStory.propDecorators={title:[{type:core.Input}],description:[{type:core.Input}],buttonText:[{type:core.Input}],buttonType:[{type:core.Input}],accept:[{type:core.Input}],multiple:[{type:core.Input}],size:[{type:core.Input}],disabled:[{type:core.Input}],fileItemSize:[{type:core.Input}]},NgModelFileUploaderStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-ngmodel-file-uploader",template:'\n\t\t<cds-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[(ngModel)]="model"\n\t\t\t[disabled]="disabled">\n\t\t</cds-file-uploader>\n\t\t<button\n\t\t\tcdsButton\n\t\t\t*ngIf="model && model.size > 0"\n\t\t\t(click)="onUpload()"\n\t\t\tstyle="margin-top:20px">\n\t\t\tUpload\n\t\t</button>\n\t\t<button cdsButton (click)="removeFiles()">Remove all</button>\n\t'})],NgModelFileUploaderStory);let ReactiveFormsStory=class ReactiveFormsStory{constructor(formBuilder){this.formBuilder=formBuilder,this.buttonType="primary",this.accept=[".jpg",".png"],this.skeleton=!1,this.size="md",this.disabled=!1,this.fileItemSize="lg",this.maxSize=5e5}ngOnInit(){this.formGroup=this.formBuilder.group({files:new fesm2020_forms.NI(new Set,[fesm2020_forms.kI.required])}),this.disabledFormGroup=this.formBuilder.group({files:new fesm2020_forms.NI(new Set,[fesm2020_forms.kI.required])}),this.disabledFormGroup.disable()}onUpload(){this.formGroup.get("files").value.forEach((fileItem=>{fileItem.uploaded||(fileItem.file.size<this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="complete",fileItem.uploaded=!0}),1500)),fileItem.file.size>this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="edit",fileItem.invalid=!0,fileItem.invalidTitle="File size exceeds limit",fileItem.invalidText="500kb max file size. Select a new file and try again."}),1500)))}))}};ReactiveFormsStory.ctorParameters=()=>[{type:fesm2020_forms.qu}],ReactiveFormsStory.propDecorators={title:[{type:core.Input}],description:[{type:core.Input}],buttonText:[{type:core.Input}],buttonType:[{type:core.Input}],accept:[{type:core.Input}],multiple:[{type:core.Input}],skeleton:[{type:core.Input}],size:[{type:core.Input}],disabled:[{type:core.Input}],fileItemSize:[{type:core.Input}]},ReactiveFormsStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-reactive-forms",template:'\n\t\t<form [formGroup]="formGroup" (ngSubmit)="onUpload()">\n\t\t\t<cds-file-uploader\n\t\t\t\t[title]="title"\n\t\t\t\t[description]="description"\n\t\t\t\t[buttonText]="buttonText"\n\t\t\t\t[buttonType]="buttonType"\n\t\t\t\t[accept]="accept"\n\t\t\t\t[multiple]="multiple"\n\t\t\t\t[skeleton]="skeleton"\n\t\t\t\t[size]="size"\n\t\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t\t[disabled]="disabled"\n\t\t\t\tformControlName="files">\n\t\t\t</cds-file-uploader>\n\t\t\t<button\n\t\t\t\tcdsButton\n\t\t\t\t*ngIf="formGroup.get(\'files\').value && formGroup.get(\'files\').value.size > 0"\n\t\t\t\ttype="submit"\n\t\t\t\tstyle="margin-top: 20px">\n\t\t\t\tUpload\n\t\t\t</button>\n\t\t</form>\n\t\t<form [formGroup]="disabledFormGroup" (ngSubmit)="onUpload()">\n\t\t\t<cds-file-uploader\n\t\t\t\t[title]="title"\n\t\t\t\t[description]="description"\n\t\t\t\t[buttonText]="buttonText"\n\t\t\t\t[buttonType]="buttonType"\n\t\t\t\t[accept]="accept"\n\t\t\t\t[multiple]="multiple"\n\t\t\t\t[skeleton]="skeleton"\n\t\t\t\t[size]="size"\n\t\t\t\tformControlName="files">\n\t\t\t</cds-file-uploader>\n\t\t\t<div [id]="notificationId" style="width: 300px; margin-top: 20px"></div>\n\t\t\t<button cdsButton *ngIf="disabledFormGroup.get(\'files\').value && disabledFormGroup.get(\'files\').value.size > 0" type="submit">\n\t\t\t\tUpload\n\t\t\t</button>\n\t\t</form>\n\t'})],ReactiveFormsStory);let FileUploaderStory=class FileUploaderStory{constructor(){this.files=new Set,this.buttonType="primary",this.accept=[".jpg",".png"],this.skeleton=!1,this.size="md",this.disabled=!1,this.fileItemSize="lg",this.maxSize=5e5}onUpload(){this.files.forEach((fileItem=>{fileItem.uploaded||(fileItem.file.size<this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="complete",fileItem.uploaded=!0,console.log(fileItem)}),1500)),fileItem.file.size>this.maxSize&&(fileItem.state="upload",setTimeout((()=>{fileItem.state="edit",fileItem.invalid=!0,fileItem.invalidTitle="File size exceeds limit",fileItem.invalidText="500kb max file size. Select a new file and try again."}),1500)))}))}};FileUploaderStory.propDecorators={files:[{type:core.Input}],title:[{type:core.Input}],description:[{type:core.Input}],buttonText:[{type:core.Input}],buttonType:[{type:core.Input}],accept:[{type:core.Input}],multiple:[{type:core.Input}],skeleton:[{type:core.Input}],size:[{type:core.Input}],disabled:[{type:core.Input}],fileItemSize:[{type:core.Input}]},FileUploaderStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-file-uploader",template:'\n\t\t<cds-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[skeleton]="skeleton"\n\t\t\t[(files)]="files"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[disabled]="disabled">\n\t\t</cds-file-uploader>\n\t\t<button cdsButton *ngIf="files && files.size > 0" (click)="onUpload()" style="margin-top:20px">\n\t\t\tUpload\n\t\t</button>\n\t'})],FileUploaderStory);const file_uploader_stories={title:"Components/File Uploader",decorators:[(0,dist.moduleMetadata)({declarations:[FileUploaderStory,NgModelFileUploaderStory,DragAndDropStory,ReactiveFormsStory],imports:[FileUploaderModule,fesm2020_forms.u5,fesm2020_forms.UX,notification.PQ,src_button.hJ]})],args:{title:"Account photo",description:"only .jpg and .png files. 500kb max file size.",buttonText:"Add files",disabled:!1,multiple:!0},argTypes:{size:{options:["sm","md","lg"],defaultValue:"md",control:"radio"},buttonType:{options:["primary","secondary","tertiary","ghost","danger"],defaultValue:"primary",control:"select"},fileItemSize:{options:["sm","md","lg"],defaultValue:"lg",control:"radio"}},component:FileUploader},Basic=(args=>({props:args,template:'\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source found at:\n\t\thttps://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader.component.ts\n\t\t--\x3e\n\t\t<app-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[disabled]="disabled">\n\t\t</app-file-uploader>\n\t'})).bind({}),DragAndDrop=(args=>({props:args,template:'\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source found at:\n\t\thttps://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/drag-drop.component.ts\n\t\t--\x3e\n\t\t<app-drop-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[dropText]="dropText"\n\t\t\tdrop="true"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[disabled]="disabled">\n\t\t</app-drop-file-uploader>\n\t'})).bind({});DragAndDrop.args={dropText:"Drag and drop files here or upload",accept:[".png","image/jpeg"]},DragAndDrop.argTypes={size:{control:!1},buttonType:{control:!1}};const NgModel=(args=>({props:args,template:'\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source found at:\n\t\thttps://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader-form.component.ts\n\t\t--\x3e\n\t\t<app-ngmodel-file-uploader\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[disabled]="disabled">\n\t\t</app-ngmodel-file-uploader>\n\t'})).bind({});NgModel.storyName="Using NgModel",NgModel.args={accept:[".png",".jpeg"]};const ReactiveForms=(args=>({props:args,template:'\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source found at:\n\t\thttps://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader-reactive-form.component.ts\n\t\t--\x3e\n\t\t<app-reactive-forms\n\t\t\t[title]="title"\n\t\t\t[description]="description"\n\t\t\t[buttonText]="buttonText"\n\t\t\t[buttonType]="buttonType"\n\t\t\t[accept]="accept"\n\t\t\t[multiple]="multiple"\n\t\t\t[size]="size"\n\t\t\t[fileItemSize]="fileItemSize"\n\t\t\t[disabled]="disabled">\n\t\t</app-reactive-forms>\n\t'})).bind({});NgModel.args={accept:[".png",".jpeg"]};const Skeleton=(args=>({props:args,template:'\n\t\t\x3c!--\n\t\tapp-* components are for demo purposes only.\n\t\tYou can create your own implementation by using the component source found at:\n\t\thttps://github.com/IBM/carbon-components-angular/tree/master/src/file-uploader/stories/uploader.component.ts\n\t\t--\x3e\n\t\t<app-file-uploader skeleton="true"></app-file-uploader>\n\t'})).bind({})},"./src/loading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Loading,I:()=>LoadingModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),i18n=__webpack_require__("./src/i18n/index.ts");let Loading=class Loading{constructor(i18n){this.i18n=i18n,this.title=this.i18n.get().LOADING.TITLE,this.isActive=!0,this.size="normal",this.overlay=!1}};Loading.ctorParameters=()=>[{type:i18n.oc}],Loading.propDecorators={title:[{type:core.Input}],isActive:[{type:core.Input}],size:[{type:core.Input}],overlay:[{type:core.Input},{type:core.HostBinding,args:["class.cds--loading-overlay"]}]},Loading=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-loading, ibm-loading",template:'\n\t\t<div\n\t\t\t[ngClass]="{\n\t\t\t\t\'cds--loading--small\': size === \'sm\',\n\t\t\t\t\'cds--loading--stop\': !isActive && !overlay,\n\t\t\t\t\'cds--loading-overlay--stop\': !isActive && overlay\n\t\t\t}"\n\t\t\tclass="cds--loading">\n\t\t\t<svg class="cds--loading__svg" viewBox="0 0 100 100">\n\t\t\t\t<title>{{title}}</title>\n\t\t\t\t<circle class="cds--loading__stroke" cx="50%" cy="50%" r="44" />\n\t\t\t</svg>\n\t\t</div>\n\t'})],Loading);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LoadingModule=class LoadingModule{};LoadingModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Loading],exports:[Loading],imports:[common.CommonModule,i18n.LU]})],LoadingModule)}}]);