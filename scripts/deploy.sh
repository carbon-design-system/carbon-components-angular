#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

# exit with an error if the build fails
if [[ ${TRAVIS_TEST_RESULT=0} == 1 ]]; then
  exit 1;
fi

npm run semantic-release

# deploy to gh pages
if [[ $TRAVIS_BRANCH == "master" ]]; then
	mkdir pages
	cp -R dist/docs/documentation pages/
	cp -R dist/docs/storybook/* pages

	git config user.name "Carbon Deploy"

	cd pages
	git init
	git add .
	git commit -m "Deploy to GitHub Pages"
	git push --force "git@github.com:ibm/carbon-components-angular.git" master:gh-pages > /dev/null 2>&1
	exit 0;
fi
