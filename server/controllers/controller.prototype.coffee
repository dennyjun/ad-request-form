express = require 'express'
module.exports =
  create: (attributes) ->
    path: attributes && attributes.path || ''
    router: express.Router()