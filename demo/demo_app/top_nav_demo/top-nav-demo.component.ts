import { Component, OnInit} from "@angular/core";


@Component({
	selector: "top-nav-demo",
	// disable warning for max-line-length in template because of the svgs
	// tslint:disable:max-line-length
	template: `
	<h1>Top Nav Demo</h1>

	<h3>Default Top-nav</h3>
	<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge"></cdl-top-nav>

	<h3>Top-nav with hamburger and nav links</h3>
	<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="false">
		<cdl-hamburger hamburger></cdl-hamburger>
		<ul class="top-nav-links fr" menu>
			<li>
				<a class="top-nav-link-item" href="#">
					<div class="menu-icon">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
						<path class="st0" d="M10,20c1.1,0,2-0.9,2-2H8C8,19.1,8.9,20,10,20z"/>
						<path class="st0" d="M17.5,14c-0.8,0-1.5-0.7-1.5-1.5V8c0-3-2.2-5.4-5-5.9V1c0-0.5-0.5-1-1-1S9,0.5,9,1v1.1C6.2,2.6,4,5,4,8v4.5
							C4,13.3,3.3,14,2.5,14C1.7,14,1,14.7,1,15.5S1.7,17,2.5,17H10h7.5c0.8,0,1.5-0.7,1.5-1.5S18.3,14,17.5,14z M17.5,15.9H10H2.5
							c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c1.4,0,2.6-1.2,2.6-2.6V8c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9v4.5
							c0,1.4,1.2,2.6,2.6,2.6c0.2,0,0.4,0.2,0.4,0.4C17.9,15.7,17.7,15.9,17.5,15.9z"/>
						</svg>
					</div>
					Notifications
				</a>
			</li>
			<li>
				<a class="top-nav-link-item" href="#">
					<div class="menu-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<path d="M10 2.9c-2.5 0-4.5 2-4.5 4.5S7.5 12 10 12s4.5-2 4.5-4.5-2-4.6-4.5-4.6zm0 7.9c-1.8 0-3.3-1.5-3.3-3.3S8.2 4.1 10 4.1s3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z"/>
							<path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm6 16.4v-1.5c0-1-.9-1.9-2-1.9H6c-1.1 0-2 .9-2 1.9v1.5c-1.7-1.6-2.8-3.9-2.8-6.4 0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 2.5-1.1 4.8-2.8 6.4z"/>
						</svg>
					</div>
					Sam
					<div class="chevron-down">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path class="st0" d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
						</svg>
					</div>
				</a>
			</li>
			<li>
				<a class="top-nav-link-item" href="#">
					<div class="menu-icon">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<path class="st0" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.8c-4.9 0-8.8-3.9-8.8-8.8S5.1 1.2 10 1.2s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/>
							<path class="st0" d="M10 3.9c-1.1 0-2 .3-2.7.9-.6.6-1 1.5-1.2 2.6v.1l1.7.2v-.1c.1-.8.4-1.4.8-1.8.4-.3.9-.5 1.4-.5.6 0 1.1.2 1.5.6.4.4.6.9.6 1.4 0 .3-.1.6-.2.8-.1.3-.5.6-.9 1-.5.4-.8.8-1 1-.3.3-.5.7-.6 1-.2.4-.2.8-.2 1.3v.5h1.6v-.1c0-.6 0-.8.1-1.1.1-.2.2-.5.3-.7.1-.2.4-.5.9-.9.7-.6 1.2-1.2 1.4-1.6.2-.4.4-.9.4-1.5 0-.9-.4-1.7-1.1-2.4-.7-.4-1.6-.7-2.8-.7zM9.1 14.4h1.7v1.7H9.1z"/>
						</svg>
					</div>
					Help
					<div class="chevron-down">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path class="st0" d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
						</svg>
					</div>
				</a>
			</li>
		</ul>
	</cdl-top-nav>

	<h3>Top Nav without hamburger menu</h3>
	<cdl-top-nav [brand]="topNavBrand" [sticky]="false">
		<ul class="top-nav-links fl" links>
			<li>
				<a class="top-nav-link-item">
					Dashboard
				</a>
			</li>
			<li>
				<a class="top-nav-link-item">
					Reports
				</a>
			</li>
			<li>
				<a class="top-nav-link-item">
					Help
				</a>
			</li>
		</ul>
		<ul class="top-nav-links fr" menu>
			<li >
				<a class="top-nav-link-item">
					<div class="menu-icon">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
						<path class="st0" d="M10,20c1.1,0,2-0.9,2-2H8C8,19.1,8.9,20,10,20z"/>
						<path class="st0" d="M17.5,14c-0.8,0-1.5-0.7-1.5-1.5V8c0-3-2.2-5.4-5-5.9V1c0-0.5-0.5-1-1-1S9,0.5,9,1v1.1C6.2,2.6,4,5,4,8v4.5
							C4,13.3,3.3,14,2.5,14C1.7,14,1,14.7,1,15.5S1.7,17,2.5,17H10h7.5c0.8,0,1.5-0.7,1.5-1.5S18.3,14,17.5,14z M17.5,15.9H10H2.5
							c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c1.4,0,2.6-1.2,2.6-2.6V8c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9v4.5
							c0,1.4,1.2,2.6,2.6,2.6c0.2,0,0.4,0.2,0.4,0.4C17.9,15.7,17.7,15.9,17.5,15.9z"/>
						</svg>
					</div>
					Notifications
				</a>
			</li>
			<li >
				<a class="top-nav-link-item">
					<div class="menu-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<path d="M10 2.9c-2.5 0-4.5 2-4.5 4.5S7.5 12 10 12s4.5-2 4.5-4.5-2-4.6-4.5-4.6zm0 7.9c-1.8 0-3.3-1.5-3.3-3.3S8.2 4.1 10 4.1s3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z"/>
							<path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm6 16.4v-1.5c0-1-.9-1.9-2-1.9H6c-1.1 0-2 .9-2 1.9v1.5c-1.7-1.6-2.8-3.9-2.8-6.4 0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 2.5-1.1 4.8-2.8 6.4z"/>
						</svg>
					</div>
					Sam
					<div class="chevron-down">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path class="st0" d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
						</svg>
					</div>
				</a>
			</li>
			<li >
				<a class="top-nav-link-item">
					<div class="menu-icon">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<path class="st0" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.8c-4.9 0-8.8-3.9-8.8-8.8S5.1 1.2 10 1.2s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/>
							<path class="st0" d="M10 3.9c-1.1 0-2 .3-2.7.9-.6.6-1 1.5-1.2 2.6v.1l1.7.2v-.1c.1-.8.4-1.4.8-1.8.4-.3.9-.5 1.4-.5.6 0 1.1.2 1.5.6.4.4.6.9.6 1.4 0 .3-.1.6-.2.8-.1.3-.5.6-.9 1-.5.4-.8.8-1 1-.3.3-.5.7-.6 1-.2.4-.2.8-.2 1.3v.5h1.6v-.1c0-.6 0-.8.1-1.1.1-.2.2-.5.3-.7.1-.2.4-.5.9-.9.7-.6 1.2-1.2 1.4-1.6.2-.4.4-.9.4-1.5 0-.9-.4-1.7-1.1-2.4-.7-.4-1.6-.7-2.8-.7zM9.1 14.4h1.7v1.7H9.1z"/>
						</svg>
					</div>
					Help
					<div class="chevron-down">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path class="st0" d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
						</svg>
					</div>
				</a>
			</li>
		</ul>
	</cdl-top-nav>
	`
	// re-enable max-line-length warnings
	// tslint:enable:max-line-length
})

export class TopNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";

	constructor () {
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

}
