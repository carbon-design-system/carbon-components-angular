import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	forwardRef,
	HostBinding,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	QueryList,
	Renderer2,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef
} from "@angular/core";

import {
	autoUpdate,
	computePosition,
	flip
} from "@floating-ui/dom";
import { ContextMenuItemComponent, ItemClickEvent } from "carbon-components-angular/context-menu";
import { Subscription } from "rxjs";

type MenuButtonPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";
@Component({
	selector: "cds-menu-button",
	template: `
		<button
			#reference
			class="cds--menu-button__trigger"
			[ngClass]="{'cds--menu-button__trigger--open': isMenuOpen}"
			[cdsButton]="kind"
			[size]="size"
			[attr.tabindex]="buttonTabIndex"
			[disabled]="disabled"
			type="button"
			[attr.aria-haspopup]="true"
			[attr.aria-expanded]="isMenuOpen"
			[attr.aria-controls]=""
			(click)="handleChange()">
			{{label}}
			<svg
				cdsIcon="chevron--down"
				size="16"
				class="cds--btn__icon">
			</svg>
		</button>
		<ng-template #menuTemplate>
			<cds-menu
				mode="basic"
				[size]="size"
				[open]="isMenuOpen"
				[ngClass]="{
					'cds--menu-button__bottom': this.menuAlignment === 'bottom',
					'cds--menu-button__bottom-start': this.menuAlignment === 'bottom-start',
					'cds--menu-button__bottom-end': this.menuAlignment === 'bottom-end',
					'cds--menu-top': this.menuAlignment === 'top',
					'cds--menu-top-start': this.menuAlignment === 'top-start',
					'cds--menu-top-end': this.menuAlignment === 'top-end'
				}">
				<ng-content></ng-content>
			</cds-menu>
		</ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuButtonComponent implements OnChanges, AfterViewInit, OnDestroy {
	// Listen for click & determine if menu should close
	@ContentChildren(ContextMenuItemComponent) set projectedMenuItems(itemList: QueryList<ContextMenuItemComponent>) {
		// Reset in case user dynamically updates menu item
		this.subscriptions.forEach((sub) => sub?.unsubscribe());
		this.subscriptions = [];
		itemList.forEach((item) => {
			this.subscriptions.push(
				item.itemClick.subscribe((clickEvent) => this.handleMenuItemClick(clickEvent))
			);
		});
	}

	@HostBinding("class.cds--menu-button__container") containerClass = true;

	@Input() kind: "primary" | "tertiary" | "ghost" = "primary";
	@Input() size: "sm" | "md" | "lg" = "lg";
	@Input() menuAlignment: MenuButtonPlacement = "bottom";
	@Input() buttonTabIndex: "0" | "1" | "-1" | string = "0";
	@Input() disabled = false;
	@Input() isMenuOpen = false;
	@Input() label: string;

	@ViewChild("reference", { static: true }) referenceElement: ElementRef<HTMLButtonElement>;
	@ViewChild("menuTemplate") menuTemplate: TemplateRef<any>;

	protected documentClick = this.handleFocusOut.bind(this);
	protected unmountFloatingElement: Function;

	private subscriptions: Subscription[] = [];
	private _alignment: MenuButtonPlacement = "bottom";
	private menuRef: HTMLElement;

	constructor(
		protected ngZone: NgZone,
		protected renderer: Renderer2,
		protected hostElement: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected changeDetectorRef: ChangeDetectorRef
	) {}


	/**
	 * In case user updates alignment, store initial value.
	 * This allows us to test user passed alignment on each open
	 */
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.menuAlignment) {
			this._alignment = changes.menuAlignment.currentValue;
		}
	}



	/**
	 * If user has passed in true for open, we dynamically open the menu
	 */
	ngAfterViewInit(): void {
		if (this.isMenuOpen) {
			this.isMenuOpen = !this.isMenuOpen;
			this.handleChange();
		}
	}



	/**
	* Clean up Floating-ui & subscriptions
	*/
	ngOnDestroy(): void {
		this.cleanUp();
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}


	/**
	 * As of now, menu button does not support nexted menu, on button click it should close
	 */
	handleMenuItemClick(event: ItemClickEvent) {
		// If event is not type radio/checkbox, we close the menu
		if (!event.type) {
			this.handleChange();
		}
	}



	/**
	 * On body click, close the menu
	 * @param event
	 */
	handleFocusOut(event) {
		if (!this.hostElement.nativeElement.contains(event.target)) {
			this.handleChange();
		}
	}



	/**
	 * Clean up `autoUpdate` if auto alignment is enabled
	 */
	cleanUp() {
		document.removeEventListener("click", this.documentClick);
		if (this.unmountFloatingElement) {
			this.menuRef.remove();
			this.viewContainerRef.clear();
			this.unmountFloatingElement();
		}
		this.unmountFloatingElement = undefined;
		// On all instances of menu closing, make sure icon direction is correct
		this.changeDetectorRef.markForCheck();
	}



	/**
	 * Handles emitting open/close event
	 */
	handleChange() {
		this.isMenuOpen = !this.isMenuOpen;
		if (this.isMenuOpen) {
			// Render the template & append to view
			const view = this.viewContainerRef.createEmbeddedView(this.menuTemplate);
			this.menuRef = document.body.appendChild(view.rootNodes[0] as HTMLElement);
			// Assign button width to the menu ref to align with button
			Object.assign(this.menuRef.style, {
				width: `${this.referenceElement.nativeElement.clientWidth}px`,
				top: "0",
				left: "0"
			});

			// Reset & test alignment every open
			this.menuAlignment = this._alignment;

			document.addEventListener("click", this.documentClick);

			// Listen for events such as scrolling to keep menu aligned
			this.unmountFloatingElement = autoUpdate(
				this.referenceElement.nativeElement,
				this.menuRef,
				this.recomputePosition.bind(this)
			);
		} else {
			this.cleanUp();
		}
	}



	roundByDPR(value) {
		const dpr = window.devicePixelRatio || 1;
		return Math.round(value * dpr) / dpr;
	}



	/**
	 * Compute position of menu
	 */
	recomputePosition() {
		if (this.menuTemplate && this.referenceElement) {
			// Run outside of angular zone to avoid unnecessary change detection and rely on floating-ui
			this.ngZone.runOutsideAngular(async () => {
				const { x, y, placement } = await computePosition(
					this.referenceElement.nativeElement,
					this.menuRef,
					{
						placement: this.menuAlignment,
						strategy: "fixed",
						middleware: [
							flip({ crossAxis: false })
						]
					});

				this.menuAlignment = placement as MenuButtonPlacement;

				// Using CSSOM to manipulate CSS to avoid content security policy inline-src
				// https://github.com/w3c/webappsec-csp/issues/212
				Object.assign(this.menuRef.style, {
					position: "fixed",
					// Using transform instead of top/left position to improve performance
					transform: `translate(${this.roundByDPR(x)}px,${this.roundByDPR(y)}px)`
				});
				this.changeDetectorRef.markForCheck();
			});
		}
	}
}
