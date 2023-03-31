import {
	ContentChildren,
	Directive,
	HostBinding,
	Input,
	OnDestroy,
	OnInit,
	Optional,
	QueryList,
	SkipSelf
} from "@angular/core";
import { Subscription } from "rxjs";
import { GridService } from "./grid.service";

/**
 * [See demo](../../?path=/story/components-grid--basic)
 */
@Directive({
	selector: "[cdsGrid], [ibmGrid]",
	providers: [
		{
			provide: GridService,
			deps: [[new Optional(), new SkipSelf(), GridService]],
			useFactory: (parentService: GridService) => {
				return parentService || new GridService();
			}
		}
	]
})
export class GridDirective implements OnInit, OnDestroy {
	/**
	 * Set to `true` to condense the grid
	 */
	@Input() condensed = false;
	/**
	 * Set to `true` to use narrow grid
	 */
	@Input() narrow = false;
	/**
	 * Set to `true` to use the full width
	 */
	@Input() fullWidth = false;
	/**
	 * Set to `true` to use css grid
	 */
	@Input() set useCssGrid(enable: boolean) {
		this.cssGridEnabled = enable;
		this.gridService.updateGridType(enable);
	}

	private cssGridEnabled = false;
	private isSubgrid = false;
	private subscription = new Subscription();

	// Flex grid
	@HostBinding("class.cds--grid") get flexGrid() {
		return !this.cssGridEnabled;
	}
	@HostBinding("class.cds--grid--condensed") get flexCondensed() {
		return !this.cssGridEnabled && this.condensed;
	}
	@HostBinding("class.cds--grid--narrow") get flexNarrow() {
		return !this.cssGridEnabled && this.narrow;
	}
	@HostBinding("class.cds--grid--full-width") get flexFullWidth() {
		return !this.cssGridEnabled && this.fullWidth;
	}

	// CSS Grid
	@HostBinding("class.cds--css-grid") get ccsGrid() {
		return this.cssGridEnabled && !this.isSubgrid;
	}
	@HostBinding("class.cds--css-grid--condensed") get ccsCondensed() {
		return this.cssGridEnabled && !this.isSubgrid && this.condensed;
	}
	@HostBinding("class.cds--css-grid--narrow") get ccsNarrow() {
		return this.cssGridEnabled && !this.isSubgrid && this.narrow;
	}
	@HostBinding("class.cds--css-grid--full-width") get ccsFullWidth() {
		return this.cssGridEnabled && !this.isSubgrid && this.fullWidth;
	}

	// CSS Sub Grid
	@HostBinding("class.cds--subgrid") get subGrid() {
		return this.cssGridEnabled && this.isSubgrid;
	}
	@HostBinding("class.cds--subgrid--condensed") get subCondensed() {
		return this.cssGridEnabled && this.isSubgrid && this.condensed;
	}
	@HostBinding("class.cds--subgrid--narrow") get subNarrow() {
		return this.cssGridEnabled && this.isSubgrid && this.narrow;
	}
	@HostBinding("class.cds--subgrid--wide") get subFullWidth() {
		return this.cssGridEnabled && this.isSubgrid && this.fullWidth;
	}

	constructor(private gridService: GridService) {}

	ngOnInit() {
		this.subscription = this.gridService.gridObservable.subscribe((isCssGrid: boolean) => {
			this.cssGridEnabled = isCssGrid;
		});
	}

	// Make all children grids a sub grid
	@ContentChildren(GridDirective, { descendants: true }) set cssGridChildren(list: QueryList<GridDirective>) {
		if (this.cssGridEnabled) {
			list.forEach((grid) => {
				// Prevents initial (parent) grid element from being turned into a subgrid
				if (grid === this) {
					return;
				}
				grid.isSubgrid = true;
			});
		}
	}

	/**
	 * Unsubscribe from Grid Service subscription
	 */
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
