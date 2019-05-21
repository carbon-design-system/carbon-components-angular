import { Component, Input } from "@angular/core";
import { ListItem } from "../../dropdown/dropdown.module";
import { I18n } from "../../i18n/i18n.module";

@Component({
	selector: "ibm-sidenav-header",
	template: `
		<header class="bx--side-nav__header">
			<div class="bx--side-nav__icon">
				<ng-content select="[icon]"></ng-content>
			</div>
			<div class="bx--side-nav__details">
				<h2 class="bx--side-nav__title" [title]="title">{{title}}</h2>
				<div class="bx--side-nav__switcher">
					<label class="bx--assistive-text" [for]="switcherId">
						{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}
					</label>
					<select [id]="switcherId" class="bx--side-nav__select">
						<option class="bx--side-nav__option" disabled="" value="" selected="" hidden="">
							{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}
						</option>
						<option
							*ngFor="let option of options"
							class="bx--side-nav__option"
							[value]="(option.value ? option.value : option.content)">
							{{option.content}}
						</option>
					</select>
					<div class="bx--side-nav__switcher-chevron">
						<svg
							focusable="false"
							preserveAspectRatio="xMidYMid meet"
							style="will-change: transform;"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 32 32"
							aria-hidden="true">
							<path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path>
						</svg>
					</div>
				</div>
			</div>
		</header>
	`
})
export class SideNavHeader {
	@Input() title: string;
	@Input() options: ListItem[];
	public switcherId = "sidenav-switcher";

	constructor(public i18n: I18n) { }
}
