import React from 'react';
import { Link } from 'react-router';
import Request from 'superagent';
import Company from './Company';
import Bids from './Bids';
import Payment from './Payment';


class Confirm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form : {}
    };
  }

  componentWillMount() {
    Request
      .get('/confirms')
      .end((err, res) => {
        if (res.ok) {
          this.setState({
            form: res.body.form
          });
        } else {
          alert('Failed to get form!');
        }
        setTimeout(() => {
          Request
            .delete('/users')
            .end((err, res) => {  
              console.log('Deleted token');
            });
        }, 1000);
      });
  }

  render() {
    const company = this.state.form.company
      ? (<Company {...this.state.form.company} disable={true} />)
      : null;
    const bids = this.state.form.bids
      ? (<Bids bids={this.state.form.bids} disable={true} />)
      : null;
    const payment = this.state.form.payment
      ? (<Payment {...this.state.form.payment} disable={true} />)
      : null;
    return (
      <div className="flex-container">
        <div>
          {company}
          {bids}
          {payment}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Confirm;
