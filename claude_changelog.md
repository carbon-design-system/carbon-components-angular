# v5 to v6 upgrade guide

Standalone is here! The Angular project has been updated from v14 to v20, and every component,
directive and pipe in the library is now standalone.

Two things worth knowing before you start:

- No `@Input` or `@Output` has been renamed or removed anywhere in the library, except on `Toggle`.
- Every `NgModule` is still exported, so `import { ButtonModule } from 'carbon-components-angular'`
  keeps working.

For most applications the upgrade is Angular itself plus a few deleted provider constants.

## General

- Angular has been updated from v14 to v20. Angular 20 and 21 are supported.
- Node v16 is no longer supported, use v20 or later.
- TypeScript has been updated from 4.6 to 5.8.
- `@carbon/icons` has been updated from 11.58.0 to 11.90.0.
- Constructor injection has been replaced with the `inject()` function throughout the library.
- 35 more components use `OnPush` change detection, 47 in total.
- Templates use Angular's built-in control flow (`@if`, `@for`, `@switch`). Rendered markup is
  unchanged.

## Common changes

### Standalone components

Every component is standalone. Modules are still exported and still export the same declarables, so
nothing needs to change:

```typescript
import { ButtonModule, DropdownModule } from 'carbon-components-angular';

@Component({ imports: [ButtonModule, DropdownModule] })
```

You can now also import components directly, which tree-shakes better:

```typescript
import { Button, Dropdown, DropdownList } from 'carbon-components-angular';

@Component({ imports: [Button, Dropdown, DropdownList] })
```

If you import directly, note that a few components need their collaborators too: `Dropdown` and
`ComboBox` need `DropdownList`, and `Tile` needs `TileGroup`.

### `inject()` instead of constructor injection (breaking change)

Every component, directive and service now resolves its dependencies with `inject()` and takes **no
constructor arguments**. This only affects you if you extend a library class or call `new` on one.

Old:

```typescript
class MyTooltip extends Tooltip {
	constructor(
		elementRef: ElementRef,
		ngZone: NgZone,
		renderer: Renderer2,
		changeDetectorRef: ChangeDetectorRef,
		private myService: MyService
	) {
		super(elementRef, ngZone, renderer, changeDetectorRef);
	}
}
```

New:

```typescript
class MyTooltip extends Tooltip {
	private myService = inject(MyService);

	constructor() {
		super();
	}
}
```

Inherited members such as `this.elementRef` are still available, only the constructor signature has
changed. The classes most likely to be extended are `Dialog`, `DialogDirective`, `PopoverContainer`,
`Tooltip`, `Toggletip`, `BaseTabHeader`, `BaseNotification`, `Checkbox`, `Modal` and `ModalService`.
`BaseModal` and `BaseIconButton` are unaffected, as neither has a constructor.

### Removed service providers (breaking change)

`I18n`, `IconService`, `DocumentService` and `AnimationFrameServiceSingleton` are now provided in root,
so their provider factories have been removed. Delete them from your `providers`:

- `I18N_SERVICE_PROVIDER` and `I18N_SERVICE_PROVIDER_FACTORY`
- `ICON_SERVICE_PROVIDER` and `ICON_SERVICE_PROVIDER_FACTORY`
- `DOCUMENT_SERVICE_PROVIDER` and `DOCUMENT_SERVICE_PROVIDER_FACTORY`
- `ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER` and `ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY`

Old:

```typescript
@NgModule({
	providers: [I18N_SERVICE_PROVIDER, ICON_SERVICE_PROVIDER, DOCUMENT_SERVICE_PROVIDER]
})
export class AppModule {}
```

New:

```typescript
@NgModule({
	providers: []
})
export class AppModule {}
```

`EXPERIMENTAL_SERVICE_PROVIDER` and `PLACEHOLDER_SERVICE_PROVIDER` are unchanged.

The rest of the services are still **not** provided in root, so they continue to need a provider or the
matching module: `ModalService`, `BaseModalService`, `NotificationService`,
`NotificationDisplayService`, `DialogService`, `PlaceholderService`, `DropdownService`,
`TreeViewService`, `GridService`, `ElementService`, `EventService` and `AnimationFrameService`.

### OnPush change detection

