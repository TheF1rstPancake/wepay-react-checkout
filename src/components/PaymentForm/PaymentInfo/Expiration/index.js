import React from 'react';
import Payment from 'payment';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Base from '../../../Base';
import PropTypes from 'prop-types';

class Expiration extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    console.log(this.expirdate);
    Payment.formatCardExpiry(ReactDOM.findDOMNode(this.expirdate));
  }

  handleChange(e) {
    super.handleChange('value', e.target.value);
  }

  validate() {
    if (this.props.value === '' || !this.props.value) {
      return null;
    }

    return Payment.fns.validateCardExpiry(this.props.value) ? 'success' : 'error';
  }

  render(){
    return (<FormGroup validationState={this.validate()}>
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph="calendar" />
        </InputGroup.Addon>
        <FormControl
          id="expirdate"
          inputRef={(input)=>{this.expirdate = input;}}
          name="expirdate"
          type="tel"
          placeholder="MM / YY"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>);
  }
}

Expiration.propTypes = {
  value: PropTypes.string,
  ...Expiration.propTypes
};

Expiration.defaultProps = {
  componentName: 'expiration',
  value: '',
  ...Expiration.defaultProps
};

export default Expiration;
