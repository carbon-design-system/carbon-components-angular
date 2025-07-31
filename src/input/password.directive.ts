import {
	Directive,
	HostBinding,
	Input,
	Renderer2,
	ElementRef,
	AfterViewInit
} from "@angular/core";

@Directive({
	selector: "[cdsPassword], [ibmPassword]",
	standalone: true
})
export class PasswordInput implements AfterViewInit {

	@Input() set type(type: string) {
		if (type) {
			this._type = type;
			if (this.elementRef) {
				this.renderer.setAttribute(this.elementRef.nativeElement, "type", this._type);
			}
		}
	}
	@HostBinding("class.cds--password-input") passwordInputClass = true;

	/**
	 * @todo - remove `cds--text-input--${size}` classes in v12
	 */
	@HostBinding("class.cds--text-input--sm") get isSizeSm() {
		return this.size === "sm";
	}
	@HostBinding("class.cds--text-input--md") get isSizeMd() {
		return this.size === "md";
	}
	@HostBinding("class.cds--text-input--lg") get isSizelg() {
		return this.size === "lg";
	}

	// Size
	@HostBinding("class.cds--layout--size-sm") get sizeSm() {
		return this.size === "sm";
	}
	@HostBinding("class.cds--layout--size-md") get sizeMd() {
		return this.size === "md";
	}
	@HostBinding("class.cds--layout--size-lg") get sizelg() {
		return this.size === "lg";
	}
	@HostBinding("class.cds--text-input--light") get isLightTheme() {
		return this.theme === "light";
	}

	@HostBinding("class.cds--text-input") inputClass = true;
	@HostBinding("class.cds--text-input--invalid") @Input() invalid = false;
	@HostBinding("class.cds--text-input--warning") @Input() warn = false;
	@HostBinding("class.cds--skeleton") @Input() skeleton = false;

	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` input theme
	 */
	@Input() theme: "light" | "dark" = "dark";

	/**
	 * Input field render size
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	@HostBinding("attr.data-invalid") get getInvalidAttribute() {
		return this.invalid ? true : undefined;
	}

	private _type = "password";

	constructor(protected elementRef: ElementRef, protected renderer: Renderer2) { }

	ngAfterViewInit(): void {
		this.renderer.setAttribute(this.elementRef.nativeElement, "type", this._type);
	}
}
