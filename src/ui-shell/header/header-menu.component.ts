import {
	Component,
	Input,
	HostListener,
	ElementRef,
	TemplateRef,
	HostBinding
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HeaderItemInterface } from "./header-navigation-items.interface";

/**
 * Dropdown menu container for navigation items.
 */
@Component({
	selector: "cds-header-menu, ibm-header-menu",
	template: `
		<a
			class="cds--header__menu-item cds--header__menu-title"
			[href]="href"
			tabindex="0"
			aria-haspopup="menu"
			[attr.aria-expanded]="expanded"
			(click)="navigate($event)">
			{{title}}
			<ng-template *ngIf="icon; else defaultIcon" [ngTemplateOutlet]="icon"></ng-template>
			<ng-template #defaultIcon>
				<svg class="cds--header__menu-arrow" width="12" height="7" aria-hidden="true">
					<path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
				</svg>
			</ng-template>
		</a>
		<div class="cds--header__menu" [attr.aria-label]="title">
			<ng-content></ng-content>
			<ng-container *ngFor="let headerItem of headerItems">
				<cds-header-item
					[href]="headerItem.href"
					[route]="headerItem.route"
					[routeExtras]="headerItem.routeExtras">
					{{ headerItem.content }}
				</cds-header-item>
			</ng-container>
		</div>
	`,
	styles: [`
		:host {
			display: list-item;
		}
	`]
})
export class HeaderMenu {
	@HostBinding("class.cds--header__submenu") subMenu = true;
	@HostBinding("attr.role") role = "listitem";

	@Input() title: string;
	@Input() set href(v: string) {
		// Needed when component is created dynamically with a model.
		if (v === undefined) {
			return;
		}
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}
	@Input() trigger: "click" | "mouseover" = "click";

	/**
	 * Used to create header items through a model.
	 */
	@Input() headerItems: HeaderItemInterface[];

	/**
	 * Optional icon
	 */
	@Input() icon: TemplateRef<any>;

	public expanded = false;

	protected _href = "#";

	constructor(protected domSanitizer: DomSanitizer, protected elementRef: ElementRef) { }

	@HostListener("click")
	onClick() {
		if (this.trigger === "click") {
			this.expanded = !this.expanded;
		}
	}

	@HostListener("mouseover")
	onMouseOver() {
		if (this.trigger === "mouseover") {
			this.expanded = true;
		}
	}

	@HostListener("mouseout")
	onMouseOut() {
		if (this.trigger === "mouseover") {
			this.expanded = false;
		}
	}

	@HostListener("focusout", ["$event"])
	onFocusOut(event) {
		if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
			this.expanded = false;
		}
	}

	navigate(event) {
		if (this._href === "#") {
			event.preventDefault();
		}
	}
}
