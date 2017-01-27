import { ViewContainerRef, Injector, Compiler, ComponentRef, ReflectiveInjector, ComponentFactoryResolver } from "@angular/core";
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
    let inputProviders = Object.keys(data.inputs).map(inputName => ({provide: inputName, useValue: data.inputs[inputName]}))
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders)
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.vcRef.parentInjector)
    let factory = this.resolver.resolveComponentFactory(data.component)
    let component = factory.create(injector)
    this.vcRef.insert(component.hostView)

		//let componentRef$ = new ReplaySubject();

		//this.compiler.compileModuleAndAllComponentsAsync(module).then(factory => {
			//let componentFactory = factory.componentFactories
				//.filter(item => {
					//return item.componentType === component;
				//});

		//const childInjector = ReflectiveInjector
			//.resolveAndCreate([], this.injector);
		//let componentRef = this.vcRef
			//.createComponent(componentFactory, 0, childInjector);
		//Object.assign(componentRef.instance, parameters);
		//this.activeInstances ++;

    component.instance["destroy"] = () => {
      this.activeInstances --;
      component.destroy();
    };

		//componentRef$.next(componentRef);
		//componentRef$.complete();
	//});
	//return componentRef$;
	}
}


