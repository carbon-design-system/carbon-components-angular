import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges
} from "@angular/core";
import { Subscription } from "rxjs";
import { ContextMenuSelectionService } from "./context-menu-selection.service";

@Component({
	selector: "cds-context-menu-group, ibm-context-menu-group",
	template: `
		<ng-content></ng-content>
	`,
	providers: [ContextMenuSelectionService]
})
export class ContextMenuGroupComponent implements OnInit, OnChanges, OnDestroy {
	@HostBinding("attr.role") role = "group";
	@HostBinding("class.cds--menu-item-radio-group") get radioGroup() {  return this.type === "radio"; }
	@HostBinding("class.cds--menu-item-group") get group() { return this.type === "checkbox"; }

	@HostBinding("attr.aria-label") @Input() label = null;
	@Input() value: any[] = [];
	@Input() type: null | "radio" | "checkbox" = null;
	@Output() valueChange = new EventEmitter<any[]>();

	private subscription = new Subscription();

	constructor(protected contextMenuSelectionService: ContextMenuSelectionService) { }

	ngOnInit() {
		const { selectionObservable } = this.contextMenuSelectionService;
		const subscription = selectionObservable.subscribe(value => {
			this.valueChange.emit(value);
		});
		this.subscription.add(subscription);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.value) {
			if (this.type === "radio") {
				this.contextMenuSelectionService.selectRadio(changes.value.currentValue);
			}

			if (this.type === "checkbox") {
				this.contextMenuSelectionService.selectCheckboxes(changes.value.currentValue);
			}
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
