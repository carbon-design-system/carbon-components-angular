import { Component, HostBinding, Input } from "@angular/core";

/**
 * Skeleton component for tabs
 */
@Component({
	selector: "cds-tabs-skeleton, ibm-tabs-skeleton",
	template: `
		<ul class="cds--tabs__nav">
			@for (i of numOfSkeletonTabs; track i) {
				<li class="cds--tabs__nav-item">
					<div class="cds--tabs__nav-link">
						<span></span>
					</div>
				</li>
			}
		</ul>
	`,
	standalone: true
})
export class TabSkeleton {
	/**
	 * Number of skeleton tab placeholders to render, default is 5
	 */
	@Input() set numOftabs(num: number) {
		this.numOfSkeletonTabs = new Array(num);
	}

	/**
	 * Set to `true` to render the contained variant of the skeleton tabs.
	 */
	@Input() contained = false;

	/**
	 * Set to `true` to put tabs in a loading state.
	 */
	@HostBinding("class.cds--skeleton") skeleton = true;
	@HostBinding("class.cds--tabs") tabs = true;
	@HostBinding("class.cds--tabs--contained") get containedClass() {
		return this.contained;
	}
	numOfSkeletonTabs = new Array(5);
}
