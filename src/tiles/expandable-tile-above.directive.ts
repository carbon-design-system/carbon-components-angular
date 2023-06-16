import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsAboveFold], [ibmAboveFold]"
})
export class ExpandableTileAboveFoldDirective {
	@HostBinding("class.cds--tile-content__above-the-fold") aboveFold = true;
}
