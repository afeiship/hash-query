
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)


Gem::Specification.new do |spec|
    spec.name = 'gem_sync_repositry'
    spec.version     = '1.0.2'
    spec.date        = '2019-02-24'
    spec.summary     = 'Sync github repositry'
    spec.description = 'Ruby gem for sync github repositry'
    spec.authors     = ['afei']
    spec.email       = '1290657123@qq.com'
    spec.files       = ['lib/gem_sync_repositry.rb']
    spec.homepage    ='https://github.com/afeiship/gem_sync_repositry'
    spec.license = 'MIT'

    spec.add_dependency "fileutils"
    spec.add_dependency "rugged"
end