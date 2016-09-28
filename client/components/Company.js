import React from 'react';
import { Link } from 'react-router';

class Company extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      postal: '',
      budget: 0
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
    fetch('users/dummy/company', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({company: this.state})
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    return (
      <form name="companyForm">
        <div className="input-group">
          <span id="name-addon" 
                className="input-group-addon">Name</span>
          <input name="name"
                 type="text" 
                 className="form-control" 
                 placeholder="Enter name" 
                 aria-describedby="name-addon"
                 value={this.state.name}
                 onChange={this.handleChange}/>
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
                 onChange={this.handleChange}/>
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
                 onChange={this.handleChange}/>
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
                 onChange={this.handleChange}/>
        </div>
        <div className="input-group">
          <span id="postal-addon"
                className="input-group-addon">Postal</span>
          <input name="postal"
                 type="text" 
                 className="form-control" 
                 placeholder="Enter postal code" 
                 aria-describedby="postal-addon"
                 value={this.state.postal}
                 onChange={this.handleChange}/>
        </div>
        <div className="input-group">
          <span id="budget-addon"
                className="input-group-addon">Budget</span>
          <input name="budget"
                 type="text" 
                 className="form-control" 
                 placeholder="Enter total bugdet" 
                 aria-describedby="budget-addon"
                 value={this.state.budget}
                 onChange={this.handleChange}/>
        </div>
        <Link onClick={this.linkOnClick} 
              to="/images" 
              className="btn btn-primary">Next</Link>
      </form>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Company;
