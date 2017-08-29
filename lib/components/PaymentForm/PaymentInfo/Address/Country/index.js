var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../../Base';
import PropTypes from 'prop-types';

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
      _get(Country.prototype.__proto__ || Object.getPrototypeOf(Country.prototype), 'handleChange', this).call(this, 'value', this.props.value);
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
          'Country'
        ),
        React.createElement(
          FormControl,
          {
            componentClass: 'select',
            id: 'billing_country',
            name: 'billing_country',
            style: { textTransform: "capitalize" },
            onChange: this.handleChange,
            value: this.props.value,
            required: 'true'
          },
          React.createElement(
            'option',
            { value: 'US' },
            'united states'
          ),
          React.createElement(
            'option',
            { value: 'CA' },
            'canada'
          ),
          React.createElement(
            'option',
            { value: 'AF' },
            'afghanistan'
          ),
          React.createElement(
            'option',
            { value: 'AX' },
            'aland islands'
          ),
          React.createElement(
            'option',
            { value: 'AL' },
            'albania'
          ),
          React.createElement(
            'option',
            { value: 'DZ' },
            'algeria'
          ),
          React.createElement(
            'option',
            { value: 'AS' },
            'american samoa'
          ),
          React.createElement(
            'option',
            { value: 'AD' },
            'andorra'
          ),
          React.createElement(
            'option',
            { value: 'AO' },
            'angola'
          ),
          React.createElement(
            'option',
            { value: 'AI' },
            'anguilla'
          ),
          React.createElement(
            'option',
            { value: 'AQ' },
            'antarctica'
          ),
          React.createElement(
            'option',
            { value: 'AG' },
            'antigua and barbuda'
          ),
          React.createElement(
            'option',
            { value: 'AR' },
            'argentina'
          ),
          React.createElement(
            'option',
            { value: 'AM' },
            'armenia'
          ),
          React.createElement(
            'option',
            { value: 'AW' },
            'aruba'
          ),
          React.createElement(
            'option',
            { value: 'AU' },
            'australia'
          ),
          React.createElement(
            'option',
            { value: 'AT' },
            'austria'
          ),
          React.createElement(
            'option',
            { value: 'AZ' },
            'azerbaijan'
          ),
          React.createElement(
            'option',
            { value: 'BS' },
            'bahamas'
          ),
          React.createElement(
            'option',
            { value: 'BH' },
            'bahrain'
          ),
          React.createElement(
            'option',
            { value: 'BD' },
            'bangladesh'
          ),
          React.createElement(
            'option',
            { value: 'BB' },
            'barbados'
          ),
          React.createElement(
            'option',
            { value: 'BY' },
            'belarus'
          ),
          React.createElement(
            'option',
            { value: 'BE' },
            'belgium'
          ),
          React.createElement(
            'option',
            { value: 'BZ' },
            'belize'
          ),
          React.createElement(
            'option',
            { value: 'BJ' },
            'benin'
          ),
          React.createElement(
            'option',
            { value: 'BM' },
            'bermuda'
          ),
          React.createElement(
            'option',
            { value: 'BT' },
            'bhutan'
          ),
          React.createElement(
            'option',
            { value: 'BO' },
            'bolivia'
          ),
          React.createElement(
            'option',
            { value: 'BA' },
            'bosnia and herzegovina'
          ),
          React.createElement(
            'option',
            { value: 'BW' },
            'botswana'
          ),
          React.createElement(
            'option',
            { value: 'BV' },
            'bouvet island'
          ),
          React.createElement(
            'option',
            { value: 'BR' },
            'brazil'
          ),
          React.createElement(
            'option',
            { value: 'IO' },
            'british indian ocean territory'
          ),
          React.createElement(
            'option',
            { value: 'BN' },
            'brunei darussalam'
          ),
          React.createElement(
            'option',
            { value: 'BG' },
            'bulgaria'
          ),
          React.createElement(
            'option',
            { value: 'BF' },
            'burkina faso'
          ),
          React.createElement(
            'option',
            { value: 'BI' },
            'burundi'
          ),
          React.createElement(
            'option',
            { value: 'KH' },
            'cambodia'
          ),
          React.createElement(
            'option',
            { value: 'CM' },
            'cameroon'
          ),
          React.createElement(
            'option',
            { value: 'CV' },
            'cape verde'
          ),
          React.createElement(
            'option',
            { value: 'KY' },
            'cayman islands'
          ),
          React.createElement(
            'option',
            { value: 'CF' },
            'central african republic'
          ),
          React.createElement(
            'option',
            { value: 'TD' },
            'chad'
          ),
          React.createElement(
            'option',
            { value: 'CL' },
            'chile'
          ),
          React.createElement(
            'option',
            { value: 'CN' },
            'china'
          ),
          React.createElement(
            'option',
            { value: 'CX' },
            'christmas island'
          ),
          React.createElement(
            'option',
            { value: 'CC' },
            'cocos (keeling) islands'
          ),
          React.createElement(
            'option',
            { value: 'CO' },
            'colombia'
          ),
          React.createElement(
            'option',
            { value: 'KM' },
            'comoros'
          ),
          React.createElement(
            'option',
            { value: 'CG' },
            'congo'
          ),
          React.createElement(
            'option',
            { value: 'CD' },
            'congo, the democratic republic of the'
          ),
          React.createElement(
            'option',
            { value: 'CK' },
            'cook islands'
          ),
          React.createElement(
            'option',
            { value: 'CR' },
            'costa rica'
          ),
          React.createElement(
            'option',
            { value: 'CI' },
            'cote d"ivoire'
          ),
          React.createElement(
            'option',
            { value: 'HR' },
            'croatia'
          ),
          React.createElement(
            'option',
            { value: 'CU' },
            'cuba'
          ),
          React.createElement(
            'option',
            { value: 'CY' },
            'cyprus'
          ),
          React.createElement(
            'option',
            { value: 'CZ' },
            'czech republic'
          ),
          React.createElement(
            'option',
            { value: 'DK' },
            'denmark'
          ),
          React.createElement(
            'option',
            { value: 'DJ' },
            'djibouti'
          ),
          React.createElement(
            'option',
            { value: 'DM' },
            'dominica'
          ),
          React.createElement(
            'option',
            { value: 'DO' },
            'dominican republic'
          ),
          React.createElement(
            'option',
            { value: 'EC' },
            'ecuador'
          ),
          React.createElement(
            'option',
            { value: 'EG' },
            'egypt'
          ),
          React.createElement(
            'option',
            { value: 'SV' },
            'el salvador'
          ),
          React.createElement(
            'option',
            { value: 'GQ' },
            'equatorial guinea'
          ),
          React.createElement(
            'option',
            { value: 'ER' },
            'eritrea'
          ),
          React.createElement(
            'option',
            { value: 'EE' },
            'estonia'
          ),
          React.createElement(
            'option',
            { value: 'ET' },
            'ethiopia'
          ),
          React.createElement(
            'option',
            { value: 'FK' },
            'falkland islands (malvinas)'
          ),
          React.createElement(
            'option',
            { value: 'FO' },
            'faroe islands'
          ),
          React.createElement(
            'option',
            { value: 'FJ' },
            'fiji'
          ),
          React.createElement(
            'option',
            { value: 'FI' },
            'finland'
          ),
          React.createElement(
            'option',
            { value: 'FR' },
            'france'
          ),
          React.createElement(
            'option',
            { value: 'GF' },
            'french guiana'
          ),
          React.createElement(
            'option',
            { value: 'PF' },
            'french polynesia'
          ),
          React.createElement(
            'option',
            { value: 'TF' },
            'french southern territories'
          ),
          React.createElement(
            'option',
            { value: 'GA' },
            'gabon'
          ),
          React.createElement(
            'option',
            { value: 'GM' },
            'gambia'
          ),
          React.createElement(
            'option',
            { value: 'GE' },
            'georgia'
          ),
          React.createElement(
            'option',
            { value: 'DE' },
            'germany'
          ),
          React.createElement(
            'option',
            { value: 'GH' },
            'ghana'
          ),
          React.createElement(
            'option',
            { value: 'GI' },
            'gibraltar'
          ),
          React.createElement(
            'option',
            { value: 'GR' },
            'greece'
          ),
          React.createElement(
            'option',
            { value: 'GL' },
            'greenland'
          ),
          React.createElement(
            'option',
            { value: 'GD' },
            'grenada'
          ),
          React.createElement(
            'option',
            { value: 'GP' },
            'guadeloupe'
          ),
          React.createElement(
            'option',
            { value: 'GU' },
            'guam'
          ),
          React.createElement(
            'option',
            { value: 'GT' },
            'guatemala'
          ),
          React.createElement(
            'option',
            { value: 'GG' },
            'guernsey'
          ),
          React.createElement(
            'option',
            { value: 'GN' },
            'guinea'
          ),
          React.createElement(
            'option',
            { value: 'GW' },
            'guinea-bissau'
          ),
          React.createElement(
            'option',
            { value: 'GY' },
            'guyana'
          ),
          React.createElement(
            'option',
            { value: 'HT' },
            'haiti'
          ),
          React.createElement(
            'option',
            { value: 'HM' },
            'heard island and mcdonald islands'
          ),
          React.createElement(
            'option',
            { value: 'VA' },
            'holy see (vatican city state)'
          ),
          React.createElement(
            'option',
            { value: 'HN' },
            'honduras'
          ),
          React.createElement(
            'option',
            { value: 'HK' },
            'hong kong'
          ),
          React.createElement(
            'option',
            { value: 'HU' },
            'hungary'
          ),
          React.createElement(
            'option',
            { value: 'IS' },
            'iceland'
          ),
          React.createElement(
            'option',
            { value: 'IN' },
            'india'
          ),
          React.createElement(
            'option',
            { value: 'ID' },
            'indonesia'
          ),
          React.createElement(
            'option',
            { value: 'IR' },
            'iran, islamic republic of'
          ),
          React.createElement(
            'option',
            { value: 'IQ' },
            'iraq'
          ),
          React.createElement(
            'option',
            { value: 'IE' },
            'ireland'
          ),
          React.createElement(
            'option',
            { value: 'IM' },
            'isle of man'
          ),
          React.createElement(
            'option',
            { value: 'IL' },
            'israel'
          ),
          React.createElement(
            'option',
            { value: 'IT' },
            'italy'
          ),
          React.createElement(
            'option',
            { value: 'JM' },
            'jamaica'
          ),
          React.createElement(
            'option',
            { value: 'JP' },
            'japan'
          ),
          React.createElement(
            'option',
            { value: 'JE' },
            'jersey'
          ),
          React.createElement(
            'option',
            { value: 'JO' },
            'jordan'
          ),
          React.createElement(
            'option',
            { value: 'KZ' },
            'kazakhstan'
          ),
          React.createElement(
            'option',
            { value: 'KE' },
            'kenya'
          ),
          React.createElement(
            'option',
            { value: 'KI' },
            'kiribati'
          ),
          React.createElement(
            'option',
            { value: 'KP' },
            'korea, democratic people\'s republic of'
          ),
          React.createElement(
            'option',
            { value: 'KR' },
            'korea, republic of'
          ),
          React.createElement(
            'option',
            { value: 'KW' },
            'kuwait'
          ),
          React.createElement(
            'option',
            { value: 'KG' },
            'kyrgyzstan'
          ),
          React.createElement(
            'option',
            { value: 'LA' },
            'lao people\'s democratic republic'
          ),
          React.createElement(
            'option',
            { value: 'LV' },
            'latvia'
          ),
          React.createElement(
            'option',
            { value: 'LB' },
            'lebanon'
          ),
          React.createElement(
            'option',
            { value: 'LS' },
            'lesotho'
          ),
          React.createElement(
            'option',
            { value: 'LR' },
            'liberia'
          ),
          React.createElement(
            'option',
            { value: 'LY' },
            'libyan arab jamahiriya'
          ),
          React.createElement(
            'option',
            { value: 'LI' },
            'liechtenstein'
          ),
          React.createElement(
            'option',
            { value: 'LT' },
            'lithuania'
          ),
          React.createElement(
            'option',
            { value: 'LU' },
            'luxembourg'
          ),
          React.createElement(
            'option',
            { value: 'MO' },
            'macao'
          ),
          React.createElement(
            'option',
            { value: 'MK' },
            'macedonia, the former yugoslav republic of'
          ),
          React.createElement(
            'option',
            { value: 'MG' },
            'madagascar'
          ),
          React.createElement(
            'option',
            { value: 'MW' },
            'malawi'
          ),
          React.createElement(
            'option',
            { value: 'MY' },
            'malaysia'
          ),
          React.createElement(
            'option',
            { value: 'MV' },
            'maldives'
          ),
          React.createElement(
            'option',
            { value: 'ML' },
            'mali'
          ),
          React.createElement(
            'option',
            { value: 'MT' },
            'malta'
          ),
          React.createElement(
            'option',
            { value: 'MH' },
            'marshall islands'
          ),
          React.createElement(
            'option',
            { value: 'MQ' },
            'martinique'
          ),
          React.createElement(
            'option',
            { value: 'MR' },
            'mauritania'
          ),
          React.createElement(
            'option',
            { value: 'MU' },
            'mauritius'
          ),
          React.createElement(
            'option',
            { value: 'YT' },
            'mayotte'
          ),
          React.createElement(
            'option',
            { value: 'MX' },
            'mexico'
          ),
          React.createElement(
            'option',
            { value: 'FM' },
            'micronesia, federated states of'
          ),
          React.createElement(
            'option',
            { value: 'MD' },
            'moldova, republic of'
          ),
          React.createElement(
            'option',
            { value: 'MC' },
            'monaco'
          ),
          React.createElement(
            'option',
            { value: 'MN' },
            'mongolia'
          ),
          React.createElement(
            'option',
            { value: 'ME' },
            'montenegro'
          ),
          React.createElement(
            'option',
            { value: 'MS' },
            'montserrat'
          ),
          React.createElement(
            'option',
            { value: 'MA' },
            'morocco'
          ),
          React.createElement(
            'option',
            { value: 'MZ' },
            'mozambique'
          ),
          React.createElement(
            'option',
            { value: 'MM' },
            'myanmar'
          ),
          React.createElement(
            'option',
            { value: 'NA' },
            'namibia'
          ),
          React.createElement(
            'option',
            { value: 'NR' },
            'nauru'
          ),
          React.createElement(
            'option',
            { value: 'NP' },
            'nepal'
          ),
          React.createElement(
            'option',
            { value: 'NL' },
            'netherlands'
          ),
          React.createElement(
            'option',
            { value: 'AN' },
            'netherlands antilles'
          ),
          React.createElement(
            'option',
            { value: 'NC' },
            'new caledonia'
          ),
          React.createElement(
            'option',
            { value: 'NZ' },
            'new zealand'
          ),
          React.createElement(
            'option',
            { value: 'NI' },
            'nicaragua'
          ),
          React.createElement(
            'option',
            { value: 'NE' },
            'niger'
          ),
          React.createElement(
            'option',
            { value: 'NG' },
            'nigeria'
          ),
          React.createElement(
            'option',
            { value: 'NU' },
            'niue'
          ),
          React.createElement(
            'option',
            { value: 'NF' },
            'norfolk island'
          ),
          React.createElement(
            'option',
            { value: 'MP' },
            'northern mariana islands'
          ),
          React.createElement(
            'option',
            { value: 'NO' },
            'norway'
          ),
          React.createElement(
            'option',
            { value: 'OM' },
            'oman'
          ),
          React.createElement(
            'option',
            { value: 'PK' },
            'pakistan'
          ),
          React.createElement(
            'option',
            { value: 'PW' },
            'palau'
          ),
          React.createElement(
            'option',
            { value: 'PS' },
            'palestinian territory, occupied'
          ),
          React.createElement(
            'option',
            { value: 'PA' },
            'panama'
          ),
          React.createElement(
            'option',
            { value: 'PG' },
            'papua new guinea'
          ),
          React.createElement(
            'option',
            { value: 'PY' },
            'paraguay'
          ),
          React.createElement(
            'option',
            { value: 'PE' },
            'peru'
          ),
          React.createElement(
            'option',
            { value: 'PH' },
            'philippines'
          ),
          React.createElement(
            'option',
            { value: 'PN' },
            'pitcairn'
          ),
          React.createElement(
            'option',
            { value: 'PL' },
            'poland'
          ),
          React.createElement(
            'option',
            { value: 'PT' },
            'portugal'
          ),
          React.createElement(
            'option',
            { value: 'PR' },
            'puerto rico'
          ),
          React.createElement(
            'option',
            { value: 'QA' },
            'qatar'
          ),
          React.createElement(
            'option',
            { value: 'RE' },
            'reunion'
          ),
          React.createElement(
            'option',
            { value: 'RO' },
            'romania'
          ),
          React.createElement(
            'option',
            { value: 'RU' },
            'russian federation'
          ),
          React.createElement(
            'option',
            { value: 'RW' },
            'rwanda'
          ),
          React.createElement(
            'option',
            { value: 'BL' },
            'saint barthelemy'
          ),
          React.createElement(
            'option',
            { value: 'SH' },
            'saint helena'
          ),
          React.createElement(
            'option',
            { value: 'KN' },
            'saint kitts and nevis'
          ),
          React.createElement(
            'option',
            { value: 'LC' },
            'saint lucia'
          ),
          React.createElement(
            'option',
            { value: 'MF' },
            'saint martin'
          ),
          React.createElement(
            'option',
            { value: 'PM' },
            'saint pierre and miquelon'
          ),
          React.createElement(
            'option',
            { value: 'VC' },
            'saint vincent and the grenadines'
          ),
          React.createElement(
            'option',
            { value: 'WS' },
            'samoa'
          ),
          React.createElement(
            'option',
            { value: 'SM' },
            'san marino'
          ),
          React.createElement(
            'option',
            { value: 'ST' },
            'sao tome and principe'
          ),
          React.createElement(
            'option',
            { value: 'SA' },
            'saudi arabia'
          ),
          React.createElement(
            'option',
            { value: 'SN' },
            'senegal'
          ),
          React.createElement(
            'option',
            { value: 'RS' },
            'serbia'
          ),
          React.createElement(
            'option',
            { value: 'SC' },
            'seychelles'
          ),
          React.createElement(
            'option',
            { value: 'SL' },
            'sierra leone'
          ),
          React.createElement(
            'option',
            { value: 'SG' },
            'singapore'
          ),
          React.createElement(
            'option',
            { value: 'SK' },
            'slovakia'
          ),
          React.createElement(
            'option',
            { value: 'SI' },
            'slovenia'
          ),
          React.createElement(
            'option',
            { value: 'SB' },
            'solomon islands'
          ),
          React.createElement(
            'option',
            { value: 'SO' },
            'somalia'
          ),
          React.createElement(
            'option',
            { value: 'ZA' },
            'south africa'
          ),
          React.createElement(
            'option',
            { value: 'GS' },
            'south georgia and the south sandwich islands'
          ),
          React.createElement(
            'option',
            { value: 'ES' },
            'spain'
          ),
          React.createElement(
            'option',
            { value: 'LK' },
            'sri lanka'
          ),
          React.createElement(
            'option',
            { value: 'SD' },
            'sudan'
          ),
          React.createElement(
            'option',
            { value: 'SR' },
            'suriname'
          ),
          React.createElement(
            'option',
            { value: 'SJ' },
            'svalbard and jan mayen'
          ),
          React.createElement(
            'option',
            { value: 'SZ' },
            'swaziland'
          ),
          React.createElement(
            'option',
            { value: 'SE' },
            'sweden'
          ),
          React.createElement(
            'option',
            { value: 'CH' },
            'switzerland'
          ),
          React.createElement(
            'option',
            { value: 'SY' },
            'syrian arab republic'
          ),
          React.createElement(
            'option',
            { value: 'TW' },
            'taiwan'
          ),
          React.createElement(
            'option',
            { value: 'TJ' },
            'tajikistan'
          ),
          React.createElement(
            'option',
            { value: 'TZ' },
            'tanzania, united republic of'
          ),
          React.createElement(
            'option',
            { value: 'TH' },
            'thailand'
          ),
          React.createElement(
            'option',
            { value: 'TL' },
            'timor-leste'
          ),
          React.createElement(
            'option',
            { value: 'TG' },
            'togo'
          ),
          React.createElement(
            'option',
            { value: 'TK' },
            'tokelau'
          ),
          React.createElement(
            'option',
            { value: 'TO' },
            'tonga'
          ),
          React.createElement(
            'option',
            { value: 'TT' },
            'trinidad and tobago'
          ),
          React.createElement(
            'option',
            { value: 'TN' },
            'tunisia'
          ),
          React.createElement(
            'option',
            { value: 'TR' },
            'turkey'
          ),
          React.createElement(
            'option',
            { value: 'TM' },
            'turkmenistan'
          ),
          React.createElement(
            'option',
            { value: 'TC' },
            'turks and caicos islands'
          ),
          React.createElement(
            'option',
            { value: 'TV' },
            'tuvalu'
          ),
          React.createElement(
            'option',
            { value: 'UG' },
            'uganda'
          ),
          React.createElement(
            'option',
            { value: 'UA' },
            'ukraine'
          ),
          React.createElement(
            'option',
            { value: 'AE' },
            'united arab emirates'
          ),
          React.createElement(
            'option',
            { value: 'GB' },
            'united kingdom'
          ),
          React.createElement(
            'option',
            { value: 'UM' },
            'united states minor outlying islands'
          ),
          React.createElement(
            'option',
            { value: 'UY' },
            'uruguay'
          ),
          React.createElement(
            'option',
            { value: 'UZ' },
            'uzbekistan'
          ),
          React.createElement(
            'option',
            { value: 'VU' },
            'vanuatu'
          ),
          React.createElement(
            'option',
            { value: 'VE' },
            'venezuela, bolivarian republic of'
          ),
          React.createElement(
            'option',
            { value: 'VN' },
            'viet nam'
          ),
          React.createElement(
            'option',
            { value: 'VG' },
            'virgin islands, british'
          ),
          React.createElement(
            'option',
            { value: 'VI' },
            'virgin islands, u.s.'
          ),
          React.createElement(
            'option',
            { value: 'WF' },
            'wallis and futuna'
          ),
          React.createElement(
            'option',
            { value: 'EH' },
            'western sahara'
          ),
          React.createElement(
            'option',
            { value: 'YE' },
            'yemen'
          ),
          React.createElement(
            'option',
            { value: 'ZM' },
            'zambia'
          ),
          React.createElement(
            'option',
            { value: 'ZW' },
            'zimbabwe'
          )
        )
      );
    }
  }]);

  return Country;
}(Base);

Country.propTypes = Object.assign({
  value: PropTypes.string
}, Country.propTypess);

Country.defaultProps = Object.assign({
  componentName: 'country',
  value: 'US'
}, Country.defaultProps);

export default Country;