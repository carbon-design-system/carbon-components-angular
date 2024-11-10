import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[cdsClickableTileIcon], [ibmClickableTileIcon]'
})
export class ClickableTileIconDirective {
	@HostBinding("class.cds--tile--icon") icon = true;
}
