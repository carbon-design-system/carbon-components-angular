import { ComponentFixture, tick } from "@angular/core/testing";

/**
 * Helpers for the `change detection` suites, which assert that state written outside of an
 * `@Input()` still reaches the DOM. Those assertions hold under `Default` and are the ones
 * to re-check when a component moves to `OnPush`.
 */

/**
 * Advances the `fakeAsync` clock, then runs change detection from the host.
 */
export function advancedFakeAsync(fixture: ComponentFixture<any>, millis = 0): void {
	tick(millis);
	fixture.detectChanges();
}

/**
 * Trimmed text of the first match, or `null` when nothing matches.
 */
export function textOf(fixture: ComponentFixture<any>, selector: string): string | null {
	const element = fixture.nativeElement.querySelector(selector);
	return element ? element.textContent.trim() : null;
}

/**
 * True when the first match carries `className`. A missing element is `false`.
 */
export function hasClass(fixture: ComponentFixture<any>, selector: string, className: string): boolean {
	const element = fixture.nativeElement.querySelector(selector);
	return element ? element.classList.contains(className) : false;
}
