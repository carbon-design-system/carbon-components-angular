import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { Component } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { BannerModule, BannerService } from "../";


@Component({
	selector: "app-banner-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="showBanner()">Show info banner</button>
		<div class="banner-container"></div>
	`,
	providers: [BannerService]
})
class BannnerStory {

	constructor(private bannerService: BannerService) { }

	showBanner() {
		this.bannerService.showBanner({
			type: "info",
			title: "Sample banner",
			message: "Sample info message",
			target: ".banner-container"
		});
	}
}

storiesOf("Banner", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				BannnerStory
			],
			imports: [
				BannerModule,
				TranslateModule.forRoot()
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-banner [bannerObj]="{type: 'error', title: 'Sample banner', message: 'Sample error message'}"></ibm-banner>
			<ibm-banner [bannerObj]="{type: 'info', title: 'Sample banner', message: 'Sample info message'}"></ibm-banner>
			<ibm-banner [bannerObj]="{type: 'success', title: 'Sample banner', message: 'Sample success message'}"></ibm-banner>
			<ibm-banner [bannerObj]="{type: 'warning', title: 'Sample banner', message: 'Sample warning message'}"></ibm-banner>
		`
	}))
	.add("Dynamic", () => ({
		template: `
			<app-banner-story></app-banner-story>
		`
	}))
	.add("Toast", () => ({
		template: `
			<h4>Coming soon</h4>
			<em>Teaser ...</em>
			<div class="bx--toast-notification bx--toast-notification--info" role="alert">
				<div class="bx--toast-notification__details">
					<h3 class="bx--toast-notification__title">Notification title</h3>
					<p class="bx--toast-notification__subtitle">Subtitle text goes here.</p>
					<p class="bx--toast-notification__caption">Time stamp [00:00:00]</p>
				</div>
				<button class="bx--toast-notification__close-button" type="button">
					<svg
						class="bx--toast-notification-icon"
						aria-label="close"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z" fill-rule="nonzero"/>
					</svg>
				</button>
			</div>
		`
	}));
