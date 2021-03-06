React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'

module.exports = React.createClass
  displayName: 'App'
  linkOnClick: (event) ->
    Request
      .post '/users'
      .end (err, res) ->
        if res.ok
          document.getElementsByName('transition')[0].click()
        else
          console.error 'Failed to create token'
  render: ->
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <div className="card-title">
              <span>Advertisement Request Form</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="link-div">
               <button type="button"
                       onClick={this.linkOnClick} 
                       className="btn btn-primary">Next</button>
             </div>
            <Link name="transition" 
               style={{display: "none"}}
               to="/company" />
          </div>
        </div>
      </div>
    )
