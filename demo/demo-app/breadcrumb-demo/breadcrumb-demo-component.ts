import { Breadcrumb } from "./../../../src/breadcrumb/breadcrumb.component";
import {
	Component,
	OnInit,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "app-breadcrumb-demo",
	template: `
	<h1 class="p-demo-heading">Breadcrumb</h1>

	<n-breadcrumb [breadcrumbs]="breadcrumbs"></n-breadcrumb>

	`,
})
export class BreadcrumbDemo implements OnInit {
	breadcrumbs = [
		{
			label: "test4",
			url: "button-menu",
			params: ""
		},
		{
			label: "test4",
			url: "button-menu",
			params: ""
		},
		{
			label: "test4",
			url: "button-menu",
			params: ""
		},
		{
			label: "test4",
			url: "button-menu",
			params: ""
		},

	];

	ngOnInit() {}

}
