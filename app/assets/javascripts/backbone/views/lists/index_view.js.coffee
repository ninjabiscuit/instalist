Instalist.Views.Lists ||= {}

class Instalist.Views.Lists.IndexView extends Backbone.View
  template: JST["backbone/templates/lists/index"]

  initialize: () ->
    @options.lists.bind('reset', @addAll)

  addAll: () =>
    @options.lists.each(@addOne)

  addOne: (list) =>
    view = new Instalist.Views.Lists.ListView({model : list})
    @$("tbody").append(view.render().el)

  render: =>
    $(@el).html(@template(lists: @options.lists.toJSON() ))
    @addAll()

    return this
