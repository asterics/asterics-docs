#!/bin/bash

BASEPATH="/"
DOMAIN="www.asterics.eu"

if [ ! -d gh-pages ] ; then 
    echo "gh-pages does not exist, cloning" 
    git clone --single-branch --branch gh-pages https://github.com/asterics/asterics-docs.git gh-pages
else
    echo "gh-pages branch exists"
fi

if [[ -z "$1" ]] ; then
    rm -rf dist/ 
    BASE=$BASEPATH yarn build 
    mv gh-pages/next next-backup
    rm -rf gh-pages/* 
    cp -r dist/* gh-pages/ 
    mv next-backup gh-pages/next 
    cd gh-pages/
    echo $DOMAIN > CNAME
    git add . 
    git commit -m "docs: release" 
    git push
else
    if [[ "$1" == "next" ]] ; then
        rm -rf dist/ 
        BASE=$BASEPATH"next/" yarn build 
        rm -rf gh-pages/next
        cp -r dist gh-pages/next
        cd gh-pages/next
        echo $DOMAIN > CNAME
        git add . 
        git commit -m "docs: release" 
        git push
    fi
fi