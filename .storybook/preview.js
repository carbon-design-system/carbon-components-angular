// load global styles
import "!style-loader!css-loader!postcss-loader!sass-loader!./preview.scss";
import { breakpoints } from '@carbon/layout';

// Add compodoc
import { setCompodocJson } from "@storybook/addon-docs/angular";
import {
	classes,
	components,
	directives,
	interfaces,
	miscellaneous
} from "../documentation.json";

/**
 * Remove public properties from docs Json for each component.
 * This is to prevent properties like `onTouched = () => {...}` & `propagateChange = () => {}`
 * from being rewritten as string by storybook.
 */
components = components.map(comp => {
	return {
		...comp,
		// Removes properties
		propertiesClass: [],
		outputsClass: comp.outputsClass.map((output) => {
			return {
				...output,
				// Prevents control type appearing as `string`
				defaultValue: undefined
			}
		})
	}
});
setCompodocJson({ classes, components, directives, interfaces, miscellaneous });

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

