# utils
Code shared across our repos. To be used as a subtree.

## Modules

### position.ts
A robust positioning service pulled from Carbon-Angular.

#### `Position` type

#### `AbsolutePosition` interface

#### `Offset` type

#### Functions in the `position` namespace
##### `getRelativeOffset(target: HTMLElement): Offset`
Finds the offset of `target` relative to all other positioned elements in the DOM

##### `getAbsoluteOffset(target: HTMLElement): Offset`
Finds the absolute page position of the element, irrespctive of any other elements

##### `findRelative(reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition`
Calculates a valid `AbsolutePosition` for `toPosition` given the `reference` element and `position` paramaters. Uses `getRelativeOffset` to find the starting position.

##### `findAbsolute(reference: HTMLElement, toPosition: HTMLElement, position: Position): AbsolutePosition`
Calculates a valid `AbsolutePosition` for `toPosition` given the `reference` element and `position` paramaters. Uses `getAbsoluteOffset` to find the starting position.

##### `findPosition(reference: HTMLElement, toPosition: HTMLElement, position: Position, offsetFunction = getRelativeOffset): AbsolutePosition`
Helper function that can behave as `findAbsolute` or `findRelative` as needed.

##### `checkPlacement(reference: HTMLElement, toPosition: HTMLElement, position: Position): {newPlacement: Position}`
Checks `toPosition` for valid placement given `reference` and `position`. Returns an object containing a potential `newPlacement`.

##### `addOffset(position: AbsolutePosition, top = 0, left = 0): AbsolutePosition`
Helper function to apply additional offset to a given `AbsolutePosition`

##### `setElement(element: HTMLElement, position: AbsolutePosition): void `
Helper function to apply a given `position` to a target `element`.

### a11y.ts
Accssibility helpers.

#### `findSiblingElem`
Finds sibling elements

####`findNextElem`/`findPrevElem`
Uses `findSiblingElem` to find next/previous elements relative to the target

#### `HcModeChecker`

#### `focusNextTree`

#### `focusNextElem`

#### `focusPrevElem`

### Resources
- https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt
- https://stackoverflow.com/questions/32407634/when-to-use-git-subtree
- https://developer.atlassian.com/blog/2015/05/the-power-of-git-subtree/
