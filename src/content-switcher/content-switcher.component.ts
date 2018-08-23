import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	Output,
	EventEmitter,
	AfterViewInit
} from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";

/**
 *
 *
 */
@Component({
	selector: "ibm-content-switcher",
	template: `
		<div
			[attr.aria-label]="label"
			class="bx--content-switcher"
			role="tablist">
			<ng-content></ng-content>
		</div>
	`,
})
export class ContentSwitcher implements AfterViewInit {
	@Input() label = "content switcher";

	@Output() selected = new EventEmitter();

	@ContentChildren(ContentSwitcherOption) options: QueryList<ContentSwitcherOption>;

	ngAfterViewInit() {
		this.options.forEach(option => {
			option.selected.subscribe(_ => {
				const active = option;
				this.options.forEach(option => {
					if (option !== active) {
						option.active = false;
					}
				});
				this.selected.emit(active);
			});
		});
	}
}
