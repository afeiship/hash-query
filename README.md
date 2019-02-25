# gem_sync_repositry
Ruby gem for sync github repositry.


## usage:
```ruby
## create Gemfile:

## Add below contents to file:
# gem 'sync_repositry', git: 'git@github.com:afeiship/gem_sync_repositry.git', submodules: true
require 'bundler/setup'
require 'sync_repositry'

# SyncRepositry.hi;
SyncRepositry.clone_at 'https://github.com/wdavidw/node-printf.git','.tmp';
puts SyncRepositry.discover_root;

## will show:
# Time 00:00:05  1/100ᗧᗧᗧᗧᗧ･･･････････････････････････････････････････････････････････････････････････････ 1% Progres
```

## resource:
+ http://guides.rubygems.org/make-your-own-gem/#your-first-gem
+ http://blog.csdn.net/yangcs2009/article/details/42262073


## error:
> An error occurred while installing rugged

```bash
brew install cmake 
bundle install
```