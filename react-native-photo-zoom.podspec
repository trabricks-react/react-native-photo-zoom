require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name            = "react-native-photo-zoom"
  s.version         = package["version"]
  s.summary         = package['description']
  s.author          = package['author']
  s.homepage        = package['homepage']
  s.license         = package['license']
  s.source          = { :git => "https://github.com/trabricks/react-native-photo-zoom.git", :tag => "v#{s.version}" }
  s.source_files    = "ios/*.{h,m}"
  s.platforms       = { :ios => "8.0", :tvos => "9.0" }

  s.frameworks = 'ImageIO', 'QuartzCore', 'AssetsLibrary', 'MediaPlayer'
  s.weak_frameworks = 'Photos'

  s.dependency "React"
  s.dependency 'SDWebImage/Core'
end

