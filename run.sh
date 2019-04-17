#!/bin/bash
# rm -rf /home/alija/.cache/yarn/v4/.tmp
# rm -rf /home/alija/.cache/yarn/v4/.tmp && \
# mkdir /home/alija/.cache/yarn/v4/.tmp && \
# mkdir /home/alija/.cache/yarn/v4/.tmp/64220609cd52cbdc766028661b7bf532 && \
# mkdir /home/alija/.cache/yarn/v4/.tmp/64220609cd52cbdc766028661b7bf532/libs && \
# cp libs/asterics-rest-0.0.1.tgz /home/alija/.cache/yarn/v4/.tmp/64220609cd52cbdc766028661b7bf532/libs/ && \
rm -rf node_modules
yarn install
VERSION=pre-3.1 yarn run dev