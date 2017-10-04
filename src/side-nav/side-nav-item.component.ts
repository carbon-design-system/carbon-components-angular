import {
	Component,
	Input,
	Output,
	ViewChild,
	AfterViewInit,
	ElementRef,
	EventEmitter,
	HostListener
} from "@angular/core";

@Component({
	selector: "n-side-nav-item",
	template: `
	<li aria-level="2" #item>
		<a
		[attr.aria-controls]="subpanelId"
		[attr.aria-expanded]="expanded"
		[ngClass]="{active: this.selected}"
		tabindex="0"
		(click)="onClick()">
			<ng-content select=".side-nav-item"></ng-content>
		</a>
		<div [id]="subpanelId" class="side-nav_subpanel" #subItem>
			<div class="side-nav_subpanel-wrapper" style="display: none;">
				<ng-content
					select="n-side-nav-subpanel">
				</ng-content>
			</div>
		</div>
	</li>
	`
})
export class SideNavItem {
	static sideNavItemCount = 0;
	subpanelId = "side-nav-subpanel-" + SideNavItem.sideNavItemCount;

	@Input() expanded: boolean = null;
	@Input() selected = false;
	@Output() select: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild("item") item;
	@ViewChild("subItem") subItem;

	constructor(private _elementRef: ElementRef) {
		SideNavItem.sideNavItemCount++;
	}

	ngAfterViewInit() {
		if (this.hasSubmenu() && this.expanded === null) {
			setTimeout(() => this.expanded = false);
		}
		if (this.selected && this.getPaneTemplateElement()) {
			this.showPane();
			this.selected = false;
		}
		// get all n-side-nav-items in subItem and set aria-level to ariaLevel+1 on them
		// const items = this.subItem.nativeElement.querySelectorAll("n-side-nav-item") as HTMLElement[];
		// items.forEach((item) => item.querySelector(".side-nav-item-wrapper").setAttribute("aria-level", (this.ariaLevel + 1).toString()));
	}

	@HostListener("keydown", ["$event"])
	handleKeyboardEvent(event: KeyboardEvent) {
		switch (event.key) {
			case "Enter": {
				this.onClick();
			}
		}
	}

	hasSubmenu() {
		return (this.subItem.nativeElement.firstElementChild.children && this.subItem.nativeElement.firstElementChild.children.length > 0);
	}

	onClick() {
		// only elements that don't have pane-like children can be selected
		// those that do, show that child on click
		if (!this.hasSubmenu()) {
			this.selected = !this.selected;
		} else {
			this.showPane();
		}
		this.select.emit();
	}

	getPaneTemplateElement() {
		return this.subItem.nativeElement;
	}

	showPane() {
		this.expanded = true;
		let pane = this.getPaneTemplateElement();
		if (pane) {
			pane.firstElementChild.setAttribute("style", "display: block;");
			pane.classList.add("slide-in");
			setTimeout( () => {
				(pane.querySelector(".subpanel_heading") as HTMLElement).focus();
			}, 360);  // focus after animation
		}
	}
}
