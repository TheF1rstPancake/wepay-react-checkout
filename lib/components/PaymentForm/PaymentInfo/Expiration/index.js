'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _payment = require('payment');

var _payment2 = _interopRequireDefault(_payment);

var _reactBootstrap = require('react-bootstrap');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Base2 = require('../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Expiration = function (_Base) {
  _inherits(Expiration, _Base);

  function Expiration(props) {
    _classCallCheck(this, Expiration);

    var _this = _possibleConstructorReturn(this, (Expiration.__proto__ || Object.getPrototypeOf(Expiration)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(Expiration, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _payment2.default.formatCardExpiry(_reactDom2.default.findDOMNode(this.expirdate));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      _get(Expiration.prototype.__proto__ || Object.getPrototypeOf(Expiration.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'validate',
    value: function validate() {
      if (this.props.value === '' || !this.props.value) {
        return null;
      }

      return _payment2.default.fns.validateCardExpiry(this.props.value) ? 'success' : 'error';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { validationState: this.validate() },
        _react2.default.createElement(
          _reactBootstrap.InputGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.InputGroup.Addon,
            null,
            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'calendar' })
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            id: 'expirdate',
            inputRef: function inputRef(input) {
              _this2.expirdate = input;
            },
            name: 'expirdate',
            type: 'tel',
            placeholder: 'MM / YY',
            value: this.props.value,
            onChange: this.handleChange
          })
        )
      );
    }
  }]);

  return Expiration;
}(_Base3.default);

Expiration.propTypes = Object.assign({
  value: _propTypes2.default.string
}, Expiration.propTypes);

Expiration.defaultProps = Object.assign({
  componentName: 'expiration',
  value: ''
}, Expiration.defaultProps);

exports.default = Expiration;