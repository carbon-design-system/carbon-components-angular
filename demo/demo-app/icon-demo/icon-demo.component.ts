import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "icon-demo",
	template: `
	<h1>Iconography demo</h1>
	<svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
	<n-icon icon="alert" size="xs"></n-icon>
	<n-icon icon="alert" size="sm"></n-icon>
	<n-icon icon="alert" size="md"></n-icon>
	<n-icon icon="alert" size="lg"></n-icon>

	<ul>
		<li *ngFor="let set of iconMeta">
			<a
				href="{{formatURL(set.sprite)}}"
				download="{{formatFileName(set.sprite)}}">
				download {{formatFileName(set.sprite)}}
			</a>
		</li>
	</ul>

	<div style="display: flex;">
		<div class="filter-search" style="width: calc(100% - 200px); margin-right: 5px;">
			<div class="search-icon">
				<svg
					class="icon"
					viewBox="0 0 16 16">
					<g>
						<path
							d="M6,0C2.7,0,0,2.7,0,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z
							M6,11c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5
							S8.8,11,6,11z"/>
						<rect
							x="12"
							y="10.2"
							transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 31.4698 13.0355)"
							width="2"
							height="5.7"/>
					</g>
				</svg>
			</div>
			<input
				#filter
				(keyup)="search($event)"
				type="text"
				class="input-field"
				tabindex="0"
				(focus)="filterFocus = true"
				(blur)="filterFocus = filter.value?true:false"
				[disabled]="waitingForLoad"/>
			<span
				class="placeholder"
				[ngClass]="{
					visible: !filterFocus
				}">
				Search
			</span>
			<button
				class="search-cancel"
				type="button"
				aria-label="cancel"
				[ngClass]="{
					visible: filter.value.trim()
				}"
				(click)="filter.value = ''; search($event); filterFocus = false">
				<svg
					class="icon"
					viewBox="0 0 16 16">
					<polygon
						points="14.5,2.6 13.4,1.5
						8,6.9 2.6,1.5
						1.5,2.6 6.9,8
						1.5,13.4
						2.6,14.5
						8,9.1
						13.4,14.5
						14.5,13.4
						9.1,8"/>
				</svg>
			</button>
		</div>
		<n-dropdown
			placeholder="Select a set"
			style="width: 200px;"
			type="multi"
			(select)="onSelect()"
			[(ngModel)]="selected"
			[disabled]="waitingForLoad">
			<n-dropdown-list [items]="sets"></n-dropdown-list>
		</n-dropdown>
	</div>
	<div
		class="loading"
		[ngClass]="{hide: !waitingForLoad}">
	</div>
	<div [ngClass]="{hide: waitingForLoad}">
		<div
			*ngFor="let set of iconMeta"
			[ngClass]="{hide: !set.visible}">
			<h2>{{ formatName(set.sprite) }}
				(<a
					href="{{formatURL(set.sprite)}}"
					download="{{formatFileName(set.sprite)}}">download</a>)
			</h2>
			<div class="set">
				<span
					*ngFor="let icon of set.icons"
					class="set-icon"
					[ngClass]="{hide: !icon.visible}">
					<h3>{{ icon.name }}</h3>
					<n-icon [icon]="icon.name" size="lg"></n-icon>
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
export class IconDemo {
	iconMeta;
	sets = [];
	selected = [];
	waitingForLoad = true;

	formatName(name) {
		return name.slice(0, 1).toUpperCase() + name.slice(1).replace("_", " ");
	}

	formatURL(name) {
		return `http://peretz-icons.mybluemix.net/${name}.svg`;
	}

	formatFileName(name) {
		return `${name}.svg`;
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
		this.iconMeta = await fetch("https://peretz-icons.mybluemix.net/meta.json").then(res => res.json());
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
