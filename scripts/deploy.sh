#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

# exit with an error if the build fails
if [[ ${TRAVIS_TEST_RESULT=0} == 1 ]]; then
  exit 1;
fi

# run the build
npm run build
#deploy with semantic-release
npm run semantic-release

# deploy to gh pages
if [[ $TRAVIS_BRANCH == "master" ]]; then
	mkdir pages
	cp -R dist/docs/documentation/ pages/documentation
	cp -R dist/docs/storybook/* pages
	version=$(node -e 'const package = require("./dist/package.json"); console.log(package.version);')
	mkdir pages/$version
	cp -R dist/docs/documentation/ pages/$version/documentation
	cp -R dist/docs/storybook/* pages/$version
	echo "angular.carbondesignsystem.com" > pages/CNAME
fi
