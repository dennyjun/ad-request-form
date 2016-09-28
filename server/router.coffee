module.exports = (app, routes) ->
  init: () ->
    app.use path, route for path, route of routes