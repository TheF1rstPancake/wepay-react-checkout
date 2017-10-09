var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PaymentForm } from '../../components';

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.style = {
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
    return _this;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          addOn = _props.addOn,
          props = _objectWithoutProperties(_props, ['addOn']);

      var addOnDiv = addOn !== undefined ? React.createElement(
        'div',
        { style: this.style.addOn },
        this.props.addOn
      ) : null;

      console.log("INPUT PROPS: ", this.props);
      return React.createElement(
        'div',
        { style: this.style.container },
        addOnDiv,
        React.createElement('input', Object.assign({
          style: this.style.input
        }, props))
      );
    }
  }]);

  return Input;
}(Component);

var FlexboxPaymentForm = function (_PaymentForm) {
  _inherits(FlexboxPaymentForm, _PaymentForm);

  function FlexboxPaymentForm() {
    _classCallCheck(this, FlexboxPaymentForm);

    return _possibleConstructorReturn(this, (FlexboxPaymentForm.__proto__ || Object.getPrototypeOf(FlexboxPaymentForm)).apply(this, arguments));
  }

  _createClass(FlexboxPaymentForm, [{
    key: 'render',
    value: function render() {
      var payment_info = this.props.payment_info ? this.props.payment_info : {};
      var name = this.props.name ? this.props.name : {};
      var email = this.props.email ? this.props.email : {};
      var amount = this.props.amount ? this.props.amount : {};

      return React.createElement(
        'div',
        {
          style: { display: "flex", flexDirection: 'column' } },
        React.createElement(
          'div',
          {
            style: Object.assign({}, FlexboxPaymentForm.item, { 'flexGrow': 1 }) },
          React.createElement(Amount, Object.assign({
            onChange: this.handleChange
          }, amount))
        ),
        React.createElement(
          'div',
          { style: Object.assign({}, FlexboxPaymentForm.item, { 'flexGrow': 1 }) },
          React.createElement(Email, Object.assign({
            onChange: this.handleChange
          }, email))
        ),
        React.createElement(
          'div',
          { style: Object.assign({}, FlexboxPaymentForm.item, { 'flexGrow': 1 }) },
          React.createElement(Name, Object.assign({
            onChange: this.handleChange
          }, name))
        )
      );
    }
  }]);

  return FlexboxPaymentForm;
}(PaymentForm);

var Amount = function (_PaymentForm$Amount) {
  _inherits(Amount, _PaymentForm$Amount);

  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, (Amount.__proto__ || Object.getPrototypeOf(Amount)).apply(this, arguments));
  }

  _createClass(Amount, [{
    key: 'render',
    value: function render() {
      var currency_flag = Amount.CURRENCIES[this.props.currency];
      console.log("AMOUNT PROPS: ", this.props.value);

      var _props2 = this.props,
          onChange = _props2.onChange,
          componentName = _props2.componentName,
          currency = _props2.currency,
          editable = _props2.editable,
          other_props = _objectWithoutProperties(_props2, ['onChange', 'componentName', 'currency', 'editable']);

      var props = Object.assign({}, this.defaultValues, {
        disabled: !this.props.editable
      }, other_props);

      return React.createElement(Input, Object.assign({
        addOn: currency_flag,
        onChange: this.handleChange
      }, props));
    }
  }]);

  return Amount;
}(PaymentForm.Amount);

var Email = function (_PaymentForm$Email) {
  _inherits(Email, _PaymentForm$Email);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).apply(this, arguments));
  }

  _createClass(Email, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          onChange = _props3.onChange,
          componentName = _props3.componentName,
          otherProps = _objectWithoutProperties(_props3, ['onChange', 'componentName']);

      var props = Object.assign({}, this.defaultValues, otherProps);
      console.log("EMAIL PROPS: ", props, this.defaultValues);
      return React.createElement(Input, Object.assign({}, props, {
        addOn: React.createElement('i', { className: 'fa fa-envelope' }),
        onChange: this.handleChange
      }));
    }
  }]);

  return Email;
}(PaymentForm.Email);

var Name = function (_PaymentForm$Name) {
  _inherits(Name, _PaymentForm$Name);

  function Name() {
    _classCallCheck(this, Name);

    return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).apply(this, arguments));
  }

  _createClass(Name, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          onChange = _props4.onChange,
          componentName = _props4.componentName,
          otherProps = _objectWithoutProperties(_props4, ['onChange', 'componentName']);

      return React.createElement(
        'div',
        { style: { display: 'flex' } },
        React.createElement(Input, Object.assign({}, this.defaultValues.firstname, otherProps, {
          addOn: React.createElement('i', { className: 'fa fa-user' }),
          onChange: this.handleChange })),
        React.createElement(Input, Object.assign({}, this.defaultValues.lastname, otherProps, {
          onChange: this.handleChange }))
      );
    }
  }]);

  return Name;
}(PaymentForm.Name);

FlexboxPaymentForm.Amount = Amount;
FlexboxPaymentForm.Email = Email;
FlexboxPaymentForm.Name = Name;

// styles
FlexboxPaymentForm.item = {
  margin: '10px'

};

export default FlexboxPaymentForm;