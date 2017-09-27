import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	AfterViewInit,
	Injector,
	ElementRef,
	TemplateRef,
	HostListener,
	ViewChild
} from "@angular/core";
import { Dialog } from "./../dialog.component";
import { Observable } from "rxjs/Observable";
import position from "../../common/position.service";

@Component({
	selector: "n-tooltip",
	template: `
		<div
			class="tooltip--{{dialogConfig.placement}}"
			role="tooltip"
			id="{{dialogConfig.compID}}"
			tabindex="0"
			#dialog>
			<div
				*ngIf="contentTemplate"
				role="tooltip">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.content"
					[ngOutletContext]="{popover: this, filter: dialogConfig.filter}">
				</ng-template>
			</div>
			<p
				*ngIf="!contentTemplate"
				class="tooltip_text"
				role="tooltip">
				{{dialogConfig.content}}
			</p>
			<button
				*ngIf="dialogConfig.trigger==='click'"
				class="close--xs"
				(click)="onClose()"
				aria-label="Close Tooltip">
				<svg class="close_icon" width="10" height="10" viewBox="0 0 16 16">
					<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
				</svg>
			</button>
			<div class="arrow" aria-hidden="true"></div>
		</div>
		`,
	host: {
		style: "display: inline-block;"
	},
})
export class Tooltip extends Dialog {
	public contentTemplate: boolean;

	onDialogInit() {
		this.contentTemplate = this.dialogConfig.content instanceof TemplateRef;
	}
}
