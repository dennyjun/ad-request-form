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
      postal: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    return (
      <div>

        <Link to="/payment" className="btn btn-primary">Next</Link>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Company;
