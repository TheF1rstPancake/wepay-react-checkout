'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Country = require('./Country');

var _Country2 = _interopRequireDefault(_Country);

var _PostalCode = require('./PostalCode');

var _PostalCode2 = _interopRequireDefault(_PostalCode);

var _BillingAddress = require('./BillingAddress');

var _BillingAddress2 = _interopRequireDefault(_BillingAddress);

var _City = require('./City');

var _City2 = _interopRequireDefault(_City);

var _State = require('./State');

var _State2 = _interopRequireDefault(_State);

var _Base2 = require('../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = function (_Base) {
  _inherits(Address, _Base);

  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).apply(this, arguments));
  }

  _createClass(Address, [{
    key: 'render',
    value: function render() {
      var country = this.props.country.value;
      return _react2.default.createElement(
        'div',
        null,
        country === 'US' ? null : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { lg: 12 },
              _react2.default.createElement(_BillingAddress2.default, Object.assign({
                onChange: this.handleChange,
                country: country
              }, this.props.billing_address))
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { lg: 6 },
              _react2.default.createElement(_City2.default, Object.assign({
                onChange: this.handleChange,
                country: country
              }, this.props.city))
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { lg: 6 },
              _react2.default.createElement(_State2.default, Object.assign({
                country: country,
                onChange: this.handleChange
              }, this.props.state))
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { lg: 6 },
            _react2.default.createElement(_Country2.default, Object.assign({
              country: country,
              onChange: this.handleChange
            }, this.props.country))
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { lg: 6 },
            _react2.default.createElement(_PostalCode2.default, Object.assign({
              country: country,
              onChange: this.handleChange
            }, this.props.postal_code))
          )
        )
      );
    }
  }]);

  return Address;
}(_Base3.default);

Address.propTypes = Object.assign({
  country: _propTypes2.default.object.isRequired,
  billing_address: _propTypes2.default.object,
  postal_code: _propTypes2.default.object,
  state: _propTypes2.default.object
}, Address.propTypes);

Address.defaultProps = Object.assign({
  componentName: 'address',
  billing_address: { value: '' },
  postal_code: { value: '' },
  state: { value: '' }
}, Address.defaultProps);

Address.BillingAddress = _BillingAddress2.default;
Address.Country = _Country2.default;
Address.PostalCode = _PostalCode2.default;
Address.City = _City2.default;
Address.State = _State2.default;

exports.default = Address;