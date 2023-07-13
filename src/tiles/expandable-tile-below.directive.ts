import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsBelowFold], [ibmBelowFold]"
})
export class ExpandableTileBelowFoldDirective {
	@HostBinding("class.cds--tile-content__below-the-fold") belowFold = true;
}
