#!/usr/bin/env bash

# Make sure we are at git root
cd `git rev-parse --show-toplevel`

# Remove old binary if it exists
if [ -f k-means ]; then
	rm k-means
fi

# Download latest k-means binary
wget $(curl -s https://api.github.com/repos/entscheidungsproblem/K-means/releases/latest | grep 'browser_' | cut -d\" -f4)

# Client
cd client
npm install
npm run build

cd ..
npm install
npm run start
