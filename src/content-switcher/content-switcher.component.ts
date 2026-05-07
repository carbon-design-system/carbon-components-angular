import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	Output,
	EventEmitter,
	AfterViewInit,
	HostListener,
	ElementRef,
	ChangeDetectionStrategy,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
import { isFocusInLastItem, isFocusInFirstItem } from "carbon-components-angular/common";
import { NgClass } from "@angular/common";

/**
 * The content switcher can be used for toggling between distinct options.
 * Similar to tabs, but without an associated content panel.
 *
 * Get started with importing the components and directives:
 *
 * ```typescript
 * import { ContentSwitcher, ContentSwitcherOption } from 'carbon-components-angular';
 * ```
 *
 * ```html
 * <cds-content-switcher (selected)="selected($event)">
 *		<button cdsContentOption>First section</button>
 *		<button cdsContentOption>Second section</button>
 *		<button cdsContentOption>Third section</button>
 * </cds-content-switcher>
 * ```
 *
 * [See demo](../../?path=/story/components-content-switcher--basic)
 */
@Component({
	selector: "cds-content-switcher, ibm-content-switcher",
	template: `
		<div
			[attr.aria-label]="ariaLabel"
			class="cds--content-switcher"
			[ngClass]="{
				'cds--content-switcher--sm': size === 'sm',
				'cds--content-switcher--md': size === 'md',
				'cds--content-switcher--lg': size === 'lg',
				'cds--content-switcher--low-contrast': lowContrast
			}"
			role="tablist">
			<ng-content />
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgClass]
})
export class ContentSwitcher implements AfterViewInit, OnChanges {
	@Input() ariaLabel = "content switcher";

	/**
	 * Set content switcher size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Specify whether the ContentSwitcher should be the low contrast variant.
	 */
	@Input() lowContrast = false;

	/**
	 * When `automatic`, the focused switcher will be selected by default. For `manual`,
	 * user will have to manually select via Enter/space (which fire the native click handler).
	 *
	 * Passes selected mode to all content switcher children
	 */
	@Input() selectionMode: "automatic" | "manual" = "automatic";

	/**
	 * Index of the currently selected option (zero-based). When set, the
	 * matching `cdsContentOption` is activated and any other option becomes
	 * inactive.
	 */
	@Input() selectedIndex: number | undefined;

	/**
	 * Emits the activated `ContentSwitcherOption`
	 */
	@Output() selected = new EventEmitter<ContentSwitcherOption>();

	@ContentChildren(ContentSwitcherOption) options: QueryList<ContentSwitcherOption>;

	constructor(protected elementRef: ElementRef) {}

	ngOnChanges(changes: SimpleChanges) {
		if (this.options) {
			if (changes.selectedIndex) {
				this.applySelectedIndex();
			}
			if (changes.selectionMode) {
				this.options.forEach(option => option.selectionMode = this.selectionMode);
			}
		}
	}

	ngAfterViewInit() {
		if (this.selectedIndex !== undefined) {
			this.applySelectedIndex();
		} else {
			const firstActive = this.options.find(option => option.active);
			// delay setting active until the DOM has settled
			if (!firstActive) {
				setTimeout(() => this.options.first.active = true);
			}
		}
		// propagate selectionMode so each option can honor 'manual' selection
		this.options.forEach(option => option.selectionMode = this.selectionMode);
		// subscribe to each item, emit when one is selected, and reset the active states
		this.options.forEach(option => {
			option.selected.subscribe((_: boolean) => {
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
		const buttonList = Array.from<any>(this.elementRef.nativeElement.querySelectorAll("[cdsContentOption], [ibmContentOption]"));

		switch (event.key) {
			case "ArrowRight":
				event.preventDefault();
				if (!isFocusInLastItem(event, buttonList))  {
					const index = buttonList.findIndex(item => item === event.target);
					buttonList[index + 1].focus();
				} else {
					buttonList[0].focus();
				}
				break;

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

	private applySelectedIndex() {
		if (this.selectedIndex === undefined) {
			return;
		}
		const list = this.options.toArray();
		if (!list.length) {
			return;
		}
		const target = list[this.selectedIndex];
		if (!target) {
			return;
		}
		list.forEach(option => {
			option.active = option === target;
		});
	}
}
