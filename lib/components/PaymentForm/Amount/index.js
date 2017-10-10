'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Base2 = require('../../Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Amount = function (_Base) {
  _inherits(Amount, _Base);

  function Amount(props) {
    _classCallCheck(this, Amount);

    var _this = _possibleConstructorReturn(this, (Amount.__proto__ || Object.getPrototypeOf(Amount)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);

    // these are properties that we set by default
    // they can be overriden via the object's props
    // these should be used for values that are CONSTANT
    // for example, the ID of the input is likely not going to change
    _this.defaultValues = {
      id: "amount",
      name: "amount",
      type: 'tel',
      placeholder: 'Amount',
      required: 'true'
    };
    return _this;
  }

  _createClass(Amount, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(Amount.prototype.__proto__ || Object.getPrototypeOf(Amount.prototype), 'handleChange', this).call(this, "value", e.target.value);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // raise our initial currency value
      // super.handleChange("currency", this.props.currency);
    }
  }, {
    key: 'validate',
    value: function validate() {
      var amount = this.props.value;
      /* eslint-disable no-useless-escape*/
      var pattern = /^\d+(,\d{3})*\.?[0-9]?[0-9]?$/;

      return amount === '' || !amount ? null : pattern.test(amount) ? 'success' : 'error';
    }
  }, {
    key: 'render',
    value: function render() {
      var currency_flag = Amount.CURRENCIES[this.props.currency];

      // remove props that don't belong

      var _props = this.props,
          onChange = _props.onChange,
          currency = _props.currency,
          editable = _props.editable,
          componentName = _props.componentName,
          props = _objectWithoutProperties(_props, ['onChange', 'currency', 'editable', 'componentName']);

      var values = Object.assign({}, this.defaultValues, props);
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { validationState: this.validate() },
        _react2.default.createElement(
          _reactBootstrap.InputGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.InputGroup.Addon,
            null,
            currency_flag
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, values)
        )
      );
    }
  }]);

  return Amount;
}(_Base3.default);

Amount.CURRENCIES = {
  GBP: _react2.default.createElement('i', {
    className: 'fa fa-gbp',
    style: { ariaHidden: "true" } }),
  USD: _react2.default.createElement('i', {
    className: 'fa fa-usd',
    style: { ariaHidden: "true" } }),
  CAD: _react2.default.createElement('i', {
    className: 'fa fa-usd',
    style: { ariaHidden: "true" } })
};

Amount.propTypes = Object.assign({
  currency: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  editable: _propTypes2.default.bool
}, Amount.propTypes);

Amount.defaultProps = Object.assign({
  currency: 'USD',
  //value: '',
  componentName: 'amount',
  editable: false
}, Amount.defaultProps);

exports.default = Amount;