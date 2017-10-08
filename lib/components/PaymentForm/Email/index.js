var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

var Email = function (_Base) {
  _inherits(Email, _Base);

  function Email(props) {
    _classCallCheck(this, Email);

    var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, props));

    _this.state = {};
    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);

    _this.defaultValues = {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: "true"
    };
    return _this;
  }

  _createClass(Email, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var text = e.target.value;
      _get(Email.prototype.__proto__ || Object.getPrototypeOf(Email.prototype), 'handleChange', this).call(this, 'value', text);
    }
  }, {
    key: 'validate',
    value: function validate() {
      var email = this.props.value;
      var pattern = /.+@.+\.[^\s]+/;

      return email === '' || !email ? null : pattern.test(email) ? 'success' : 'error';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        FormGroup,
        { validationState: this.validate() },
        React.createElement(
          InputGroup,
          null,
          React.createElement(
            InputGroup.Addon,
            null,
            React.createElement(Glyphicon, { glyph: 'envelope' })
          ),
          React.createElement(FormControl, Object.assign({}, this.defaultValues, {
            value: this.props.value,
            onChange: this.handleChange
          }))
        )
      );
    }
  }]);

  return Email;
}(Base);

Email.propTypes = Object.assign({
  componentName: PropTypes.string.isRequired,
  value: PropTypes.string
}, Email.propTypes);

Email.defaultProps = Object.assign({
  componentName: 'email',
  value: ''
}, Email.defaultProps);
export default Email;