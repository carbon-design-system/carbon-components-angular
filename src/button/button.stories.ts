import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs/angular";

import { ButtonModule } from "./button.module";
import { IconModule } from "../icon/icon.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Button", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive" disabled="true">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive">
				With icon<svg class="cds--btn__icon" ibmIcon="add" size="16"></svg>
			</button>
			<br><br>
			<ibm-button-set>
				<button ibmButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
				<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive">Button</button>
			</ibm-button-set>
		`,
		props: {
			ibmButton: select(
				"Button kind",
				["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", "danger--tertiary", "danger--ghost"],
				"primary"),
			isExpressive: boolean("Expressive button style", false),
			size: select("Size of the buttons", ["sm", "md", "lg", "xl", "2xl"], "lg")
		}
	}))
	.add("Icon only", () => ({
		template: `
			<ibm-icon-button
				id="icon-btn1"
				type="button"
				[kind]="kind"
				[size]="size"
				[align]="align"
				[btnNgClass]="{
					'example-global-class': true
				}"
				[btnAttributes]="{
					'aria-label': 'Example button aria-label'
				}"
				[disabled]="disabled"
				description="Icon Description"
				(click)="onClick($event)"
				(mouseenter)="onMouseenter($event)"
				(mouseleave)="onMouseleave($event)"
				(focus)="onFocus($event)"
				(blur)="onBlur($event)">
				<svg class="cds--btn__icon" ibmIcon="copy" size="16"></svg>
			</ibm-icon-button>
		`,
		props: {
			kind: select(
				"Button kind",
				["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", "danger--tertiary", "danger--ghost"],
				"primary"),
			size: select("Size of the buttons", ["sm", "md", "lg"], "lg"),
			align: select("Alignment of popover",
				[
					"top",
					"top-left",
					"top-right",
					"bottom",
					"bottom-left",
					"bottom-right",
					"left",
					"left-top",
					"left-bottom",
					"right",
					"right-top",
					"right-bottom"
				]
				, "top"),
			disabled: boolean("Disable button", false),
			onClick: action("click"),
			onMouseenter: action("Mouseenter"),
			onMouseleave: action("Mouseleave"),
			onFocus: action("Focus"),
			onBlur: action("Blur")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<button ibmButton skeleton="true"></button>
			&nbsp;
			<button ibmButton skeleton="true" size="sm"></button>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_button.button.html"></ibm-documentation>
		`
	}));
