React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'
Company = require './Company.cjsx'
Bids = require './Bids.cjsx'
Payment = require './Payment.cjsx'

module.exports = React.createClass
  displayName: 'Confirm'
  getInitialState: -> 
    form: {}
  componentWillMount: ->
    setState = this.setState.bind this
    Request
      .get '/confirms'
      .end (err, res) ->
        if res.ok
          setState
            form: res.body.form
        else
          alert 'Failed to get form!'
        Request
          .delete '/users'
          .end (err, res) -> {}
  render: ->
    company = if !this.state.form.company then null else
      (<Company {...this.state.form.company} disable={true} />)
    bids = if !this.state.form.bids then null else
      (<Bids bids={this.state.form.bids} disable={true} />)
    payment = if !this.state.form.payment then else
      (<Payment {...this.state.form.payment} disable={true} />)
    return (
      <div className="flex-container">
        <div className="max-width">
          {company}
          {bids}
          {payment}
        </div>
      </div>
    )
