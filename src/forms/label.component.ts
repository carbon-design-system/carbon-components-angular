import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "n-label",
	// tslint:disable:max-line-length
	template: `
		<svg class="icon--sm valid--success" *ngIf="labelState === 'success'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path d="M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/><path d="M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z"/></svg>
		<svg class="icon--sm valid--warning" *ngIf="labelState === 'warning'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><g><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8S4.3 1.2 8 1.2s6.8 3.1 6.8 6.8-3.1 6.8-6.8 6.8z"></path><path d="M6.9 5.5l.6 4.5h1l.6-4.5V3H6.9z"></path><circle cx="8" cy="12" r="1"></circle></g></svg>
		<svg class="icon--sm valid--error" *ngIf="labelState === 'error'" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16"><path d="M6.9 7.5l.6 3.5h1l.6-3.5V5H6.9z"/><circle cx="8" cy="13" r="1"/><path d="M15.9 15.2L8.5 1.3C8.4 1.1 8.2 1 8 1s-.4.1-.5.3L.1 15.2c-.2.4 0 .8.5.8h14.9c.4 0 .6-.4.4-.8zm-14.3-.4L8 2.9l6.4 11.9H1.6z"/></svg>
		<ng-content select="label"></ng-content>
		<ng-content></ng-content>
	`
	// tslint:enable:max-line-length
})
export class LabelComponent implements OnInit {
	@Input() labelState: "success" | "warning" | "error" | "" = "";

	constructor() { }

	ngOnInit() { }
}
