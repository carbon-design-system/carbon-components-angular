/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { ExperimentalService } from "./../experimental.module";
/**
 * [See demo](../../?path=/story/progress-indicator--basic)
 *
 * <example-url>../../iframe.html?id=progress-indicator--basic</example-url>
 */
export class ProgressIndicator {
    /**
     * @param {?} experimental
     */
    constructor(experimental) {
        this.experimental = experimental;
        this.orientation = "horizontal";
        this.skeleton = false;
    }
    /**
     * @param {?} stepCount
     * @return {?}
     */
    static skeletonSteps(stepCount) {
        /** @type {?} */
        const steps = [];
        for (let i = 0; i < stepCount; i++) {
            steps.push({ "state": ["incomplete"] });
        }
        return steps;
    }
    /**
     * @return {?}
     */
    get current() {
        return this.steps.findIndex(step => step.state.includes("current"));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set current(current) {
        if (current === undefined || current < 0) {
            for (let i = 0; i < this.steps.length; i++) {
                this.steps[i].state[0] = "incomplete";
            }
            return;
        }
        if (current > this.steps.length - 1) {
            for (let i = 0; i < this.steps.length; i++) {
                this.steps[i].state[0] = "complete";
            }
            return;
        }
        this.steps[current].state[0] = "current";
        for (let i = 0; i < current; i++) {
            this.steps[i].state[0] = "complete";
        }
        for (let i = current + 1; i < this.steps.length; i++) {
            this.steps[i].state[0] = "incomplete";
        }
    }
    /**
     * @return {?}
     */
    get isExperimental() {
        return this.experimental.isExperimental;
    }
}
ProgressIndicator.decorators = [
    { type: Component, args: [{
                selector: "ibm-progress-indicator",
                template: `
	<ul
		data-progress
		data-progress-current
		class="bx--progress"
		[ngClass]="{
			'bx--skeleton': skeleton,
			'bx--progress--vertical': (orientation === 'vertical')
		}">
		<li
			class="bx--progress-step bx--progress-step--{{step.state[0]}}"
			*ngFor="let step of steps"
			[ngClass]="{'bx--progress-step--disabled' : step.disabled}">
			<div class="bx--progress-step-button bx--progress-step-button--unclickable" role="button" tabindex="-1">
				<ibm-icon-checkmark-outline16 *ngIf="step.state == 'complete'"></ibm-icon-checkmark-outline16>
				<svg *ngIf="step.state == 'current'">
					<path *ngIf="isExperimental" d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" ></path>
				</svg>
				<svg *ngIf="step.state == 'incomplete'">
					<path
						*ngIf="isExperimental"
						d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
					</path>
				</svg>
				<ibm-icon-warning16 *ngIf="step.state.includes('error')" innerClass="bx--progress__warning"></ibm-icon-warning16>
				<p
					class="bx--progress-label"
					*ngIf="step.tooltip"
					[ibmTooltip]="step.tooltip.content"
					[trigger]="step.tooltip.trigger"
					[placement]="step.tooltip.placement"
					[title]="step.tooltip.title"
					[gap]="step.tooltip.gap"
					[appendInline]="step.tooltip.appendInline"
					[data]="step.tooltip.data">
					{{step.text}}
				</p>
				<p class="bx--progress-label" *ngIf="!step.tooltip">{{step.text}}</p>
				<p *ngIf="step.optionalText" class="bx--progress-optional">{{step.optionalText}}</p>
				<span class="bx--progress-line"></span>
			</div>
		</li>
	</ul>
	`
            }] }
];
/** @nocollapse */
ProgressIndicator.ctorParameters = () => [
    { type: ExperimentalService }
];
ProgressIndicator.propDecorators = {
    steps: [{ type: Input }],
    orientation: [{ type: Input }],
    skeleton: [{ type: Input }],
    current: [{ type: Input }]
};
function ProgressIndicator_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressIndicator.prototype.steps;
    /** @type {?} */
    ProgressIndicator.prototype.orientation;
    /** @type {?} */
    ProgressIndicator.prototype.skeleton;
    /** @type {?} */
    ProgressIndicator.prototype.experimental;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJwcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQXVEL0QsTUFBTTs7OztJQTRDTCxZQUFzQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7MkJBakNMLFlBQVk7d0JBQzFDLEtBQUs7S0FnQ2tDOzs7OztJQTNDM0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFpQjs7UUFDckMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7SUFNRCxJQUFhLE9BQU87UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBQ0QsSUFBSSxPQUFPLENBQUMsT0FBZTtRQUMxQixJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUN0QztZQUNELE9BQU87U0FDUDtRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUNwQztZQUNELE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUNwQztRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQ3RDO0tBQ0Q7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztLQUN4Qzs7O1lBekZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQ1Q7YUFDRDs7OztZQXREUSxtQkFBbUI7OztvQkFpRTFCLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV4cGVyaW1lbnRhbFNlcnZpY2UgfSBmcm9tIFwiLi8uLi9leHBlcmltZW50YWwubW9kdWxlXCI7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSBcIi4vcHJvZ3Jlc3MtaW5kaWNhdG9yLXN0ZXAuaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvcHJvZ3Jlc3MtaW5kaWNhdG9yLS1iYXNpYylcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9cHJvZ3Jlc3MtaW5kaWNhdG9yLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tcHJvZ3Jlc3MtaW5kaWNhdG9yXCIsXG5cdHRlbXBsYXRlOiBgXG5cdDx1bFxuXHRcdGRhdGEtcHJvZ3Jlc3Ncblx0XHRkYXRhLXByb2dyZXNzLWN1cnJlbnRcblx0XHRjbGFzcz1cImJ4LS1wcm9ncmVzc1wiXG5cdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0J2J4LS1za2VsZXRvbic6IHNrZWxldG9uLFxuXHRcdFx0J2J4LS1wcm9ncmVzcy0tdmVydGljYWwnOiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpXG5cdFx0fVwiPlxuXHRcdDxsaVxuXHRcdFx0Y2xhc3M9XCJieC0tcHJvZ3Jlc3Mtc3RlcCBieC0tcHJvZ3Jlc3Mtc3RlcC0te3tzdGVwLnN0YXRlWzBdfX1cIlxuXHRcdFx0Km5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHNcIlxuXHRcdFx0W25nQ2xhc3NdPVwieydieC0tcHJvZ3Jlc3Mtc3RlcC0tZGlzYWJsZWQnIDogc3RlcC5kaXNhYmxlZH1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tcHJvZ3Jlc3Mtc3RlcC1idXR0b24gYngtLXByb2dyZXNzLXN0ZXAtYnV0dG9uLS11bmNsaWNrYWJsZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCI+XG5cdFx0XHRcdDxpYm0taWNvbi1jaGVja21hcmstb3V0bGluZTE2ICpuZ0lmPVwic3RlcC5zdGF0ZSA9PSAnY29tcGxldGUnXCI+PC9pYm0taWNvbi1jaGVja21hcmstb3V0bGluZTE2PlxuXHRcdFx0XHQ8c3ZnICpuZ0lmPVwic3RlcC5zdGF0ZSA9PSAnY3VycmVudCdcIj5cblx0XHRcdFx0XHQ8cGF0aCAqbmdJZj1cImlzRXhwZXJpbWVudGFsXCIgZD1cIk0gNywgNyBtIC03LCAwIGEgNyw3IDAgMSwwIDE0LDAgYSA3LDcgMCAxLDAgLTE0LDBcIiA+PC9wYXRoPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHN2ZyAqbmdJZj1cInN0ZXAuc3RhdGUgPT0gJ2luY29tcGxldGUnXCI+XG5cdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdCpuZ0lmPVwiaXNFeHBlcmltZW50YWxcIlxuXHRcdFx0XHRcdFx0ZD1cIk04IDFDNC4xIDEgMSA0LjEgMSA4czMuMSA3IDcgNyA3LTMuMSA3LTctMy4xLTctNy03em0wIDEzYy0zLjMgMC02LTIuNy02LTZzMi43LTYgNi02IDYgMi43IDYgNi0yLjcgNi02IDZ6XCI+XG5cdFx0XHRcdFx0PC9wYXRoPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PGlibS1pY29uLXdhcm5pbmcxNiAqbmdJZj1cInN0ZXAuc3RhdGUuaW5jbHVkZXMoJ2Vycm9yJylcIiBpbm5lckNsYXNzPVwiYngtLXByb2dyZXNzX193YXJuaW5nXCI+PC9pYm0taWNvbi13YXJuaW5nMTY+XG5cdFx0XHRcdDxwXG5cdFx0XHRcdFx0Y2xhc3M9XCJieC0tcHJvZ3Jlc3MtbGFiZWxcIlxuXHRcdFx0XHRcdCpuZ0lmPVwic3RlcC50b29sdGlwXCJcblx0XHRcdFx0XHRbaWJtVG9vbHRpcF09XCJzdGVwLnRvb2x0aXAuY29udGVudFwiXG5cdFx0XHRcdFx0W3RyaWdnZXJdPVwic3RlcC50b29sdGlwLnRyaWdnZXJcIlxuXHRcdFx0XHRcdFtwbGFjZW1lbnRdPVwic3RlcC50b29sdGlwLnBsYWNlbWVudFwiXG5cdFx0XHRcdFx0W3RpdGxlXT1cInN0ZXAudG9vbHRpcC50aXRsZVwiXG5cdFx0XHRcdFx0W2dhcF09XCJzdGVwLnRvb2x0aXAuZ2FwXCJcblx0XHRcdFx0XHRbYXBwZW5kSW5saW5lXT1cInN0ZXAudG9vbHRpcC5hcHBlbmRJbmxpbmVcIlxuXHRcdFx0XHRcdFtkYXRhXT1cInN0ZXAudG9vbHRpcC5kYXRhXCI+XG5cdFx0XHRcdFx0e3tzdGVwLnRleHR9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwiYngtLXByb2dyZXNzLWxhYmVsXCIgKm5nSWY9XCIhc3RlcC50b29sdGlwXCI+e3tzdGVwLnRleHR9fTwvcD5cblx0XHRcdFx0PHAgKm5nSWY9XCJzdGVwLm9wdGlvbmFsVGV4dFwiIGNsYXNzPVwiYngtLXByb2dyZXNzLW9wdGlvbmFsXCI+e3tzdGVwLm9wdGlvbmFsVGV4dH19PC9wPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ4LS1wcm9ncmVzcy1saW5lXCI+PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9saT5cblx0PC91bD5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0luZGljYXRvciB7XG5cdHN0YXRpYyBza2VsZXRvblN0ZXBzKHN0ZXBDb3VudDogbnVtYmVyKSB7XG5cdFx0Y29uc3Qgc3RlcHMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBDb3VudDsgaSsrKSB7XG5cdFx0XHRzdGVwcy5wdXNoKHtcInN0YXRlXCI6IFtcImluY29tcGxldGVcIl19KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RlcHM7XG5cdH1cblxuXHRASW5wdXQoKSBzdGVwczogQXJyYXk8U3RlcD47XG5cdEBJbnB1dCgpIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuc3RhdGUuaW5jbHVkZXMoXCJjdXJyZW50XCIpKTtcblx0fVxuXHRzZXQgY3VycmVudChjdXJyZW50OiBudW1iZXIpIHtcblx0XHRpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnQgPCAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zdGVwc1tpXS5zdGF0ZVswXSA9IFwiaW5jb21wbGV0ZVwiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChjdXJyZW50ID4gdGhpcy5zdGVwcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5zdGVwc1tpXS5zdGF0ZVswXSA9IFwiY29tcGxldGVcIjtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zdGVwc1tjdXJyZW50XS5zdGF0ZVswXSA9IFwiY3VycmVudFwiO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudDsgaSsrKSB7XG5cdFx0XHR0aGlzLnN0ZXBzW2ldLnN0YXRlWzBdID0gXCJjb21wbGV0ZVwiO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gY3VycmVudCArIDE7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnN0ZXBzW2ldLnN0YXRlWzBdID0gXCJpbmNvbXBsZXRlXCI7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlzRXhwZXJpbWVudGFsKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVyaW1lbnRhbC5pc0V4cGVyaW1lbnRhbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBleHBlcmltZW50YWw6IEV4cGVyaW1lbnRhbFNlcnZpY2UpIHt9XG59XG4iXX0=