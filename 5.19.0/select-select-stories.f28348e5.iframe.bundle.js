"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[5980],{"./src/select/select.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,NgModel:()=>NgModel,OptionsSelected:()=>OptionsSelected,ReactiveForms:()=>ReactiveForms,ValueProperty:()=>ValueProperty,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_stories});var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_select=__webpack_require__("./src/select/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let ReactiveFormsSelect=class ReactiveFormsSelect{constructor(formBuilder){this.formBuilder=formBuilder}clearSelection(){this.formGroup.get("selecterino")?.setValue("default")}selectRandom(){this.formGroup.get("selecterino")?.setValue(["default","option1","option2","option3"][Math.floor(4*Math.random())])}ngOnInit(){this.formGroup=this.formBuilder.group({selecterino:new fesm2020_forms.NI}),this.formGroup.get("selecterino")?.setValue("option2")}};ReactiveFormsSelect.ctorParameters=()=>[{type:fesm2020_forms.qu}],ReactiveFormsSelect=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-reactive-form",template:'\n\t\t<form [formGroup]="formGroup">\n\t\t\t<cds-select formControlName="selecterino">\n\t\t\t\t<option value="default" disabled selected hidden>Choose an option</option>\n\t\t\t\t<option value="option1">Option 1</option>\n\t\t\t\t<option value="option2">Option 2</option>\n\t\t\t\t<option value="option3">Option 3</option>\n\t\t\t</cds-select>\n\t\t</form>\n\t\t<div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 2rem">\n\t\t\tselectedValue: {{ formGroup.get("selecterino").value }}\n\t\t\t<div>\n\t\t\t\t<button (click)="clearSelection()">Clear selection</button>\n\t\t\t\t<button (click)="selectRandom()">Select random</button>\n\t\t\t</div>\n\t\t</div>\n\t'})],ReactiveFormsSelect);const select_stories={title:"Components/Select",decorators:[(0,dist.moduleMetadata)({imports:[src_select.An,fesm2020_forms.u5,fesm2020_forms.UX],declarations:[ReactiveFormsSelect]})],args:{skeleton:!1,disabled:!1,invalid:!1,invalidText:"Please select an option.",warn:!1,warnText:"This is a warning!",label:"Select label",helperText:"Optional helper text",size:"md",theme:"dark",display:"default"},argTypes:{size:{options:["sm","md","lg"],control:"radio"},theme:{options:["light","dark"],control:"radio"},display:{options:["default","inline"],control:"radio"}},component:src_select.Ph,subcomponents:{Option:src_select.Wx,OptGroup:src_select.Xo}},Basic=(args=>({props:args,template:'\n        <cds-select\n            [skeleton]="skeleton"\n            [disabled]="disabled"\n            [size]="size"\n            [invalid]="invalid"\n            [invalidText]="invalidText"\n            [warn]="warn"\n            [warnText]="warnText"\n            [label]="label"\n            [helperText]="helperText"\n            [theme]="theme"\n            [(ngModel)]="model"\n            [display]="display">\n            <option value="default" disabled selected hidden>Choose an option</option>\n            <option value="solong">A much longer option that is worth having around to check how text flows</option>\n            <optgroup label="Category 1">\n                <option value="option1">Option 1</option>\n                <option value="option2">Option 2</option>\n            </optgroup>\n            <optgroup label="Category 2">\n                <option value="option1">Option 1</option>\n                <option value="option2">Option 2</option>\n            </optgroup>\n        </cds-select>\n    '})).bind({}),NgModel=(args=>({props:args,template:'\n        <cds-select\n            [(ngModel)]="model"\n            [skeleton]="skeleton"\n            [disabled]="disabled"\n            [size]="size"\n            [invalid]="invalid"\n            [invalidText]="invalidText"\n            [warn]="warn"\n            [warnText]="warnText"\n            [label]="label"\n            [helperText]="helperText"\n            [theme]="theme"\n            [(ngModel)]="model"\n            [display]="display"\n            ariaLabel=\'ngModel select\'>\n            <option value="default" disabled selected hidden>Choose an option</option>\n            <option value="option1">Option 1</option>\n            <option value="option2">Option 2</option>\n            <option value="option3">Option 3</option>\n        </cds-select>\n    '})).bind({});NgModel.args={model:"option2"},NgModel.argTypes={model:{options:["default","option1","option2","option3"],control:"select"}};const ReactiveForms=(args=>({props:args,template:"\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/select/stories/app-reactive-form.component.ts\n        --\x3e\n        <app-reactive-form></app-reactive-form>\n    "})).bind({});ReactiveForms.parameters={controls:{disable:!0}};const OptionsSelected=(args=>({props:args,template:'\n        <cds-select label="Type">\n            <option\n                value="on-hand"\n                [selected]="selected === \'on-hand\'">\n                On hand\n            </option>\n            <option\n                value="in-transit-inbound"\n                [selected]="selected === \'in-transit-inbound\'">\n                Inbound in-transit\n            </option>\n            <option\n                value="in-transit-outbound"\n                [selected]="selected === \'in-transit-outbound\'">\n                Outbound in-transit\n            </option>\n        </cds-select>\n    '})).bind({});OptionsSelected.storyName="Changing selected through option selected property",OptionsSelected.args={selected:"in-transit-inbound"},OptionsSelected.argTypes={selected:{options:["on-hand","in-transit-inbound","in-transit-outbound"],control:"select"}};const ValueProperty=(args=>({props:args,template:'\n        <cds-select label="Type" [value]="selected">\n            <option value="on-hand">On hand</option>\n            <option value="in-transit-inbound">Inbound in-transit</option>\n            <option value="in-transit-outbound">Outbound in-transit</option>\n        </cds-select>\n    '})).bind({});ValueProperty.storyName="Changing selected through value property",ValueProperty.args={selected:"in-transit-outbound"},ValueProperty.argTypes={selected:{options:["on-hand","in-transit-inbound","in-transit-outbound"],control:"select"}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-select\n            [skeleton]="skeleton"\n            [disabled]="disabled"\n            [size]="size"\n            [invalid]="invalid"\n            [invalidText]="invalidText"\n            [warn]="warn"\n            [warnText]="warnText"\n            [label]="label"\n            [helperText]="helperText"\n            [theme]="theme"\n            [(ngModel)]="model"\n            [display]="display">\n            <option value="default" disabled selected hidden>Choose an option</option>\n            <option value="solong">A much longer option that is worth having around to check how text flows</option>\n            <optgroup label="Category 1">\n                <option value="option1">Option 1</option>\n                <option value="option2">Option 2</option>\n            </optgroup>\n            <optgroup label="Category 2">\n                <option value="option1">Option 1</option>\n                <option value="option2">Option 2</option>\n            </optgroup>\n        </cds-select>\n    `\n})',...Basic.parameters?.docs?.source}}},NgModel.parameters={...NgModel.parameters,docs:{...NgModel.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-select\n            [(ngModel)]="model"\n            [skeleton]="skeleton"\n            [disabled]="disabled"\n            [size]="size"\n            [invalid]="invalid"\n            [invalidText]="invalidText"\n            [warn]="warn"\n            [warnText]="warnText"\n            [label]="label"\n            [helperText]="helperText"\n            [theme]="theme"\n            [(ngModel)]="model"\n            [display]="display"\n            ariaLabel=\'ngModel select\'>\n            <option value="default" disabled selected hidden>Choose an option</option>\n            <option value="option1">Option 1</option>\n            <option value="option2">Option 2</option>\n            <option value="option3">Option 3</option>\n        </cds-select>\n    `\n})',...NgModel.parameters?.docs?.source}}},ReactiveForms.parameters={...ReactiveForms.parameters,docs:{...ReactiveForms.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n        \x3c!--\n        app-* components are for demo purposes only.\n        You can create your own implementation by using the component source found at:\n        https://github.com/IBM/carbon-components-angular/tree/master/src/select/stories/app-reactive-form.component.ts\n        --\x3e\n        <app-reactive-form></app-reactive-form>\n    `\n})",...ReactiveForms.parameters?.docs?.source}}},OptionsSelected.parameters={...OptionsSelected.parameters,docs:{...OptionsSelected.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-select label="Type">\n            <option\n                value="on-hand"\n                [selected]="selected === \'on-hand\'">\n                On hand\n            </option>\n            <option\n                value="in-transit-inbound"\n                [selected]="selected === \'in-transit-inbound\'">\n                Inbound in-transit\n            </option>\n            <option\n                value="in-transit-outbound"\n                [selected]="selected === \'in-transit-outbound\'">\n                Outbound in-transit\n            </option>\n        </cds-select>\n    `\n})',...OptionsSelected.parameters?.docs?.source}}},ValueProperty.parameters={...ValueProperty.parameters,docs:{...ValueProperty.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-select label="Type" [value]="selected">\n            <option value="on-hand">On hand</option>\n            <option value="in-transit-inbound">Inbound in-transit</option>\n            <option value="in-transit-outbound">Outbound in-transit</option>\n        </cds-select>\n    `\n})',...ValueProperty.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","NgModel","ReactiveForms","OptionsSelected","ValueProperty"]}}]);