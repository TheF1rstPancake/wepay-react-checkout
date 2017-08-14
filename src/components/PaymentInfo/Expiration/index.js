import React from 'react';
import Payment from 'payment';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Base from '../../Base';
class Expiration extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    Payment.formatCardExpiry(ReactDOM.findDOMNode(this.refs.expirdate));
  }

  handleChange(e) {
    super.handleChange('expiration', e.target.value);
  }

  validate() {
    if (this.props.expiration === '' || !this.props.expiration) {
      return null;
    }

    return Payment.fns.validateCardExpiry(this.props.expiration) ? 'success' : 'error';
  }

  render(){
    return (<FormGroup validationState={this.validate()}>
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph="calendar" />
        </InputGroup.Addon>
        <FormControl
          id="expirdate"
          ref="expirdate"
          name="expirdate"
          type="tel"
          placeholder="MM / YY"
          value={this.props.expiration}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>);
  }
}

Expiration.defaultProps = {
  componentName: 'expiration',
  expiration: '',
  ...Expiration.defaultProps
};

export default Expiration;
