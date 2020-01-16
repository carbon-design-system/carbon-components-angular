import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";

import { I18n } from "../i18n/i18n.module";

@Component({
	selector: "ibm-expand-button",
	template: `
		<button
			class="bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand"
			(click)="toggle()"
			type="button">
			<span class="bx--snippet-btn--text">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>
			<ibm-icon-chevron-down16 class="bx--icon-chevron--down" [ariaLabel]="translations.SHOW_MORE_ICON"></ibm-icon-chevron-down16>
		</button>
	`
})
export class ExpandButton {
	@Input() translations = this.i18n.get().CODE_SNIPPET;

	@Input() ariaLabel: string;

	@Input() expanded = false;

	@Output() toggleExpansion: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(protected i18n: I18n) { }

	toggle() {
		this.expanded = !this.expanded;
		this.toggleExpansion.emit(this.expanded);
	}
}
