import { Directive, HostBinding } from "@angular/core";

/**
 * Applies list styling to the item it is used on. Best used with `li`s.
 */
@Directive({
	selector: "[cdsListItem], [ibmListItem]"
})
export class ListItemDirective {
	@HostBinding("class.cds--list__item") wrapper = true;
}
