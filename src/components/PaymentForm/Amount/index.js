import React from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

class Amount extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange("value", e.target.value);
  }
  componentDidMount() {
    // raise our initial currency value
    super.handleChange("currency", this.props.currency);
  }

  validate() {
    var amount = this.props.value;
    /* eslint-disable no-useless-escape*/
    var pattern = /^\d+(,\d{3})*\.?[0-9]?[0-9]?$/;

    console.log(pattern.test(amount));
    return amount === '' || !amount ? null : pattern.test(amount) ? 'success' : 'error';
  }

  render(){
    const currency_flag = Amount.CURRENCIES[this.props.currency];

    return (
      <FormGroup validationState={this.validate()}>
        <InputGroup>
          <InputGroup.Addon>
            {currency_flag}
          </InputGroup.Addon>
          <FormControl
            id="amount"
            name="amount"
            type="tel"
            placeholder="Amount"
            value={this.props.value}
            onChange={this.handleChange}
            required="true"
            disabled={!this.props.editable}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

Amount.CURRENCIES = {
  GBP: '£',
  USD: '$',
  CAD: '$'
};

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string,
  editable: PropTypes.bool,
  ...Amount.propTypes
};

Amount.defaultProps = {
  currency: 'USD',
  value: '',
  componentName: 'amount',
  editable: false,
  ...Amount.defaultProps
};

export default Amount;
