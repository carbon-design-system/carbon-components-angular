import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

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
			<button ibmButton>A button</button>
			<br><br>
			<button ibmButton="secondary">A secondary button</button>
			<br><br>
			<button ibmButton="tertiary">A tertiary button</button>
			<br><br>
			<button ibmButton="ghost">A ghost button</button>
			<br><br>
			<button ibmButton="danger">A danger button</button>
			<br><br>
			<button ibmButton="danger--primary">A primary danger button</button>
		`
	}))
	.add("Small", () => ({
		template: `
			<button ibmButton size="sm">A button</button>
			<br><br>
			<button ibmButton="secondary" size="sm">A secondary button</button>
			<br><br>
			<button ibmButton="tertiary" size="sm">A tertiary button</button>
			<br><br>
			<button ibmButton="ghost" size="sm">A ghost button</button>
			<br><br>
			<button ibmButton="danger" size="sm">A danger button</button>
			<br><br>
			<button ibmButton="danger--primary" size="sm">A primary danger button</button>
		`
	}));
