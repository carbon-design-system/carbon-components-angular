import "./preview.js";
import { breakpoints } from '@carbon/layout';

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
			Max: {
				name: 'Max',
				styles: {
					width: breakpoints.max.width,
					height: '100%',
				},
			},
		},
	}
};

