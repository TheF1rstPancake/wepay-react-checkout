var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Base from '../Base';

import Name from './Name';
import Email from './Email';
import PaymentInfo from './PaymentInfo';
import Amount from './Amount';
import { Grid, FormGroup, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

var PaymentForm = function (_Base) {
  _inherits(PaymentForm, _Base);

  function PaymentForm(props) {
    _classCallCheck(this, PaymentForm);

    var _this = _possibleConstructorReturn(this, (PaymentForm.__proto__ || Object.getPrototypeOf(PaymentForm)).call(this, props));

    console.log("PAYMENT FORM PROPS: ", props);

    _this.tokenizeCard = _this.tokenizeCard.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }

  _createClass(PaymentForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.production) {
        window.WePay.set_endpoint("production");
      } else {
        window.WePay.set_endpoint("stage");
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var payment_info = this.props.payment_info;

      var expiration = payment_info.expiration.value.split(" / ");

      // construct payload
      var payload = {
        client_id: this.props.client_id,
        user_name: this.props.name.first_name + ' ' + this.props.name.last_name,
        email: this.props.email.value,
        cc_number: payment_info.card_number.value,
        cvv: payment_info.cvc.value,
        expiration_month: expiration[0],
        expiration_year: expiration[1]
      };
      payload.address = {
        country: payment_info.address.country.value,
        postal_code: payment_info.address.postal_code.value,
        address1: payment_info.address.billing_address ? payment_info.address.billing_address.value : undefined,
        city: payment_info.address.city ? payment_info.address.city.value : undefined,
        region: payment_info.address.state ? payment_info.address.state.value : undefined
      };

      // we need to tokenize the card info
      // and then pass the checkout payload to our backend.
      this.tokenizeCard(payload).then(function (response) {
        _this2.props.onTokenized(response);
      }).catch(function (err) {
        _this2.props.onError(err);
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(err) {
      this.props.onError(err);
    }
  }, {
    key: 'tokenizeCard',
    value: function tokenizeCard(payload) {
      return new Promise(function (resolve, reject) {
        var check = window.WePay.credit_card.create(payload, function (response) {
          if (response.error) {
            reject(response);
          } else {
            resolve(response);
          }
        });

        if (check.error) {
          reject(check);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var payment_info = this.props.payment_info ? this.props.payment_info : {};
      var name = this.props.name ? this.props.name : {};
      var email = this.props.email ? this.props.email : {};
      var amount = this.props.amount ? this.props.amount : {};

      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
          Grid,
          null,
          React.createElement(
            'form',
            {
              className: 'form-horizontal',
              onSubmit: this.handleSubmit },
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(Name, Object.assign({
                  onChange: this.handleChange
                }, name))
              )
            ),
            React.createElement(
              Col,
              { lg: 12 },
              React.createElement(Email, Object.assign({
                onChange: this.handleChange
              }, email))
            ),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(PaymentInfo, Object.assign({
                  onChange: this.handleChange
                }, payment_info))
              )
            ),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(Amount, Object.assign({
                  onChange: this.handleChange
                }, amount))
              )
            ),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(
                  Button,
                  {
                    type: 'submit',
                    bsStyle: 'success',
                    block: true },
                  'Pay'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PaymentForm;
}(Base);

PaymentForm.propTypes = Object.assign({
  client_id: PropTypes.string.isRequired,
  production: PropTypes.bool,
  name: PropTypes.object,
  email: PropTypes.object,
  onTokenized: PropTypes.func,
  onError: PropTypes.func,
  payment_info: PropTypes.object,
  amount: PropTypes.object
}, PaymentForm.propTypes);

PaymentForm.defaultProps = Object.assign({
  production: false,
  componentName: 'payment_form',
  payment_info: {},
  name: { first_name: '', last_name: '' },
  email: { email: '' },
  amount: {},
  onTokenized: function onTokenized(card) {
    console.log(card);
  },
  onError: function onError(err) {
    console.log(err);
  }
}, PaymentForm.defaultProps);

PaymentForm.Amount = Amount;
PaymentForm.PaymentInfo = PaymentInfo;
PaymentForm.Name = Name;
PaymentForm.Email = Email;

export default PaymentForm;