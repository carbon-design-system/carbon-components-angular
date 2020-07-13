import { Search } from "./../../search/search.component";
import {
	Component,
	HostBinding,
	Input,
	OnInit,
	AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "ibm-table-toolbar-search",
	templateUrl: "../../search/search.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TableToolbarSearch,
			multi: true
		}
	]
})
export class TableToolbarSearch extends Search implements OnInit, AfterViewInit {
	tableSearch = true;

	@HostBinding("class.bx--toolbar-search-container-expandable") @Input() expandable = false;

	@HostBinding("class.bx--toolbar-search-container-persistent") get persistentClass() { return !this.expandable; }

	@HostBinding("class.bx--toolbar-search-container-active") get activeClass() {
		return this.active && (this.value !== null || this.value !== "");
	}

	ngOnInit() {
		this.size = "sm";
		if (this.expandable) {
			this.toolbar = true;
		}
	}

	ngAfterViewInit() {
		setTimeout(() => {
			if (this.value) {
				this.openSearch();
			}
		});
	}
}
