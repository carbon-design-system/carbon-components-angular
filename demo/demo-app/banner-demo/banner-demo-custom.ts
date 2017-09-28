import {
	Component,
	Output,
	EventEmitter,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "n-banner-custom",
	template: `
	<div class="banner banner--{{bannerObj.type}}" role="alert">
		<span class="icon--lg" aria-hidden="true">
			<svg width="30px"
				height="30px"
				viewBox="0 0 30 30">
				<polygon points="17,13 12,13 12,15 14,15 14,21 12,21 12,23 19,23 19,21 17,21 "/>
				<circle cx="15" cy="9" r="2"/>
				<path d="M15,1C7.3,1,1,7.3,1,15s6.3,14,14,14s14-6.3,14-14S22.7,1,15,1z M15,27C8.4,27,3,21.6,3,15S8.4,3,15,3
				s12,5.4,12,12S21.6,27,15,27z"/>
			</svg>
		</span>
		<p>{{bannerObj.message}}
		- This is a custom banner component you can pass in.
		<a href="http://www.ibm.com/ca-en/" target="_blank">click me to visit IBM</a></p>
		<button class="close--dark-sm" (click)="onClose()" aria-label="Close alert banner">
			<svg
				class="close_icon"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path d="M14.5 2.6l-1.1-1.1L8 6.9 2.6 1.5 1.5 2.6 6.9 8l-5.4 5.4 1.1 1.1L8 9.1l5.4 5.4 1.1-1.1L9.1 8z"/>
			</svg>
		</button>
	</div>
		`
})
export class BannerCustom {
	bannerObj: Object = {};

	@Output() close: EventEmitter<any> = new EventEmitter();

	onClose() {
		this.close.emit();
	}
}
