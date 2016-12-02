#!/usr/bin/env bash

pushd `dirname "${BASH_SOURCE[0]}"` > /dev/null
source "./config.sh"

die_if_dirty_working_copy () {
  if [ -n "$(git status -uno --porcelain)" ] ; then
    echo "working copy is not clean in '$(pwd)'"
    exit 1
  fi
}

pushd "$ROOT"

die_if_dirty_working_copy

rm -rf "$DEVTOOLS_ROOT"
cp -R "$DEVTOOLS_WORKTREE" "$DEVTOOLS_ROOT"

popd

popd
