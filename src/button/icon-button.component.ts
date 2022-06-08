import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	Renderer2,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { BaseIconButton } from "./base-icon-button.component";
import { ButtonSize, ButtonType } from "./button.types";

@Component({
	selector: "ibm-icon-button",
	template: `
	<ibm-tooltip
		class="cds--icon-tooltip"
		[description]="description"
		[disabled]="disabled"
		[caret]="caret"
		[dropShadow]="dropShadow"
		[highContrast]="highContrast"
		[isOpen]="isOpen"
		[align]="align"
		[enterDelayMs]="enterDelayMs"
		[leaveDelayMs]="leaveDelayMs"
		(click)="emitClickEvent($event, 'tooltip')">
		<button
			#button
			[id]="id"
			[disabled]="disabled"
			[attr.type]="type"
			[iconOnly]="true"
			[ngClass]="buttonNgClass"
			[ibmButton]="kind"
			[size]="size"
			[isExpressive]="isExpressive"
			(click)="emitClickEvent($event)"
			(focus)="focus.emit($event)"
			(blur)="blur.emit($event)">
			<ng-content></ng-content>
		</button>
	</ibm-tooltip>
	`
})
export class IconButton extends BaseIconButton {
	/**
	 * Pass global carbon classes to icon button
	 */
	@Input() set buttonNgClass(obj: { [key: string]: boolean }) {
		this.classList = Object.assign({ "cds--btn--disabled": this.disabled }, obj);
	}

	get buttonNgClass() {
		return this.classList;
	}

	/**
	 * @param obj: { [key: string]: string
	 * User can pass additional button attributes if component property does not already exist
	 * Key is the attribute name & value is the attribute value for the button
	 */
	@Input() set buttonAttributes(obj: { [key: string]: string }) {
		// Remove old attributes
		Object.keys(this.attributeList).forEach((key: string) => {
			this.renderer.removeAttribute(this.btn.nativeElement, key);
		});
		// Set new attributes
		Object.keys(obj).forEach((key: string) => {
			this.renderer.setAttribute(this.btn.nativeElement, key, obj[key]);
		});
		// Set new attributes
		this.attributeList = obj;
	}

	get buttonAttributes() {
		return this.buttonAttributes;
	}

	static iconButtonCounter = 0;

	@ViewChild("button") btn: ElementRef;

	/**
	 * Override id
	 */
	@Input() id = `icon-btn-${IconButton.iconButtonCounter++}`;
	/**
	 * Sets the button type.
	 */
	@Input() kind: ButtonType = "primary";
	/**
	 * Specify the size of the button.
	 */
	@Input() size: ButtonSize = "lg";
	/**
	 * Set button type, `button` by default
	 */
	@Input() type = "button";
	/**
	 * Set to `true` to make button expressive
	 */
	@Input() isExpressive = false;
	/**
	 * Set to `true` to disable button
	 */
	@Input() disabled = false;
	/**
	 * The string or template content to be exposed by the tooltip.
	 */
	@Input() description: string | TemplateRef<any>;

	/**
	 * Common button events
	 */
	@Output() click = new EventEmitter<Event>();
	@Output() focus = new EventEmitter<Event>();
	@Output() blur = new EventEmitter<Event>();
	/**
	 * Event to emit when click event is fired from tooltip
	 */
	@Output() tooltipClick = new EventEmitter<Event>();

	private classList: { [key: string]: boolean } = {};
	private attributeList: { [key: string]: string } = {};

	constructor(private renderer: Renderer2) {
		super();
	}

	/**
	 * Stop propogation of click event
	 * Else double fires (click) event
	 */
	emitClickEvent(event, element: "tooltip" | "button" = "button") {
		event.preventDefault();
		event.stopPropagation();
		// Prevents (click) event from bubbling since it would appear user clicked the `button`
		if (element === "tooltip") {
			this.tooltipClick.emit(event);
			return;
		}
		this.click.emit(event);
	}
}
