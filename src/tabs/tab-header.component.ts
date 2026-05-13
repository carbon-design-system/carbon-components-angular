import {
	AfterViewInit,
	Component,
	ElementRef,
	forwardRef,
	HostBinding,
	Input,
	ViewChild
} from "@angular/core";

import { TabHeaderBase } from "./tab-header.directive";

import { Tooltip } from "carbon-components-angular/tooltip";
import { NgClass, NgTemplateOutlet } from "@angular/common";

/**
 * Tab header with template for label, optional icon, secondary label, badge, and dismissable close.
 *
 * ```html
 * <cds-tab-header-group>
 *   <cds-tab-header [paneReference]="c1">Dashboard</cds-tab-header>
 *   <cds-tab-header [paneReference]="c2" [icon]="iconTpl" secondaryLabel="(1/4)">
 *     Monitoring
 *   </cds-tab-header>
 * </cds-tab-header-group>
 * <cds-tab #c1>...</cds-tab>
 * <cds-tab #c2>...</cds-tab>
 * ```
 */
@Component({
	selector: "cds-tab-header, ibm-tab-header",
	providers: [
		{ provide: TabHeaderBase, useExisting: forwardRef(() => TabHeaderComponent) }
	],
	template: `
		@if (iconOnly) {
			<cds-tooltip
				align="bottom"
				[autoAlign]="true"
				class="cds--icon-tooltip"
				[description]="iconLabel"
				[enterDelayMs]="enterDelayMs"
				[leaveDelayMs]="leaveDelayMs"
				[isOpen]="isTooltipOpen"
				[disabled]="disabled">
				<ng-container *ngTemplateOutlet="tabButtonTemplate" />
			</cds-tooltip>
		} @else {
			<ng-container *ngTemplateOutlet="tabButtonTemplate" />
		}

		<ng-template #tabButtonTemplate>
			<button
				#tabButton
				type="button"
				role="tab"
				class="cds--tabs__nav-item cds--tabs__nav-link"
				[ngClass]="{
					'cds--tabs__nav-item--selected': active,
					'cds--tabs__nav-item--disabled': disabled,
					'cds--tabs__nav-item--icon-only': iconOnly,
					'cds--tabs__nav-item--icon-only__20': iconOnly && iconSize === 'lg'
				}"
				[attr.aria-selected]="active"
				[attr.aria-disabled]="disabled"
				[attr.aria-controls]="paneReference?.id || null"
				[attr.aria-label]="iconOnly ? iconLabel : null"
				[attr.tabindex]="active ? 0 : -1"
				[attr.title]="resolvedTitle"
				[disabled]="disabled"
				(click)="onTabButtonClick()"
				(keydown)="onTabButtonKeyDown($event)">
				@if (iconOnly) {
					<ng-container [ngTemplateOutlet]="icon"></ng-container>
					@if (!disabled && badgeIndicator) {
						<span
							class="cds--badge-indicator"
							aria-hidden="true">
						</span>
					}
				} @else {
					<div class="cds--tabs__nav-item-label-wrapper">
						@if (dismissable && icon) {
							<div class="cds--tabs__nav-item--icon-left">
								<ng-container [ngTemplateOutlet]="icon"></ng-container>
							</div>
						}
						<span class="cds--tabs__nav-item-label">
							<ng-content></ng-content>
						</span>
						@if (!dismissable && icon) {
							<div class="cds--tabs__nav-item--icon">
								<ng-container [ngTemplateOutlet]="icon"></ng-container>
							</div>
						}
					</div>
					@if (secondaryLabel) {
						<div
							class="cds--tabs__nav-item-secondary-label"
							[attr.title]="secondaryLabel">
							{{ secondaryLabel }}
						</div>
					}
				}
			</button>
		</ng-template>
		@if (dismissable) {
			<div class="cds--tabs__nav-item--close">
				<button
					type="button"
					class="cds--tabs__nav-item--close-icon"
					[attr.tabindex]="-1"
					[attr.aria-disabled]="disabled"
					[attr.aria-hidden]="!(active && !disabled)"
					[ngClass]="{
						'cds--tabs__nav-item--close-icon--selected': active,
						'cds--tabs__nav-item--close-icon--disabled': disabled
					}"
					[disabled]="disabled"
					[attr.title]="closeButtonTitle"
					(click)="onClose($event)">
					<svg
						focusable="false"
						preserveAspectRatio="xMidYMid meet"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						width="16"
						height="16"
						viewBox="0 0 32 32"
						[attr.aria-label]="closeButtonAriaLabel"
						[attr.aria-hidden]="!(active && !disabled)">
						<path d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"></path>
					</svg>
				</button>
			</div>
		}
	`,
	imports: [Tooltip, NgClass, NgTemplateOutlet]
})
export class TabHeaderComponent extends TabHeaderBase implements AfterViewInit {
	/**
	 * Icon-only tab: set `icon` and `iconLabel`.
	 */
	@Input() iconOnly = false;
	/**
	 * Icon-only tabs: accessible name (`aria-label` / `title`).
	 */
	@Input() iconLabel: string;
	/**
	 * **Preview**: Icon-only tabs — show a notification dot on the icon.
	 */
	@Input() badgeIndicator = false;
	/**
	 * Icon-only tabs: icon size `default` (16px) or `lg` (20px); usually set on the parent group.
	 */
	@Input() iconSize: "default" | "lg" = "default";
	/**
	 * `aria-label` for the dismissable close button.
	 */
	@Input() closeButtonAriaLabel = "Press delete to remove tab";
	/**
	 * Icon-only tabs: tooltip show delay (ms).
	 */
	@Input() enterDelayMs: number;
	/**
	 * Icon-only tabs: tooltip hide delay (ms).
	 */
	@Input() leaveDelayMs: number;
	/**
	 * Icon-only tabs: open the tooltip on first render.
	 */
	@Input() isTooltipOpen = false;

	@HostBinding("style.display") displayContents = "contents";

	@ViewChild("tabButton") tabButton: ElementRef<HTMLButtonElement>;

	ngAfterViewInit() {
		// Mirror the deprecated directive's title-fallback behavior, but read
		// from the inner rendered button rather than the `display: contents` host.
		setTimeout(() => {
			if (!this.title && this.tabButton?.nativeElement) {
				const text = this.tabButton.nativeElement.textContent?.trim();
				if (text) {
					this.title = text;
				}
			}
		});
	}

	/**
	 * Focus the rendered tab button (not the host).
	 */
	focus() {
		this.tabButton?.nativeElement?.focus();
	}

	onTabButtonClick() {
		this.selectTab();
	}

	/**
	 * `Delete` closes dismissable tabs when focus is on the tab.
	 */
	onTabButtonKeyDown(event: KeyboardEvent) {
		if (this.dismissable && event.key === "Delete") {
			event.stopPropagation();
			this.tabClose.emit();
		}
	}

	/**
	 * Close button click; stops propagation so the tab does not activate.
	 */
	onClose(event: Event) {
		event.stopPropagation();
		if (this.disabled) {
			return;
		}
		this.tabClose.emit();
	}

	get resolvedTitle(): string | null {
		if (this.iconOnly) {
			return this.iconLabel || null;
		}
		return this.title || null;
	}

	get closeButtonTitle(): string {
		const label = this.tabButton?.nativeElement?.textContent?.trim();
		return label ? `Remove ${label} tab` : "Remove tab";
	}
}
