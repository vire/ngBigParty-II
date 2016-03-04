#!/bin/bash
rm -rf dist || exit 0;
npm run dist
( cd dist
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deploy doc to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}:x-oauth-basic@github.com/Wercajk/KaThinka.git" master:gh-pages
)