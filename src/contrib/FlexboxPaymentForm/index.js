import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PaymentForm } from '../../components';


class Input extends Component {
  constructor(props){
    super(props);

    this.style = {
      container: {
        display: 'flex', 
        flexGrow: 1,
        marginRight: '10px'
      },
      input: {
        flexGrow: 1
      },
      addOn: {
        backgroundColor: 'rgba(147, 128, 108, 0.1)',
        color: '#666666',
        font: 'inherit',
        fontWeight: 'normal',
        padding: '0.5em 0.75em'
      }
    };
  }
  render(){
    var { addOn, ...props } = this.props;
    var addOnDiv = addOn !== undefined 
      ? (<div style={this.style.addOn}>{this.props.addOn}</div>)
      : null;

    console.log("INPUT PROPS: ", this.props);
    return (
      <div style={this.style.container}>
        {addOnDiv}
        <input
          style={this.style.input}
          {...props}
        />
      </div>
    );
  }
}

class FlexboxPaymentForm extends PaymentForm {
  render(){
    const payment_info = this.props.payment_info ? this.props.payment_info : {};
    const name = this.props.name ? this.props.name : {};
    const email = this.props.email ? this.props.email : {};
    const amount = this.props.amount ? this.props.amount: {};

    return (
      <div
        style={{ display:"flex", flexDirection:'column' }}>
        <div
          style={{ ...FlexboxPaymentForm.item, 'flexGrow':1 }}>
          <Amount
            onChange={this.handleChange}
            {...amount} />
        </div>
        <div style={{ ...FlexboxPaymentForm.item, 'flexGrow': 1 }}>
          <Email
            onChange={this.handleChange}
            {... email}
          />
        </div>
        <div style={{ ...FlexboxPaymentForm.item, 'flexGrow':1 }}>
          <Name
            onChange={this.handleChange}
            {...name} />
        </div>
      </div>
    );
  }
}

class Amount extends PaymentForm.Amount {
  render(){
    const currency_flag = Amount.CURRENCIES[this.props.currency];
    console.log("AMOUNT PROPS: ", this.props.value);

    var { onChange, componentName, currency, editable, ...other_props } = this.props;

    var props = {
      ...this.defaultValues,
      disabled: !this.props.editable,
      ...other_props
    };

    return (
      <Input
        addOn={currency_flag}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}

class Email extends PaymentForm.Email {
  render(){
    var { onChange, componentName, ...otherProps } = this.props;
    var props = {
      ...this.defaultValues,
      ...otherProps
    };
    console.log("EMAIL PROPS: ", props, this.defaultValues);
    return (
      
      <Input 
        {...props}
        addOn={<i className="fa fa-envelope" />}
        onChange={this.handleChange}
      />
    );
  }
}

class Name extends PaymentForm.Name {
  render(){
    var { onChange, componentName, ...otherProps } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        <Input
          {... this.defaultValues.firstname}
          {... otherProps}
          addOn={<i className="fa fa-user" />}
          onChange={this.handleChange} />
        <Input
          {... this.defaultValues.lastname}
          {... otherProps}
          onChange={this.handleChange} />
      </div>
    );
  }
}

FlexboxPaymentForm.Amount = Amount;
FlexboxPaymentForm.Email = Email;
FlexboxPaymentForm.Name = Name;

// styles
FlexboxPaymentForm.item = {
  margin: '10px'

};

export default FlexboxPaymentForm;
