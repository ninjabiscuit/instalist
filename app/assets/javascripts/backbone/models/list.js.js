(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Instalist.Models.List = (function(_super) {

    __extends(List, _super);

    function List() {
      List.__super__.constructor.apply(this, arguments);
    }

    List.prototype.paramRoot = 'list';

    List.prototype.defaults = {
      name: null
    };

    return List;

  })(Backbone.Model);

  Instalist.Collections.ListsCollection = (function(_super) {

    __extends(ListsCollection, _super);

    function ListsCollection() {
      ListsCollection.__super__.constructor.apply(this, arguments);
    }

    ListsCollection.prototype.model = Instalist.Models.List;

    ListsCollection.prototype.url = '/lists';

    return ListsCollection;

  })(Backbone.Collection);

}).call(this);
