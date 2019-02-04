import { Component, Input, HostBinding } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";

@Component({
	selector: "ibm-header",
	template: `
		<header
			class="bx--header"
			role="banner"
			[attr.aria-label]="brand + ' ' + name">
			<a
				class="bx--skip-to-content"
				[href]="skipTo"
				tabindex="0">
				{{ i18n.get("UI_SHELL.SKIP_TO") | async }}
			</a>
			<button
				class="bx--header__menu-trigger bx--header__action"
				[attr.aria-label]="i18n.get('UI_SHELL.HEADER.MENU') | async"
				[attr.title]="i18n.get('UI_SHELL.HEADER.MENU') | async">
				<svg aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
					<path d="M4 6h24v2H4zm0 18h24v2H4zm0-9h24v2H4z" />
				</svg>
			</button>
			<a class="bx--header__name" href="#">
				<span class="bx--header__name--prefix">{{brand}}&nbsp;</span>
				{{name}}
			</a>
			<ng-content></ng-content>
		</header>
	`
})
export class Header {
	@Input() skipTo: string;
	@Input() name: string;
	@Input() brand = "IBM";

	@HostBinding("class.bx--header") hostClass = true;

	constructor(public i18n: I18n) { }
}
