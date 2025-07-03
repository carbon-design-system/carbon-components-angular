import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsNotificationSubtitle], [ibmNotificationSubtitle]",
	standalone: true
})
export class NotificationSubtitle {
	@HostBinding("class.cds--inline-notification__subtitle") baseClass = true;
}
