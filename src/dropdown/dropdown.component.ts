import {
	Component,
	OnDestroy,
	Input,
	ElementRef,
	Renderer,
	ViewEncapsulation,
	ContentChild,
	ViewChild,
	AfterContentInit,
	HostListener
} from "@angular/core";

import { View } from "./../common/view.class";
import { KeyCodes } from "./../constant/keys";

@Component({
	selector: "cdl-dropdown",
	template: `
		<button 
			#dropdownHost
			class="dropdown-value {{size}}" 
			(click)="openMenu()" 
			[disabled]="disabled">
			{{displayValue}}
			<span [class.divider]="isSplit"></span>
			<span class="dropdown-icon" [class.open]="!menuIsClose">
				<svg
					xmlns="http://www.w3.org/2000/svg" 
					width="16" 
					height="16" 
					viewBox="0 0 16 16">
					<path d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
				</svg>
			</span>
		</button>
		<div 
			class="dropdown-menu {{size}} {{type}}" 
			[class.open]="!menuIsClose">
			<ng-content></ng-content>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ["./dropdown.component.scss"],
	host: {"class": "dropdown-wrapper"},
})
export class Dropdown implements OnDestroy, AfterContentInit {
	private text: string;
	private clickInsideComp = false;
	private listenFn: Function;
	private globalListenFn: Function;
	private menuIsClose: boolean = true;
	private prevSelectItem: any;

	@Input() displayValue: string = "";
	@Input() size: "sm" | "default" | "lg" = "default";
	@Input() disabled: boolean = false;
	@Input() selectedVal: any;
	@Input() isSplit: boolean = false;
	@Input() closeOnSelect: boolean = true;
	@Input() multiSelect: boolean = false;

	@ContentChild(View) view;
	@ViewChild("dropdownHost") rootButton;

	constructor(private _elementRef: ElementRef, _renderer: Renderer) {
		// Check for click event outside of the component
		this.listenFn = _renderer.listen(_elementRef.nativeElement, "click", (event) => {
			this.clickInsideComp = true;
		});

		this.globalListenFn = _renderer.listenGlobal("document", "click", (event) => {
			if (!this.clickInsideComp && !this.menuIsClose) {
				this.menuIsClose = true;
			}

			this.clickInsideComp = false;
		});
		// End check for click event outside of the component
	}

	@HostListener("keydown", ["$event"])
	onKeyDown(ev) {
		if (ev.which === KeyCodes.ESCAPE) {
			this.menuIsClose = true;
			this.rootButton.nativeElement.focus();
		}
	}

	ngAfterContentInit() {
		this.view.select.subscribe(ev => {
			if (this.closeOnSelect) {
				this.menuIsClose = true;
				this.rootButton.nativeElement.focus();
			}

			if (!this.multiSelect && this.prevSelectItem && ev.item !== this.prevSelectItem) {
				this.prevSelectItem.selected = false;
			}

			this.prevSelectItem = ev.item;
		});
	}

	ngOnDestroy() {
		this.listenFn();
		this.globalListenFn();
	}

	private openMenu() {
		this.menuIsClose = !this.menuIsClose;
	}
}
