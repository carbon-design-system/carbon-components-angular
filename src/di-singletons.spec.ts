import {
	ApplicationRef,
	Component,
	InjectionToken,
	Type,
	getDebugNode,
	importProvidersFrom,
	inject
} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { createApplication } from "@angular/platform-browser";
import { Router, RouterOutlet, Routes, provideRouter, withDisabledInitialNavigation } from "@angular/router";

import { I18n } from "carbon-components-angular/i18n";
import {
	Placeholder,
	PlaceholderModule,
	PlaceholderService,
	PLACEHOLDER_SERVICE_PROVIDER
} from "carbon-components-angular/placeholder";
import { ComboBox } from "carbon-components-angular/combobox";
import { Dropdown } from "carbon-components-angular/dropdown";
import { OverflowMenu, OverflowMenuPane } from "carbon-components-angular/dialog";
import { Toggle } from "carbon-components-angular/toggle";
import { Header, HeaderItem } from "carbon-components-angular/ui-shell";
import { MenuButtonModule } from "carbon-components-angular/menu-button";

/**
 * Guards against components shadowing application-wide singletons with their own
 * component-level `providers` entry.
 *
 * `Router`, `I18n` and `PlaceholderService` must resolve to the single application
 * instance. Listing any of them as a bare class in a component's `providers` array
 * constructs a second instance and silently breaks navigation, translation overrides
 * and `<cds-placeholder>` respectively.
 *
 * `PlaceholderService` is the special case: components that need it available for
 * standalone use must provide `PLACEHOLDER_SERVICE_PROVIDER`, whose
 * `@Optional() @SkipSelf()` factory resolves to the parent instance when one exists.
 */

@Component({
	template: `<cds-header name="Test" />`,
	imports: [Header]
})
class HeaderHost {
	appRouter = inject(Router);
}

@Component({
	template: `<cds-header-item>Item</cds-header-item>`,
	imports: [HeaderItem]
})
class HeaderItemHost {
	appRouter = inject(Router);
}

@Component({
	template: `<cds-combo-box />`,
	imports: [ComboBox]
})
class ComboBoxHost {
	appI18n = inject(I18n);
}

@Component({
	template: `<cds-dropdown />`,
	imports: [Dropdown]
})
class DropdownHost {
	appPlaceholder = inject(PlaceholderService);
}

@Component({
	template: `<cds-overflow-menu />`,
	imports: [OverflowMenu]
})
class OverflowMenuHost {
	appPlaceholder = inject(PlaceholderService);
}

@Component({
	template: `<cds-toggle [id]="toggleId" label="Toggle" />`,
	imports: [Toggle]
})
class ToggleIdHost {
	toggleId = "my-custom-toggle-id";
}

/**
 * Hosts for the application-wiring specs. Each pairs a `<cds-placeholder>` with a
 * `<cds-dropdown>` so we can check both resolve the same `PlaceholderService`.
 */
@Component({
	selector: "app-root",
	template: `<cds-placeholder /><cds-dropdown />`,
	imports: [Placeholder, Dropdown]
})
class StandalonePlaceholderRoot {}

@Component({
	selector: "app-root",
	template: `<cds-placeholder /><cds-dropdown />`,
	imports: [PlaceholderModule, Dropdown]
})
class PlaceholderModuleRoot {}

@Component({
	template: `<cds-dropdown />`,
	imports: [Dropdown]
})
class RoutedDropdownPage {}

@Component({
	selector: "app-root",
	template: `<cds-placeholder /><router-outlet />`,
	imports: [PlaceholderModule, RouterOutlet]
})
class PlaceholderModuleRoutedRoot {}

/** Any route-level provider makes the router create a dedicated route injector. */
const ROUTE_SCOPED = new InjectionToken<boolean>("ROUTE_SCOPED");
const ROUTES_WITH_ROUTE_INJECTOR: Routes = [{
	path: "page",
	providers: [{ provide: ROUTE_SCOPED, useValue: true }],
	loadComponent: () => Promise.resolve(RoutedDropdownPage)
}];

/**
 * Boots `root` as a real application (not through `TestBed`), so the standalone
 * injector Angular builds from the root component's `imports` is part of the hierarchy.
 */
