#!/bin/bash

git fetch
git reset --hard origin/main
npm install
pm2 restart 0