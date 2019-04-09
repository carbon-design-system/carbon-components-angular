import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	Output,
	EventEmitter,
	AfterViewInit,
	HostListener,
	ElementRef
} from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
import { isFocusInLastItem, isFocusInFirstItem } from "./../common/tab.service";

/**
 * The content switcher can be used for toggling between distinct options.
 * Similar to tabs, but without an associated content panel
 *
 * ```html
 * <ibm-content-switcher (selected)="selected($event)">
 *		<button ibmContentOption>First section</button>
 *		<button ibmContentOption>Second section</button>
 *		<button ibmContentOption>Third section</button>
 *	</ibm-content-switcher>
 *	```
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
	`
})
export class ContentSwitcher implements AfterViewInit {
	/**
	 * aria-label for the content switcher. Should be set to something descriptive
	 */
	@Input() label = "content switcher";

	/**
	 * Emits the activated `ContentSwitcherOption`
	 */
	@Output() selected = new EventEmitter();

	@ContentChildren(ContentSwitcherOption) options: QueryList<ContentSwitcherOption>;

	constructor(protected elementRef: ElementRef) {}

	ngAfterViewInit() {
		const firstActive = this.options.find(option => option.active);
		// delay setting active until the DOM has settled
		if (!firstActive) {
			setTimeout(() => this.options.first.active = true);
		}
		// subscribe to each item, emit when one is selected, and reset the active states
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

	@HostListener("keydown", ["$event"])
	hostkeys(event: KeyboardEvent) {
		const buttonList = Array.from<any>(this.elementRef.nativeElement.querySelectorAll("[ibmContentOption]"));

		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				event.preventDefault();
				if (!isFocusInLastItem(event, buttonList))  {
					const index = buttonList.findIndex(item => item === event.target);
					buttonList[index + 1].focus();
				} else {
					buttonList[0].focus();
				}
				break;

			case "Left": // IE specific value
			case "ArrowLeft":
				event.preventDefault();
				if (!isFocusInFirstItem(event, buttonList))  {
					const index = buttonList.findIndex(item => item === event.target);
					buttonList[index - 1].focus();
				} else {
					buttonList[buttonList.length - 1].focus();
				}
				break;

			case "Home":
				event.preventDefault();
				buttonList[0].focus();
				break;

			case "End":
				event.preventDefault();
				buttonList[buttonList.length - 1].focus();
				break;
		}
	}
}
