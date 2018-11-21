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
	`
})
export class ContentSwitcher implements AfterViewInit {
	@Input() label = "content switcher";

	@Output() selected = new EventEmitter();

	@ContentChildren(ContentSwitcherOption) options: QueryList<ContentSwitcherOption>;

	constructor(private elementRef: ElementRef) {}

	ngAfterViewInit() {
		this.options.first.active = true;
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
		const buttonList = Array.from<any>(this.elementRef.nativeElement.querySelectorAll(".bx--content-switcher-btn"));

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
