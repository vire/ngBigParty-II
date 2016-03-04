#!/bin/bash
rm -rf dist || exit 0;
npm run build
( cd dist
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deploy doc to Github Pages"
 git push --force --quiet "https://3ed12f05fac1aec3edf41ec0df75d2f4565504e6:x-oauth-basic@github.com/ngParty/ngBigParty-II.git" master:gh-pages
)