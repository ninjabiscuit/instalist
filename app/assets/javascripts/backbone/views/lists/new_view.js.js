(function() {
  var _base,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  (_base = Instalist.Views).Lists || (_base.Lists = {});

  Instalist.Views.Lists.NewView = (function(_super) {

    __extends(NewView, _super);

    NewView.prototype.template = JST["backbone/templates/lists/new"];

    NewView.prototype.events = {
      "submit #new-list": "save"
    };

    function NewView(options) {
      var _this = this;
      NewView.__super__.constructor.call(this, options);
      this.model = new this.collection.model();
      this.model.bind("change:errors", function() {
        return _this.render();
      });
    }

    NewView.prototype.save = function(e) {
      var _this = this;
      e.preventDefault();
      e.stopPropagation();
      this.model.unset("errors");
      return this.collection.create(this.model.toJSON(), {
        success: function(list) {
          _this.model = list;
          return window.location.hash = "/" + _this.model.id;
        },
        error: function(list, jqXHR) {
          return _this.model.set({
            errors: $.parseJSON(jqXHR.responseText)
          });
        }
      });
    };

    NewView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      this.$("form").backboneLink(this.model);
      return this;
    };

    return NewView;

  })(Backbone.View);

}).call(this);
