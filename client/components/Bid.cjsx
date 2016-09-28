React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'
Image = require './Image.cjsx'

module.exports = React.createClass
  displayName: 'Bid'
  getInitialState: -> 
    bid: this.props.bid || {}
  handleChange: (event) ->
    this.state.bid[event.target.name] = event.target.value
    this.setState
      bid: this.state.bid
  render: ->
    return (
      <div className="card bid-card-div">
        <div className="card-content">
          <Image 
            key={this.state.bid.img.name} 
            file={this.state.bid.img} />
          <div className="input-group">
            <span id="bid-addon" 
                  className="input-group-addon">CPM Bid</span>
            <input name="amt"
                   type="number" 
                   className="form-control" 
                   placeholder="Enter CPM bid" 
                   aria-describedby="bid-addon"
                   value={this.state.bid.amt}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
          <div className="input-group">
            <span id="maxImpressions-addon" 
                  className="input-group-addon">Max Impressions</span>
            <input name="maxImpressions"
                   type="number" 
                   className="form-control" 
                   placeholder="Enter Max Impressions" 
                   aria-describedby="maxImpressions-addon"
                   value={this.state.bid.maxImpressions}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
        </div>
      </div>
    )
