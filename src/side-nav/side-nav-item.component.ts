import {
	Component,
	Input,
	Output,
	ViewChild,
	AfterViewInit,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "cdl-side-nav-item",
	template: `
	<div class="side-nav-item-wrapper" role="heading" [attr.aria-level]="ariaLevel" #item>
		<ng-content select=".side-nav-pane-sub-template"></ng-content>
		<button
			class="side-nav-item-button"
			[ngClass]="{'selected': selected}"
			(click)="onClick()"
			[attr.aria-expanded]="selected">
			<ng-content></ng-content>
			<svg
				*ngIf="hasSubmenu()"
				class="side-nav-arrow"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
			</svg>
		</button>
	</div>
	<div class="side-nav-sub-item" [ngClass]="{'hide-side-nav-sub-item': !hasSubmenu() || !selected}" #subItem>
		<ng-content select="cdl-side-nav-item"></ng-content>
	</div>
  `
})
export class SideNavItem {
	@Input() selected = false;
	@Input("aria-level") ariaLevel = 1;
	@Output() select: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild("item") item;
	@ViewChild("subItem") subItem;

	ngAfterViewInit() {
		if (this.selected && this.getPaneTemplateElement()) {
			this.showPane();
			this.selected = false;
		}
		// get all cdl-side-nav-items in subItem and set aria-level to ariaLevel+1 on them
		const items = this.subItem.nativeElement.querySelectorAll("cdl-side-nav-item") as HTMLElement[];
		items.forEach((item) => item.querySelector(".side-nav-item-wrapper").setAttribute("aria-level", (this.ariaLevel + 1).toString()));
	}

	hasSubmenu() {
		return (this.subItem.nativeElement.children && this.subItem.nativeElement.children.length > 0) || !!this.getPaneTemplateElement();
	}

	onClick() {
		// only elements that don't have pane-like children can be selected
		// those that do, show that child on click
		if (!this.getPaneTemplateElement()) {
			this.selected = !this.selected;
		} else {
			this.showPane();
		}
		this.select.emit();
	}

	getPaneTemplateElement() {
		return (Array.from(this.item.nativeElement.children) as HTMLElement[])
					.filter((el) => el.classList.contains("side-nav-pane-sub-template"))[0];
	}

	showPane() {
		let pane = this.getPaneTemplateElement();
		if (pane) {
			pane.classList.add("side-nav-pane-visible");
			pane.closest(".left-nav-container").classList.add("side-nav-pane-sub-template-visible");
			setTimeout( () => {
				(pane.querySelector(".side-nav-pane-title") as HTMLElement).focus();
			}, 100);  // focus after animation
		}
	}
}
