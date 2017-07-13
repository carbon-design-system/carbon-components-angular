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
		this.icons.getSprite(this.sprite).then(rawSVG => {
			this._elementRef.nativeElement.innerHTML = rawSVG;
		});
	}
}
