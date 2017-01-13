#!/usr/bin/env bash

source "$(dirname "${BASH_SOURCE[0]}")/_config.sh"
false && source _config.sh # never executes, this is here just for IntelliJ Bash support to understand our sourcing

pushd "$ROOT"

LIB_PROFILE=${1:-lib}

./scripts/check-versions.sh

lein with-profile "${LIB_PROFILE}" jar

LEIN_VERSION=`cat "$PROJECT_FILE" | grep "defproject" | cut -d' ' -f3 | cut -d\" -f2`

JAR_FILE="target/dirac-$LEIN_VERSION.jar"

echo "listing content of $JAR_FILE"
echo ""

unzip -l "$JAR_FILE"

echo ""
echo "----------------------------"
echo ""

popd
