# name: Custom Content Layouts
# about: allows administrators to change the template to be rendered for specific 
# version: 0.1
# authors: Benjamin Kampmann

register_asset "javascripts/ccl.js"
register_asset "ccl.scss"

after_initialize do
    require_dependency File.expand_path('../integrate.rb', __FILE__)
end
