import React from 'react';
import { Link } from 'react-router';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      address: props.address || '',
      city: props.city || '',
      state: props.state || '',
      postal: props.postal || '',
      budget: props.budget || 0
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
    fetch('/companies', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({company: this.state}),
      credentials: 'same-origin'
    }).then((response) => {
      if(response.ok) {
        document.getElementsByName('transition')[0].click();
      } else {
        console.error('Failed to save company information');
      }
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    const nextLink = this.props.disable
      ? null
      : (<div className="link-div">
           <button type="button"
                   onClick={this.linkOnClick} 
                   className="btn btn-primary">Next</button>
         </div>);
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
                       type="text" 
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
                       type="text" 
                       className="form-control" 
                       placeholder="Enter total bugdet" 
                       aria-describedby="budget-addon"
                       value={this.state.budget}
                       onChange={this.handleChange}
                       disabled={!!this.props.disable}/>
              </div>
              {nextLink}
              <Link name="transition" 
                 style={{display: "none"}}
                 to="/images" />
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

export default Company;
