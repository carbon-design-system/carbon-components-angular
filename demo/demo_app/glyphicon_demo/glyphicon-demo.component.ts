import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "glyphicon-demo",
	template: `
	<h1>Glyphicon Demo</h1>
	<svg width="30" height="30"><use href="#alert_30"></use></svg>
	<cdl-glyphicon icon="alert" size="xs"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="sm"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="md"></cdl-glyphicon>
	<cdl-glyphicon icon="alert" size="lg"></cdl-glyphicon>
	<div>
		<input
			type="search"
			(keyup)="search($event)"
			class="input-field" style="width: calc(100% - 220px); margin-left: 0;"
			placeholder="Filter">
		<cdl-dropdown
			placeholder="Chose a set" style="width: 200px;"
			type="multi"
			(select)="onSelect($event)"
			[(ngModel)]="selected">
			<cdl-dropdown-list [items]="sets"></cdl-dropdown-list>
		</cdl-dropdown>
	</div>
	<div
		*ngFor="let set of iconMeta"
		[ngClass]="{hide: !set.visible}">
		<h2>{{ formatName(set.sprite) }}</h2>
		<div class="set">
			<span
				*ngFor="let icon of set.icons"
				[ngClass]="{hide: !icon.visible}">
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
		.hide {
			visibility: hidden;
			height: 0;
			position: absolute;
		}
		h2 {
			position: relative;
			width: 100%;
			padding: 10px 0px;
			background: rgba(255, 255, 255, 0.7);
		}
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
	sets = [];
	selected = [];

	formatName(name) {
		return name.slice(0, 1).toUpperCase() + name.slice(1).replace("_", " ");
	}

	onSelect(ev) {
		// this.displayMeta = this.iconMeta.filter(sprite => {
		// 	return ((this.selected === null || (this.selected.length === 0))
		// 			|| (this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite))));
		// });
		/*this.displayMeta =*/ this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				// return Object.assign({}, sprite, {visible: true});
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				// return Object.assign({}, sprite, {visible: true});
				sprite.visible = true;
			} else {
				// return Object.assign({}, sprite, {visible: false});
				sprite.visible = false;
			}
		});
	}

	search(ev) {
		// this.displayMeta = this.iconMeta.filter(sprite => {
		// 	return ((this.selected === null || (this.selected.length === 0))
		// 			|| (this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite))));
		// }).map(sprite => {
		// 	return Object.assign({}, sprite, {
		// 		icons: sprite.icons.filter(icon => icon.name.includes(ev.target.value))
		// 	});
		// });
		this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				// return Object.assign({}, sprite, {visible: true});
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				// return Object.assign({}, sprite, {visible: true});
				sprite.visible = true;
			} else {
				// return Object.assign({}, sprite, {visible: false});
				sprite.visible = false;
			}
			sprite.icons.forEach(icon => {
				if (ev.target.value) {
					if (icon.name.includes(ev.target.value)) {
						icon.visible = true;
					} else {
						icon.visible = false;
					}
				} else {
					icon.visible = true;
				}
			});
		});
	}

	async ngAfterViewInit() {
		this.iconMeta = await fetch("http://peretz-icons.mybluemix.net/meta.json").then(res => res.json());
		this.iconMeta.forEach(set => set.icons = set.icons.filter(icon => icon.size === 30));
		this.iconMeta.sort((a, b) => {
			if (b.sprite.includes("core")) { return 1; }
			return a.sprite.localeCompare(b.sprite);
		})
		console.log(this.iconMeta);
		let svgContain = document.createElement("div");
		svgContain.classList.add("svgs");
		let newSets = [];
		for(let set of this.iconMeta) {
			// fetch the svgs
			let rawSVG = await fetch(`http://peretz-icons.mybluemix.net/${set.sprite}.svg`)
				.then(res => res.text());
			svgContain.innerHTML += rawSVG;
			newSets.push({
				content: this.formatName(set.sprite),
				sprite: set.sprite,
				selected: false
			});
			set.visible = true;
			set.icons.forEach(icon => {
				icon.visible = true;
			});
		}
		this.sets = newSets;
		document.body.appendChild(svgContain);
		this.displayMeta = this.iconMeta;
	}
}
