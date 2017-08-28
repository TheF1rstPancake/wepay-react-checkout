import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Payment from 'payment';
import ReactDOM from 'react-dom';
import Base from '../../Base';
import PropTypes from 'prop-types';
class CardNumber extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    // attach card number formatting
    Payment.formatCardNumber(ReactDOM.findDOMNode(this.refs.cardnumber));
  }

  handleChange(e) {
    super.handleChange('value', e.target.value);

  }
  validate() {
    if (this.props.value === '' || !this.props.value) {
      return null;
    }

    return Payment.fns.validateCardNumber(this.props.value) ? 'success' : 'error';
  }


  render() {
    return (
      <FormGroup
        validationState={this.validate()}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="credit-card" />
          </InputGroup.Addon>
          <FormControl
            id="cardnumber"
            name="cardnumber"
            type="tel"
            ref="cardnumber"
            placeholder="**** **** **** ****"
            value={this.props.value}
            onChange={this.handleChange}
            required="true"
          />
        </InputGroup>
      </FormGroup>
    );
  }
}
CardNumber.defaultProps = {
  value:PropTypes.string,
  ...CardNumber.defaultProps
};

CardNumber.defaultProps = {
  componentName: 'card_number',
  value: '',
  ...CardNumber.defaultProps
};

export default CardNumber;
