import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

/**
 * Skeleton component for tabs
 */
@Component({
	selector: "cds-tabs-skeleton, ibm-tabs-skeleton",
	template: `
		<ul class="cds--tabs__nav">
			<li
				*ngFor="let i of numOfSkeletonTabs"
				class="cds--tabs__nav-item">
				<div class="cds--tabs__nav-link">
					<span></span>
				</div>
			</li>
		</ul>
	`
})
export class TabSkeleton {
	/**
	 * Set number of skeleton tabs to render, default is 5
	 */
	@Input() set numOftabs(num: number) {
		this.numOfSkeletonTabs = new Array(num);
	}

	/**
	 * Set to `true` to put tabs in a loading state.
	 */
	@HostBinding("class.cds--skeleton") skeleton = true;
	@HostBinding("class.cds--tabs") tabs = true;
	numOfSkeletonTabs = new Array(5);
}
