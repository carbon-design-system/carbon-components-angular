import {
	Component,
	Input,
	Renderer,
	OnInit,
	Inject
} from "@angular/core";

import { DOCUMENT } from "@angular/platform-browser";


@Component({
	selector: "cdl-top-nav",
	template: `
	<nav class="top-nav" [ngStyle]="{'position':displayType}">
		<ng-content select="[hamburger]"></ng-content>
		<span class="top-nav-heading">
					<span> <h1 class="top-nav-brand"> IBM <strong>{{brand}}</strong> </h1> </span>
					<span class="top-nav-badge" *ngIf="badge"> {{badge}} </span>
		</span>
		<ng-content select="[links]"></ng-content>
		<ng-content select="[menu]"></ng-content>
		<span class="top-nav-ibm">
			<svg xmlns="http://www.w3.org/2000/svg" width="38" height="15" viewBox="0 0 38 15"><path class="st0" d="M0
			0h7v1H0zM0 2h7v1H0zM0 12h7v1H0zM0 14h7v1H0zM2 10h3v1H2zM2 8h3v1H2zM2 6h3v1H2zM2 4h3v1H2zM10 4h3v1h-3zM23 8h3v1h-3zM23
			10h3v1h-3zM21 12h5v1h-5zM33 12h5v1h-5zM33 14h5v1h-5zM21 14h5v1h-5zM33 8h3v1h-3zM33 10h3v1h-3zM10 10h3v1h-3zM26.3 0H21v1h5.7zM27.1
			2H21v1h6.5zM27.9 4H23v1h5.3zM28.7 6H23v1h6.1zM32.4 8h-5.8l.4 1h5zM27.4 10h4.2l-.4 1h-3.4zM28.2 12h2.6l-.4 1h-1.8zM29 14h1l-.4
			1h-.2zM32.6 0H38v1h-5.8zM31.8 2H38v1h-6.6zM31 4h5v1h-5.4zM30.2 6H36v1h-6.2zM15.5 15H8v-1h10.6c-.5.4-1.8 1-3.1 1zM19.9
			12H8v1h11.5c.2-.2.4-.7.4-1zM19.7 10h-3.3v1h3.5c.1-.3 0-.7-.2-1zM18.1 8H10v1h9.2c0-.2-.8-.9-1.1-1zM19.2 6H10v1h8.1c.3-.2.9-.6
			1.1-1zM19.9 4h-3.5v1h3.3c.1-.2.2-.6.2-1zM19.4 2H8v1h11.8c0-.3-.3-.8-.4-1zM8 0v1h10.5c-.3-.2-1.5-1-3.1-1H8z"/>
			</svg>
		</span>
	</nav>

	`,
	styleUrls: ["./top-nav.component.scss"]
})

export class TopNav implements OnInit {
	@Input() badge: string;
	@Input() brand: string;
	@Input() sticky: boolean;

	private displayType: string = "relative";

	constructor(@Inject(DOCUMENT) private document, private renderer: Renderer) {}

	ngOnInit() {
		const nav = this.document.querySelector(".top-nav");
		const navTop = nav.offsetTop;

		if (this.sticky) {
			this.renderer.listenGlobal("window", "scroll", (evt) => {

				if (window.scrollY >= navTop) {
					this.displayType = "fixed";
				} else if (window.scrollY <= navTop) {
					this.displayType = "relative";
				}
			});
		}
	}
}
