import {
	Component,
	Input,
	ElementRef,
	AfterContentInit
} from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { merge } from "./../utils/object";

export interface ExpandableTileTranslations {
	EXPAND: string;
	COLLAPSE: string;
}

@Component({
	selector: "ibm-expandable-tile",
	template: `
		<div
			class="bx--tile bx--tile--expandable"
			[ngClass]="{'bx--tile--is-expanded' : expanded}"
			[ngStyle]="{'max-height': expandedHeight + 'px'}"
			role="button"
			tabindex="0"
			(click)="onClick()">
			<button [attr.aria-label]="(expanded ? collapse : expand).subject | async" class="bx--tile__chevron">
				<svg *ngIf="!expanded" width="12" height="7" viewBox="0 0 12 7" role="img">
					<title>{{expand.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
				<svg *ngIf="expanded" width="12" height="7" viewBox="0 0 12 7" role="img">
					<title>{{collapse.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
			</button>
			<div class="bx--tile-content">
				<ng-content select=".bx--tile-content__above-the-fold"></ng-content>
				<ng-content select=".bx--tile-content__below-the-fold"></ng-content>
			</div>
		</div>
	`
})
export class ExpandableTile implements AfterContentInit {
	@Input() expanded = false;
	/**
	 * Expects an object that contains some or all of:
	 * ```
	 * {
	 *		"EXPAND": "Expand",
	 *		"COLLAPSE": "Collapse",
	 * }
	 * ```
	 */
	@Input()
	set translations(value: ExpandableTileTranslations) {
		const valueWithDefaults = merge(this.i18n.getMultiple("TILES"), value);
		this.expand.override(valueWithDefaults.EXPAND);
		this.collapse.override(valueWithDefaults.COLLAPSE);
	}

	tileMaxHeight = 0;
	element = this.elementRef.nativeElement;

	expand = this.i18n.getOverridable("TILES.EXPAND");
	collapse = this.i18n.getOverridable("TILES.COLLAPSE");

	constructor(protected i18n: I18n, protected elementRef: ElementRef) {}

	ngAfterContentInit() {
		this.updateMaxHeight();
	}

	get expandedHeight() {
		return this.tileMaxHeight + parseInt(getComputedStyle(this.element.querySelector(".bx--tile")).paddingBottom, 10);
	}

	updateMaxHeight() {
		if (this.expanded) {
			this.tileMaxHeight = this.element.querySelector(".bx--tile-content").getBoundingClientRect().height;
		} else {
			this.tileMaxHeight = this.element.querySelector(".bx--tile-content__above-the-fold").getBoundingClientRect().height;
		}
	}

	onClick() {
		this.expanded = !this.expanded;
		this.updateMaxHeight();
	}
}
