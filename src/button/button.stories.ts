import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs/angular";

import { ButtonModule } from "../";

storiesOf("Button", module)
	.addDecorator(
		moduleMetadata({
			imports: [ButtonModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<button ibmButton [size]="size">A button</button>
			<br><br>
			<button ibmButton="secondary" [size]="size">A secondary button</button>
			<br><br>
			<button ibmButton="tertiary" [size]="size">A tertiary button</button>
			<br><br>
			<button ibmButton="ghost" [size]="size">A ghost button</button>
			<br><br>
			<button ibmButton="danger" [size]="size">A danger button</button>
			<br><br>
			<button ibmButton="danger--primary" [size]="size">A primary danger button</button>
		`,
		props: {
			size: select("Size of the buttons", ["normal", "sm"], "normal")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<button ibmButton="skeleton" [size]="size"></button>
		`,
		props: {
			size: select("Size of the buttons", ["normal", "sm"], "normal")
		}
	}));
