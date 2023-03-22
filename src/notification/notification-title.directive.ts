import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsNotificationTitle], [ibmNotificationTitle]"
})
export class NotificationTitle {
	@HostBinding("class.cds--inline-notification__title") baseClass = true;
}
