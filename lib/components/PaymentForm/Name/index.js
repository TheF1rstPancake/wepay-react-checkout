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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*The NAME component contains both first and last name fields*/

var Name = function (_Base) {
  _inherits(Name, _Base);

  function Name(props) {
    _classCallCheck(this, Name);

    var _this = _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));

    _this.handleFirstNameChange = _this.handleFirstNameChange.bind(_this);
    _this.handleLastNameChange = _this.handleLastNameChange.bind(_this);

    _this.defaultValues = {
      firstname: {
        id: 'firstname',
        name: 'firstname',
        required: 'true',
        placeholder: 'First Name',
        type: 'text'
      },
      lastname: {
        id: 'lastname',
        name: 'lastname',
        required: 'true',
        placeholder: 'Last Name',
        type: 'text'
      }
    };
    return _this;
  }

  _createClass(Name, [{
    key: 'handleFirstNameChange',
    value: function handleFirstNameChange(e) {
      _get(Name.prototype.__proto__ || Object.getPrototypeOf(Name.prototype), 'handleChange', this).call(this, "first_name", e.target.value);
    }
  }, {
    key: 'handleLastNameChange',
    value: function handleLastNameChange(e) {
      _get(Name.prototype.__proto__ || Object.getPrototypeOf(Name.prototype), 'handleChange', this).call(this, "last_name", e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            lg: 6,
            xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.InputGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.InputGroup.Addon,
              null,
              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'user' })
            ),
            _react2.default.createElement(_reactBootstrap.FormControl, Object.assign({}, this.defaultValues.firstname, {
              value: this.props.first_name,
              onChange: this.handleFirstNameChange
            }))
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            lg: 6,
            xs: 6 },
          _react2.default.createElement(_reactBootstrap.FormControl, Object.assign({}, this.defaultValues.lastname, {
            value: this.props.last_name,
            onChange: this.handleLastNameChange
          }))
        )
      );
    }
  }]);

  return Name;
}(_Base3.default);

Name.propTypes = Object.assign({
  first_name: _propTypes2.default.string,
  last_name: _propTypes2.default.string
}, Name.propTypes);

Name.defaultProps = Object.assign({
  componentName: 'name',
  first_name: '',
  last_name: ''
}, Name.defaultProps);

exports.default = Name;