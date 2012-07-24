(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Instalist.Routers.ListsRouter = (function(_super) {

    __extends(ListsRouter, _super);

    function ListsRouter() {
      ListsRouter.__super__.constructor.apply(this, arguments);
    }

    ListsRouter.prototype.initialize = function(options) {
      this.lists = new Instalist.Collections.ListsCollection();
      return this.lists.reset(options.lists);
    };

    ListsRouter.prototype.routes = {
      "/new": "newList",
      "/index": "index",
      "/:id/edit": "edit",
      "/:id": "show",
      ".*": "index"
    };

    ListsRouter.prototype.newList = function() {
      this.view = new Instalist.Views.Lists.NewView({
        collection: this.lists
      });
      return $("#lists").html(this.view.render().el);
    };

    ListsRouter.prototype.index = function() {
      this.view = new Instalist.Views.Lists.IndexView({
        lists: this.lists
      });
      return $("#lists").html(this.view.render().el);
    };

    ListsRouter.prototype.show = function(id) {
      var list;
      list = this.lists.get(id);
      this.view = new Instalist.Views.Lists.ShowView({
        model: list
      });
      return $("#lists").html(this.view.render().el);
    };

    ListsRouter.prototype.edit = function(id) {
      var list;
      list = this.lists.get(id);
      this.view = new Instalist.Views.Lists.EditView({
        model: list
      });
      return $("#lists").html(this.view.render().el);
    };

    return ListsRouter;

  })(Backbone.Router);

}).call(this);
