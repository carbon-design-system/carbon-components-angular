import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
	theme: create({
		base: 'light',
		fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
		fontCode:
			"'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
		brandTitle: `carbon components angular`,
		brandUrl: 'https://github.com/IBM/carbon-components-angular',
	})
});
