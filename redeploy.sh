#!/usr/bin/env bash
rm -rf sync_repositry-*.gem
gem build sync_repositry.gemspec
sudo gem install ./sync_repositry-1.0.1.gem
