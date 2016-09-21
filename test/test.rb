#!/usr/bin/env ruby -wU


require 'sync_repositry'

# SyncRepositry.hi;
SyncRepositry.clone_at 'https://github.com/wdavidw/node-printf.git','.tmp';
puts SyncRepositry.discover_root;
