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
			<ng-content select="ibm-hamburger"></ng-content>
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
