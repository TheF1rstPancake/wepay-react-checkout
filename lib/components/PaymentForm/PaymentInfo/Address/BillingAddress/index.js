'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Base2 = require('../../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BillingAddress = function (_Base) {
  _inherits(BillingAddress, _Base);

  function BillingAddress(props) {
    _classCallCheck(this, BillingAddress);

    var _this = _possibleConstructorReturn(this, (BillingAddress.__proto__ || Object.getPrototypeOf(BillingAddress)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(BillingAddress, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(BillingAddress.prototype.__proto__ || Object.getPrototypeOf(BillingAddress.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          'Address'
        ),
        _react2.default.createElement(_reactBootstrap.FormControl, {
          id: 'billing_address',
          name: 'billing_address',
          type: 'text',
          placeholder: 'Street Address',
          value: this.props.value,
          onChange: this.handleChange
        })
      );
    }
  }]);

  return BillingAddress;
}(_Base3.default);

BillingAddress.propTypes = Object.assign({
  value: _propTypes2.default.string
}, BillingAddress.propTypes);

BillingAddress.defaultProps = Object.assign({
  componentName: 'billing_address',
  value: ''
}, BillingAddress.defaultProps);

exports.default = BillingAddress;