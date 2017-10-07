var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, Col } from 'react-bootstrap';
import Country from './Country';
import PostalCode from './PostalCode';
import BillingAddress from './BillingAddress';
import City from './City';
import State from './State';
import Base from '../../../Base';
import PropTypes from 'prop-types';

var Address = function (_Base) {
  _inherits(Address, _Base);

  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).apply(this, arguments));
  }

  _createClass(Address, [{
    key: 'render',
    value: function render() {
      console.log("ADDRESS PROPS: ", this.props);
      var country = this.props.country.value;
      return React.createElement(
        'div',
        null,
        country === 'US' ? null : React.createElement(
          'div',
          null,
          React.createElement(
            FormGroup,
            null,
            React.createElement(
              Col,
              { lg: 12 },
              React.createElement(BillingAddress, Object.assign({
                onChange: this.handleChange,
                country: country
              }, this.props.billing_address))
            )
          ),
          React.createElement(
            FormGroup,
            null,
            React.createElement(
              Col,
              { lg: 6 },
              React.createElement(City, Object.assign({
                onChange: this.handleChange,
                country: country
              }, this.props.city))
            ),
            React.createElement(
              Col,
              { lg: 6 },
              React.createElement(State, Object.assign({
                country: country,
                onChange: this.handleChange
              }, this.props.state))
            )
          )
        ),
        React.createElement(
          FormGroup,
          null,
          React.createElement(
            Col,
            { lg: 6 },
            React.createElement(Country, Object.assign({
              country: country,
              onChange: this.handleChange
            }, this.props.country))
          ),
          React.createElement(
            Col,
            { lg: 6 },
            React.createElement(PostalCode, Object.assign({
              country: country,
              onChange: this.handleChange
            }, this.props.postal_code))
          )
        )
      );
    }
  }]);

  return Address;
}(Base);

Address.propTypes = Object.assign({
  country: PropTypes.object.isRequired,
  billing_address: PropTypes.object,
  postal_code: PropTypes.object,
  state: PropTypes.object
}, Address.propTypes);

Address.defaultProps = Object.assign({
  componentName: 'address',
  billing_address: { value: '' },
  postal_code: { value: '' },
  state: { value: '' }
}, Address.defaultProps);

Address.BillingAddress = BillingAddress;
Address.Country = Country;
Address.PostalCode = PostalCode;
Address.City = City;
Address.State = State;

export default Address;