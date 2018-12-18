import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmListItem]"
})
export class ListItemDirective {
	@HostBinding("class.bx--list__item") wrapper = true;
}
