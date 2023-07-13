import {
	Component,
	Input,
	ElementRef,
	AfterViewInit,
	ViewChild
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { merge } from "carbon-components-angular/utils";

export interface ExpandableTileTranslations {
	EXPAND: string;
	COLLAPSE: string;
}

@Component({
	selector: "cds-expandable-tile, ibm-expandable-tile",
	template: `
		<button
			*ngIf="!interactive"
			class="cds--tile cds--tile--expandable"
			[ngClass]="{
				'cds--tile--is-expanded' : expanded,
				'cds--tile--light': theme === 'light'
			}"
			[ngStyle]="{'max-height': expandedHeight + 'px'}"
			type="button"
			(click)="onClick()"
			[attr.aria-expanded]="expanded"
			[attr.title]="(expanded ? collapse.subject : expand.subject) | async">
				<ng-container *ngTemplateOutlet="expandableTileContent"></ng-container>
		</button>

		<div
			*ngIf="interactive"
			class="cds--tile cds--tile--expandable cds--tile--expandable--interactive"
			[ngClass]="{
				'cds--tile--is-expanded' : expanded,
				'cds--tile--light': theme === 'light'
			}"
			[ngStyle]="{'max-height': expandedHeight + 'px'}"
			[attr.title]="(expanded ? collapse.subject : expand.subject) | async">
			<ng-container *ngTemplateOutlet="expandableTileContent"></ng-container>
		</div>

		<ng-template #chevronIcon>
			<svg cdsIcon="chevron--down" size="16"></svg>
		</ng-template>

		<ng-template #expandableTileContent>
			<div #container>
				<div class="cds--tile-content">
					<ng-content select="[cdsAboveFold],[ibmAboveFold],.cds--tile-content__above-the-fold"></ng-content>
				</div>
				<div *ngIf="!interactive" class="cds--tile__chevron">
					<ng-container *ngTemplateOutlet="chevronIcon"></ng-container>
				</div>
				<button
					*ngIf="interactive"
					class="cds--tile__chevron cds--tile__chevron--interactive"
					type="button"
					(click)="onClick()"
					[attr.aria-expanded]="expanded"
					[attr.aria-label]="(expanded ? collapse.subject : expand.subject) | async">
					<ng-container *ngTemplateOutlet="chevronIcon"></ng-container>
				</button>
				<div class="cds--tile-content">
					<ng-content select="[cdsBelowFold],[ibmBelowFold],.cds--tile-content__below-the-fold"></ng-content>
				</div>
			</div>
		</ng-template>
	`
})
export class ExpandableTile implements AfterViewInit {
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * Set to `"light"` to apply the light style
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * Controls the expanded state
	 */
	@Input() expanded = false;
	/**
	 * Controls the interactive state
	 */
	@Input() interactive = false;
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

	@ViewChild("container") tileContainer: ElementRef;

	tileMaxHeight = 0;
	currentExpandedHeight = 0;

	expand = this.i18n.getOverridable("TILES.EXPAND");
	collapse = this.i18n.getOverridable("TILES.COLLAPSE");

	constructor(protected i18n: I18n, protected element: ElementRef) {}

	ngAfterViewInit() {
		this.updateMaxHeight();
	}

	get expandedHeight() {
		const tile = this.element.nativeElement.querySelector(".cds--tile");
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
			this.tileMaxHeight = this.tileContainer.nativeElement.getBoundingClientRect().height;
		} else {
			this.tileMaxHeight = this.element.nativeElement.querySelector(".cds--tile-content__above-the-fold").getBoundingClientRect().height;
		}
	}

	onClick() {
		this.expanded = !this.expanded;
		this.updateMaxHeight();
	}
}
