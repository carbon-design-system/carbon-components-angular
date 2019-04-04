import {
	Component,
	ElementRef,
	HostBinding,
	Input,
	OnChanges,
	OnInit,
	AfterViewInit
} from "@angular/core";
import { IconService } from "./icon.service";
import { Subscription } from "rxjs";
import { SizeMap } from "./icon.types";

/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
@Component({
	selector: "ibm-icon",
	template: "",
	providers: [IconService]
})
export class Icon implements AfterViewInit {
	/** follows the naming convention found in the icon listing on the demo page */
	@Input() icon: string;
	/** accepts color strings */
	@Input() color: "blue" | "light" | "dark" | "white" = "dark";
	/** accepts abbreviated size strings */
	@Input() size: "xs" | "sm" | "md" | "lg" = "md";

	/** map size strings to numeric values */
	protected sizeMap: SizeMap = {
		"xs": 14,
		"sm": 16,
		"md": 20,
		"lg": 30
	};

	/**
	 * Pass down `classList` from host element.
	 */
	get classList(): any {
		return this.elementRef.nativeElement.classList;
	}

	protected spriteLoadingSubscription: Subscription = null;

	/**
	 * Initialize the component
	 *
	 * @param {ElementRef} elementRef
	 */
	constructor(protected elementRef: ElementRef, protected iconService: IconService) {}

	ngAfterViewInit() {
		const root: HTMLElement = this.elementRef.nativeElement;
		const iconPromise = this.iconService.getIcon(this.icon, this.sizeMap[this.size]);
		iconPromise.then(icon => {
			root.innerHTML = "";
			icon.classList.add(this.buildMatterClass());
			if (this.classList.toString() !== "") {
				for (const className of this.classList) {
					icon.classList.add(className);
				}
			}
			root.appendChild(icon);
		});
	}

	/**
	 * Create a class name based on @Input() `color` and `size`.
	 */
	public buildMatterClass(): string {
		if (this.color === "dark" && this.size !== "md") {
			return `icon--${this.size}`;
		} else {
			return `icon${this.color !== "dark" ? `--${this.color}` : ""}${this.color !== "dark" && this.size !== "md" ? `-${this.size}` : ""}`;
		}
	}
}
