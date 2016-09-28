React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'
Contact = require './Contact.cjsx'

module.exports = React.createClass
  displayName: 'Company'
  getInitialState: -> 
    name: this.props.name || ''
    address: this.props.address || ''
    city: this.props.city || ''
    state: this.props.state || ''
    postal: this.props.postal || ''
    budget: this.props.budget || 0
    contactInfo: this.props.contactInfo || {}
  componentWillMount: ->
    if !!this.props.disable
      return
    setState = this.setState.bind this
    Request
      .get '/companies'
      .end (err, res) ->
        if res.ok
          setState
            name: res.body.company.name || ''
            address: res.body.company.address || ''
            city: res.body.company.city || ''
            state: res.body.company.state || ''
            postal: res.body.company.postal || ''
            budget: res.body.company.budget || 0
            contactInfo: res.body.company.contactInfo || {}
        else
          alert 'Failed to get company information!'
  linkOnClick: (event) ->
    Request
      .post '/companies'
      .send {company: this.state}
      .set('Accept', 'application/json')
      .end (err, res) ->
        if res.ok
          document.getElementsByName('transition')[0].click()
        else
          console.error 'Failed to save company information'
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
              <span>Company Information</span>
            </div>
            <form id="companyForm" name="companyForm">
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
                <span id="address-addon"
                      className="input-group-addon">Address</span>
                <input name="address"
                       type="text" 
                       className="form-control" 
                       placeholder="Enter address" 
                       aria-describedby="address-addon"
                       value={this.state.address}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="city-addon"
                      className="input-group-addon">City</span>
                <input name="city"
                       type="text" 
                       className="form-control" 
                       placeholder="Enter city" 
                       aria-describedby="city-addon"
                       value={this.state.city}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="state-addon"
                      className="input-group-addon">State</span>
                <input name="state"
                       type="text" 
                       className="form-control" 
                       placeholder="Enter state" 
                       aria-describedby="state-addon"
                       value={this.state.state}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="postal-addon"
                      className="input-group-addon">Postal</span>
                <input name="postal"
                       type="number" 
                       className="form-control" 
                       placeholder="Enter postal code" 
                       aria-describedby="postal-addon"
                       value={this.state.postal}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <div className="input-group">
                <span id="budget-addon"
                      className="input-group-addon">Budget</span>
                <input name="budget"
                       type="number" 
                       className="form-control" 
                       placeholder="Enter total bugdet" 
                       aria-describedby="budget-addon"
                       value={this.state.budget}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              <Contact contact={this.state.contactInfo} 
                       disable={!!this.props.disable} />
              {nextLink}
              <Link name="transition" 
                 style={{display: "none"}}
                 to="/images" />
            </form>
          </div>
        </div>
      </div>
    )
