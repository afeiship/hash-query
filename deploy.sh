#!/usr/bin/env bash
rm -rf *_repositry-*.gem
gem build *.gemspec
# sudo gem install ./gem_sync_repositry-1.0.2.gem
