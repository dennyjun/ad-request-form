React = require 'react'

module.exports = React.createClass
  displayName: 'NotFound'
  render: ->
    return (
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    )