import {
	Component,
	Input,
	ElementRef,
	OnInit,
	OnDestroy
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * @Ignore
 * Documentation component that is no longer used as we switch from typedoc to compodoc.
 * Keeping component for documentation specific use cases.
 */
@Component({
	selector: "cds-documentation",
	template: `
		<iframe
			id="docsIframe"
			style="width: 100vw; height: 100vh;"
			(load)="onLoad()"
			[src]="src">
		</iframe>
	`
})
export class Documentation implements OnInit, OnDestroy {
	@Input() set src(src: string) {
		this._src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
	}
	get src() {
		return this._src;
	}

	protected _src;

	constructor(protected elementRef: ElementRef, protected sanitizer: DomSanitizer) {}

	ngOnInit() {
		document.querySelector("html").style.overflow = "hidden";
		document.querySelector(".sb-show-main").classList.add("full-page");
	}
	ngOnDestroy() {
		document.querySelector("html").style.overflow = "auto";
		document.querySelector(".sb-show-main").classList.remove("full-page");
	}

	onLoad() {
		const docsIframe = this.elementRef.nativeElement.querySelector("#docsIframe");
		const docsDocument = docsIframe.contentDocument || docsIframe.contentWindow.document;
		const docsBody = docsDocument.querySelector("body");

		const mainContent = docsBody.querySelector(".content");
		mainContent.style.width = "100%";
		mainContent.style.left = 0;

		const menuContent = docsBody.querySelector(".hidden-xs.menu");
		menuContent.style.display = "none";
	}
}
