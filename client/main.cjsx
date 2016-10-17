React = require 'react'
ReactDOM  = require 'react-dom'
Router = require 'react-router'
RouteHandler = Router.RouteHandler
DefaultRoute = Router.DefaultRoute
NotFoundRoute = Router.NotFoundRoute
Route = Router.Route
BrowserHistory = Router.BrowserHistory

NotFound = require './components/NotFound.cjsx'
App = require './components/App.cjsx'
Company = require './components/Company.cjsx'
Images = require './components/Images.cjsx'
Bids = require './components/Bids.cjsx'
Payment = require './components/Payment.cjsx'
Confirm = require './components/Confirm.cjsx'

Main = React.createClass
  render: -> (<div><RouteHandler /></div>)

routes = (
  <Route path="/" handler={Main}>
    <DefaultRoute handler={App} />
    <Route path="/company" handler={Company} />
    <Route path="/images" handler={Images} />
    <Route path="/bids" handler={Bids} />
    <Route path="/payment" handler={Payment}/>
    <Route path="/confirm" handler={Confirm}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

Router.run(routes, BrowserHistory, (Handler) ->
  ReactDOM.render <Handler />, document.getElementById 'app'
)