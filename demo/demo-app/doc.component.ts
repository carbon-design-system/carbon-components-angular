import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	OnChanges,
	AfterViewInit,
	ViewChild
} from "@angular/core";

import * as marked from "marked";

@Component({
	selector: "app-doc",
	template: `
		<div
			class="collapsable"
			[ngClass]="{
				expanded: open
			}">
			<span
				class="title"
				(click)="toggle()">
				docs
			</span>
			<div #content></div>
		</div>
	`,
	styles: [
		`
			.collapsable {
				height: 30px;
				border: 1px solid grey;
				overflow: hidden;
				padding: 5px;
				position: relative;
				margin-bottom: 10px;
			}

			.collapsable:before {
				content: "";
				display: block;
				position: absolute;
				width: 12px;
				height: 12px;
				border-right: 1px solid grey;
				border-top: 1px solid grey;
				transform: rotate(45deg);
				top: 8px;
				left: 5px;
			}

			.collapsable.expanded {
				height: 100%;
			}

			.collapsable.expanded:before {
				transform: rotate(135deg);
				top: 4px;
				left: 10px;
			}

			.collapsable .title {
				padding-left: 40px;
				display: inline-block;
				width: 100%;
			}
		`
	]
})
export class AppDoc implements OnChanges, AfterViewInit {
	@Input() content = "";
	@ViewChild("content") contentView;
	public open = false;

	constructor(private _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.content) {
			this.updateContent();
		}
	}

	ngAfterViewInit() {
		this.updateContent();
	}

	private updateContent() {
		if (this.contentView) {
			this.contentView.nativeElement.innerHTML = marked(this.content);
		}
	}

	public toggle() {
		this.open = !this.open;
	}
}
