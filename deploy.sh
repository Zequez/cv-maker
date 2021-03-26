#!/bin/sh

yarn build
cp -r ./build/. ./gh-pages/
cd gh-pages
git rm -rf .
git checkout HEAD -- CNAME
git add -A
git commit -m "Update $(date)"
git push origin gh-pages
cd ..
