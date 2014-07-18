

# add the tags to the serializer
module ExtendTopicViewWithCustomLayoutSerializer
  def self.included(klass)
    klass.attributes :main_post, :custom_layout
  end

  def custom_layout
    object.topic.custom_fields["custom_layout"]
  end

  def main_post
    return unless ["blog_post", "article"].include?(custom_layout)
    p = object.topic.posts[0]
    ps = PostSerializer.new(p, scope: scope, root: false)
    ps.topic_slug = object.topic.slug
    ps.topic_view = object
    p.topic = object.topic
    return ps
  end
end

TopicViewSerializer.send(:include, ExtendTopicViewWithCustomLayoutSerializer)
