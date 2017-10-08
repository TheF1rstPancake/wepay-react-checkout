import React from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

class Amount extends Base {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    
    // these are properties that we set by default
    // they can be overriden via the object's props
    // these should be used for values that are CONSTANT
    // for example, the ID of the input is likely not going to change
    this.defaultValues = {
      id: "amount",
      name: "amount",
      type: 'tel',
      placeholder: 'Amount',
      required: 'true',
    };
  }
  handleChange(e) {
    super.handleChange("value", e.target.value);
  }
  componentDidMount() {
    // raise our initial currency value
    // super.handleChange("currency", this.props.currency);
  }

  validate() {
    var amount = this.props.value;
    /* eslint-disable no-useless-escape*/
    var pattern = /^\d+(,\d{3})*\.?[0-9]?[0-9]?$/;

    return amount === '' || !amount ? null : pattern.test(amount) ? 'success' : 'error';
  }

  render(){
    const currency_flag = Amount.CURRENCIES[this.props.currency];
    
    // remove props that don't belong
    var { onChange, currency, editable, componentName, ...props } = this.props;

    var values = {
      ...this.defaultValues,
      ...props
    };
    return (
      <FormGroup validationState={this.validate()}>
        <InputGroup>
          <InputGroup.Addon>
            {currency_flag}
          </InputGroup.Addon>
          <FormControl
            {...values}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

Amount.CURRENCIES = {
  GBP: (<i
    className="fa fa-gbp"
    style={{ ariaHidden:"true" }} />),
  USD: (<i
    className="fa fa-usd"
    style={{ ariaHidden:"true" }} />)  ,
  CAD: (<i
    className="fa fa-usd"
    style={{ ariaHidden:"true" }} />)
};

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  ...Amount.propTypes
};

Amount.defaultProps = {
  currency: 'USD',
  //value: '',
  componentName: 'amount',
  editable: false,
  ...Amount.defaultProps
};

export default Amount;
