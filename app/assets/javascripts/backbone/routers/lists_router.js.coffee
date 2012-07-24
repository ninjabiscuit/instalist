class Instalist.Routers.ListsRouter extends Backbone.Router
  initialize: (options) ->
    @lists = new Instalist.Collections.ListsCollection()
    @lists.reset options.lists

  routes:
    "/new"      : "newList"
    "/index"    : "index"
    "/:id/edit" : "edit"
    "/:id"      : "show"
    ".*"        : "index"

  newList: ->
    @view = new Instalist.Views.Lists.NewView(collection: @lists)
    $("#lists").html(@view.render().el)

  index: ->
    @view = new Instalist.Views.Lists.IndexView(lists: @lists)
    $("#lists").html(@view.render().el)

  show: (id) ->
    list = @lists.get(id)

    @view = new Instalist.Views.Lists.ShowView(model: list)
    $("#lists").html(@view.render().el)

  edit: (id) ->
    list = @lists.get(id)

    @view = new Instalist.Views.Lists.EditView(model: list)
    $("#lists").html(@view.render().el)
