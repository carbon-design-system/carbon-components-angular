#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

rm -rf dist
gulp build
ngc -p tsconfig-aot.json
webpack --config webpack.build.js
rm -rf dist/src dist/waste demo/bundle/documentation

# move/generate/update meta files into dist
gulp build:meta

# generate ALL the documentation
mkdir dist/docs
npm run build-storybook
npm run docs:build && mv documentation dist/docs/
