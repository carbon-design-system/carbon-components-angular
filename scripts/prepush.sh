#!/usr/bin/env bash

set -e

GITHUB_UPSTREAM=git@github.com:ibm/carbon-components-angular.git

npm run lint

# Refresh code
# git pull upstream master

# if [ $? -ne 0 ]
# then
# 	echo "Error: Couldn't pull from upstream."
# 	echo "Try running 'git remote add upstream $GITHUB_UPSTREAM' and try again."
# 	exit 1
# fi

#exit 1  # stops push from running, good for testing
