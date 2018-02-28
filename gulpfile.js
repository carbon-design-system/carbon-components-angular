////////////////////////////////////
// Gulp all the things
////////////////////////////////////
"use strict";

//
// Requires
// =================================
const gulp = require("gulp");
const sass = require("node-sass");
const concat = require("gulp-concat");
const tap = require("gulp-tap");
const path = require("path");
const fs = require("fs");
const es = require("event-stream");
const runSequence = require("run-sequence");

//
// Variables
// =================================
const dirs = {
	TS: [
		"src/**/*.ts",
		"!src/**/*.spec.ts"
	],
	i18n: "src/i18n/**/*.json",
	FONTS: "node_modules/@peretz/matter/fonts/**/*",
	DEMO: "demo",
	DIST: "dist"
};

const licenseTemplate = `/*!
 *
 * Neutrino v@PACKAGE_VERSION@ | @FILE_NAME@
 *
 * Licensed Materials - Property of IBM
 *
 * © Copyright IBM Corporation 2014, @THIS_YEAR@
 * U.S. Government Users Restricted Rights: Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 */
\n
`;

//
// Build tasks
// =================================
gulp.task("build:angular", _ =>
	gulp.src(dirs.TS)
		.pipe(replaceTemplates())
		.pipe(gulp.dest(`${dirs.DIST}/src`))
);

gulp.task("build:i18n", _ =>
	gulp.src(dirs.i18n)
		.pipe(gulp.dest(`${dirs.DIST}/i18n`))
);

gulp.task("build:license", _ =>
	es.merge(
		gulp.src("LICENSE.md")
			.pipe(gulp.dest(dirs.DIST)),
		gulp.src([
			`${dirs.DIST}/**/*.scss`,
			`${dirs.DIST}/**/*.css`,
			`${dirs.DIST}/**/*.ts`,
			`${dirs.DIST}/**/*.js`
		])
			.pipe(licenseHeaders())
			.pipe(gulp.dest(dirs.DIST))
	)
);

gulp.task("build:package", _ =>
	gulp.src("package.json")
		.pipe(version())
		.pipe(gulp.dest(dirs.DIST))
);

gulp.task("build:readme", _ =>
	gulp.src("README.md")
		.pipe(gulp.dest(dirs.DIST))
);

gulp.task("build:changelog", _ =>
	gulp.src("CHANGELOG.md")
		.pipe(gulp.dest(dirs.DIST))
);

//
// Demo tasks
// =================================
gulp.task("demo:font", _ =>
	gulp.src(dirs.FONTS)
		.pipe(gulp.dest(`${dirs.DEMO}/fonts`))
);

//
// Running tasks
// =================================
gulp.task("build", ["build:angular", "build:i18n"]);

gulp.task("build:meta", _ =>
	runSequence("build:package", ["build:license", "build:readme", "build:changelog"])
);

gulp.task("demo", ["demo:font"]);

//
// Functions
// =================================
function licenseHeaders() {
  return tap(function(file) {
	const packageJSON = require("./package.json");
	const updatedTemplate = licenseTemplate
		.replace("@PACKAGE_VERSION@", packageJSON.version)
		.replace("@FILE_NAME@", path.basename(file.path))
		.replace("@THIS_YEAR@", new Date().getFullYear());
	file.contents = Buffer.concat([new Buffer(updatedTemplate), file.contents]);
  });
}

function version() {
	return tap(function(file) {
		let packageJSON = JSON.parse(file.contents.toString("utf-8"));
		if (process.env.TRAVIS) {
			// assume beta release on cron
			if (process.env.TRAVIS_EVENT_TYPE === "cron") {
				const build = process.env.TRAVIS_BUILD_NUMBER; // we'll use the build number so we dont have to think about versions
				packageJSON.version = `${packageJSON.version}-beta.${build}`;
			// release to alpha unless it's building from a tag
			} else if (!process.env.TRAVIS_TAG) {
				const commit = process.env.TRAVIS_COMMIT; // we'll just slice up the commit a bit
				packageJSON.version = `${packageJSON.version}-alpha.${commit.slice(0, 5)}`;
			}
		}
		// otherwise we'll do a standard release with whatever version is in the package.json
		file.contents = new Buffer(JSON.stringify(packageJSON));
	});
}

function replaceTemplates() {
	// regex borrwed from https://github.com/TheLarkInn/angular2-template-loader/blob/1403302e985bf689ee49e9dd8bb953225f32737b/index.js#L5-L7
	const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`])/g;
	const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;

	function templateToString(file, url) {
		url = url.trim().replace(/^\"/g, "").replace(/\"$/g, "");
		let fileStr = path.resolve(file.path, "..", url);
		return fs.readFileSync(fileStr).toString("utf-8");
	}

	function stylesToString(file, urls) {
		urls = JSON.parse(urls);
		let strStyles = "";
		for (let url of urls) {
			strStyles += sass.renderSync({
				file: path.resolve(file.path, "..", url)
			}).css;
		}
		return strStyles;
	}

	return tap(function(file) {
		if (path.extname(file.path) === ".ts") {
			let fileStr = file.contents.toString("utf-8");
			if (fileStr.indexOf(templateUrlRegex) < 0 || fileStr.indexOf(stylesRegex) < 0) {
				fileStr = fileStr.replace(templateUrlRegex, (match, url) => `template: \`${templateToString(file, url)}\``)
					.replace(stylesRegex, (match, urls) => `styles: [\`${stylesToString(file, urls)}\`]`);
				file.contents = new Buffer(fileStr);
			}
		}
	});
}
