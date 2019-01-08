import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

@Component({
	selector: "ibm-breadcrumb-item",
	template: `
	<a class="bx--link"
		href="{{href}}"
		*ngIf="href; else content">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>
	<ng-template #content>
		<ng-content></ng-content>
	</ng-template>`
})
export class BreadcrumbItemComponent {
	@Input() href = "/#";

	@HostBinding("class.bx--breadcrumb-item") itemClass = true;
}
