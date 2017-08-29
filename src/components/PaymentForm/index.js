import React from 'react';
import Base from '../Base';

import Name from './Name';
import Email from './Email';
import PaymentInfo from './PaymentInfo';
import Amount from './Amount';
import { Grid, FormGroup, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PaymentForm extends Base {
  constructor(props) {
    super(props);

    console.log("PAYMENT FORM PROPS: ", props);

    this.tokenizeCard = this.tokenizeCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  componentDidMount() {
    if (this.props.production) {
      window.WePay.set_endpoint("production");
    } else {
      window.WePay.set_endpoint("stage");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const payment_info = this.props.payment_info;

    var expiration = payment_info.expiration.value.split(" / ");

    // construct payload
    var payload = {
      client_id: this.props.client_id,
      user_name: `${this.props.name.first_name} ${this.props.name.last_name}`,
      email: this.props.email.value,
      cc_number: payment_info.card_number.value,
      cvv: payment_info.cvc.value,
      expiration_month: expiration[0],
      expiration_year: expiration[1]
    };
    payload.address = {
      country: payment_info.address.country.value,
      postal_code: payment_info.address.postal_code.value,
      address1: payment_info.address.billing_address
        ? payment_info.address.billing_address.value : undefined,
      city: payment_info.address.city
        ? payment_info.address.city.value : undefined,
      region: payment_info.address.state
        ? payment_info.address.state.value : undefined
    };

    // we need to tokenize the card info
    // and then pass the checkout payload to our backend.
    this.tokenizeCard(payload).then(response => {
      this.props.onTokenized(response);
    }).catch(err => {
      this.props.onError(err);
    });
  }

  handleError(err) {
    this.props.onError(err);
  }

  tokenizeCard(payload){
    return new Promise(function(resolve, reject) {
      var check = window.WePay.credit_card.create(payload, function(response){
        if (response.error) {
          reject(response);
        } else {
          resolve(response);
        }
      });

      if (check.error){
        reject(check);
      }
    });
  }

  render() {
    const payment_info = this.props.payment_info ? this.props.payment_info : {};
    const name = this.props.name ? this.props.name : {};
    const email = this.props.email ? this.props.email : {};
    const amount = this.props.amount ? this.props.amount: {};

    console.log("AMOUNT IN FORM: ", amount);
    return (
      <div className="App">
        <Grid>
          <form
            className="form-horizontal"
            onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col lg={12}>
                <Name
                  onChange={this.handleChange}
                  {...name} />
              </Col>
            </FormGroup>
            <Col lg={12}>
              <Email
                onChange={this.handleChange}
                {...email} />
            </Col>
            <FormGroup>
              <Col lg={12}>
                <PaymentInfo
                  onChange={this.handleChange}
                  {...payment_info}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col lg={12}>
                <Amount
                  onChange={this.handleChange}
                  {...amount}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col lg={12}>
                <Button
                  type="submit"
                  bsStyle="success"
                  block>
              Pay
                </Button>
              </Col>
            </FormGroup>
          </form>
        </Grid>
      </div>
    );
  }
}

PaymentForm.propTypes = {
  client_id: PropTypes.string.isRequired,
  production: PropTypes.bool,
  name: PropTypes.object,
  email: PropTypes.object,
  onTokenized: PropTypes.func,
  onError: PropTypes.func,
  payment_info: PropTypes.object,
  amount:PropTypes.object,
  ...PaymentForm.propTypes
};

PaymentForm.defaultProps = {
  production: false,
  componentName: 'payment_form',
  payment_info: {},
  name: { first_name: '', last_name: '' },
  email: { email: '' },
  amount: {},
  onError: (err) => {console.log(err);},
  ...PaymentForm.defaultProps
};

PaymentForm.Amount = Amount;
PaymentForm.PaymentInfo = PaymentInfo;
PaymentForm.Name = Name;
PaymentForm.Email = Email;

export default PaymentForm;
