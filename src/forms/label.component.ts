import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "cdl-label",
	// tslint:disable:max-line-length
	template: `
	<label class="label">
		<div class="label-top">
			<svg class="label-icon label-icon-success" *ngIf="labelState === 'success'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/><path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/></svg>
			<svg class="label-icon label-icon-warning" *ngIf="labelState === 'warning'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path d="M8 15.4C3.9 15.4.6 12.1.6 8 .6 3.9 3.9.6 8 .6c4.1 0 7.4 3.3 7.4 7.4 0 4.1-3.3 7.4-7.4 7.4zm-.8-4.8c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2s2-.9 2-2c0-.8-.5-1.5-1.2-1.8h.5L9.7 6V2.4H6.3v3.5l.4 4.7h.5z"/><path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.3-2.3 6-5.4 6.7.7-.5 1.2-1.3 1.2-2.2 0-.7-.3-1.4-.8-1.8v-.5l.5-4.2V1.8H5.7V6.1l.4 4.1v.5c-.5.5-.8 1.1-.8 1.8 0 .9.5 1.8 1.2 2.2-3-.7-5.3-3.4-5.3-6.7 0-3.7 3.1-6.8 6.8-6.8M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.7 10l-.4-4.1V3H9v2.9L8.7 10H7.3zm.7 3.9c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .7-.6 1.4-1.4 1.4z"/></svg>
			<svg class="label-icon label-icon-error" *ngIf="labelState === 'error'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path d="M6.9 7.5l.6 3.5h1l.6-3.5V5H6.9z"/><circle cx="8" cy="13" r="1"/><path d="M15.9 15.2L8.5 1.3C8.4 1.1 8.2 1 8 1s-.4.1-.5.3L.1 15.2c-.2.4 0 .8.5.8h14.9c.4 0 .6-.4.4-.8zm-14.3-.4L8 2.9l6.4 11.9H1.6z"/></svg>
			<ng-content select="[label]"></ng-content>
		</div>
		<ng-content></ng-content>
	</label>
	`
	// tslint:enable:max-line-length
})
export class LabelComponent implements OnInit {
	@Input() labelState: "success" | "warning" | "error" | "";

	constructor() { }

	ngOnInit() { }
}
