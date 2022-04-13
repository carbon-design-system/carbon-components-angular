import { create } from "@storybook/theming";
import { g100 } from "@carbon/themes";

const { field01, backgroundBrand, textPrimary, textOnColor, layer01, borderSubtle01, layerSelected03, background } = g100;

export const CarbonG100 = create({
	base: "dark",

	colorPrimary: backgroundBrand,
	colorSecondary: layerSelected03,

	// UI
	appBg: layer01,
	appContentBg: background,
	appBorderColor: layerSelected03,
	appBorderRadius: 0,

	// Typography
	fontBase: "'IBM Plex Sans', sans-serif",
	fontCode: "'IBM Plex Mono', monospace",

	// Text colors
	textColor: textPrimary,
	textInverseColor: textOnColor,

	// Toolbar default and active colors
	barTextColor: textPrimary,
	barSelectedColor: backgroundBrand,
	barBg: background,

	// Form colors
	inputBg: field01,
	inputBorder: borderSubtle01,
	inputTextColor: textPrimary,
	inputBorderRadius: 0,

	brandTitle: "carbon components angular",
	brandUrl: "https://github.com/IBM/carbon-components-angular",
});
