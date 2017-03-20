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
]

const DIST = "dist";
const SASS_DIST = `${DIST}/core`;

const TSCONFG = require("./tsconfig.json").compilerOptions;

gulp.task("build", ["build:angular", "build:package", "build:sass", "build:css"]);

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

gulp.task("build:package", () => {
	return gulp.src("./package.json")
		//do some magic here
		.pipe(gulp.dest(DIST));
});

function replaceTemplates() {
	// regex borrwed from https://github.com/TheLarkInn/angular2-template-loader/blob/1403302e985bf689ee49e9dd8bb953225f32737b/index.js#L5-L7
	const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*([,}]))/gm;
	const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
	const stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

	function templateToString(file, url) {
		url = url.trim().replace(/^\"/gi, "").replace(/\"(.|\n)*/gi, "");
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
				fileStr = fileStr.replace(templateUrlRegex, (match, url) => `template: \`${templateToString(file, url)}\`,`)
					.replace(stylesRegex, (match, urls) => `styles: [\`${stylesToString(file, urls)}\`],`);
				file.contents = new Buffer(fileStr);
			}
		}
	});
}