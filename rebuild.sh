#!/bin/bash

docker compose down
rm -rf ./dist
yarn build
docker compose up -d
