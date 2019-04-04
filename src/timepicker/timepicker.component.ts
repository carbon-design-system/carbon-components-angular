import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-timepicker",
	template: `
		<div class="bx--form-item">
			<div class="bx--time-picker">
				<div class="bx--time-picker__input">
					<div
						[ngClass]="{
							'bx--time-picker__select': true,
							'bx--select--inline': display === 'inline',
							'bx--select--light': theme === 'light',
							'bx--skeleton': skeleton
						}"
						class="bx--select">
						<label *ngIf="!skeleton" [attr.for]="id" class="bx--label">{{label}}</label>
						<input
							#select
							[placeholder]= "placeholder"
							[pattern]= "pattern"
							[attr.id]="id"
							[disabled]="disabled"
							maxlength="5"
							(change)="onChange($event)"
							class="bx--time-picker__input-field">

					</div>
				</div>
				<ng-content></ng-content>
			</div>
		</div>
	`
})
export class TimePicker {

	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static selectCount = 0;

	@Input() label;
	@Input() placeholder = "hh:mm";
	@Input() pattern = "(1[012]|[1-9]):[0-5][0-9](\s)?(?i)";
	@Input() id = `timepicker-${TimePicker.selectCount++}`;
	@Input() disabled = true;
}
