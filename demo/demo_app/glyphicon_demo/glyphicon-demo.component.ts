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
			placeholder="Filter"
			[attr.disabled]="waitingForLoad?true:null">
		<cdl-dropdown
			placeholder="Chose a set" style="width: 200px;"
			type="multi"
			(select)="onSelect()"
			[(ngModel)]="selected"
			[disabled]="waitingForLoad">
			<cdl-dropdown-list [items]="sets"></cdl-dropdown-list>
		</cdl-dropdown>
	</div>
	<div
		class="loading"
		[ngClass]="{hide: !waitingForLoad}">
	</div>
	<div [ngClass]="{hide: waitingForLoad}">
		<div
			*ngFor="let set of iconMeta"
			[ngClass]="{hide: !set.visible}">
			<h2>{{ formatName(set.sprite) }}</h2>
			<div class="set">
				<span
					*ngFor="let icon of set.icons"
					class="icon"
					[ngClass]="{hide: !icon.visible}">
					<h3>{{ icon.name }}</h3>
					<cdl-glyphicon [icon]="icon.name" size="lg"></cdl-glyphicon>
				</span>
			</div>
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
			justify-content: center;
			grid-gap: 10px;
		}
		.set .icon {
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
export class GlyphiconDemo {
	iconMeta;
	sets = [];
	selected = [];
	waitingForLoad = true;

	formatName(name) {
		return name.slice(0, 1).toUpperCase() + name.slice(1).replace("_", " ");
	}

	onSelect(ev) {
		console.log(ev);
		this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				sprite.visible = true;
			} else {
				sprite.visible = false;
			}
		});
	}

	search(ev) {
		this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				sprite.visible = true;
			} else {
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
		// gather and nest the avliable icons sizes into set.icons[].sizes[]
		this.iconMeta.forEach(set => set.icons = set.icons.filter(icon => icon.size === 30));
		this.iconMeta.sort((a, b) => {
			if (b.sprite.includes("core")) { return 1; }
			return a.sprite.localeCompare(b.sprite);
		});
		console.log(this.iconMeta);
		let newSets = [];
		for (let set of this.iconMeta) {
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
		this.waitingForLoad = false;
	}
}
