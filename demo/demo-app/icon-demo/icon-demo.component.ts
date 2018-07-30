import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogService } from "./../../../src/dialog/dialog.service";
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from "@angular/core";

@Component({
	selector: "app-icon-demo",
	template: `
	<h1 class="p-demo-heading">Iconography</h1>

	<svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>

	<h2>n-icon tests</h2>

	<ibm-icon icon="alert" size="xs"></ibm-icon>
	<ibm-icon icon="alert" size="sm"></ibm-icon>
	<ibm-icon icon="alert" size="md"></ibm-icon>
	<ibm-icon icon="alert" size="lg"></ibm-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<ibm-icon icon="alert" color="blue"></ibm-icon>
		<ibm-icon icon="alert" color="light"></ibm-icon>
		<ibm-icon icon="alert" color="dark"></ibm-icon>
		<ibm-icon icon="alert" color="white"></ibm-icon>
	</div>

	<ibm-icon icon="alert" color="blue" size="xs"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="sm"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="md"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="lg"></ibm-icon>

	<ibm-icon icon="alert" color="light" size="xs"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="sm"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="md"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="lg"></ibm-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<ibm-icon icon="alert" color="white" size="xs"></ibm-icon>
		<ibm-icon icon="alert" color="white" size="sm"></ibm-icon>
		<ibm-icon icon="alert" color="white" size="md"></ibm-icon>
		<ibm-icon class="test-custom-class foo" icon="alert" color="white" size="lg"></ibm-icon>
	</div>
	`,
	styles: [`
		.hide {
			visibility: hidden;
			height: 0;
			position: absolute;
		}
		h2 {
			position: relative;
			width: 100%;
			padding: 10px 0px;
		}
		.set {
			display: grid;
			justify-content: center;
			grid-gap: 10px;
		}
		.set .set-icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;
			border: 4px solid grey;
		}
		.set h3 {
			text-align: center;
			word-wrap: break-word;
			overflow-wrap: break-word;
			position: relative;
			width: 100%;
			padding-left: 5px;
			padding-right: 5px;
		}
		.set .icon svg {
			display: block;
			margin: 0 auto;
		}
		.svgs {
			display: none;
			height: 0;
			width: 0;
		}
		.loading {
			height: 500px;
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
		}
		.loading:after {
			content: "";
			display: block;
			height: 200px;
			width: 200px;
			border-radius: 200px;
			border-top: 4px solid #2d74da;
			border-left: 4px solid #2d74da;
			border-bottom: 4px solid transparent;
			border-right: 4px solid transparent;
			transform: rotate(0deg);
			animation-name: load;
			animation-iteration-count: infinite;
			animation-duration: 0.8s;
			animation-timing-function: linear;
		}

		@keyframes load {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@media (min-width: 0px) {
			.set {
				grid-template-columns: 160px 160px;
			}
			.set span {
				height: 160px;
			}
		}

		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			.set {
				grid-template-columns: 200px 200px 200px;
			}
			.set span {
				height: 200px;
			}
		}

		@media (min-width: 1200px) {
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class IconDemo { }
