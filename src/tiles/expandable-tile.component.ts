import {
	Component,
	Input,
	ElementRef,
	AfterContentInit
} from "@angular/core";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { merge } from "carbon-components-angular/utils";

export interface ExpandableTileTranslations {
	EXPAND: string;
	COLLAPSE: string;
}

@Component({
	selector: "cds-expandable-tile, ibm-expandable-tile",
	template: `
		<button
			class="cds--tile cds--tile--expandable"
			[ngClass]="{
				'cds--tile--is-expanded' : expanded,
				'cds--tile--light': theme === 'light'
			}"
			[ngStyle]="{'max-height': expandedHeight + 'px'}"
			type="button"
			(click)="onClick()">
			<div class="cds--tile__chevron">
				<svg *ngIf="!expanded" width="12" height="7" viewBox="0 0 12 7" [attr.title]="expand.subject | async" role="img">
					<title>{{expand.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
				<svg *ngIf="expanded" width="12" height="7" viewBox="0 0 12 7" [attr.title]="collapse.subject | async" role="img">
					<title>{{collapse.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
			</div>
			<div class="cds--tile-content">
				<ng-content select=".cds--tile-content__above-the-fold"></ng-content>
				<ng-content select=".cds--tile-content__below-the-fold"></ng-content>
			</div>
		</button>
	`
})
export class ExpandableTile implements AfterContentInit {
	@Input() theme: "light" | "dark" = "dark";

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
	currentExpandedHeight = 0;
	element = this.elementRef.nativeElement;

	expand = this.i18n.getOverridable("TILES.EXPAND");
	collapse = this.i18n.getOverridable("TILES.COLLAPSE");

	constructor(protected i18n: I18n, protected elementRef: ElementRef) {}

	ngAfterContentInit() {
		this.updateMaxHeight();
	}

	get expandedHeight() {
		const tile = this.element.querySelector(".cds--tile");
		const tilePadding
			= parseInt(getComputedStyle(tile).paddingBottom, 10) + parseInt(getComputedStyle(tile).paddingTop, 10);
		const expandedHeight = this.tileMaxHeight + tilePadding;
		if (!isNaN(expandedHeight)) {
			this.currentExpandedHeight = expandedHeight;
		}
		return this.currentExpandedHeight;
	}

	updateMaxHeight() {
		if (this.expanded) {
			this.tileMaxHeight = this.element.querySelector(".cds--tile-content").getBoundingClientRect().height;
		} else {
			this.tileMaxHeight = this.element.querySelector(".cds--tile-content__above-the-fold").getBoundingClientRect().height;
		}
	}

	onClick() {
		this.expanded = !this.expanded;
		this.updateMaxHeight();
	}
}
