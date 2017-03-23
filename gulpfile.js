const gulp = require("gulp");
const sass = require("node-sass");
const gulpsass = require("gulp-sass");
const concat = require("gulp-concat");
const tap = require("gulp-tap");
const path = require("path");
const htmlmin = require("html-minifier").minify;
const fs = require("fs");
const ts = require("gulp-typescript");

const TS_SRC = [
	"src/**/*.ts",
	"!src/**/*.spec.ts"
];

const SASS_SRC = [
	"src/core/**/*.scss"
];

const FONT_SRC = [
	"src/core/fonts/**/*"
];

const DIST = "dist";
const SASS_DIST = `${DIST}/core`;

const TSCONFG = require("./tsconfig.json").compilerOptions;

gulp.task("build", ["build:angular", "build:sass", "build:css", "build:font", "build:package"]);

gulp.task("build:angular", () => {
	return gulp.src(TS_SRC)
		.pipe(replaceTemplates())
		.pipe(ts(TSCONFG))
		.pipe(gulp.dest(DIST))
});

gulp.task("build:sass", () => {
	return gulp.src(SASS_SRC)
		.pipe(gulp.dest(SASS_DIST));
});

gulp.task("build:css", () => {
	return gulp.src("src/core/common.scss")
		.pipe(gulpsass())
		.pipe(concat("neutrino.css"))
		.pipe(gulp.dest(SASS_DIST));
});

gulp.task("build:font", () => {
	return gulp.src(FONT_SRC)
		.pipe(gulp.dest(`${DIST}/core/fonts`));
});

gulp.task("build:package", () => {
	return gulp.src("./package.json")
		.pipe(version())
		.pipe(gulp.dest(DIST));
});

function version() {
	return tap(function(file) {
		if (path.extname(file.path) === ".json") {
			let packageJSON = JSON.parse(file.contents.toString("utf-8"));
			if (process.env.TRAVIS) {
				// beta release (every time master is merged into the beta branch (nominally weekly))
				if (process.env.TRAVIS_BRANCH === "beta") {
					const build = process.env.TRAVIS_BUILD_NUMBER; // we'll use the build number so we dont have to think about versions
					packageJSON.version = `${packageJSON.version}-beta.${build}`;
				// dev release (every push)
				} else if (process.env.TRAVIS_BRANCH === "master") {
					const commit = process.env.TRAVIS_COMMIT;
					packageJSON.version = `${packageJSON.version}-alpha.${commit.slice(0, 5)}`;
				}
			}
			// otherwise we'll do a standard release with whatever version is in the package.json
			file.contents = new Buffer(JSON.stringify(packageJSON));
		}
	});
}

function replaceTemplates() {
	// regex borrwed from https://github.com/TheLarkInn/angular2-template-loader/blob/1403302e985bf689ee49e9dd8bb953225f32737b/index.js#L5-L7
	const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`])/g;
	const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;

	function templateToString(file, url) {
		url = url.trim().replace(/^\"/gi, "").replace(/\"$/gi, "");
		let fileStr = path.resolve(file.path, "..", url);
		return htmlmin(fs.readFileSync(fileStr, {encoding: "utf-8"}));
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