#!/usr/bin/env bash
npm start || 
npx wait-on http://localhost:3000 &&
exit