
export default {
  name: "attach-custom-layouts",

  initialize: function(container, application) {
    var TopicView = container.lookupFactory("view:topic"),
        TopicModel = container.lookupFactory("model:topic"),
        Post = container.lookupFactory("view:post");

    TopicView.reopen({
      templateName: function() {
        var tmplNames = [],
            custom_layout = this.get('controller.model.custom_layout');

        if (custom_layout) {
          tmplNames.push(custom_layout + "_topic");
          tmplNames.push(custom_layout);
        }

        if (Discourse.SiteSettings.custom_layout_per_archetype) {
          tmplNames.push(this.get('controller.model.archetype') + '_topic');
          tmplNames.push(this.get('controller.model.archetype'));
        }

        var firstMatch = tmplNames.find(function(tmplName) {
          return this.templateForName(tmplName, 'template');
        }.bind(this));
        console.log(tmplNames, firstMatch, firstMatch || 'post');
        return firstMatch || 'topic';
      }.property('controller.model.archetype', 'controller.model.custom_layout')
    });

    TopicModel.reopen({
      updateFromJson: function(json) {
        this._super(json);
        if (json.main_post) {
            var post = Discourse.Post.create(json.main_post);
            post.set("topic", this);
            this.set("main_post", post);
        }
      }
    });

    Post.reopen({
      templateName: function() {
        console.log("in");
        var tmplNames = [],
            custom_layout = this.get('post.custom_layout');

        if (custom_layout) {
          tmplNames.push(custom_layout + "_post");
          tmplNames.push(custom_layout);
        }

        if (Discourse.SiteSettings.custom_layout_per_archetype) {
          tmplNames.push(this.get('post.topic.archetype') + '_post');
        }

        var firstMatch = tmplNames.find(function(tmplName) {
          return this.templateForName(tmplName, 'template');
        }.bind(this));

        console.log(tmplNames, firstMatch, firstMatch || 'post');
        return firstMatch || 'post';
      }.property('post.topic.archetype', 'post.custom_layout')
    });
  }
};