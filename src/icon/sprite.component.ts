import {
	Component,
	Input,
	ElementRef,
	AfterViewInit
} from "@angular/core";
import { Http } from "@angular/http";
import { IconService } from "./icon.service";

@Component({
	selector: "n-sprite",
	template: ``,
	styles: [`
		:host {
			display: none;
			height: 0;
			width: 0;
		}
	`],
	providers: [IconService]
})
export class Sprite implements AfterViewInit {
	@Input() sprite = "";
	@Input() baseURL = "https://peretz-icons.mybluemix.net/";

	constructor(private http: Http,
		private _elementRef: ElementRef,
		private icons: IconService) {}

	ngAfterViewInit() {
		// if we do this as a service we can cache the sprites...
		// ... but thats a lot of memory, and the sprites shouldn't
		// be unloaded across pages in most apps
		// this.http.get(`${this.baseURL}${this.sprite}.svg`)
		// 	.toPromise()
		// 	.then(data => data.text())
		// 	.then(rawSVG => {
		// 		this._elementRef.nativeElement.innerHTML = rawSVG;
		// 	});
		this.icons.getSprite(this.sprite).then(rawSVG => {
			this._elementRef.nativeElement.innerHTML = rawSVG;
		});
	}
}
