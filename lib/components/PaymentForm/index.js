'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base2 = require('../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _Name = require('./Name');

var _Name2 = _interopRequireDefault(_Name);

var _Email = require('./Email');

var _Email2 = _interopRequireDefault(_Email);

var _PaymentInfo = require('./PaymentInfo');

var _PaymentInfo2 = _interopRequireDefault(_PaymentInfo);

var _Amount = require('./Amount');

var _Amount2 = _interopRequireDefault(_Amount);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentForm = function (_Base) {
  _inherits(PaymentForm, _Base);

  function PaymentForm(props) {
    _classCallCheck(this, PaymentForm);

    var _this = _possibleConstructorReturn(this, (PaymentForm.__proto__ || Object.getPrototypeOf(PaymentForm)).call(this, props));

    _this.tokenizeCard = _this.tokenizeCard.bind(_this);
    _this.defaultHandleSubmit = _this.defaultHandleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);

    _this.handleSubmit = props.onSubmit !== undefined ? props.onSubmit.bind(_this) : _this.defaultHandleSubmit;
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
    key: 'defaultHandleSubmit',
    value: function defaultHandleSubmit(e) {
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

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            'form',
            {
              className: 'form-horizontal',
              onSubmit: this.handleSubmit },
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(_Name2.default, Object.assign({
                  onChange: this.handleChange
                }, name))
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { lg: 12 },
              _react2.default.createElement(_Email2.default, Object.assign({
                onChange: this.handleChange
              }, email))
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(_PaymentInfo2.default, Object.assign({
                  onChange: this.handleChange
                }, payment_info))
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(_Amount2.default, Object.assign({
                  onChange: this.handleChange
                }, amount))
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 12 },
                _react2.default.createElement(
                  _reactBootstrap.Button,
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
}(_Base3.default);

PaymentForm.propTypes = Object.assign({
  client_id: _propTypes2.default.string.isRequired,
  production: _propTypes2.default.bool,
  name: _propTypes2.default.object,
  email: _propTypes2.default.object,
  onTokenized: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  payment_info: _propTypes2.default.object,
  amount: _propTypes2.default.object
}, PaymentForm.propTypes);

PaymentForm.defaultProps = Object.assign({
  production: false,
  componentName: 'payment_form',
  payment_info: {},
  name: { first_name: '', last_name: '' },
  email: { email: '' },
  amount: {},
  onTokenized: function onTokenized(card) {},
  onError: function onError(err) {},
  onSubmit: undefined
}, PaymentForm.defaultProps);

PaymentForm.Amount = _Amount2.default;
PaymentForm.PaymentInfo = _PaymentInfo2.default;
PaymentForm.Name = _Name2.default;
PaymentForm.Email = _Email2.default;

exports.default = PaymentForm;