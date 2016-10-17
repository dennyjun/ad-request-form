require('coffee-script/register')
express = require 'express'
expressValidator = require 'express-validator'
path = require 'path'
logger = require 'morgan'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'
sass = require 'node-sass-middleware'
router = require path.resolve 'server/router'

app = express()
app.set "env", process.env.NODE_ENV || "development"
app.set "host", process.env.HOST || "0.0.0.0"
app.set "port", process.env.PORT || 3000

app.use logger 'dev'
app.use bodyParser.json()
app.use bodyParser.urlencoded
  extended: false
app.use expressValidator()
app.use cookieParser()
app.use express.static path.resolve 'public'
app.use express.static path.resolve 'node_modules/jquery'
app.use express.static path.resolve 'node_modules/bootstrap'
app.use sass
  src: path.resolve 'public' 
  dest: path.resolve 'public' 

app.use (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'
  res.header 'Access-Control-Allow-Headers',
    'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name'
  next()

router(app, require(path.resolve 'server/controllers/main')).init();

module.exports = app.listen app.get('port'), () ->
  console.log 'Express server listening on port ' + app.get 'port'