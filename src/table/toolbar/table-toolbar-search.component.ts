import { Search } from "carbon-components-angular/search";
import {
	Component,
	HostBinding,
	AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgClass } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

@Component({
	selector: "cds-table-toolbar-search, ibm-table-toolbar-search",
	templateUrl: "../../search/search.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TableToolbarSearch,
			multi: true
		}
	],
	standalone: true,
	imports: [NgClass, IconDirective]
})
export class TableToolbarSearch extends Search implements AfterViewInit {
	tableSearch = true;

	size: "sm" | "md" | "lg" = "lg";

	@HostBinding("class.cds--toolbar-content") hostClass = true;

	ngAfterViewInit() {
		setTimeout(() => {
			if (this.value) {
				this.openSearch();
			}
		});
	}
}
