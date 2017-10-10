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

var _Base2 = require('../../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var State = function (_Base) {
  _inherits(State, _Base);

  function State(props) {
    _classCallCheck(this, State);

    var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.renderStates = _this.renderStates.bind(_this);
    return _this;
  }

  _createClass(State, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'renderStates',
    value: function renderStates(country) {
      var states = country === 'US' ? State.US_STATES : State.CA_PROVINCES;

      return states.map(function (item) {
        return _react2.default.createElement(
          'option',
          {
            key: item.value,
            value: item.value },
          item.name
        );
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'handleChange', this).call(this, 'value', this.props.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if the country values change, and the prop is not unmounted, then we need to make sure we raise state properly
      if (nextProps.country !== this.props.country) {
        _get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'handleChange', this).call(this, 'state', nextProps.country === 'CA' ? State.CA_PROVINCES[0].value : nextProps.country === 'US' ? State.US_STATES[0].value : '');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var label = this.props.country === 'CA' ? 'Province' : this.props.country === 'US' ? 'State' : 'Region';

      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          label
        ),
        _react2.default.createElement(
          _reactBootstrap.FormControl,
          {
            id: 'billing_state',
            name: 'billing_state',
            componentClass: this.props.country === 'US' || this.props.country === 'CA' ? 'select' : "input",
            placeholder: label,
            value: this.props.value,
            onChange: this.handleChange },
          this.props.country === 'CA' || this.props.country === 'US' ? this.renderStates(this.props.country) : null
        )
      );
    }
  }]);

  return State;
}(_Base3.default);

State.CA_PROVINCES = [{ 'name': 'Alberta', 'value': 'AB' }, { 'name': 'British Columbia', 'value': 'BC' }, { 'name': 'Manitoba', 'value': 'MB' }, { 'name': 'New Brunswick', 'value': 'NB' }, { 'name': 'Newfoundland and Labrador', 'value': 'NL' }, { 'name': 'Northwest Territories', 'value': 'NW' }, { 'name': 'Nova Scotia', 'value': 'NS' }, { 'name': 'Nunavut', 'value': 'NU' }, { 'name': 'Ontario', 'value': 'ON' }, { 'name': 'Prince Edward Island', 'value': 'PE' }, { 'name': 'Quebec', 'value': 'QC' }, { 'name': 'Saskatchewan', 'value': 'SK' }, { 'name': 'Yukon', 'value': 'YU' }];

State.US_STATES = [{ 'name': 'Alabama', 'value': 'AL' }, { 'name': 'Alaska', 'value': 'AK' }, { 'name': 'American Samoa', 'value': 'AS' }, { 'name': 'Arizona', 'value': 'AZ' }, { 'name': 'Arkansas', 'value': 'AR' }, { 'name': 'California', 'value': 'CA' }, { 'name': 'Colorado', 'value': 'CO' }, { 'name': 'Connecticut', 'value': 'CT' }, { 'name': 'Delaware', 'value': 'DE' }, { 'name': 'District Of Columbia', 'value': 'DC' }, { 'name': 'Federated States Of Micronesia', 'value': 'FM' }, { 'name': 'Florida', 'value': 'FL' }, { 'name': 'Georgia', 'value': 'GA' }, { 'name': 'Guam', 'value': 'GU' }, { 'name': 'Hawaii', 'value': 'HI' }, { 'name': 'Idaho', 'value': 'ID' }, { 'name': 'Illinois', 'value': 'IL' }, { 'name': 'Indiana', 'value': 'IN' }, { 'name': 'Iowa', 'value': 'IA' }, { 'name': 'Kansas', 'value': 'KS' }, { 'name': 'Kentucky', 'value': 'KY' }, { 'name': 'Louisiana', 'value': 'LA' }, { 'name': 'Maine', 'value': 'ME' }, { 'name': 'Marshall Islands', 'value': 'MH' }, { 'name': 'Maryland', 'value': 'MD' }, { 'name': 'Massachusetts', 'value': 'MA' }, { 'name': 'Michigan', 'value': 'MI' }, { 'name': 'Minnesota', 'value': 'MN' }, { 'name': 'Mississippi', 'value': 'MS' }, { 'name': 'Missouri', 'value': 'MO' }, { 'name': 'Montana', 'value': 'MT' }, { 'name': 'Nebraska', 'value': 'NE' }, { 'name': 'Nevada', 'value': 'NV' }, { 'name': 'New Hampshire', 'value': 'NH' }, { 'name': 'New Jersey', 'value': 'NJ' }, { 'name': 'New Mexico', 'value': 'NM' }, { 'name': 'New York', 'value': 'NY' }, { 'name': 'North Carolina', 'value': 'NC' }, { 'name': 'North Dakota', 'value': 'ND' }, { 'name': 'Northern Mariana Islands', 'value': 'MP' }, { 'name': 'Ohio', 'value': 'OH' }, { 'name': 'Oklahoma', 'value': 'OK' }, { 'name': 'Oregon', 'value': 'OR' }, { 'name': 'Palau', 'value': 'PW' }, { 'name': 'Pennsylvania', 'value': 'PA' }, { 'name': 'Puerto Rico', 'value': 'PR' }, { 'name': 'Rhode Island', 'value': 'RI' }, { 'name': 'South Carolina', 'value': 'SC' }, { 'name': 'South Dakota', 'value': 'SD' }, { 'name': 'Tennessee', 'value': 'TN' }, { 'name': 'Texas', 'value': 'TX' }, { 'name': 'Utah', 'value': 'UT' }, { 'name': 'Vermont', 'value': 'VT' }, { 'name': 'Virgin Islands', 'value': 'VI' }, { 'name': 'Virginia', 'value': 'VA' }, { 'name': 'Washington', 'value': 'WA' }, { 'name': 'West Virginia', 'value': 'WV' }, { 'name': 'Wisconsin', 'value': 'WI' }, { 'name': 'Wyoming', 'value': 'WY' }];

State.propTypes = Object.assign({
  country: _propTypes2.default.string,
  value: _propTypes2.default.string
}, State.propTypes);

State.defaultProps = Object.assign({
  country: 'US',
  componentName: 'state',
  value: State.US_STATES[0]
}, State.defaultProps);

exports.default = State;