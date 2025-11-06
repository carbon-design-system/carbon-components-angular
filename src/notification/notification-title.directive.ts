import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsNotificationTitle], [ibmNotificationTitle]",
	standalone: true
})
export class NotificationTitle {
	@HostBinding("class.cds--inline-notification__title") baseClass = true;
}
