React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'
Bid = require './Bid.cjsx'

module.exports = React.createClass
  displayName: 'Bids'
  getInitialState: -> 
    bids: this.props.bids || {}
  linkOnClick: (event) ->
    Request
      .put '/bids'
      .send {bids: this.state.bids}
      .set('Accept', 'application/json')
      .end (err, res) ->
        if res.ok
          document.getElementsByName('transition')[0].click()
        else
          console.error 'Failed to update payment information'
  componentWillMount: ->
    if !!this.props.disable
      return
    setState = this.setState.bind this
    Request
      .get '/bids'
      .end (err, res) ->
        if res.ok
          setState
            bids: res.body
        else
          alert 'Failed to get images!'
  render: ->
    bids = this.state.bids
    disable = !!this.props.disable
    bidsDOM = 
      Object.keys(this.state.bids).map (key, index) ->
        return (
          <Bid 
            key={index} 
            bid={bids[key]}
            disable={disable} />
        )
    nextLink = if this.props.disable then null else
      (<div className="link-div">
        <button type="button"
                onClick={this.linkOnClick} 
                className="btn btn-primary">Next</button>
      </div>)
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <div className="card-title">
              <span>Bids</span>
            </div>
            {bidsDOM}
            {nextLink}
            <Link name="transition" 
                 style={{display: "none"}}
                 to="/payment" />
          </div>
        </div>
      </div>
    )
