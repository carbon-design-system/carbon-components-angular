import "./polyfills.js";

import "@storybook/addon-storysource/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import "@storybook/addon-notes/register";
import "@storybook/addon-knobs/register";
import "@storybook/addon-options/register";

import { addons } from "@storybook/addons";
import { STORY_CHANGED, STORY_ERRORED, STORY_MISSING } from '@storybook/core-events';

// custom addon for google analytics v4
addons.register("ga4", (api) => {
	api.on(STORY_CHANGED, () => {
		const { path } = api.getUrlState();
		gtag('event', 'page_view', {
			page_path: path,
			page_title: document.title
		});
	});
	api.on(STORY_ERRORED, ({ description }) => {
		gtag('event', 'exception', {
			description,
			fatal: true
		});
	});
	api.on(STORY_MISSING, (id) => {
		gtag('event', 'exception', {
			description: `attempted to render ${id}, but it is missing`,
			fatal: false
		});
	});
});
