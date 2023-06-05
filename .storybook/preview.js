// load global styles
import { breakpoints } from '@carbon/layout';

// Add compodoc
import { setCompodocJson } from "@storybook/addon-docs/angular";
import {
	classes,
	components,
	directives,
	interfaces,
	miscellaneous,
	pipes
} from "../dist/docs/documentation.json";

/**
 * Remove public properties from docs Json for each component.
 * This is to prevent properties like `onTouched = () => {...}` & `propagateChange = () => {}`
 * from being rewritten as string by storybook.
 */
components = components.map(comp => ({
	...comp,
	inputsClass: comp.inputsClass.map((input) => ({
		...input,
		// Storybook does not seem to display deprecated message currently
		// Bypassing this by updating rawdescription
		// Using `description` to display formatted code
		rawdescription: input.deprecated ? `**@Deprecatated**\n\n${input.deprecationMessage}` : input.description
	})),
	// Removes properties
	propertiesClass: [],
	outputsClass: comp.outputsClass.map((output) => ({
		...output,
		// Prevents control type appearing as `string`
		defaultValue: undefined,
		// Storybook does not seem to display deprecated message currently
		// Bypassing this by updating rawdescription
		// Using `description` to display formatted code
		rawdescription: output.deprecated ? `**@Deprecatated**\n\n${output.deprecationMessage}` : output.description
	}))
}));

// Integrate compodoc documentation with storybook
setCompodocJson({
	classes,
	components,
	directives,
	interfaces,
	miscellaneous,
	pipes
});

// Set carbon viewports options
export const parameters = {
	viewport: {
		viewports: {
			sm: {
				name: 'Small',
				styles: {
					width: breakpoints.sm.width,
					height: '100%',
				},
			},
			md: {
				name: 'Medium',
				styles: {
					width: breakpoints.md.width,
					height: '100%',
				},
			},
			lg: {
				name: 'Large',
				styles: {
					width: breakpoints.lg.width,
					height: '100%',
				},
			},
			xlg: {
				name: 'X-Large',
				styles: {
					width: breakpoints.xlg.width,
					height: '100%',
				},
			},
			max: {
				name: 'Max',
				styles: {
					width: breakpoints.max.width,
					height: '100%',
				},
			},
		},
	},
	controls: {
		expanded: true
	}
};

