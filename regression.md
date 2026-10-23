# v6 Regressions — `next` vs `master`

> ## ✅ All regressions are now fixed (staged, not committed)
>
> Every item below has been addressed in the working tree. R6 and R8 were already handled upstream;
> the remaining six were fixed here. Verification: **`eslint` 0 errors**, **full suite 647/647 passing**
> (including 9 new guard tests in `src/di-singletons.spec.ts`), library build clean.
>
> | # | Status | What changed |
> |---|---|---|
> | R1 | ✅ Fixed | `providers: [Router]` removed from `Header` and `HeaderItem` |
> | R2 | ✅ Fixed | `I18n` removed from `ComboBox` and `OverflowMenuPane` providers |
> | R3 | ✅ Fixed | `PlaceholderService` → `PLACEHOLDER_SERVICE_PROVIDER` in 5 files; dropped entirely from `IconDirective` and `BreadcrumbItemComponent` |
> | R4 | ✅ Fixed | `MenuButton` renamed back to `MenuButtonModule` |
> | R5 | ✅ Fixed | `@Input()` restored on `Toggle.id` |
> | R6 | ✅ Upstream | Fixed on `master` by PR #3557, arrived via merge |
> | R7 | ✅ Fixed | `menuIsClosed` getter re-added alongside the setter |
> | R8 | ✅ Upstream | `@carbon/icons` bumped to `11.90.0` in a separate staged change |
> | L1 | ⚪ Not done | Latent only; see [L1](#l1--usedefineforclassfields-false-is-load-bearing) |
>
> The write-ups below are kept as the record of what was wrong and why. Each "Fix" block is now the
> change that was applied.
>
> **Baseline:** `next` @ `cf6742cb3`, `master` @ `e7e0b0a35` (95 commits ahead, 0 behind).
>
> **What this document is.** The behavioural regressions found while diffing `next` against
> `master` for the v6 major release. These are changes that **were not the point of the migration** —
> they are side-effects of the standalone / `inject()` / control-flow conversions. Deliberate breaking
> changes (Angular 20 baseline, `Toggle` no longer extending `Checkbox`, `OnPush` adoption, removed
> provider constants) are documented in [`claude_changelog.md`](claude_changelog.md) and are **not**
> repeated here.
>
> **Verification status.** R1, R2, R3, R5 and R7 were **confirmed at runtime** against the merged
> `next` tree before being fixed, using Jasmine specs run through the project's own Karma/ChromeHeadless
> setup (`npx ng test`, Angular 20.3.21, Chrome Headless 155). R6 was confirmed broken on the first pass
> and is now confirmed fixed. R4 and R8 are static findings (a missing export and a dependency version —
> neither has a runtime surface). Observed values are quoted under each item, and the throwaway specs
> have been replaced by a permanent guard suite at `src/di-singletons.spec.ts`.

---

## Summary table

| # | Regression | Component(s) | Severity | Verified |
|---|---|---|---|---|
| [R1](#r1--header-and-headeritem-construct-a-second-router) | `providers: [Router]` creates a second, unconfigured `Router` | `Header`, `HeaderItem` | 🔴 Blocker | ✅ **Fixed** |
| [R2](#r2--combobox-and-overflowmenupane-construct-their-own-i18n) | `providers: [I18n]` discards all app translation overrides | `ComboBox`, `OverflowMenuPane` | 🔴 Blocker | ✅ **Fixed** |
| [R3](#r3--component-scoped-placeholderservice-bypasses-cds-placeholder) | `providers: [PlaceholderService]` bypasses `<cds-placeholder>` | 7 declarables | 🔴 Blocker | ✅ **Fixed** |
| [R4](#r4--menubuttonmodule-renamed-to-menubutton) | `MenuButtonModule` silently renamed to `MenuButton` | `menu-button` | 🔴 Blocker | ✅ **Fixed** |
| [R5](#r5--toggles-id-binding-silently-lands-on-the-wrong-element) | `[id]` silently lands on the host, not the input | `Toggle` | 🟠 High | ✅ **Fixed** |
| [R6](#r6--progressindicator-skeleton-guards---resolved) | Three skeleton-mode guards dropped | `ProgressIndicator` | 🟠 High | ✅ **Fixed upstream** |
| [R7](#r7--dropdownmenuisclosed-became-write-only-with-no-deprecation-period) | `menuIsClosed` became write-only, returns `undefined` | `Dropdown` | 🟡 Medium | ✅ **Fixed** |
| [R8](#r8--carbonicons-downgraded-six-minor-versions) | `@carbon/icons` downgraded 11.58.0 → 11.52.0 | `icon` | 🟡 Medium | ✅ **Fixed upstream** |

**Score: 8 found, 8 fixed.** Six were fixed in this working tree; R6 arrived fixed from `master`
(PR #3557) and R8 was superseded by a staged `@carbon/icons` bump to `11.90.0`.

**Bonus:** [L1 — `useDefineForClassFields: false` is load-bearing](#l1--usedefineforclassfields-false-is-load-bearing) is a
latent trap rather than a current regression, but it will become one if anyone "tidies" the tsconfig.

**Root cause pattern.** R1, R2 and R3 are all the same mistake: during the standalone conversion,
services a component needed were added to that component's `providers` array so it would work without
an `NgModule`. That is the right instinct for **per-instance** services (`EventService`,
`ElementService`, `DropdownService`) but wrong for **application singletons**. Angular resolves a
component-level provider by constructing a *new* instance, shadowing the root one for that component's
entire subtree.

---

## R1 — `Header` and `HeaderItem` construct a second `Router`

**Severity: 🔴 Blocker** · Files: `src/ui-shell/header/header.component.ts:60`,
`src/ui-shell/header/header-item.component.ts:53`

### The change

```diff
  @Component({
  	selector: "cds-header, ibm-header",
  	imports: [NgTemplateOutlet, RouterLink, AsyncPipe],
+ 	providers: [Router]
  })
  export class Header {
-   constructor(public i18n: I18n, protected domSanitizer: DomSanitizer, @Optional() protected router: Router) { }
+   protected router = inject(Router, { optional: true })!;
  }
```

`master` had **no** component provider and resolved the application's `Router` (or `null`) through
`@Optional()`. `next` adds `providers: [Router]`.

`Router` is `@Injectable({ providedIn: "root" })` and is inherently a singleton — it owns the
application's navigation state, is wired to `Location`/`History` by `provideRouter()`, and is what
`<router-outlet>` listens to.

### Verified behaviour

```
R1 same Router instance?  false
```

A `Router` injected inside `<cds-header>` is a **different object** than the one the application
bootstrapped. The `RouterLink` and `RouterLinkActive` directives in the header's own template inject
that second instance.

### Impact

- Header nav links will not drive the application's `<router-outlet>`.
- `routerLinkActive` will never match, so `cds--header__menu-item--current` never applies.
- A second `Router` subscribing to `Location` can produce duplicate or conflicting navigation handling.

### Fix — applied

```diff
- 	providers: [Router]
```

Deleted from both files. The code already uses `inject(Router, { optional: true })`, which correctly
resolves the app router and degrades to `null` when `RouterModule`/`provideRouter()` is absent — so the
provider added nothing even in the no-router case it may have been intended to cover. The `Router`
import is still needed for that `inject` call and was left in place.

---

## R2 — `ComboBox` and `OverflowMenuPane` construct their own `I18n`

**Severity: 🔴 Blocker** · Files: `src/combobox/combobox.component.ts:241`,
`src/dialog/overflow-menu/overflow-menu-pane.component.ts:39`

### The change

```diff
  @Component({
  	selector: "cds-combo-box, ibm-combo-box",
  	providers: [
  		{ provide: NG_VALUE_ACCESSOR, useExisting: ComboBox, multi: true },
+ 		DropdownService,
+ 		AnimationFrameService,
+ 		AnimationFrameServiceSingleton,
+ 		PlaceholderService,
+ 		I18n                              // ← application singleton
  	]
  })
```

`I18n` became `@Injectable({ providedIn: "root" })` in v6 specifically so there would be one instance
holding the app's translation state. No component on `master` provided `I18n`, and no other component
in v6 does either — only these two.

### Verified behaviour

The test overrode a string on the root `I18n`, then read it back through each component's own injector
and — for `ComboBox` — off the rendered DOM:

```
ComboBox
  identical instance                    false
  root  COMBOBOX.PLACEHOLDER            "OVERRIDDEN"
  ComboBox's own I18n                   "Filter..."     <- built-in English default
  rendered <input placeholder>          "Filter..."     <- end-to-end: the user sees the default

OverflowMenuPane
  identical instance                    false
  root  OVERFLOW_MENU.ICON_DESCRIPTION  "OVERRIDDEN"
  pane's own I18n                       "Options"       <- built-in English default
```

The rendered-DOM line is the one that matters: this is not just a DI-identity curiosity, the override
genuinely does not reach the markup.

### Impact

**Every** application that localises or customises strings is affected. These calls now silently have
no effect on these two components:

```typescript
i18n.setLocale("fr", frenchStrings);                      // locale + strings
i18n.set({ COMBOBOX: { PLACEHOLDER: "Choisir…" } });      // strings only
```

Note `setLocale` also pushes to a `locale` subject that locale-aware components (DatePicker) read, so
the component-scoped instances miss the locale change as well as the strings.

`ComboBox` renders `COMBOBOX.PLACEHOLDER`, `COMBOBOX.CLEAR_SELECTIONS`, `COMBOBOX.CLEAR_SELECTED` and
the whole `COMBOBOX.A11Y.*` block (including screen-reader labels). `OverflowMenuPane` renders
`OVERFLOW_MENU.*`. A French app gets English combo-boxes and English overflow-menu a11y labels.

### Fix — applied

Removed `I18n` from both `providers` arrays. The rest were kept — `DropdownService`,
`AnimationFrameService` and `AnimationFrameServiceSingleton` are legitimately per-instance. The `I18n`
import stays in both files, since each still does `inject(I18n)`.

---

## R3 — Component-scoped `PlaceholderService` bypasses `<cds-placeholder>`

**Severity: 🔴 Blocker** · Files: `dropdown.component.ts:239`, `combobox.component.ts:240`,
`overflow-menu.component.ts`, `overflow-menu.directive.ts`, `modal.component.ts`,
`breadcrumb-item.component.ts`, `icon.directive.ts`

### The change

Seven declarables now list the **bare class** `PlaceholderService` in `providers`. None did on `master`.

`PlaceholderService`'s own source documents the contract:

> *"Singleton service used to register the container for out-of-flow components to insert into."*

`<cds-placeholder>` registers its `ViewContainerRef` on that singleton. This is why the library ships
`PLACEHOLDER_SERVICE_PROVIDER` — an `@Optional() @SkipSelf()` factory that deliberately resolves to the
parent instance instead of creating a new one:

```typescript
export const PLACEHOLDER_SERVICE_PROVIDER = {
	provide: PlaceholderService,
	deps: [[new Optional(), new SkipSelf(), PlaceholderService]],
	useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY   // returns parentService || new PlaceholderService()
};
```

`Placeholder` itself uses that constant correctly. The seven components above use the bare class, which
defeats it.

### Verified behaviour

```
R3 same PlaceholderService instance? false
   root:     PlaceholderService({ viewContainerRef: null, viewContainerMap: Map() })
   Dropdown: PlaceholderService({ viewContainerRef: null, viewContainerMap: Map() })   ← distinct object
```

A fresh instance has `viewContainerRef = null`, so `hasPlaceholderRef()` returns `false` no matter what
the app registered.

### Impact

The consumers degrade silently rather than crashing:

```typescript
// dropdown.service.ts — appendToBody()
if (this.placeholderService.hasPlaceholderRef()) {
	this.placeholderService.appendElement(dropdownWrapper);   // ← never taken in v6
} else {
	document.body.appendChild(dropdownWrapper);               // ← always taken in v6
}
```

```typescript
// dialog.service.ts — open()
} else if (!this.placeholderService.hasPlaceholderRef()) {
	dialogRef = viewContainer.createComponent(…);             // ← renders inline instead
}
```

Applications that render `<cds-placeholder>` — the documented way to control stacking context, escape
`overflow: hidden` clipping, and manage z-index for out-of-flow content — will find dropdown menus,
combo-box menus and overflow menus going to `document.body` or rendering inline instead. In a modal or
a scrollable panel this shows up as menus clipped, mispositioned, or painted behind the overlay.

`PlaceholderService.createComponent()` will also log
`"No view container defined! Likely due to a missing cds-placeholder"` for `id`-targeted placeholders.

### Fix — applied

Swapped the bare class for the existing provider constant, matching what `Placeholder` already does:

```diff
- providers: [ …, PlaceholderService ]
+ providers: [ …, PLACEHOLDER_SERVICE_PROVIDER ]
```

Applied in `dropdown.component.ts`, `combobox.component.ts`, `overflow-menu.component.ts`,
`overflow-menu.directive.ts` and `modal.component.ts`.

`IconDirective` and `BreadcrumbItemComponent` had the provider **removed outright** along with the now
unused import — neither has anything in its subtree that resolves `PlaceholderService`, so there was
nothing to keep in scope.

### R3b — `IconDirective` provides `PlaceholderService` for no reason

```typescript
@Directive({
	selector: "[cdsIcon], [ibmIcon]",
	providers: [PlaceholderService],   // ← never injected, never referenced
	standalone: true
})
export class IconDirective implements AfterViewInit, OnChanges { … }
```

`IconDirective` has no reference to `PlaceholderService` anywhere. Beyond shadowing the singleton for
any projected content, this allocates a service instance **per icon** — and icons are among the most
numerous elements on a Carbon page. Delete the `providers` array.

---

## R4 — `MenuButtonModule` renamed to `MenuButton`

**Severity: 🔴 Blocker** · File: `src/menu-button/menu-button.module.ts:20`

### The change

```diff
  @NgModule({
- 	imports: [CommonModule, ButtonModule, IconModule, ContextMenuModule],
+ 	imports: [CommonModule, IconDirective, ContextMenuModule, MenuButtonComponent],
  	exports: [MenuButtonComponent],
- 	declarations: [MenuButtonComponent],
  	providers: []
  })
- export class MenuButtonModule { }
+ export class MenuButton {}
```

`MenuButtonModule` no longer exists anywhere in `src/` — verified with
`git grep "MenuButtonModule" next -- src/` (zero hits).

### Why this reads as accidental

- **No other module in the library dropped its `*Module` suffix.** All 63 others kept theirs.
- `ComboButtonModule` — the sibling module, converted in the same pass with an otherwise identical
  diff — kept its name.
- `MenuButton` now collides conceptually with the component it exports, `MenuButtonComponent`.
- The rename appears in a commit titled `chore: add missing button module`, which describes the
  `imports` change, not a rename.

### Impact

Hard compile break for every consumer of the menu button, with a confusing error — `MenuButton` *is*
exported, so the name looks available but means something else.

```typescript
// ❌ v6: TS2305 — module has no exported member 'MenuButtonModule'
import { MenuButtonModule } from "carbon-components-angular";
```

### Fix — applied

```diff
- export class MenuButton {}
+ export class MenuButtonModule {}
```

If the rename is genuinely wanted after all, ship a deprecated alias for one major version instead:

```typescript
export class MenuButtonModule {}
/** @deprecated use MenuButtonModule */
export { MenuButtonModule as MenuButton };
```

---

## R5 — `Toggle`'s `[id]` binding silently lands on the wrong element

**Severity: 🟠 High** · File: `src/toggle/toggle.component.ts`

### The change

`Toggle` no longer extends `Checkbox` — that part is **intended** and well-documented. The regression is
a second-order effect nobody appears to have accounted for.

Angular propagates directive input metadata down a class hierarchy. On `master`, `Checkbox` declared
`@Input() id`, and `Toggle extends Checkbox` re-declared `id` as a plain field:

```typescript
// master — Toggle extends Checkbox
id = "toggle-" + Toggle.toggleCount;   // undecorated, but @Input metadata inherited from Checkbox
```

So `[id]` **was** a working input on `<cds-toggle>` in v5. With the inheritance gone, the `@Input`
metadata went with it, and the field is now just a field.

### Verified behaviour

Template under test: `<cds-toggle [id]="'my-custom-id'" label="L">`

```
N1 host <cds-toggle> id   = my-custom-id      ← went to the custom element
N1 inner <button> id      = toggle-0          ← unchanged auto-generated id
N1 inner <label> for      = toggle-0
```

Crucially, **this does not raise a template error.** Because `id` is a native DOM property, Angular
falls back to setting it on the host element rather than reporting
*"Can't bind to 'id' since it isn't a known property"*. The binding appears to work and does nothing
useful.

### Impact

- Silent failure — no compile error, no console warning, and the attribute *is* present in the DOM, so
  it survives casual inspection.
- `document.getElementById("my-custom-id")` returns the `<cds-toggle>` wrapper, not the control.
- An external `<label for="my-custom-id">` no longer associates with the toggle's `role="switch"`
  button. **This is an accessibility regression**, and it is invisible to automated a11y scanners
  because the *internal* label/`for` pair is still intact.
- Any test or automation selecting the toggle's button by a supplied id breaks.

### Fix — applied

```diff
- 	id = "toggle-" + Toggle.toggleCount;
+ 	@Input() id = "toggle-" + Toggle.toggleCount;
```

One line, and it restores v5 behaviour. Verified: `[id]="'my-custom-toggle-id'"` now sets both the inner
`<button id>` and the `<label for>`.

Note this was the only one of `Toggle`'s lost inputs worth restoring silently — the others (`name`,
`value`, `invalid`, `helperText`, `readOnly`, …) produce a loud template error, so they are
self-announcing and their removal is a documented, intentional part of dropping the `Checkbox`
inheritance. `id` was the one that failed silently.

---

## R6 — `ProgressIndicator` skeleton guards — ✅ RESOLVED

**Severity: ✅ Resolved** · File: `src/progress-indicator/progress-indicator.component.ts`

Three `skeleton` guards were lost during the `*ngIf` → `@if` / `*ngFor` → `@for` migration. **All three
have since been restored** and the fix is in `next`.

### Resolution

Fixed on `master`, not on `next`:

| Commit | Title |
|---|---|
| `a158e438f` | `fix: hide secondary label when skeleton is true` |
| `330b65c6a` | `fix: ignore click when skeleton is true` |

Merged via PR #3557 (issue #3398) and pulled into `next` by `cf6742cb3`. Both commits are ancestors of
`master` *and* `next`, so this is no longer a `next`-vs-`master` difference — the remaining diff for this
file is indentation and control-flow syntax only.

### Re-verified at runtime

Tested with `[skeleton]="true"` over real step data carrying both `onClick` and `secondaryLabel` — the
exact case that failed on the first pass:

```
--unclickable: true        stepSelected emissions: 0        secondary labels rendered: 0
            (was false)                     (was 1)                            (was 2)
```

**No action needed.** The original findings are kept below for the record.

---

### Original findings (for the record)

### 6a. `onClick()` lost its skeleton guard

```diff
  onClick(index: number) {
- 	if (this.skeleton) {
- 		return;
- 	}
  	if (index !== this.current && typeof this.steps[index].onClick === "function") {
  		this.steps[index].onClick();
  	}
  	this.stepSelected.emit({ step: this.steps[index], index });
  }
```

**Verified** with `ProgressIndicator.skeletonSteps(3)` and `[skeleton]="true"`:

```
R7 found skeleton step button?  true
R7 stepSelected emissions = 1       ← expected 0
```

A click on a loading placeholder now emits `stepSelected`. For `skeletonSteps()`-generated steps,
`step.onClick` is undefined so no user callback fires, but the output still emits — enough to advance a
wizard or fire analytics while the UI is still in its loading state.

### 6b. `--unclickable` class lost its skeleton term

```diff
- 'cds--progress-step-button--unclickable': !step.onClick || current === i || skeleton
+ 'cds--progress-step-button--unclickable': !step.onClick || current === i
```

**Verified** with `[skeleton]="true"` and steps that *do* carry `onClick` (the case where the dropped
term mattered):

```
N2 step buttons = 2 | --unclickable flags = [false,false]     ← expected [true,true]
```

With `skeletonSteps()` the regression is masked, because `!step.onClick` is already `true`. It only
surfaces when an app renders its real step data with `[skeleton]="true"` during loading — which is the
normal pattern for preserving layout.

### 6c. Secondary labels now render in skeleton mode

```diff
- <p *ngIf="step.secondaryLabel && !skeleton" class="cds--progress-optional">{{step.secondaryLabel}}</p>
+ @if (step.secondaryLabel) {
+ 	<p class="cds--progress-optional">{{step.secondaryLabel}}</p>
+ }
```

**Verified:**

```
N2 secondary labels rendered = 2 | texts = ["SECONDARY-A","SECONDARY-B"]   ← expected 0
```

Real text now leaks through the skeleton placeholder.

### Fix — already applied upstream

```diff
  onClick(index: number) {
+ 	if (this.skeleton) {
+ 		return;
+ 	}
  	…
  }
```
```diff
- 'cds--progress-step-button--unclickable': !step.onClick || current === i
+ 'cds--progress-step-button--unclickable': !step.onClick || current === i || skeleton
```
```diff
- @if (step.secondaryLabel) {
+ @if (step.secondaryLabel && !skeleton) {
```

---

## R7 — `Dropdown.menuIsClosed` became write-only with no deprecation period

**Severity: 🟡 Medium** · File: `src/dropdown/dropdown.component.ts:426-433`

### The change

```diff
- menuIsClosed = true;
+ @Input() isOpen = false;
+
+ /** Deprecated as of v6 - Will be removed in v7 */
+ set menuIsClosed(isClosed: boolean) {
+ 	this.isOpen = !isClosed;
+ 	this.changeDetectorRef.markForCheck();
+ }
```

Introducing `isOpen` and deprecating `menuIsClosed` is a good change. The problem is that the
**getter was not kept**, so a property documented as deprecated-but-available in v6 is in fact already
half-removed.

### Verified behaviour

```
R5 isOpen = false | menuIsClosed = undefined
```

### Impact

Writing still works, so the documented deprecation path is intact. **Reading silently returns
`undefined`**, which is falsy — so the common guard inverts rather than erroring:

```typescript
if (this.dropdown.menuIsClosed) {   // undefined → falsy → branch never taken
	this.dropdown.toggleMenu();
}
```

TypeScript catches direct reads on a typed reference ("only has a setter"), but not `any`-typed
references, `@ViewChild` results without an explicit type, or template reads.

### Fix — applied

Added the getter back for the deprecation window:

```diff
+ /** Deprecated as of v6 - Will be removed in v7 - Use `isOpen` instead */
+ get menuIsClosed(): boolean {
+ 	return !this.isOpen;
+ }
```

Both accessors now carry the same "use `isOpen` instead" note.

---

## R8 — `@carbon/icons` downgraded six minor versions

**Severity: 🟡 Medium** · File: `src/package.json`

```diff
  "dependencies": {
-   "@carbon/icon-helpers": "10.37.0",
-   "@carbon/icons": "11.58.0",
+   "@carbon/icon-helpers": "10.54.0",
+   "@carbon/icons": "11.52.0",
```

`@carbon/icon-helpers` moved **forward** in the same commit while `@carbon/icons` moved **backward** —
the asymmetry is what makes this look like a merge artifact rather than a decision. The version is
pinned exactly (no `^`), so consumers receive exactly 11.52.0.

`src/package.json` is what `ng-packagr` publishes (see `src/ng-package.json` and
`scripts/add-package-scripts.js`), so this reaches npm.

At the time this was found the repo had 11.77.1 installed locally, which is why nothing failed in
development — the downgrade would only have bitten consumers of the published package.

### Impact

The 58 icons `IconService` self-registers all predate 11.52, so the library's built-ins are fine. The
risk is for applications that register additional icons:

```typescript
import { SomeNewerIcon16 } from "@carbon/icons/es/some-newer-icon/16";
// ❌ module not found if the icon landed between 11.52 and 11.58
```

Shipping a dependency downgrade inside a major release is also a confusing signal.

### Fix — superseded upstream

Resolved by a separate staged change that bumps the Carbon dependencies well past `master`:

```diff
-   "@carbon/icons": "11.52.0",
+   "@carbon/icons": "11.90.0",
-   "@ibm/telemetry-js": "^1.5.0",
+   "@ibm/telemetry-js": "^1.12.0",
```

with `@carbon/styles` → `1.117.0` and `@carbon/pictograms` → `12.86.0` in the root `package.json`. No
further action needed for this item.

`package-lock.json` has since been regenerated and is in sync (`@carbon/icons` resolves to `11.90.0`,
`@carbon/styles` to `1.117.0`).

⚠️ One thing still outstanding, not part of this fix set: `@carbon/icon-helpers` is `10.54.0` in
`src/package.json` but `10.74.0` in the root `package.json`. The mismatch predates the bump, but it means
the published package pins an older helper than the repo develops against.

---

## L1 — `useDefineForClassFields: false` is load-bearing

**Severity: 🔵 Latent** (not currently broken) · File: `tsconfig.json`

Six classes re-declare a field that the parent initialises with `inject()`, without an initialiser of
their own:

```typescript
// src/notification/notification.component.ts
export class Notification extends BaseNotification {
	protected notificationDisplayService: NotificationDisplayService;   // no initializer
	protected i18n: I18n;
	constructor() { super(); }
}
```

Affected: `ModalService`, `Notification`, `Toast`, `ActionableNotification`, `OverflowMenuPane`,
`OverflowMenuCustomPane`.

`next` bumped `target` to `ES2022`, where `useDefineForClassFields` **defaults to `true`**. Under that
default these declarations emit `Object.defineProperty(this, "i18n", { value: undefined })` in the
subclass constructor, **overwriting the parent's injected value with `undefined`** — a null-reference
crash on first use.

It works today only because `tsconfig.json` explicitly sets:

```json
"useDefineForClassFields": false
```

This is correct as shipped. But it is an invisible dependency: the flag looks like leftover
ES2020-compat cruft, and removing it would break six classes at runtime with no compile error.

### Fix

Either add a comment pinning the flag, or — better — delete the redundant re-declarations so the code
no longer depends on it:

```diff
  export class Notification extends BaseNotification {
- 	protected notificationDisplayService: NotificationDisplayService;
- 	protected i18n: I18n;
  	constructor() { super(); }
  }
```

The parent's `protected` members are already visible to the subclass, so the re-declarations serve no
purpose.

---

## What was changed

### Source fixes (10 files)

| File | Change |
|---|---|
| `src/ui-shell/header/header.component.ts` | R1 — dropped `providers: [Router]` |
| `src/ui-shell/header/header-item.component.ts` | R1 — dropped `providers: [Router]` |
| `src/combobox/combobox.component.ts` | R2 + R3 — dropped `I18n`, swapped to `PLACEHOLDER_SERVICE_PROVIDER` |
| `src/dialog/overflow-menu/overflow-menu-pane.component.ts` | R2 — dropped `I18n` |
| `src/dropdown/dropdown.component.ts` | R3 + R7 — swapped provider, re-added `menuIsClosed` getter |
| `src/dialog/overflow-menu/overflow-menu.component.ts` | R3 — swapped provider |
| `src/dialog/overflow-menu/overflow-menu.directive.ts` | R3 — swapped provider |
| `src/modal/modal.component.ts` | R3 — swapped provider |
| `src/icon/icon.directive.ts` | R3 — removed provider + unused import |
| `src/breadcrumb/breadcrumb-item.component.ts` | R3 — removed provider + unused import |
| `src/menu-button/menu-button.module.ts` | R4 — restored `MenuButtonModule` |
| `src/toggle/toggle.component.ts` | R5 — `@Input()` on `id` |

### New guard suite

`src/di-singletons.spec.ts` — 9 tests, all passing. These are the assertions that would have caught the
four blockers:

| Test | Guards |
|---|---|
| `Header` / `HeaderItem` resolve the application `Router` | R1 |
| `ComboBox` resolves the application `I18n` **and sees its overrides** | R2 |
| `OverflowMenuPane` resolves the application `I18n` | R2 |
| `Dropdown` / `OverflowMenu` resolve the application `PlaceholderService` | R3 |
| `MenuButtonModule` is exported | R4 |
| `Toggle` accepts an `[id]` binding on its control | R5 |
| `Dropdown.menuIsClosed` is readable and tracks `isOpen` | R7 |

### Verification

| Check | Result |
|---|---|
| `npx eslint` | **0 errors**, 24 warnings — all pre-existing (output naming, `no-console`, one a11y) |
| `npx ng test --no-watch` | **647 passing**, 0 failing, 2 skipped |
| `npx ng build` (ng-packagr) | clean |

### Not done

| # | Item | Why |
|---|---|---|
| L1 | Remove the six redundant field re-declarations | Latent only — currently correct because `useDefineForClassFields: false`. It is a cleanup, not a regression fix, so it is left for a separate change. |

### Still worth considering

A broader structural guard than the targeted tests above: assert that no component's `providers` array
contains a class declared `providedIn: "root"`. That would have caught R1 and R2 generically rather than
one component at a time, and would stop the same mistake recurring in the next migration.
