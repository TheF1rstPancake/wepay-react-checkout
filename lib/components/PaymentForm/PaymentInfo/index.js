'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _CardNumber = require('./CardNumber');

var _CardNumber2 = _interopRequireDefault(_CardNumber);

var _Expiration = require('./Expiration');

var _Expiration2 = _interopRequireDefault(_Expiration);

var _CVC = require('./CVC');

var _CVC2 = _interopRequireDefault(_CVC);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

var _Base2 = require('../../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            lg: 12,
            xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: 'Card Details' },
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(_CardNumber2.default, Object.assign({
                  onChange: this.handleChange
                }, this.props.card_number))
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 6 },
                _react2.default.createElement(_Expiration2.default, Object.assign({
                  onChange: this.handleChange
                }, this.props.expiration))
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 6 },
                _react2.default.createElement(_CVC2.default, Object.assign({
                  onChange: this.handleChange
                }, this.props.cvc))
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(_Address2.default, Object.assign({
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
}(_Base3.default);

PaymentInfo.propTypes = Object.assign({
  address: _propTypes2.default.object,
  expiration: _propTypes2.default.object,
  cvv: _propTypes2.default.object
}, PaymentInfo.propTypes);

PaymentInfo.defaultProps = Object.assign({
  componentName: 'payment_info',
  address: {
    billing_address: undefined,
    city: undefined,
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
PaymentInfo.CardNumber = _CardNumber2.default;
PaymentInfo.Expiration = _Expiration2.default;
PaymentInfo.CVC = _CVC2.default;
PaymentInfo.Address = _Address2.default;

exports.default = PaymentInfo;