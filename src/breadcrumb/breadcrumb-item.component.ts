import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

@Component({
	selector: "ibm-breadcrumb-item",
	template: `
	<a class="bx--link"
		href="/#"
		*ngIf="skeleton">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>

	<a class="bx--link"
		href="{{href}}"
		*ngIf="!skeleton && href; else content">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>
	<ng-template #content>
		<ng-content></ng-content>
	</ng-template>`
})
export class BreadcrumbItemComponent {
	@Input() href: string;

	@Input() skeleton = false;

	@HostBinding("class.bx--breadcrumb-item") itemClass = true;
}
