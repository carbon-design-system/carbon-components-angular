# Sample

demo: [https://pages.github.ibm.com/peretz-next/neutrino/sample](https://pages.github.ibm.com/peretz-next/neutrino/sample)

## Interfaces
### Sample interface
interface: SampleInterface

source: `src/sample/sample.interface.ts`

```typescript
export interface SampleInterface {
	required: string;
	optional?: boolean;
}
```
Document the interface completely, and note any special cases or otherwise ambiguous cases.

### Sample base class
class: SampleBase

source: `src/sample/sample-base.class.ts`

```typescript
export class SampleBase {
	@Input() foo: SampleInterface;
	@Output() bar: EventEmitter<Object>;
	public type: "single" | "multi" = "single";
	getNextFoo(): SampleInterface { return; }
}
```
Document any base classes and specific implementation notes here.

## Components
### Sample
class: Sample

selector: `n-sample`

source: `src/sample/sample.component.ts`

**Inputs:**

| @Input | Type            | Default value |
| ------ | --------------- | ------------- |
| foo    | SampleInterface | undefined     |

**Outputs:**

| @Output | Value           |
| ------- | --------------- |
| bar     | SampleInterface |

Document input and output special cases here, and include a code example of the common use case the component is designed for.

Ex:
```html
<n-sample></n-sample>
```


### SampleSub
class: SampleSub

selector: `n-sample-sub`

source: `src/sample/subcomponent/sample-sub.component.ts`

**Inputs:**

| @Input | Type            | Default value |
| ------ | --------------- | ------------- |
| foo    | SampleInterface | undefined     |

Same as above, though this time with subcomponents. **Note** sub components should live in folders nested from their parent, sibling components should live side by side.

Ex:
```html
<n-sample-sub></n-sample-sub>
```
```typescript
// typscript code for the demo
const foo: number = 42;
```
