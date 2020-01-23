import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmNotificationSubtitle]"
})
export class NotificationSubtitle {
	@HostBinding("class.bx--inline-notification__subtitle") baseClass = true;
}
