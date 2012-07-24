class Instalist.Models.List extends Backbone.Model
  paramRoot: 'list'

  defaults:
    name: null

class Instalist.Collections.ListsCollection extends Backbone.Collection
  model: Instalist.Models.List
  url: '/lists'
