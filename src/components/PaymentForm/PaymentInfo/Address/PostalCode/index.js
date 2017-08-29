import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../../../Base';

class PostalCode extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange('value', e.target.value.toUpperCase());
  }

  validate() {
    if (this.props.value === '' || !this.props.value) {
      return null;
    }

    if (this.props.country === 'US') {
      return this.validateUS(this.props.value) ? 'success' : 'error';
    } else if (this.props.country === 'CA') {
      return this.validateCA(this.props.value) ? 'success' : 'error';
    } else {
      // we don't have validation for every country
      return null;
    }
  }

  validateUS(value) {
    // https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
    var pattern = new RegExp('(^\\d{5}$)|(^\\d{5}-\\d{4}$)');

    return this.validateCountryPostalCode(value, pattern);
  }

  validateCA(value) {
    // https://stackoverflow.com/questions/1146202/canadian-postal-code-validation
    var pattern = new RegExp('[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ]\\s?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]');

    return this.validateCountryPostalCode(value, pattern);
  }
  validateCountryPostalCode(value, pattern) {
    return pattern.test(value.toUpperCase());
  }

  render() {
    return (
      <FormGroup validationState={this.validate()}>
        <ControlLabel>
          {this.props.country === 'US' ? 'Zip Code' : 'Postal Code'}
        </ControlLabel>
        <FormControl
          id="postalcode"
          name="postalcode"
          type="tel"
          placeholder={this.props.country === 'US' ? 'Zip Code' : 'Postal Code'}
          value={this.props.value}
          onChange={this.handleChange}
          required="true" />
      </FormGroup>
    );
  }
}

// extend existing propTypes
PostalCode.propTypes = {
  country: PropTypes.string,
  value: PropTypes.string,
  ...PostalCode.propTypes
};

PostalCode.defaultProps = {
  country: 'US',
  value: '',
  componentName: 'postal_code',
  ...PostalCode.defaultProps
};

export default PostalCode;
