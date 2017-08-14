import React from 'react';
import { FormGroup, Col } from 'react-bootstrap';
import Country from './Country';
import PostalCode from './PostalCode';
import BillingAddress from './BillingAddress';
import City from './City';
import State from './State';
import Base from '../../Base';
import PropTypes from 'prop-types';

class Address extends Base {
  constructor(props) {
    super(props);

    console.log("ADDRESS PROPS: ", props);
  }
  render() {
    const country = this.props.country.country;
    console.log("ADDRESS COUNTRY: ", country);
    return (
      <div>
        {
          country === 'US' ? null
            : <div>
              <FormGroup>
                <Col lg={12}>
                  <BillingAddress
                    onChange={this.handleChange}
                    country={country}
                    {...this.props.billing_address} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col lg={6}>
                  <City
                    onChange={this.handleChange}
                    {...this.props.city} />
                </Col>
                <Col lg={6}>
                  <State
                    country={country}
                    onChange={this.handleChange}
                    {...this.props.state} />
                </Col>
              </FormGroup>
            </div>
        }
        <FormGroup>
          <Col lg={6}>
            <Country
              country={country}
              onChange={this.handleChange}
              {...this.props.country} />
          </Col>
          <Col lg={6}>
            <PostalCode
              country={country}
              onChange={this.handleChange}
              {...this.props.postal_code} />
          </Col>
        </FormGroup>
      </div>
    );
  }
}

Address.propTypes = {
  country: PropTypes.object,
  billing_address: PropTypes.object,
  postal_code: PropTypes.object,
  state: PropTypes.object,
  ...Address.propTypes
};

Address.defaultProps = {
  componentName: 'address',
  country: { country: 'US' },
  billing_address: { billing_address: '' },
  postal_code: { postal_code: '' },
  state: { state: '' },
  ...Address.defaultProps
};

export default Address;
