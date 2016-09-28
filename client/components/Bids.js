import React from 'react';
import { Link } from 'react-router';
import Request from 'superagent';
import Bid from './Bid';

class Bids extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bids: props.bids || {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  linkOnClick(event) {
    fetch('/bids', {
      method: 'put',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({bids: this.state.bids}),
      credentials: 'same-origin'
    });
  }

  componentWillMount() {
    if(!!this.props.disable) {
      return;
    }
    Request
      .get('/bids')
      .end((err, res) => {
        if (res.ok) {
          this.setState({
            bids: res.body
          })
        } else {
          alert('Failed to get images!');
        }
      });
  }

  render() {
    const bidsDOM = 
      Object.keys(this.state.bids).map((key, index) => {
        const bid = this.state.bids[key];
        return (
          <Bid 
            key={index} 
            bid={bid}
            disable={!!this.props.disable} />
        );
      }
    );
    const nextLink = this.props.disable
      ? null
      : (<div className="link-div">
           <Link onClick={this.linkOnClick} 
                 to="/payment" 
                 className="btn btn-primary">Next</Link>
         </div>);
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <div className="card-title">
              <span>Bids</span>
            </div>
            {bidsDOM}
            {nextLink}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Bids;
