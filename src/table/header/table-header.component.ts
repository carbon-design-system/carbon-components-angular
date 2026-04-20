import {
	AfterContentInit,
	Component,
	ContentChild,
	HostBinding
} from "@angular/core";
import { TableHeaderDescription } from "./table-header-description.directive";
import { TableHeaderTitle } from "./table-header-title.directive";
import { TableHeaderDecorator } from "./table-header-decorator.component";

@Component({
	selector: "cds-table-header, ibm-table-header",
	template: `
		<div class="cds--data-table-header__content">
			<ng-content></ng-content>
		</div>
		<ng-content select="cds-table-header-decorator, ibm-table-header-decorator"></ng-content>
	`
})
export class TableHeader implements AfterContentInit {
	@HostBinding("class.cds--data-table-header") headerClass = true;
	@HostBinding("style.display") displayStyle = "block";
	@HostBinding("class.cds--data-table-header__with-decorator") hasDecorator = false;
	@HostBinding("class.cds--data-table-header__with-decorator--standalone") decoratorStandalone = false;

	@ContentChild(TableHeaderDecorator) decorator: TableHeaderDecorator;
	@ContentChild(TableHeaderTitle) headerTitle: TableHeaderTitle;
	@ContentChild(TableHeaderDescription) headerDescription: TableHeaderDescription;

	ngAfterContentInit() {
		this.hasDecorator = !!this.decorator;
		this.decoratorStandalone =
			this.hasDecorator && !this.headerTitle && !this.headerDescription;
		this.displayStyle = this.hasDecorator ? "flex" : "block";
	}
}
