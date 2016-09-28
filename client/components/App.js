import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // before dom has been rendered
  }

  render() {
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <div className="card-title">
              <span>Advertisement Request Form</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="link-div">
              <Link onClick={this.linkOnClick} 
                    to="/company" 
                    className="btn btn-primary">Start</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default App;
