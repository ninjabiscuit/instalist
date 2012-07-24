(function() {
  var _base,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  (_base = Instalist.Views).Lists || (_base.Lists = {});

  Instalist.Views.Lists.ListView = (function(_super) {

    __extends(ListView, _super);

    function ListView() {
      ListView.__super__.constructor.apply(this, arguments);
    }

    ListView.prototype.template = JST["backbone/templates/lists/list"];

    ListView.prototype.events = {
      "click .destroy": "destroy"
    };

    ListView.prototype.tagName = "tr";

    ListView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    ListView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return ListView;

  })(Backbone.View);

}).call(this);
