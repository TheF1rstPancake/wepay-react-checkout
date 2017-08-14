import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Payment from 'payment';
import ReactDOM from 'react-dom';
import Base from '../../Base';

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
    super.handleChange('card_number', e.target.value);

  }
  validate() {
    if (this.props.card_number === '' || !this.props.card_number) {
      return null;
    }

    return Payment.fns.validateCardNumber(this.props.card_number) ? 'success' : 'error';
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
            value={this.props.card_number}
            onChange={this.handleChange}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

CardNumber.defaultProps = {
  componentName: 'card_number',
  card_number: '',
  ...CardNumber.defaultProps
};

export default CardNumber;
