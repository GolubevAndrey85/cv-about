#!/bin/sh
npm start & 
echo -ne
npx wait-on http://localhost:3000 &
exit