async function bootstrap<T>(root: Type<T>, providers: any[] = []) {
	const appRef = await createApplication({ providers });
	const host = document.createElement("app-root");
	document.body.appendChild(host);
	appRef.bootstrap(root, host);
	return {
		appRef,
		/** The `PlaceholderService` resolved by `<cds-placeholder>` */
		placeholderService: () => resolvedPlaceholderService(host, "cds-placeholder"),
		/** The `PlaceholderService` resolved by `<cds-dropdown>`, wherever it is rendered */
		dropdownService: () => resolvedPlaceholderService(host, "cds-dropdown"),
		dropdownInjector: () => getDebugNode(host.querySelector("cds-dropdown")).injector,
		destroy: () => {
			appRef.destroy();
			host.remove();
		}
	};
}

function resolvedPlaceholderService(host: HTMLElement, selector: string) {
	return getDebugNode(host.querySelector(selector)).injector.get(PlaceholderService);
}

async function navigate(appRef: ApplicationRef, url: string) {
	await appRef.injector.get(Router).navigateByUrl(url);
	appRef.tick();
	await appRef.whenStable();
}

/** Reads a translation synchronously off the `i18n.get(path)` observable. */
function readTranslation(i18n: I18n, path: string): string {
	let value: string;
	i18n.get(path).subscribe((v: string) => value = v);
	return value;
}

