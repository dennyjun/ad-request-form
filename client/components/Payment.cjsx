React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'

module.exports = React.createClass
  displayName: 'Payment'
  getInitialState: -> 
    creditCardNum: this.props.creditCardNum || ''
    expDate: this.props.expDate || ''
    cvc: this.props.cvc || ''
    name: this.props.name || ''
  linkOnClick: (event) ->
    Request
      .post '/payments'
      .send {payment: this.state}
      .set('Accept', 'application/json')
      .end (err, res) ->
        if res.ok
          document.getElementsByName('transition')[0].click()
        else
          console.error 'Failed to submit payment information'
  handleChange: (event) ->
    this.state[event.target.name] = event.target.value
    this.setState this.state
  render: ->
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
              <span>Payment Information</span>
            </div>
            <form id="paymentForm" name="paymentForm">
              <div className="input-group">
                <span id="name-addon" 
                      className="input-group-addon">Name</span>
                <input name="name"
                       type="text" 
                       className="form-control" 
                       placeholder="Enter name" 
                       aria-describedby="name-addon"
                       value={this.state.name}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="creditCardNum-addon"
                      className="input-group-addon">Credit Card #</span>
                <input name="creditCardNum"
                       type="number" 
                       className="form-control" 
                       placeholder="Enter Credit Card #" 
                       aria-describedby="creditCardNum-addon"
                       value={this.state.creditCardNum}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="cvc-addon"
                      className="input-group-addon">CVC</span>
                <input name="cvc"
                       type="number" 
                       className="form-control" 
                       placeholder="Enter CVC" 
                       aria-describedby="cvc-addon"
                       value={this.state.cvc}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="expDate-addon"
                      className="input-group-addon">Expiration Date</span>
                <input name="expDate"
                       type="date" 
                       className="form-control" 
                       placeholder="Enter Expiration Date" 
                       aria-describedby="expDate-addon"
                       value={this.state.expDate}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              {nextLink}
              <Link name="transition" 
                 style={{display: "none"}}
                 to="/confirm" />
            </form>
          </div>
        </div>
      </div>
    )
