import React from 'react';
import Payment from 'payment';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Base from '../../Base';

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
    super.handleChange('cvc', e.target.value);
  }

  validate() {
    return this.props.cvc === '' || !this.props.cvc ? null :  Payment.fns.validateCardCVC(this.props.cvc) ? 'success' : 'error';
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
          value={this.props.cvv}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>);
  }
}

CVC.defaultProps = {
  componentName: 'cvc',
  cvc: '',
  ...CVC.defaultProps
};


export default CVC;
