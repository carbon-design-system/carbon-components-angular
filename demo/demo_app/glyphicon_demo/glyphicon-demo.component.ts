import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IconService } from "./../../../src/glyphicon/glyphicon.module";

@Component({
	selector: "glyphicon-demo",
	template: `
	<h1>Glyphicon Demo</h1>
	<svg width="30" height="30"><use href="#alert_30"></use></svg>
	<cdl-glyphicon icon="alert" size="xs"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="sm"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="md"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="lg"></cdl-glyphicon>
	<input type="search" (keyup)="search($event)" class="input-field" style="width: 100%; margin-left: 0;" placeholder="Filter">
	<div *ngFor="let set of displayMeta">
		<h2>{{ formatName(set.sprite) }}</h2>
		<div class="set">
			<span *ngFor="let icon of filter(set.icons)">
				<h3>{{ icon.name }}</h3>
				<svg
					width="30"
					height="30">
					<use [attr.href]="'#'+icon.name+'_30'"></use>
				</svg>
			</span>
		</div>
	</div>
	`,
	styles: [`
		.set {
			display: grid;
			grid-template-columns: 200px 200px 200px;
			justify-content: center;
			grid-gap: 10px;
		}
		.set span {
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;
			border: 4px solid grey;
		}
		.set h3 {
			text-align: center;
		}
		.set span svg {
			display: block;
			margin: 0 auto;
		}
		.svgs {
			display: none;
			height: 0;
			width: 0;
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class GlyphiconDemo {
	iconMeta;
	displayMeta;
	constructor () {
		// IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}

	formatName(name) {
		return name.slice(0, 1).toUpperCase() + name.slice(1).replace("_", " ");
	}

	filter(icons) {
		return icons.filter(x => x.size === 30);
	}

	search(ev) {
		this.displayMeta = this.iconMeta.map(sprite => {
			return Object.assign({}, sprite, {
				icons: sprite.icons.filter(icon => icon.name.includes(ev.target.value))
			});
		});
	}

	async ngAfterViewInit() {
		this.iconMeta = await fetch("http://peretz-icons.mybluemix.net/meta.json").then(res => res.json());
		console.log(this.iconMeta);
		let svgContain = document.createElement("div");
		svgContain.classList.add("svgs");
		for(let set of this.iconMeta) {
			// fetch the svgs
			let rawSVG = await fetch(`http://peretz-icons.mybluemix.net/${set.sprite}.svg`)
				.then(res => res.text());
			svgContain.innerHTML += rawSVG;
		}
		document.body.appendChild(svgContain);
		this.displayMeta = this.iconMeta;
	}
}