47 components now use `OnPush`, up from 12. The library calls `markForCheck()` wherever it changes its
own state, so declarative usage is unaffected. You only need to act if you mutate a bound object in
place:

Old:

```typescript
this.dropdownItems[0].selected = true;
```

New:

```typescript
this.dropdownItems = this.dropdownItems.map((item, i) =>
	i === 0 ? { ...item, selected: true } : item
);
```

The same applies if you set a field on a component instance through `@ViewChild` — call `markForCheck()`
afterwards.

Newly `OnPush`: `Accordion`, `AccordionItem`, `Breadcrumb`, `BreadcrumbItemComponent`, `BaseIconButton`,
`ButtonSet`, `IconButton`, `CodeSnippet`, `ComboBox`, `ContentSwitcher`, the four `ContextMenu`
components, `DatePicker`, `DatePickerInput`, `Dropdown`, `DropdownList`, `FileUploader`,
`FileComponent`, `InlineLoading`, the three input label components, `Loading`, `NumberComponent`,
`ProgressIndicator`, `Search`, `Tag`, `TagFilter` and the five `Tiles` components.

Note that `provideZoneChangeDetection({ eventCoalescing: true })` has not been validated against the
library yet. New Angular projects enable it by default, so test interaction-heavy components such as
`Table`, `Dropdown`, `Slider` and `Tabs`.

## Changelog

### AI label

- `autoAlign` now defaults to `true`. Set `[autoAlign]="false"` to keep the old positioning.

### Combo box

- If you import components directly rather than using `ComboBoxModule`, you also need `DropdownList`.

### Date picker and date picker input

- The wrapping `<div class="cds--form-item">` has been removed, and the class moved to the host element.
  Check any CSS that relied on the extra element.

Old:

```html
<cds-datepicker>
	<div class="cds--form-item">...</div>
</cds-datepicker>
```

New:

```html
<cds-datepicker class="cds--form-item">...</cds-datepicker>
```

### Dropdown

- New `isOpen` input for the open state.
- `menuIsClosed` has been deprecated and will be removed in v7, use `isOpen` instead. Reads and writes
  still work.

Old:

```typescript
if (this.dropdown.menuIsClosed) { ... }
```

New:

```typescript
if (!this.dropdown.isOpen) { ... }
```

- If you import components directly rather than using `DropdownModule`, you also need `DropdownList`.

### Forms

- `carbon-components-angular/forms` no longer re-exports `RadioModule`, `InputModule` or `ToggleState`.
  Import `RadioModule` from `carbon-components-angular/radio` and `InputModule` from
  `carbon-components-angular/input`. `ToggleState` has been removed, see Toggle below.
- `PasswordInput` and `PasswordInputLabelComponent` are now re-exported.
- `NFormsModule` is unchanged.

### I18n

- `I18N_SERVICE_PROVIDER` and `I18N_SERVICE_PROVIDER_FACTORY` have been removed, `I18n` is now provided
  in root.
- `TranslationStrings` is now an `interface` rather than a `type`. This matters only if you intersect it
  with another type.
- Translation strings are unchanged, no keys have been added, removed or renamed.

### Icon

- `ICON_SERVICE_PROVIDER` and `ICON_SERVICE_PROVIDER_FACTORY` have been removed, `IconService` is now
  provided in root.
- `IconService` registers the built-in Carbon icons itself, so you no longer need to import `IconModule`
  anywhere for `[cdsIcon]` to resolve them.

### Modal

- `AlertModal` no longer takes positional constructor arguments. Creating modals through
  `ModalService.show()` is unaffected.
- If you inject `ModalService` directly in a standalone app, provide `BaseModalService`, `ModalService`
  and `PLACEHOLDER_SERVICE_PROVIDER`, or import `ModalModule` and `PlaceholderModule`.

### Placeholder

- `PLACEHOLDER_SERVICE_PROVIDER` has moved from `placeholder.module.ts` to `placeholder.service.ts`.
  Both are still exported from `carbon-components-angular/placeholder`, so only deep file imports are
  affected.

### Select

- The wrapping `<div>` has been removed. `cds--form-item` and `cds--select--fluid` are now host classes
  on `cds-select`. Check any CSS that relied on the extra element.

Old:

```html
<cds-select>
	<div class="cds--form-item cds--select--fluid">...</div>
</cds-select>
```

