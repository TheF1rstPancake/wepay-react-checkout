'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Base2 = require('../../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Country = function (_Base) {
  _inherits(Country, _Base);

  function Country(props) {
    _classCallCheck(this, Country);

    var _this = _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Country, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(Country.prototype.__proto__ || Object.getPrototypeOf(Country.prototype), 'handleChange', this).call(this, 'value', e.target.value);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //super.handleChange('value', this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          'Country'
        ),
        _react2.default.createElement(
          _reactBootstrap.FormControl,
          {
            componentClass: 'select',
            id: 'billing_country',
            name: 'billing_country',
            style: { textTransform: "capitalize" },
            onChange: this.handleChange,
            value: this.props.value,
            required: 'true'
          },
          _react2.default.createElement(
            'option',
            { value: 'US' },
            'united states'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CA' },
            'canada'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AF' },
            'afghanistan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AX' },
            'aland islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AL' },
            'albania'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DZ' },
            'algeria'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AS' },
            'american samoa'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AD' },
            'andorra'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AO' },
            'angola'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AI' },
            'anguilla'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AQ' },
            'antarctica'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AG' },
            'antigua and barbuda'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AR' },
            'argentina'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AM' },
            'armenia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AW' },
            'aruba'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AU' },
            'australia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AT' },
            'austria'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AZ' },
            'azerbaijan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BS' },
            'bahamas'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BH' },
            'bahrain'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BD' },
            'bangladesh'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BB' },
            'barbados'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BY' },
            'belarus'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BE' },
            'belgium'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BZ' },
            'belize'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BJ' },
            'benin'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BM' },
            'bermuda'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BT' },
            'bhutan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BO' },
            'bolivia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BA' },
            'bosnia and herzegovina'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BW' },
            'botswana'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BV' },
            'bouvet island'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BR' },
            'brazil'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IO' },
            'british indian ocean territory'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BN' },
            'brunei darussalam'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BG' },
            'bulgaria'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BF' },
            'burkina faso'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BI' },
            'burundi'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KH' },
            'cambodia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CM' },
            'cameroon'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CV' },
            'cape verde'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KY' },
            'cayman islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CF' },
            'central african republic'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TD' },
            'chad'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CL' },
            'chile'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CN' },
            'china'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CX' },
            'christmas island'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CC' },
            'cocos (keeling) islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CO' },
            'colombia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KM' },
            'comoros'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CG' },
            'congo'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CD' },
            'congo, the democratic republic of the'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CK' },
            'cook islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CR' },
            'costa rica'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CI' },
            'cote d"ivoire'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HR' },
            'croatia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CU' },
            'cuba'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CY' },
            'cyprus'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CZ' },
            'czech republic'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DK' },
            'denmark'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DJ' },
            'djibouti'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DM' },
            'dominica'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DO' },
            'dominican republic'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EC' },
            'ecuador'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EG' },
            'egypt'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SV' },
            'el salvador'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GQ' },
            'equatorial guinea'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ER' },
            'eritrea'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EE' },
            'estonia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ET' },
            'ethiopia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FK' },
            'falkland islands (malvinas)'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FO' },
            'faroe islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FJ' },
            'fiji'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FI' },
            'finland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FR' },
            'france'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GF' },
            'french guiana'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PF' },
            'french polynesia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TF' },
            'french southern territories'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GA' },
            'gabon'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GM' },
            'gambia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GE' },
            'georgia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'DE' },
            'germany'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GH' },
            'ghana'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GI' },
            'gibraltar'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GR' },
            'greece'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GL' },
            'greenland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GD' },
            'grenada'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GP' },
            'guadeloupe'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GU' },
            'guam'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GT' },
            'guatemala'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GG' },
            'guernsey'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GN' },
            'guinea'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GW' },
            'guinea-bissau'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GY' },
            'guyana'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HT' },
            'haiti'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HM' },
            'heard island and mcdonald islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VA' },
            'holy see (vatican city state)'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HN' },
            'honduras'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HK' },
            'hong kong'
          ),
          _react2.default.createElement(
            'option',
            { value: 'HU' },
            'hungary'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IS' },
            'iceland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IN' },
            'india'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ID' },
            'indonesia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IR' },
            'iran, islamic republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IQ' },
            'iraq'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IE' },
            'ireland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IM' },
            'isle of man'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IL' },
            'israel'
          ),
          _react2.default.createElement(
            'option',
            { value: 'IT' },
            'italy'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JM' },
            'jamaica'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JP' },
            'japan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JE' },
            'jersey'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JO' },
            'jordan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KZ' },
            'kazakhstan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KE' },
            'kenya'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KI' },
            'kiribati'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KP' },
            'korea, democratic people\'s republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KR' },
            'korea, republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KW' },
            'kuwait'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KG' },
            'kyrgyzstan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LA' },
            'lao people\'s democratic republic'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LV' },
            'latvia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LB' },
            'lebanon'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LS' },
            'lesotho'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LR' },
            'liberia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LY' },
            'libyan arab jamahiriya'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LI' },
            'liechtenstein'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LT' },
            'lithuania'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LU' },
            'luxembourg'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MO' },
            'macao'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MK' },
            'macedonia, the former yugoslav republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MG' },
            'madagascar'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MW' },
            'malawi'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MY' },
            'malaysia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MV' },
            'maldives'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ML' },
            'mali'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MT' },
            'malta'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MH' },
            'marshall islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MQ' },
            'martinique'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MR' },
            'mauritania'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MU' },
            'mauritius'
          ),
          _react2.default.createElement(
            'option',
            { value: 'YT' },
            'mayotte'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MX' },
            'mexico'
          ),
          _react2.default.createElement(
            'option',
            { value: 'FM' },
            'micronesia, federated states of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MD' },
            'moldova, republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MC' },
            'monaco'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MN' },
            'mongolia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ME' },
            'montenegro'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MS' },
            'montserrat'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MA' },
            'morocco'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MZ' },
            'mozambique'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MM' },
            'myanmar'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NA' },
            'namibia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NR' },
            'nauru'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NP' },
            'nepal'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NL' },
            'netherlands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AN' },
            'netherlands antilles'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NC' },
            'new caledonia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NZ' },
            'new zealand'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NI' },
            'nicaragua'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NE' },
            'niger'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NG' },
            'nigeria'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NU' },
            'niue'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NF' },
            'norfolk island'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MP' },
            'northern mariana islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'NO' },
            'norway'
          ),
          _react2.default.createElement(
            'option',
            { value: 'OM' },
            'oman'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PK' },
            'pakistan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PW' },
            'palau'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PS' },
            'palestinian territory, occupied'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PA' },
            'panama'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PG' },
            'papua new guinea'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PY' },
            'paraguay'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PE' },
            'peru'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PH' },
            'philippines'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PN' },
            'pitcairn'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PL' },
            'poland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PT' },
            'portugal'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PR' },
            'puerto rico'
          ),
          _react2.default.createElement(
            'option',
            { value: 'QA' },
            'qatar'
          ),
          _react2.default.createElement(
            'option',
            { value: 'RE' },
            'reunion'
          ),
          _react2.default.createElement(
            'option',
            { value: 'RO' },
            'romania'
          ),
          _react2.default.createElement(
            'option',
            { value: 'RU' },
            'russian federation'
          ),
          _react2.default.createElement(
            'option',
            { value: 'RW' },
            'rwanda'
          ),
          _react2.default.createElement(
            'option',
            { value: 'BL' },
            'saint barthelemy'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SH' },
            'saint helena'
          ),
          _react2.default.createElement(
            'option',
            { value: 'KN' },
            'saint kitts and nevis'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LC' },
            'saint lucia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'MF' },
            'saint martin'
          ),
          _react2.default.createElement(
            'option',
            { value: 'PM' },
            'saint pierre and miquelon'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VC' },
            'saint vincent and the grenadines'
          ),
          _react2.default.createElement(
            'option',
            { value: 'WS' },
            'samoa'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SM' },
            'san marino'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ST' },
            'sao tome and principe'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SA' },
            'saudi arabia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SN' },
            'senegal'
          ),
          _react2.default.createElement(
            'option',
            { value: 'RS' },
            'serbia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SC' },
            'seychelles'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SL' },
            'sierra leone'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SG' },
            'singapore'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SK' },
            'slovakia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SI' },
            'slovenia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SB' },
            'solomon islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SO' },
            'somalia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ZA' },
            'south africa'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GS' },
            'south georgia and the south sandwich islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ES' },
            'spain'
          ),
          _react2.default.createElement(
            'option',
            { value: 'LK' },
            'sri lanka'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SD' },
            'sudan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SR' },
            'suriname'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SJ' },
            'svalbard and jan mayen'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SZ' },
            'swaziland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SE' },
            'sweden'
          ),
          _react2.default.createElement(
            'option',
            { value: 'CH' },
            'switzerland'
          ),
          _react2.default.createElement(
            'option',
            { value: 'SY' },
            'syrian arab republic'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TW' },
            'taiwan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TJ' },
            'tajikistan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TZ' },
            'tanzania, united republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TH' },
            'thailand'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TL' },
            'timor-leste'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TG' },
            'togo'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TK' },
            'tokelau'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TO' },
            'tonga'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TT' },
            'trinidad and tobago'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TN' },
            'tunisia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TR' },
            'turkey'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TM' },
            'turkmenistan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TC' },
            'turks and caicos islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'TV' },
            'tuvalu'
          ),
          _react2.default.createElement(
            'option',
            { value: 'UG' },
            'uganda'
          ),
          _react2.default.createElement(
            'option',
            { value: 'UA' },
            'ukraine'
          ),
          _react2.default.createElement(
            'option',
            { value: 'AE' },
            'united arab emirates'
          ),
          _react2.default.createElement(
            'option',
            { value: 'GB' },
            'united kingdom'
          ),
          _react2.default.createElement(
            'option',
            { value: 'UM' },
            'united states minor outlying islands'
          ),
          _react2.default.createElement(
            'option',
            { value: 'UY' },
            'uruguay'
          ),
          _react2.default.createElement(
            'option',
            { value: 'UZ' },
            'uzbekistan'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VU' },
            'vanuatu'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VE' },
            'venezuela, bolivarian republic of'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VN' },
            'viet nam'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VG' },
            'virgin islands, british'
          ),
          _react2.default.createElement(
            'option',
            { value: 'VI' },
            'virgin islands, u.s.'
          ),
          _react2.default.createElement(
            'option',
            { value: 'WF' },
            'wallis and futuna'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EH' },
            'western sahara'
          ),
          _react2.default.createElement(
            'option',
            { value: 'YE' },
            'yemen'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ZM' },
            'zambia'
          ),
          _react2.default.createElement(
            'option',
            { value: 'ZW' },
            'zimbabwe'
          )
        )
      );
    }
  }]);

  return Country;
}(_Base3.default);

Country.propTypes = Object.assign({
  value: _propTypes2.default.string.isRequired
}, Country.propTypess);

Country.defaultProps = Object.assign({
  componentName: 'country'
}, Country.defaultProps);

exports.default = Country;