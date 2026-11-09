import { Component } from "@angular/core";

/**
 * Optional header region for a table-level AI decorator (e.g. `cds-slug`).
 */
@Component({
	selector: "cds-table-header-decorator, ibm-table-header-decorator",
	template: `
		<div class="cds--data-table-header__decorator">
			<ng-content></ng-content>
		</div>
	`,
	standalone: true
})
export class TableHeaderDecorator {}
