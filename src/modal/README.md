# Modal

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/modal](https://pages.github.ibm.com/peretz-next/neutrino/#/modal)

Modal module adds modal support to Neutrino.

It's intended to be used with `ModalService`.

Start by creating your modal component and adding `@Modal` decorator to it.
Use `cdl-modal`, `cdl-modal-header` and `cdl-modal-footer` in the template.

Ex:
```typescript
import { Component, Injector } from "@angular/core";
import { Modal } from "@neutrino/modal";

@Modal()
@Component({
	selector: "sample-modal",
	template: `
		<cdl-modal size="xl" (overlaySelected)="closeModal()">
			<cdl-modal-header (closeSelect)="closeModal()">Header text
			</cdl-modal-header>
			<section class="modal-body">
				<h1>sample-modal Works!</h1>
				{{modalText}}
			</section>
			<cdl-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></cdl-modal-footer>
		</cdl-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class SampleModalComponent {
	modalText: string;
	constructor(private injector: Injector) {
		this.modalText = this.injector.get("modalText");
	}
}
```

Add `<cdl-modal-placeholder></cdl-modal-placeholder>` to a place where actual modal code will be added to. Commonly bottom of your app component template.

To invoke the dialog call `create()` method on `ModalService`.

Ex:
```typescript
import { Component } from "@angular/core";
import { SampleModalComponent } from "./sample-modal.component";
import { ModalService } from "@neutrino/modal;

@Component({
	selector: "modal-demo",
	template: `
	<button class="btn" (click)="openModal()">XL Modal</button>
	`
})
export class ModalDemo {
	constructor(private modalService: ModalService) {}

	openModal() {
		this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Hello Universe"}});
	}
}
```

## Components
### ModalComponent
class: ModalComponent

selector: `cdl-modal`

source: `src/modal/modal.component.ts`

**Inputs:**

| @Input  | Type    | Default value |
| ------- | ------- | ------------- |
| size    | string  | "xl"          |

**Outputs:**

| @Output         | Value       |
| --------------- | ----------- |
| overlaySelected | undefined   |
| close           | undefined   |

Ex:
```html
<cdl-modal size="xl" (overlaySelected)="closeModal()">
	<cdl-modal-header (closeSelect)="closeModal()">Header text</cdl-modal-header>
	<section class="modal-body">
		<h1>It Works!</h1>
		{{modalText}}
	</section>
	<cdl-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></cdl-modal-footer>
</cdl-modal>
```


### ModalFooterComponent
class: ModalFooterComponent

selector: `cdl-modal-footer`

source: `src/modal/modal-footer.component.ts`


### ModalHeaderComponent
class: ModalHeaderComponent

selector: `cdl-modal-header`

source: `src/modal/list/modal-header.component.ts`

**Inputs:**

| @Input     | Type             | Default value |
| ---------- | ---------------- | ------------- |
| modalType  | string           | "default"     |

Ex:
```html
<cdl-modal-header [modalType]="default">Header text</cdl-modal-header>
```

**Outputs:**

| @Output     | Type             | Default value |
| ----------- | ---------------- | ------------- |
| closeSelect | undefined        |               |

Ex:
```html
<cdl-modal-header (closeSelect)="closeModal()">Header text</cdl-modal-header>
```

### ModalPlaceholderComponent
class: ModalPlaceholderComponent

selector: `cdl-modal-placeholder`

source: `src/modal/modal-placeholder.component.ts`


### OverlayComponent
class: OverlayComponent

selector: `cdl-overlay`

source: `src/modal/overlay.component.ts`

## Decorators

### Modal
class: ModalContainer

decorator: @Modal

Adds `closeModal()` function to the component.

## Services

### ModalService

```typescript
export class ModalService {
	registerViewContainerRef(vcRef: ViewContainerRef): void {}
	create<T>(data: {component: any, inputs?: any}): void {}
	destroy(index: number = -1): void {}
}
```
`registerViewContainerRef()` - used by `ModalPlaceholderComponent` to register view-container reference.

`create()` - creates and renders your modal component that you pass in. `inputs` is an optional parameter of inputs you can pass to your modal component.

Ex:
```typescript
this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Hello Universe"}});
```

`destroy()` - destroys the modal on the supplied index. When called without parameters it destroys the latest created/top most modal, which is what you usually want.

Ex:
```typescript
this.modalService.destroy();
```

It is invoked when user closes the modal but you can also call it programatically.
