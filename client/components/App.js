import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    return (
      <div>
        <Link to="/company" className="btn btn-primary">Start</Link>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default App;
