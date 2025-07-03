import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	Output,
	QueryList,
	Renderer2,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef
} from "@angular/core";
import { Subscription } from "rxjs";
import {
	autoUpdate,
	computePosition,
	flip
} from "@floating-ui/dom";
import { ContextMenuItemComponent, ItemClickEvent } from "carbon-components-angular/context-menu";
import { Button, IconButton } from "carbon-components-angular/button";
import { IconDirective } from "carbon-components-angular/icon";
import { ContextMenuComponent } from "carbon-components-angular/context-menu";

type ComboButtonPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";

@Component({
	selector: "cds-combo-button",
	template: `
		<div class="cds--combo-button__primary-action" [attr.aria-owns]="open ? comboId : undefined">
			<button
				cdsButton="primary"
				[size]="size"
				[attr.title]="label"
				[disabled]="disabled"
				type="button"
				(click)="onActionClick($event)">
				{{label}}
			</button>
		</div>
		<cds-icon-button
			[buttonNgClass]="{ 'cds--combo-button__trigger': true }"
			[buttonAttributes]="{
				'aria-haspopup': true,
				'aria-expanded': open,
				'aria-controls': open ? comboId : undefined
			}"
			[size]="size"
			[description]="description"
			[disabled]="disabled"
			[autoAlign]="tooltipAutoAlign"
			[align]="tooltipPlacement"
			(click)="toggleMenu()">
			<svg
				cdsIcon="chevron--down"
				size="16">
			</svg>
		</cds-icon-button>

		<ng-template #menuTemplate>
			<cds-menu
				mode="basic"
				[size]="size"
				[open]="open"
				[attr.id]="comboId">
				<ng-content select="cds-menu-item, cds-menu-divider"></ng-content>
			</cds-menu>
		</ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [Button, IconButton, IconDirective, ContextMenuComponent]
})
export class ComboButtonComponent implements OnChanges, AfterViewInit, OnDestroy {
	static comboButtonCounter = 0;
	@Input() comboId = `combo-button-${ComboButtonComponent.comboButtonCounter++}`;

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

	@Input() size: "sm" | "md" | "lg" = "lg";
	@Input() label: string;
	@Input() disabled = false;
	@Input() menuAlignment: ComboButtonPlacement = "bottom";
	@Input() description: string;
	@Input() tooltipAutoAlign = false;
	@Input() tooltipPlacement = "bottom";
	@Input() @HostBinding("class.cds--combo-button__container--open") open = false;
	@Output() actionClick = new EventEmitter<Event>();
	@HostBinding("class.cds--combo-button__container") comboButtonContainer = true;
	@HostBinding("class.cds--combo-button__container--lg") get sizeLg() { return this.size === "lg"; }
	@HostBinding("class.cds--combo-button__container--md") get sizeMd() { return this.size === "md"; }
	@HostBinding("class.cds--combo-button__container--sm") get sizeSm() { return this.size === "sm"; }
	@HostBinding("attr.aria-owns") get ariaOwns() {
		return this.open ? this.comboId : undefined;
	}

	@ViewChild("menuTemplate") menuTemplate: TemplateRef<any>;

	protected documentClick = this.handleFocusOut.bind(this);
	protected unmountFloatingElement: Function;

	private subscriptions: Subscription[] = [];
	private _alignment: ComboButtonPlacement = "bottom";
	private menuRef: HTMLElement;

	constructor(
		protected ngZone: NgZone,
		protected renderer: Renderer2,
		protected hostElement: ElementRef,
		protected viewContainerRef: ViewContainerRef,
		protected changeDetectorRef: ChangeDetectorRef
	) { }


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
		if (this.open) {
			this.open = !this.open;
			this.toggleMenu();
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
			this.toggleMenu();
		}
	}



	/**
	 * On body click, close the menu
	 * @param event
	 */
	handleFocusOut(event) {
		if (!this.hostElement.nativeElement.contains(event.target)) {
			this.toggleMenu();
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
	 * On action click, notify user
	 * If the menu is open, close the menu
	 * @param event
	 */
	onActionClick(event: PointerEvent) {
		if (this.open) {
			this.toggleMenu();
		}
		this.actionClick.emit(event);
	}



	/**
	 * Handles emitting open/close event
	 */
	toggleMenu() {
		this.open = !this.open;
		if (this.open) {
			// Render the template & append to view
			const view = this.viewContainerRef.createEmbeddedView(this.menuTemplate);
			this.menuRef = document.body.appendChild(view.rootNodes[0] as HTMLElement);
			// Assign button width to the menu ref to align with button
			Object.assign(this.menuRef.style, {
				width: `${this.hostElement.nativeElement.clientWidth}px`,
				top: "0",
				left: "0"
			});

			// Reset & test alignment every open
			this.menuAlignment = this._alignment;

			document.addEventListener("click", this.documentClick);

			// Listen for events such as scrolling to keep menu aligned
			this.unmountFloatingElement = autoUpdate(
				this.hostElement.nativeElement,
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
		if (this.menuTemplate && this.hostElement) {
			// Run outside of angular zone to avoid unnecessary change detection and rely on floating-ui
			this.ngZone.runOutsideAngular(async () => {
				const { x, y, placement } = await computePosition(
					this.hostElement.nativeElement,
					this.menuRef,
					{
						placement: this.menuAlignment,
						strategy: "fixed",
						middleware: [
							flip({ crossAxis: false })
						]
					});

				this.menuAlignment = placement as ComboButtonPlacement;

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
