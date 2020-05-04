#!/bin/bash

BASEPATH="/"
DOMAIN="www.asterics.eu"

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