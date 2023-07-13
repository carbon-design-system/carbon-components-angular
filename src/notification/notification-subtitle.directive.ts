import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsNotificationSubtitle], [ibmNotificationSubtitle]"
})
export class NotificationSubtitle {
	@HostBinding("class.cds--inline-notification__subtitle") baseClass = true;
}
