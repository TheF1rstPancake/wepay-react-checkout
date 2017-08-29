var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Payment from 'payment';
import ReactDOM from 'react-dom';
import Base from '../../../Base';
import PropTypes from 'prop-types';

var CardNumber = function (_Base) {
  _inherits(CardNumber, _Base);

  function CardNumber(props) {
    _classCallCheck(this, CardNumber);

    var _this = _possibleConstructorReturn(this, (CardNumber.__proto__ || Object.getPrototypeOf(CardNumber)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(CardNumber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // attach card number formatting
      Payment.formatCardNumber(ReactDOM.findDOMNode(this.refs.cardnumber));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      _get(CardNumber.prototype.__proto__ || Object.getPrototypeOf(CardNumber.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'validate',
    value: function validate() {
      if (this.props.value === '' || !this.props.value) {
        return null;
      }

      return Payment.fns.validateCardNumber(this.props.value) ? 'success' : 'error';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        FormGroup,
        {
          validationState: this.validate() },
        React.createElement(
          InputGroup,
          null,
          React.createElement(
            InputGroup.Addon,
            null,
            React.createElement(Glyphicon, { glyph: 'credit-card' })
          ),
          React.createElement(FormControl, {
            id: 'cardnumber',
            name: 'cardnumber',
            type: 'tel',
            ref: 'cardnumber',
            placeholder: '**** **** **** ****',
            value: this.props.value,
            onChange: this.handleChange,
            required: 'true'
          })
        )
      );
    }
  }]);

  return CardNumber;
}(Base);

CardNumber.defaultProps = Object.assign({
  value: PropTypes.string
}, CardNumber.defaultProps);

CardNumber.defaultProps = Object.assign({
  componentName: 'card_number',
  value: ''
}, CardNumber.defaultProps);

export default CardNumber;