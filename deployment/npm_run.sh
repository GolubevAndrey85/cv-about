#!/usr/bin/env bash
git pull && 
yarn build &&
npm start & 
npx wait-on http://localhost:3000 &&
exit