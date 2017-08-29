var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, Col, Panel } from 'react-bootstrap';
import CardNumber from './CardNumber';
import Expiration from './Expiration';
import CVC from './CVC';
import Address from './Address';
import Base from '../../Base';
import PropTypes from 'prop-types';

var PaymentInfo = function (_Base) {
  _inherits(PaymentInfo, _Base);

  function PaymentInfo() {
    _classCallCheck(this, PaymentInfo);

    return _possibleConstructorReturn(this, (PaymentInfo.__proto__ || Object.getPrototypeOf(PaymentInfo)).apply(this, arguments));
  }

  _createClass(PaymentInfo, [{
    key: 'render',
    value: function render() {
      var address = this.props.address ? this.props.address : {};
      return React.createElement(
        FormGroup,
        null,
        React.createElement(
          Col,
          {
            lg: 12,
            xs: 12 },
          React.createElement(
            Panel,
            { header: 'Card Details' },
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(CardNumber, Object.assign({
                  onChange: this.handleChange
                }, this.props.card_number))
              )
            ),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 6 },
                React.createElement(Expiration, Object.assign({
                  onChange: this.handleChange
                }, this.props.expiration))
              ),
              React.createElement(
                Col,
                { lg: 6 },
                React.createElement(CVC, Object.assign({
                  onChange: this.handleChange
                }, this.props.cvc))
              )
            ),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                Col,
                { lg: 12 },
                React.createElement(Address, Object.assign({
                  onChange: this.handleChange
                }, address))
              )
            )
          )
        )
      );
    }
  }]);

  return PaymentInfo;
}(Base);

PaymentInfo.propTypes = Object.assign({
  address: PropTypes.object,
  expiration: PropTypes.object,
  cvv: PropTypes.object
}, PaymentInfo.propTypes);

PaymentInfo.defaultProps = Object.assign({
  componentName: 'payment_info',
  address: {
    billing_address: undefined,
    city: undefined,
    country: undefined,
    postal_code: undefined,
    state: undefined
  },
  card_number: { value: '' },
  cvc: { value: '' },
  expiration: { value: '' }
}, PaymentInfo.defaultProps);

// attach the subobjects to the PaymentInfo object.
// this will allow people to do imports like
// import {Address} from 'wepay-react-checkout.PaymentInfo`
PaymentInfo.CardNumber = CardNumber;
PaymentInfo.Expiration = Expiration;
PaymentInfo.CVC = CVC;
PaymentInfo.Address = Address;

export default PaymentInfo;