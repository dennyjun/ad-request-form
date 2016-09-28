import React from 'react';
import { Link } from 'react-router';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardNum: props.creditCardNum || '',
      expDate: props.expDate || '',
      cvc: props.cvc || '',
      name: props.name || ''
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
    fetch('users/dummy/payment', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({payment: this.state})
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    const nextLink = this.props.disable
      ? null
      : (<div className="link-div">
           <Link onClick={this.linkOnClick} 
                 to="/confirm" 
                 className="btn btn-primary">Next</Link>
         </div>);
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
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
            </form>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Payment;
