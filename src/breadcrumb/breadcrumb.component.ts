import {
	Component,
	OnInit,
	Input,
	OnChanges,
	TemplateRef,
	ViewChild,
	ElementRef,
	AfterViewInit
} from "@angular/core";
import {
	Router,
	ActivatedRoute,
	RouterModule,
	NavigationEnd
} from "@angular/router";

import {
	Location
} from "@angular/common";

@Component({
	selector: "n-breadcrumb",
	template: `
	<ng-template #customPopover>
		<div>
			<section class="list-group">
				<a class="menu_link" href="#">
					<span class="menu_text">Watches</span>
				</a>
				<a class="menu_link" href="#">
					<span class="menu_text">Categories</span>
				</a>
				<a class="menu_link" href="#">
					<span class="menu_text">Home</span>
				</a>
			</section>
		</div>
	</ng-template>

	<ng-template #breadcrumbMenu>
		<div class="toolbar" role="toolbar" aria-label="Contextual action toolbar">
			<button
			class="btn--icon-link popover-menu-button btn--icon-link-breadcrumb"
			[nPopoverMenu]="customPopover"
			title="Actions"
			wrapperClass="align-to-icon"
			placement="bottom-right">
			<n-icon icon="dotdotdot_horiz" size="sm"></n-icon>
			More
			</button>
		</div>
	</ng-template>

	  <nav class="breadcrumb">
	  	<ng-template
	  		*ngIf="breadcrumbsIsTemplate"
	  		[ngTemplateOutlet]="breadcrumbMenu">
 		</ng-template>
		<ol class="breadcrumbList" *ngIf="!hideBreadcrumb" #breadcrumbList>
			<li *ngFor="let breadcrumb of breadcrumbs; let last = last" class="breadcrumb-item">
				<a
				[routerLink]="['/', breadcrumb.url]"
				[attr.aria-current]="(last ? 'page' : '')">
					{{breadcrumb.label}}
				</a>
			</li>
		</ol>
  	</nav>
	`
})

export class Breadcrumb implements OnInit, AfterViewInit {
	@Input() breadcrumbMenu: string | TemplateRef<any>;
	@Input() breadcrumbs = [];
	breadcrumbsIsTemplate = false;

	@ViewChild("breadcrumbList") breadcrumbList: ElementRef;

	ngOnInit() {
		if (this.breadcrumbs instanceof TemplateRef) {
			this.breadcrumbsIsTemplate = true;
		}
	// 	if (this.breadcrumbs.length > 3) {
	// 		const newList = [];
	// 		const menuList = this.breadcrumbs;
	// 		newList.push(
	// 			{
	// 				label: "menu",
	// 				url: "button-menu",
	// 				params: ""
	// 			});
	// 		newList.push(this.breadcrumbs[this.breadcrumbs.length - 1]);

	// 		this.breadcrumbs = newList;

	// 	}
	}

	ngAfterViewInit() {
		const arrayOfBreadcrumbs = Array.prototype.slice.call(this.breadcrumbList.nativeElement.children);
		const arrayOfWidths = arrayOfBreadcrumbs.map(element => element.getBoundingClientRect().width);
		let totalWidth = 0;
		arrayOfWidths.forEach((element, index) => {
			totalWidth += element;
		});
		console.log(totalWidth);
		console.log(this.breadcrumbList.nativeElement.getBoundingClientRect().width);
	}
}
