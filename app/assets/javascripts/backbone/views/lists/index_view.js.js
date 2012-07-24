(function() {
  var _base,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  (_base = Instalist.Views).Lists || (_base.Lists = {});

  Instalist.Views.Lists.IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      this.render = __bind(this.render, this);
      this.addOne = __bind(this.addOne, this);
      this.addAll = __bind(this.addAll, this);
      IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.template = JST["backbone/templates/lists/index"];

    IndexView.prototype.initialize = function() {
      return this.options.lists.bind('reset', this.addAll);
    };

    IndexView.prototype.addAll = function() {
      return this.options.lists.each(this.addOne);
    };

    IndexView.prototype.addOne = function(list) {
      var view;
      view = new Instalist.Views.Lists.ListView({
        model: list
      });
      return this.$("tbody").append(view.render().el);
    };

    IndexView.prototype.render = function() {
      $(this.el).html(this.template({
        lists: this.options.lists.toJSON()
      }));
      this.addAll();
      return this;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);
