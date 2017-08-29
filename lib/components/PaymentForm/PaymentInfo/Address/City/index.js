var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../../Base';
import PropTypes from 'prop-types';

var City = function (_Base) {
  _inherits(City, _Base);

  function City(props) {
    _classCallCheck(this, City);

    var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(City, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(City.prototype.__proto__ || Object.getPrototypeOf(City.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        FormGroup,
        null,
        React.createElement(
          ControlLabel,
          null,
          'City'
        ),
        React.createElement(FormControl, {
          id: 'billing_contry',
          name: 'billing_country',
          onChange: this.handleChange,
          placeholder: 'City',
          value: this.props.value
        })
      );
    }
  }]);

  return City;
}(Base);

City.propTypes = {
  value: PropTypes.string,
  country: PropTypes.string
};

City.defaultProps = Object.assign({
  componentName: 'city',
  value: '',
  country: 'US'
}, City.defaultProps);

export default City;