New:

```html
<cds-select class="cds--form-item cds--select--fluid">...</cds-select>
```

### Tiles

- Single-select tile groups now deselect sibling tiles in JavaScript instead of relying on native radio
  behaviour, so `selected` is accurate immediately after a click.
- If you import components directly rather than using `TilesModule`, `Tile` also needs `TileGroup`.

### Toggle

`Toggle` no longer extends `Checkbox`, so it no longer inherits every checkbox attribute.

- `ToggleState` has been removed, use a boolean instead.

Old:

```typescript
import { ToggleState } from 'carbon-components-angular';

state: ToggleState = ToggleState.Unchecked;
```

New:

```typescript
state = false;
```

- The following inputs are no longer supported: `name`, `value`, `required`, `title`, `helperText`,
  `invalid`, `invalidText`, `warn`, `warnText`, `readOnly`, `decorator`, `indeterminate` and
  `ariaLabelledby`.
- The `click` and `indeterminateChange` outputs have been removed, use `checkedChange`.
- `toggle()`, `onChange()`, `markForCheckFromGroup()` and `currentCheckboxState` have been removed.
- `cds-toggle` is no longer picked up by `cds-checkbox-group`, so it no longer inherits `disabled` or
  `readOnly` from the group. Bind them on the toggle instead.
- `id`, `disabled`, `checked`, `checkedChange`, `offText`, `onText`, `label`, `size`, `hideLabel`,
  `ariaLabel` and `skeleton` are unchanged, and `[(ngModel)]` and reactive forms work as before.

Old:

```html
<cds-toggle [name]="name" [invalid]="hasError" [invalidText]="message">Label</cds-toggle>
```

New:

```html
<cds-toggle [id]="id" label="Label" [(ngModel)]="value" />
```

### Tree view

- The tree node types are now exported from `carbon-components-angular/treeview`.

### UI shell

- `cds--header__menu-item--current` is now always applied to the active header item, in addition to any
  `activeLinkClass` you set. Previously setting `activeLinkClass` replaced it. Use CSS if you need to
  override the default active styling.
- `RouterLinkExtendedDirective` extends `RouterLink` instead of `RouterLinkWithHref`, which Angular
  removed in v19.
- All header, side nav and panel component classes are now exported, so
  `import { Header, SideNav, HeaderItem } from 'carbon-components-angular'` works.

### Utils

- `DOCUMENT_SERVICE_PROVIDER`, `DOCUMENT_SERVICE_PROVIDER_FACTORY`,
  `ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER` and
  `ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY` have been removed. `DocumentService` and
  `AnimationFrameServiceSingleton` are now provided in root.

## Components with no changes to your code

These have been converted to standalone and in some cases moved to `OnPush` and `inject()`, but nothing
in your templates or styles needs to change: accordion, aspect ratio, breadcrumb, button, checkbox,
code snippet, combo button, common, contained list, content switcher, context menu, dialog,
documentation component, experimental, file uploader, grid, inline loading, input, layer, layout, link,
list, loading, menu button, notification, number input, pagination, popover, progress bar,
progress indicator, radio, search, skeleton, slider, structured list, table, tabs, tag, theme,
time picker, time picker select, toggletip and tooltip.

Table models and interfaces (`TableModel`, `TableItem`, `TableHeaderItem`, `TableAdapter`) are
unchanged.

## For maintainers

- The published package still declares only `@carbon/styles` as a peer dependency. Consider adding the
  Angular 20/21 range to `src/package.json` so npm can warn on an unsupported Angular version.
- `@carbon/icon-helpers` is `10.54.0` in `src/package.json` but `10.74.0` in the root `package.json`.
- `tsconfig.json` sets `useDefineForClassFields: false`, and six classes depend on it — `ModalService`,
  `Notification`, `Toast`, `ActionableNotification`, `OverflowMenuPane` and `OverflowMenuCustomPane`
  re-declare an inherited injected field with no initialiser. Removing the flag would overwrite those
  values with `undefined` at runtime.
- tslint has been replaced with ESLint, Storybook updated from 7 to 9, and the Protractor e2e project
  removed. Integration apps now cover Angular 20 and 21 only.

Let us know if you run into any issues with the migration on Slack.
