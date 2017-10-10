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

var _Base2 = require('../../..//Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CVC = function (_Base) {
  _inherits(CVC, _Base);

  function CVC(props) {
    _classCallCheck(this, CVC);

    var _this = _possibleConstructorReturn(this, (CVC.__proto__ || Object.getPrototypeOf(CVC)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(CVC, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _payment2.default.formatCardCVC(_reactDom2.default.findDOMNode(this.cardcvc));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      _get(CVC.prototype.__proto__ || Object.getPrototypeOf(CVC.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'validate',
    value: function validate() {
      return this.props.value === '' || !this.props.value ? null : _payment2.default.fns.validateCardCVC(this.props.value) ? 'success' : 'error';
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
            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'compressed' })
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            id: 'cardcvc',
            inputRef: function inputRef(input) {
              _this2.cardcvc = input;
            },
            name: 'cardcvc',
            type: 'tel',
            placeholder: '***',
            value: this.props.value,
            onChange: this.handleChange
          })
        )
      );
    }
  }]);

  return CVC;
}(_Base3.default);

CVC.propTypes.value = _propTypes2.default.string;

CVC.defaultProps = Object.assign({
  componentName: 'cvc',
  value: ''
}, CVC.defaultProps);

exports.default = CVC;