import React, { Component } from 'react';
import './App.css';
import PaymentForm from '../src/components/PaymentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_form: {
        payment_info: {},
        name: {},
        email: {},
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTokenized = this.handleTokenized.bind(this);
  }

  handleChange(name, value) {
    var new_state = this.state;
    new_state[name] = value;
    this.setState(new_state);
  }

  // on success occurs when the card is tokenized
  // at this point, you need to send the tokenized card to your backend server
  // along with the payment information (such as cost)
  handleTokenized(response) {
    // we are going to re-package the info
    // this is all we need to call WePay's /checkout/create
    var payload = {
      credit_card_id:response.credit_card_id,
      amount: this.state.payment_form.amount.value,
      currency: this.state.payment_form.amount.currency,
    };
    alert(`Submit to backend: ${JSON.stringify(payload)}`);
  }
  render() {
    const payment_form = this.state.payment_form ? this.state.payment_form : {};
    return (<PaymentForm
      client_id="123490"
      production={false}
      onChange={this.handleChange}
      onTokenized={this.handleTokenized}
      name={payment_form.name}
      email={payment_form.email}
      amount={payment_form.amount}
      payment_info={payment_form.payment_info}
    />);
  }
}

export default App;
