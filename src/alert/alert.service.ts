import {
	EventEmitter,
	Injector,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ApplicationRef
} from "@angular/core";

import { Alert } from "./alert.component";

@Injectable()
export class AlertService {
private componentFactory: ComponentFactory<any>;
private alertRef: ComponentRef<any>;
private onClose: EventEmitter<any> = new EventEmitter();
private body = document.querySelector("body");
private timeout;

	constructor(private injector: Injector,
		private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef) {
	}

	showAlert(alertObj, alertComp = null) {
		this.close();

		if (!alertComp) {
			this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(Alert);
		} else {
			this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(alertComp);
		}

		this.alertRef = this.componentFactory.create(this.injector);
		this.alertRef.instance.alertObj = alertObj;
		this.onClose = this.alertRef.instance.close;
		this.applicationRef.attachView(this.alertRef.hostView);

		if (alertObj.target) {
			document.querySelector(alertObj.target).appendChild(this.alertRef.location.nativeElement);
		} else {
			document.querySelector("body").appendChild(this.alertRef.location.nativeElement);
		}

		if (alertObj.duration && alertObj.duration > 0) {
			this.timeout = setTimeout(() => {
				this.close();
			}, alertObj.duration);
		}

		this.onClose.subscribe(() => {
			this.close();
		});
	}

	close() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}

		if (this.alertRef) {
			this.applicationRef.detachView(this.alertRef.hostView);
			this.alertRef.destroy();
		}
	}

	ngOnDestroy() {
		if (this.alertRef) {
			this.applicationRef.detachView(this.alertRef.hostView);
			this.alertRef.destroy();
		}
	}
}
