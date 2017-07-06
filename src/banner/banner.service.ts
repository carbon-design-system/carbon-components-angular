import {
	EventEmitter,
	Injector,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	ApplicationRef
} from "@angular/core";

import { Banner } from "./banner.component";

@Injectable()
export class BannerService {
public componentFactory: ComponentFactory<any>;
public bannerRefs = new Array<ComponentRef<any>>();
public onClose: EventEmitter<any> = new EventEmitter();

	constructor(public injector: Injector,
		public componentFactoryResolver: ComponentFactoryResolver, public applicationRef: ApplicationRef) {
	}

	showBanner(bannerObj, bannerComp = null) {
		if (!bannerComp) {
			this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(Banner);
		} else {
			this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(bannerComp);
		}

		let bannerRef = this.componentFactory.create(this.injector);
		bannerRef.instance.bannerObj = bannerObj;
		console.log(bannerRef.instance.bannerObj);
		this.bannerRefs.push(bannerRef);

		this.onClose = bannerRef.instance.close;
		this.applicationRef.attachView(bannerRef.hostView);

		if (bannerObj.target) {
			document.querySelector(bannerObj.target).appendChild(bannerRef.location.nativeElement);
		} else {
			let body = document.querySelector("body");

			// get or create a container for alert list
			let bannerClassName = "body-banner";
			let bannerList = body.querySelector("." + bannerClassName);
			if (!bannerList) {
				bannerList = document.createElement("div");
				bannerList.className = bannerClassName;
				body.appendChild(bannerList);
			}

			// add the banner to the top of the list
			if (bannerList.firstChild) {
				bannerList.insertBefore(bannerRef.location.nativeElement, bannerList.firstChild);
			} else {
				bannerList.appendChild(bannerRef.location.nativeElement);
			}
		}

		if (bannerObj.duration && bannerObj.duration > 0) {
			setTimeout(() => {
				this.close(bannerRef);
			}, bannerObj.duration);
		}

		if (bannerObj.smart) {
			// let it disappear after calculated timeout
			setTimeout(() => {
				this.close(bannerRef);
			}, this.getSmartTimeout(bannerObj));
		}

		this.onClose.subscribe(() => {
			this.close(bannerRef);
		});
	}

	close(bannerRef: ComponentRef<any>) {
		if (bannerRef) {
			// animation and delayed distruction
			bannerRef.location.nativeElement.querySelector(".banner").classList.add("banner-dropout");
			setTimeout( () => {
				this.applicationRef.detachView(bannerRef.hostView);
				bannerRef.destroy();
			}, 200);
		}
	}

	getSmartTimeout(bannerObj) {
		// calculate timeout
		let timeout = 600; // start with reaction time

		// custom duration
		timeout += bannerObj.duration || 0;

		// message type
		switch (bannerObj.type) {
			case "info":
			case "success":
			default: {
				break;
			}
			case "danger": {
				timeout += 3000;
				break;
			}
			case "warning": {
				timeout += 1500;
				break;
			}
		}

		// message length
		// average reader reads around 200 words per minute, or it takes them ~0.3s per word
		// let's use 1.5 factor for below average speed readers and have 0.45s per word
		let wordCount = bannerObj.message.trim().split(/\s+/).length;
		timeout += wordCount * 450;

		return timeout;
	}

	ngOnDestroy() {
		if (this.bannerRefs.length > 0) {
			for (let i = 0; i < this.bannerRefs.length; i++) {
				let bannerRef = this.bannerRefs[i];
				this.applicationRef.detachView(bannerRef.hostView);
				bannerRef.destroy();
			}
			this.bannerRefs.length = 0;
		}
	}
}
