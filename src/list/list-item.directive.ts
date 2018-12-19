import { Directive, HostBinding } from "@angular/core";

/**
 * Applys list styling to the item it is used on. Best used with `li`s.
 */
@Directive({
	selector: "[ibmListItem]"
})
export class ListItemDirective {
	@HostBinding("class.bx--list__item") wrapper = true;
}
