import { create } from "@storybook/theming";
import { g100 } from "@carbon/themes";

const { field01, interactive01, text01, text04, ui01, ui03, ui04, uiBackground } = g100;

export const CarbonG100 = create({
	base: "dark",

	colorPrimary: interactive01,
	colorSecondary: ui04,

	// UI
	appBg: ui01,
	appContentBg: uiBackground,
	appBorderColor: ui04,
	appBorderRadius: 0,

	// Typography
	fontBase: "'IBM Plex Sans', sans-serif",
	fontCode: "'IBM Plex Mono', monospace",

	// Text colors
	textColor: text01,
	textInverseColor: text04,

	// Toolbar default and active colors
	barTextColor: text01,
	barSelectedColor: interactive01,
	barBg: uiBackground,

	// Form colors
	inputBg: field01,
	inputBorder: ui03,
	inputTextColor: text01,
	inputBorderRadius: 0,

	brandTitle: "carbon components angular",
	brandUrl: "https://github.com/IBM/carbon-components-angular",
});
