import React from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import Image from './Image';

class Bid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bid: props.bid || {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.bid[event.target.name] = event.target.value;
    this.setState({
      bid: this.state.bid
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
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
                   onChange={this.handleChange}/>
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
                   onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Bid;
