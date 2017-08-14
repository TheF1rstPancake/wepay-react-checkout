import React from 'react';
import { FormGroup, Col, Panel } from 'react-bootstrap';
import CardNumber from './CardNumber';
import Expiration from './Expiration';
import CVC from './CVC';
import Address from './Address';
import Base from '../Base';
import PropTypes from 'prop-types';
class PaymentInfo extends Base {

  render() {
    const address = this.props.address ? this.props.address : {};
    return (<FormGroup>
      <Col
        lg={12}
        xs={12}>
        <Panel header="Card Details">
          <FormGroup>
            <Col lg={12}>
              <CardNumber
                onChange={this.handleChange}
                {...this.props.card_number} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col lg={6}>
              <Expiration
                onChange={this.handleChange}
                {...this.props.expiration} />
            </Col>
            <Col lg={6}>
              <CVC
                onChange={this.handleChange}
                {...this.props.cvc}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col lg={12}>
              <Address
                onChange={this.handleChange}
                {...address}
              />
            </Col>
          </FormGroup>
        </Panel>
      </Col>
    </FormGroup>);
  }
}

PaymentInfo.propTypes = {
  address: PropTypes.object,
  expiration: PropTypes.object,
  cvv: PropTypes.object,
  ...PaymentInfo.propTypes
};

PaymentInfo.defaultProps = {
  componentName: 'payment_info',
  address: {
    billing_address: undefined,
    city: undefined,
    country: undefined,
    postal_code: undefined,
    state:undefined
  },
  card_number: { card_number: '' },
  cvc: { cvv: '' },
  expiration: { expiration: '' },
  ...PaymentInfo.defaultProps
};

export default PaymentInfo;
