var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

var Amount = function (_Base) {
  _inherits(Amount, _Base);

  function Amount(props) {
    _classCallCheck(this, Amount);

    var _this = _possibleConstructorReturn(this, (Amount.__proto__ || Object.getPrototypeOf(Amount)).call(this, props));

    console.log("AMOUNT PROPS: ", props);
    _this.handleChange = _this.handleChange.bind(_this);
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

      console.log(pattern.test(amount));
      return amount === '' || !amount ? null : pattern.test(amount) ? 'success' : 'error';
    }
  }, {
    key: 'render',
    value: function render() {
      var currency_flag = Amount.CURRENCIES[this.props.currency];

      return React.createElement(
        FormGroup,
        { validationState: this.validate() },
        React.createElement(
          InputGroup,
          null,
          React.createElement(
            InputGroup.Addon,
            null,
            currency_flag
          ),
          React.createElement(FormControl, {
            id: 'amount',
            name: 'amount',
            type: 'tel',
            placeholder: 'Amount',
            value: this.props.value,
            onChange: this.handleChange,
            required: 'true',
            disabled: !this.props.editable
          })
        )
      );
    }
  }]);

  return Amount;
}(Base);

Amount.CURRENCIES = {
  GBP: '£',
  USD: '$',
  CAD: '$'
};

Amount.propTypes = Object.assign({
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editable: PropTypes.bool
}, Amount.propTypes);

Amount.defaultProps = Object.assign({
  currency: 'USD',
  //value: '',
  componentName: 'amount',
  editable: false
}, Amount.defaultProps);

export default Amount;