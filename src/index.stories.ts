import { storiesOf, moduleMetadata } from "@storybook/angular";
import { Welcome } from "@storybook/angular/demo";

storiesOf("Welcome", module).add("to Storybook", () => ({
	component: Welcome,
	props: {},
}));

// storiesOf("Another Button", module).add("button with link to another story", () => ({
// 	component: Button,
// 	props: {
// 		text: "Go to Welcome Story",
// 		onClick: linkTo("Welcome"),
// 	},
// }));
