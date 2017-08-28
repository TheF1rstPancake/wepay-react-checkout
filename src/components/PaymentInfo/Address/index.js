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
  render() {
    const country = this.props.country.value;
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
                    country={country}
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
  country: { value: 'US' },
  billing_address: { value: '' },
  postal_code: { value: '' },
  state: { value: '' },
  ...Address.defaultProps
};

Address.BillingAddress = BillingAddress;
Address.Country = Country;
Address.PostalCode = PostalCode;
Address.City = City;
Address.State = State;

export default Address;
