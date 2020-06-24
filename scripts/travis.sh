#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

npm run lint
npm test
travis_wait npm run ng:build
