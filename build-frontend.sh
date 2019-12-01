#!/bin/bash

echo "building frontend"
cd ./src/frontend
tsc
cd ..
cp -a frontend ../dist