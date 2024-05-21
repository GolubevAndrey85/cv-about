#!/usr/bin/env bash
kill -9 $(lsof -t -i:3000) || 
git pull && 
yarn build &&
npm start & 
npx wait-on http://localhost:3000
exit