#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

# exit with an error if the build fails
if [[ ${TRAVIS_TEST_RESULT=0} == 1 ]]; then
  exit 1;
fi

# exit if the branch is wrong
if [[ ${TRAVIS_BRANCH} =~ (master$|beta$|^v?[0-9]*\.[0-9]*\.[0-9]*$) || ${TRAVIS_EVENT_TYPE} == 'cron' ]]; then
	npm run build
	cd dist

	#setup npm publishing
	npm publish

	if [[ ${TRAVIS_BRANCH} =~ (master$|beta$|^v?[0-9]*\.[0-9]*\.[0-9]*$) ]]; then
		# Move to the top level folder, and make a "deploy" directory
		cd ../
		mkdir deploy
		cd deploy
		git init

		# Configure Git
		git config user.name "Travis CI"
		git config user.email "callums@ca.ibm.com"

		# pull the upstream pages
		git pull "git@github.com:ibm/carbon-components-angular.git" gh-pages

		# copy to the master/alpha folder
		if [[ ${TRAVIS_BRANCH} == "master" ]]; then
			cp -R ../demo/bundle/* ./
		# copy to the beta folder
		elif [[ ${TRAVIS_EVENT_TYPE} == "cron" ]]; then
			mkdir -p beta
			cp -R ../demo/bundle/* beta
		# copy to the version folder
		elif [[ ${TRAVIS_BRANCH} =~ (^v?[0-9]*\.[0-9]*\.[0-9]*$) ]]; then
			mkdir -p $TRAVIS_BRANCH
			cp -R ../demo/bundle/* $TRAVIS_BRANCH
		fi

		# in this case we want the script to keep running, so we can actually check the $? (status) var
		set +e
		# Commit all the things into the repo
		git add .
		git commit -m "Deploy to GitHub Pages"

		# Force push to gh-pages if there was something to commit
		if [ $? -eq 0 ]; then
			git push --force "git@github.com:ibm/carbon-components-angular.git" master:gh-pages > /dev/null 2>&1
		fi
		exit 0;
	fi
else
	echo "Branch type not recognized";
	echo "Skipping deploy";
	exit 0;
fi
