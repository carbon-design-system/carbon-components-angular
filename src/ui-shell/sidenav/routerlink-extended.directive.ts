import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NavigationExtras, RouterLink } from "@angular/router";
import keys from "lodash-es/keys";

@Directive({
	// tslint:disable-next-line
	selector: "[routerLink]"
})
export class RouterLinkExtendedDirective extends RouterLink implements OnChanges {
	@Input() routeExtras: NavigationExtras;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.routeExtras && this.routeExtras) {
			keys(this.routeExtras).forEach(routeExtraProperty => this[routeExtraProperty] = this.routeExtras[routeExtraProperty]);
		}

		super.ngOnChanges(changes);
	}
}
