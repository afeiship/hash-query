Gem::Specification.new do |spec|
    spec.name = 'sync_repositry'
    spec.version     = '1.0.2'
    spec.date        = '2019-02-24'
    spec.summary     = 'Sync github repositry'
    spec.description = 'Ruby gem for sync github repositry'
    spec.authors     = ['afei']
    spec.email       = '1290657123@qq.com'
    spec.files       = ['lib/sync_repositry.rb']
    spec.homepage    ='https://github.com/afeiship/gem_sync_repositry'
    spec.license = 'MIT'

    spec.add_development_dependency "fileutils", "0.7"
    spec.add_development_dependency "rugged", "~> 0.27.7"
end
