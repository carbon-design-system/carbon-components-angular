import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-select",
	template: `
		<div class="bx--form-item">
			<div class="bx--select"
				[ngClass]="{ 'bx--select--inline': inlineSelect }">
				<label [attr.for]="id" class="bx--label">{{label}}</label>
				<select [attr.id]="id" class="bx--select-input">
					<ng-content></ng-content>
				</select>
				<svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5">
				<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
				</svg>
			</div>
		</div>
	`
})
export class Select {
	static selectCount = 0;
	@Input() inlineSelect = false;
	@Input() label = "Select label";
	@Input() id = `select-${Select.selectCount++}`;
}
