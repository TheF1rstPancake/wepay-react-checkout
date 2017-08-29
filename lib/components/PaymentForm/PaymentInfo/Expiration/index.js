var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Payment from 'payment';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Base from '../../../Base';
import PropTypes from 'prop-types';

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
      Payment.formatCardExpiry(ReactDOM.findDOMNode(this.refs.expirdate));
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

      return Payment.fns.validateCardExpiry(this.props.value) ? 'success' : 'error';
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
            React.createElement(Glyphicon, { glyph: 'calendar' })
          ),
          React.createElement(FormControl, {
            id: 'expirdate',
            ref: 'expirdate',
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
}(Base);

Expiration.propTypes = Object.assign({
  value: PropTypes.string
}, Expiration.propTypes);

Expiration.defaultProps = Object.assign({
  componentName: 'expiration',
  value: ''
}, Expiration.defaultProps);

export default Expiration;