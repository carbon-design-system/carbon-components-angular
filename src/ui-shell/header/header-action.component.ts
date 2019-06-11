import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "ibm-header-action",
	template: `
		<button
			class="bx--header__action"
			[ngClass]="{
				'bx--header__action--active': active
			}"
			[attr.aria-label]="title"
			[title]="title"
			(click)="onClick()">
			<ng-content></ng-content>
			<svg ibmIconClose20 class="bx--navigation-menu-panel-collapse-icon"></svg>
		</button>
	`
})
export class HeaderAction {
	@Input() title = "";
	@Input() active = false;
	@Output() selected = new EventEmitter<boolean>();

	onClick() {
		this.active = !this.active;
		this.selected.emit(this.active);
	}
}
