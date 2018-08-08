#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

rm -rf dist
gulp build
ngc -p tsconfig-aot.json
webpack --config webpack.build.js
rm -rf dist/src dist/waste demo/bundle/documentation

gulp build:meta

npm run docs:build && mv documentation demo/bundle/
