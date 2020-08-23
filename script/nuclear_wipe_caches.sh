#!/bin/bash

echo "$0 --unfuck-modules (optional)"

unfuck=$1

set -e
npx watchman watch-del-all
rm -rf /tmp/metro-*

if [ "$unfuck" = "--unfuck-modules" ]
then
  rm -rf node_modules
  yarn install
fi

cd ..

./tie-native.sh
# ./fix-to-local.sh

cd rhfa-demo-react-native
yarn start
