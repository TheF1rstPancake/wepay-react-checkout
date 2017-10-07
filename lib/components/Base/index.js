var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import PropTypes from 'prop-types';

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base(props) {
    _classCallCheck(this, Base);

    // these are the values we want to pass up
    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    _this.pass_up = JSON.parse(JSON.stringify(props));
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Base, [{
    key: 'handleChange',
    value: function handleChange(name, value) {
      // we use the objects state to preserve all of the values in an object.
      // there is an issue with trying to pass nested objects up one value at a time
      this.pass_up[[name]] = value;
      var s = this.pass_up;
      //var s =  { [name]: value };
      console.log("HANDLE CHANGE: ", name, s);
      this.props.onChange(this.props.componentName, s);
    }
  }]);

  return Base;
}(Component);

Base.propTypes = {
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired
};

Base.defaultProps = {
  onChange: function onChange() {
    return;
  }
};

export default Base;