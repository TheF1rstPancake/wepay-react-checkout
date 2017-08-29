var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*The NAME component contains both first and last name fields*/

import React from 'react';
import { FormGroup, Col, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

var Name = function (_Base) {
  _inherits(Name, _Base);

  function Name(props) {
    _classCallCheck(this, Name);

    var _this = _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));

    _this.handleFirstNameChange = _this.handleFirstNameChange.bind(_this);
    _this.handleLastNameChange = _this.handleLastNameChange.bind(_this);
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
      return React.createElement(
        FormGroup,
        null,
        React.createElement(
          Col,
          {
            lg: 6,
            xs: 6 },
          React.createElement(
            InputGroup,
            null,
            React.createElement(
              InputGroup.Addon,
              null,
              React.createElement(Glyphicon, { glyph: 'user' })
            ),
            React.createElement(FormControl, {
              id: 'firstname',
              name: 'firstname',
              type: 'text',
              value: this.props.first_name,
              onChange: this.handleFirstNameChange,
              placeholder: 'First Name',
              required: 'true' })
          )
        ),
        React.createElement(
          Col,
          {
            lg: 6,
            xs: 6 },
          React.createElement(FormControl, {
            id: 'lastname',
            name: 'lastname',
            type: 'text',
            value: this.props.last_name,
            onChange: this.handleLastNameChange,
            placeholder: 'Last Name',
            required: 'true' })
        )
      );
    }
  }]);

  return Name;
}(Base);

Name.propTypes = Object.assign({
  first_name: PropTypes.string,
  last_name: PropTypes.string
}, Name.propTypes);

Name.defaultProps = Object.assign({
  componentName: 'name',
  first_name: '',
  last_name: ''
}, Name.defaultProps);

export default Name;