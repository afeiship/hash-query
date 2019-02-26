
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "gem_sync_repositry/version"

Gem::Specification.new do |spec|
  spec.name          = "gem_sync_repositry"
  spec.version       = GemSyncRepositry::VERSION
  spec.authors       = ["afeiship"]
  spec.email         = ["1290657123@qq.com"]
  spec.date        = '2019-02-24'
  spec.summary     = 'Sync github repositry'
  spec.description = 'Ruby gem for sync github repositry'
  spec.homepage    ='https://github.com/afeiship/gem_sync_repositry'
  spec.license = 'MIT'

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_dependency "fileutils"
  spec.add_dependency "rugged"
end
