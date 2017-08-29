import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../../Base';
import PropTypes from 'prop-types';

class BillingAddress extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange('value', e.target.value);
  }

  render() {
    return (<FormGroup>
      <ControlLabel>
        Address
      </ControlLabel>
      <FormControl
        id="billing_address"
        name="billing_address"
        type="text"
        placeholder="Street Address"
        value={this.props.value}
        onChange={this.handleChange}
      />
    </FormGroup>);
  }
}

BillingAddress.propTypes = {
  country: PropTypes.string,
  value:PropTypes.string,
  ...BillingAddress.propTypes
};

BillingAddress.defaultProps = {
  componentName: 'billing_address',
  value: '',
  ...BillingAddress.defaultProps
};

export default BillingAddress;
