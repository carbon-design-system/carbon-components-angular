import "core-js/es6/symbol";
import "core-js/es6/object";
import "core-js/es6/function";
import "core-js/es6/parse-int";
import "core-js/es6/parse-float";
import "core-js/es6/number";
import "core-js/es6/math";
import "core-js/es6/string";
import "core-js/es6/date";
import "core-js/es6/array";
import "core-js/es6/regexp";
import "core-js/es6/map";
import "core-js/es6/set";
import "core-js/es6/reflect";

import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { configure, addDecorator } from "@storybook/angular";
import { withOptions } from '@storybook/addon-options';

addDecorator(
	withOptions({
		name: "carbon components angular",
		url: "https://github.com/IBM/carbon-components-angular",
	})
);

// load global styles
require("!style-loader!css-loader!postcss-loader!sass-loader!./preview.scss");
require("!style-loader!css-loader!postcss-loader!sass-loader!./preview-experimental.scss");

require("../src/index.stories");
// automatically import all files ending in *.stories.ts
const req = require.context("../src", true, /.stories.ts$/);

function loadStories() {
	req.keys()
	.sort((path1, path2) => path1.split("/").slice(-1)[0] > path2.split("/").slice(-1)[0] ? 1 : -1)
	.forEach(filename => {
		if (!filename.includes("index")) {
			req(filename);
		}
	});
}

configure(loadStories, module);
