#!/bin/sh

yarn build
cd gh-pages
git rm -rf .
git checkout HEAD -- CNAME
cp -r ../build/. .
git add -A
git commit -m "Update $(date)"
git push origin gh-pages
cd ..
