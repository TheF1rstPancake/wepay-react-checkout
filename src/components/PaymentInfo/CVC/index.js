import React from 'react';
import Payment from 'payment';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Base from '../../Base';
import PropTypes from 'prop-types';

class CVC extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    Payment.formatCardCVC(ReactDOM.findDOMNode(this.refs.cardcvc));
  }

  handleChange(e) {
    super.handleChange('value', e.target.value);
  }

  validate() {
    return this.props.value === '' || !this.props.value ? null :  Payment.fns.validateCardCVC(this.props.value) ? 'success' : 'error';
  }

  render(){
    return (<FormGroup validationState={this.validate()}>
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph="compressed" />
        </InputGroup.Addon>
        <FormControl
          id="cardcvc"
          ref="cardcvc"
          name="cardcvc"
          type="tel"
          placeholder="***"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>);
  }
}

CVC.propTypes.value = PropTypes.string;

CVC.defaultProps = {
  componentName: 'cvc',
  value: '',
  ...CVC.defaultProps
};


export default CVC;
