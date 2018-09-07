import { storiesOf } from "@storybook/angular";

// import "carbon-components/scss/globals/scss/styles.scss";

storiesOf("Welcome", module).add("to Carbon Angular", () => ({
	template: `
		<h1>Carbon Components Angular</h1>
		<h2>An Angular implementation of the Carbon Design System</h2>
		<a href="https://angular.carbondesignsystem.com/documentation">Static documentation</a>
	`,
	props: {},
}));