describe("DI singletons", () => {

	describe("Router", () => {
		it("Header resolves the application Router", () => {
			TestBed.configureTestingModule({
				imports: [HeaderHost],
				providers: [provideRouter([])]
			});
			const fixture = TestBed.createComponent(HeaderHost);
			fixture.detectChanges();

			const headerRouter = fixture.debugElement.children[0].injector.get(Router);
			expect(headerRouter).toBe(fixture.componentInstance.appRouter);
		});

		it("HeaderItem resolves the application Router", () => {
			TestBed.configureTestingModule({
				imports: [HeaderItemHost],
				providers: [provideRouter([])]
			});
			const fixture = TestBed.createComponent(HeaderItemHost);
			fixture.detectChanges();

			const itemRouter = fixture.debugElement.children[0].injector.get(Router);
			expect(itemRouter).toBe(fixture.componentInstance.appRouter);
		});
	});

	describe("I18n", () => {
		it("ComboBox resolves the application I18n and sees its overrides", () => {
			TestBed.configureTestingModule({ imports: [ComboBoxHost] });
			const fixture = TestBed.createComponent(ComboBoxHost);
			fixture.detectChanges();

			const appI18n = fixture.componentInstance.appI18n;
			const comboI18n = fixture.debugElement.children[0].injector.get(I18n);
			expect(comboI18n).toBe(appI18n);

			appI18n.set({ COMBOBOX: { PLACEHOLDER: "Overridden" } });
			expect(readTranslation(comboI18n, "COMBOBOX.PLACEHOLDER")).toBe("Overridden");
		});

		it("OverflowMenuPane resolves the application I18n", () => {
			TestBed.configureTestingModule({ imports: [OverflowMenuPane] });
			const appI18n = TestBed.inject(I18n);
			// not rendered: the pane needs a `dialogConfig` before its view can be built
			const fixture = TestBed.createComponent(OverflowMenuPane);

			expect(fixture.debugElement.injector.get(I18n)).toBe(appI18n);
		});
	});

	describe("PlaceholderService", () => {
		it("Dropdown resolves the application PlaceholderService", () => {
			TestBed.configureTestingModule({
				imports: [DropdownHost],
				providers: [PLACEHOLDER_SERVICE_PROVIDER]
			});
			const fixture = TestBed.createComponent(DropdownHost);
			fixture.detectChanges();

			const dropdownPlaceholder = fixture.debugElement.children[0].injector.get(PlaceholderService);
			expect(dropdownPlaceholder).toBe(fixture.componentInstance.appPlaceholder);
		});

		it("OverflowMenu resolves the application PlaceholderService", () => {
			TestBed.configureTestingModule({
				imports: [OverflowMenuHost],
				providers: [PLACEHOLDER_SERVICE_PROVIDER]
			});
			const fixture = TestBed.createComponent(OverflowMenuHost);
			fixture.detectChanges();

			const menuPlaceholder = fixture.debugElement.children[0].injector.get(PlaceholderService);
			expect(menuPlaceholder).toBe(fixture.componentInstance.appPlaceholder);
		});
	});

	describe("PlaceholderService application wiring", () => {
		let destroy: () => void;

		afterEach(() => destroy?.());

		it("shares one instance when PlaceholderModule is provided at bootstrap", async () => {
			const app = await bootstrap(StandalonePlaceholderRoot, [importProvidersFrom(PlaceholderModule)]);
			destroy = app.destroy;

			expect(app.dropdownService()).toBe(app.placeholderService());
			expect(app.placeholderService()).toBe(app.appRef.injector.get(PlaceholderService));
			expect(app.dropdownService().hasPlaceholderRef()).toBe(true);
		});

		it("shares one instance when the root component imports PlaceholderModule", async () => {
			const app = await bootstrap(PlaceholderModuleRoot);
			destroy = app.destroy;

			expect(app.dropdownService()).toBe(app.placeholderService());
			expect(app.dropdownService().hasPlaceholderRef()).toBe(true);
		});

		it("reaches a route with its own injector when provided at bootstrap", async () => {
			const app = await bootstrap(PlaceholderModuleRoutedRoot, [
				importProvidersFrom(PlaceholderModule),
				provideRouter(ROUTES_WITH_ROUTE_INJECTOR, withDisabledInitialNavigation())
			]);
			destroy = app.destroy;
			await navigate(app.appRef, "/page");

			// sanity check: the dropdown really is behind a route injector
			expect(app.dropdownInjector().get(ROUTE_SCOPED)).toBe(true);
			expect(app.dropdownService()).toBe(app.placeholderService());
			expect(app.dropdownService().hasPlaceholderRef()).toBe(true);
		});

		/**
		 * Documents a limitation rather than desired behaviour: route injectors are parented to
		 * the application injector, not the root component's standalone injector, so a
		 * root-component-only `PlaceholderModule` import is invisible inside them.
		 */
		it("does NOT reach a route with its own injector when only the root component imports PlaceholderModule", async () => {
			const app = await bootstrap(PlaceholderModuleRoutedRoot, [
				provideRouter(ROUTES_WITH_ROUTE_INJECTOR, withDisabledInitialNavigation())
			]);
			destroy = app.destroy;
			await navigate(app.appRef, "/page");

			// sanity check: the dropdown really is behind a route injector
			expect(app.dropdownInjector().get(ROUTE_SCOPED)).toBe(true);
			expect(app.dropdownService()).not.toBe(app.placeholderService());
			expect(app.dropdownService().hasPlaceholderRef()).toBe(false);
		});

		/**
		 * Documents a limitation: the standalone `Placeholder` alone provides the service only on
		 * its own element, so sibling components construct separate, empty instances.
		 */
		it("does NOT share an instance when only the standalone Placeholder is imported", async () => {
			const app = await bootstrap(StandalonePlaceholderRoot);
			destroy = app.destroy;

			expect(app.dropdownService()).not.toBe(app.placeholderService());
			expect(app.dropdownService().hasPlaceholderRef()).toBe(false);
		});
	});

	describe("public API", () => {
		it("exports MenuButtonModule", () => {
			expect(MenuButtonModule).toBeDefined();
		});

		it("Toggle accepts an [id] binding on its control", () => {
			TestBed.configureTestingModule({ imports: [ToggleIdHost] });
			const fixture = TestBed.createComponent(ToggleIdHost);
			fixture.detectChanges();

			const button = fixture.nativeElement.querySelector("button.cds--toggle__button");
			const label = fixture.nativeElement.querySelector("label.cds--toggle__label");
			expect(button.getAttribute("id")).toBe("my-custom-toggle-id");
			expect(label.getAttribute("for")).toBe("my-custom-toggle-id");
		});

		it("Dropdown.menuIsClosed is readable and tracks isOpen", () => {
			TestBed.configureTestingModule({ imports: [Dropdown] });
			const fixture = TestBed.createComponent(Dropdown);
			fixture.detectChanges();
			const dropdown = fixture.componentInstance;

			expect(dropdown.isOpen).toBe(false);
			expect(dropdown.menuIsClosed).toBe(true);

			dropdown.menuIsClosed = false;
			expect(dropdown.isOpen).toBe(true);
			expect(dropdown.menuIsClosed).toBe(false);
		});
	});
});
