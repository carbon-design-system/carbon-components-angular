import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

@Component({
	selector: "ibm-breadcrumb-item",
	template: `
	<a
		class="bx--link"
		href="{{skeleton ? '/#' : href}}"
		[attr.aria-current]="(ariaCurrent ? 'page' : null)"
		*ngIf="skeleton || href; else content">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>
	<ng-template #content>
		<ng-content></ng-content>
	</ng-template>`
})
export class BreadcrumbItemComponent {
	@Input() href: string;

	@Input() skeleton = false;

	@Input() ariaCurrent = false;

	@HostBinding("class.bx--breadcrumb-item--current") @Input() current = false;

	@HostBinding("class.bx--breadcrumb-item") itemClass = true;
}
