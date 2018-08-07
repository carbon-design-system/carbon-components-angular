import { configure } from "@storybook/angular";

require("../src/index.stories");
// automatically import all files ending in *.stories.ts
const req = require.context("../src", true, /.stories.ts$/);
function loadStories() {
	req.keys().forEach(filename => {
		if (!filename.includes("index")) { req(filename) }
	});
}

configure(loadStories, module);
