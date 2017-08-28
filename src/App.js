import React, { Component } from 'react';
import './App.css';
import PaymentForm from './components/PaymentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_form: {
        payment_info: { address:{ country:{ value:'CA' } } },
        name: {},
        email: {},
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    var new_state = this.state;
    new_state[name] = value;
    this.setState(new_state);
  }

  render() {
    const payment_form = this.state.payment_form ? this.state.payment_form : {};
    return (<PaymentForm
      client_id="123490"
      onChange={this.handleChange}
      name={payment_form.name}
      email={payment_form.email}
      payment_info={payment_form.payment_info}
    />);
  }
}

export default App;
