import React from 'react';
import { Link } from 'react-router';

class Bids extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bids: []
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

export default Bids;
