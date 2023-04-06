import {
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	HostListener,
	ContentChild,
	Optional,
	OnInit,
	AfterContentInit,
	OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";
import { ContextMenuSelectionService } from "./context-menu-selection.service";
import { ContextMenuComponent } from "./context-menu.component";

@Component({
	selector: "cds-context-menu-item, ibm-context-menu-item",
	template: `
		<div class="cds--menu-item__icon">
			<svg *ngIf="selectable && checked" cdsIcon="checkmark" size="16"></svg>
			<svg *ngIf="!selectable && icon" [cdsIcon]="icon" size="16"></svg>
		</div>
		<div class="cds--menu-item__label" [title]="label">{{label}}</div>
		<div class="cds--menu-item__shortcut">
			<ng-container *ngIf="info">{{info}}</ng-container>
			<svg *ngIf="hasChildren" cdsIcon="caret--right" size="16"></svg>
		</div>
		<ng-content></ng-content>
	`,
	styles: [`
		:host {
			grid-template-columns: 1rem 1fr max-content;
		}
	`]
})
export class ContextMenuItemComponent implements OnInit, AfterContentInit, OnDestroy {
	@HostBinding("class.cds--menu-item") optionClass = true;
	@HostBinding("attr.role") role = "menuitem";
	@HostBinding("attr.tabindex") tabindex = -1;
	@HostBinding("attr.aria-haspopup") ariaHasPopup = null;
	@HostBinding("attr.aria-expanded") ariaExpanded = null;
	@HostBinding("attr.aria-checked") get ariaChecked() {
		return this.type === "checkbox" ?
			(this.checked ? true : false) : null;
	}

	@Input() label = "";
	@Input() info = "";
	@Input() type: null | "checkbox" | "radio" = null;
	@Input() checked = false;
	@Input() icon = "";
	@Input() value = "";
	@Output() checkedChange = new EventEmitter<boolean>();

	hasChildren = false;
	selectable = false;

	@ContentChild(ContextMenuComponent, { static: true }) childContextMenu: ContextMenuComponent;
	private subscriptions = new Subscription();

	constructor(
		protected elementRef: ElementRef,
		@Optional() protected contextMenuSelectionService: ContextMenuSelectionService
	) { }

	ngOnInit() {
		switch (this.type) {
			case "checkbox": {
				this.role = "menuitemcheckbox";
				this.selectable = true;
				break;
			}
			case "radio": {
				this.role = "menuitemradio";
				this.selectable = true;
				break;
			}
			default: {
				this.role = "menuitem";
			}
		}

		if (this.type && this.contextMenuSelectionService && this.value) {
			const { selectionObservable } = this.contextMenuSelectionService;
			const subscription = selectionObservable.subscribe((value) => {
				if (this.type === "radio") {
					this.handleSelection(value === this.value);
				}

				if (this.type === "checkbox") {
					this.handleSelection(value.includes(this.value));
				}
			});
			this.subscriptions.add(subscription);
		}
	}

	ngAfterContentInit() {
		if (this.childContextMenu) {
			this.hasChildren = true;
			this.ariaHasPopup = true;
			this.ariaExpanded = false;
		}
	}

	@HostListener("keydown.enter", ["$event"])
	@HostListener("keydown.space", ["$event"])
	@HostListener("click", ["$event"])
	handleClick(event: MouseEvent & KeyboardEvent) {
		event.stopPropagation();
		if (this.hasChildren) {
			this.openSubMenu();
			this.childContextMenu.focusMenu();
		}

		if (this.type) {
			this.handleSelection(!this.checked);
		}

		if (this.contextMenuSelectionService) {
			if (this.type === "radio") {
				this.contextMenuSelectionService.selectRadio(this.value);
			}

			if (this.type === "checkbox") {
				this.contextMenuSelectionService.selectCheckbox(this.value);
			}
		}
	}

	handleSelection(selected: boolean) {
		this.checked = selected;
		this.checkedChange.emit(this.checked);
	}

	openSubMenu() {
		if (this.childContextMenu) {
			this.childContextMenu.open = true;
			this.ariaExpanded = true;
			const dimensions = this.elementRef.nativeElement.getBoundingClientRect();
			this.childContextMenu.position.left = dimensions.left + dimensions.width;
			// subtract 4px to account for margins
			this.childContextMenu.position.top = dimensions.top - 4;
		}
	}

	closeSubMenu() {
		if (this.childContextMenu) {
			this.childContextMenu.open = false;
			this.ariaExpanded = false;
		}
	}

	@HostListener("mouseover")
	handleMouseOver() {
		this.openSubMenu();
	}

	@HostListener("mouseout")
	handleMouseOut() {
		this.closeSubMenu();
	}

	@HostListener("focus")
	handleFocus() {
		this.tabindex = 0;
		if (this.hasChildren && this.ariaExpanded) {
			this.closeSubMenu();
		}
	}

	@HostListener("blur")
	handleBlur() {
		this.tabindex = -1;
	}

	focusItem() {
		this.elementRef.nativeElement.focus();
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
