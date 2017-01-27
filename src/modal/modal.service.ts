import { ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {
	private vcRef: ViewContainerRef;
	public activeInstances: number = 0;

	constructor(private resolver: ComponentFactoryResolver) {}

	registerViewContainerRef(vcRef: ViewContainerRef): void {
		this.vcRef = vcRef;
	}

	create<T>(data: {component: any, inputs?: any}) {
		const inputProviders = Object.keys(data.inputs).map(inputName => ({provide: inputName, useValue: data.inputs[inputName]}));
		const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
		const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.vcRef.parentInjector);
		const factory = this.resolver.resolveComponentFactory(data.component);
		const component = factory.create(injector);
		this.vcRef.insert(component.hostView);
		this.activeInstances ++;

		component.instance["destroy"] = () => {
			this.activeInstances --;
			component.destroy();
		};

	}
}


