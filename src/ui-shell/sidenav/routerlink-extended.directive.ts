import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NavigationExtras, RouterLinkWithHref } from "@angular/router";

@Directive({
	// tslint:disable-next-line
	selector: "[routerLink]",
})
export class RouterLinkExtendedDirective
	extends RouterLinkWithHref
	implements OnChanges
{
	// TODO: Change RouterLinkWithHref with RouterLink from angular 15 since RouterLinkWithHref has been deprecated
	@Input() routeExtras: NavigationExtras;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.routeExtras && this.routeExtras) {
			Object.keys(this.routeExtras).forEach(
				(routeExtraProperty) =>
					(this[routeExtraProperty] =
						this.routeExtras[routeExtraProperty])
			);
		}

		super.ngOnChanges(changes);
	}
}
