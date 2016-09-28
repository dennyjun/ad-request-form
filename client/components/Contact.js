import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact || {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.contact[event.target.name] = event.target.value;
    this.setState({
      contact: this.state.contact
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    return (
      <div className="flex-container">
        <div className="max-width">
          <div className="card-title">
            <span>Contact Information</span>
          </div>
          <div className="input-group">
            <span id="fName-addon" 
                  className="input-group-addon">First Name</span>
            <input name="firstName"
                   type="text" 
                   className="form-control" 
                   placeholder="Enter first name" 
                   aria-describedby="fName-addon"
                   value={this.state.contact.firstName}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
          <div className="input-group">
            <span id="lName-addon"
                  className="input-group-addon">Last Name</span>
            <input name="lastName"
                   type="text" 
                   className="form-control" 
                   placeholder="Enter last name" 
                   aria-describedby="lName-addon"
                   value={this.state.contact.lastName}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
          <div className="input-group">
            <span id="email-addon"
                  className="input-group-addon">Email</span>
            <input name="email"
                   type="email" 
                   className="form-control" 
                   placeholder="Enter email" 
                   aria-describedby="email-addon"
                   value={this.state.contact.email}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
          <div className="input-group">
            <span id="phone-addon"
                  className="input-group-addon">Phone #</span>
            <input name="phone"
                   type="text" 
                   className="form-control" 
                   placeholder="Enter phone #" 
                   aria-describedby="phone-addon"
                   value={this.state.contact.phone}
                   onChange={this.handleChange}
                   disabled={!!this.props.disable}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Contact;
