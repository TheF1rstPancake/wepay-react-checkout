import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../Base';
import PropTypes from 'prop-types';
class Country extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange('value', e.target.value);
  }
  componentDidMount(){
    super.handleChange('value', this.props.value);
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Country</ControlLabel>
        <FormControl
          componentClass="select"
          id="billing_country"
          name="billing_country"
          style={{ textTransform: "capitalize" }}
          onChange={this.handleChange}
          value={this.props.value}
          required="true"
        >
          <option value="US">united states</option>
          <option value="CA">canada</option>
          <option value="AF">afghanistan</option>
          <option value="AX">aland islands</option>
          <option value="AL">albania</option>
          <option value="DZ">algeria</option>
          <option value="AS">american samoa</option>
          <option value="AD">andorra</option>
          <option value="AO">angola</option>
          <option value="AI">anguilla</option>
          <option value="AQ">antarctica</option>
          <option value="AG">antigua and barbuda</option>
          <option value="AR">argentina</option>
          <option value="AM">armenia</option>
          <option value="AW">aruba</option>
          <option value="AU">australia</option>
          <option value="AT">austria</option>
          <option value="AZ">azerbaijan</option>
          <option value="BS">bahamas</option>
          <option value="BH">bahrain</option>
          <option value="BD">bangladesh</option>
          <option value="BB">barbados</option>
          <option value="BY">belarus</option>
          <option value="BE">belgium</option>
          <option value="BZ">belize</option>
          <option value="BJ">benin</option>
          <option value="BM">bermuda</option>
          <option value="BT">bhutan</option>
          <option value="BO">bolivia</option>
          <option value="BA">bosnia and herzegovina</option>
          <option value="BW">botswana</option>
          <option value="BV">bouvet island</option>
          <option value="BR">brazil</option>
          <option value="IO">british indian ocean territory</option>
          <option value="BN">brunei darussalam</option>
          <option value="BG">bulgaria</option>
          <option value="BF">burkina faso</option>
          <option value="BI">burundi</option>
          <option value="KH">cambodia</option>
          <option value="CM">cameroon</option>
          <option value="CV">cape verde</option>
          <option value="KY">cayman islands</option>
          <option value="CF">central african republic</option>
          <option value="TD">chad</option>
          <option value="CL">chile</option>
          <option value="CN">china</option>
          <option value="CX">christmas island</option>
          <option value="CC">cocos (keeling) islands</option>
          <option value="CO">colombia</option>
          <option value="KM">comoros</option>
          <option value="CG">congo</option>
          <option value="CD">congo, the democratic republic of the</option>
          <option value="CK">cook islands</option>
          <option value="CR">costa rica</option>
          <option value="CI">cote d"ivoire</option>
          <option value="HR">croatia</option>
          <option value="CU">cuba</option>
          <option value="CY">cyprus</option>
          <option value="CZ">czech republic</option>
          <option value="DK">denmark</option>
          <option value="DJ">djibouti</option>
          <option value="DM">dominica</option>
          <option value="DO">dominican republic</option>
          <option value="EC">ecuador</option>
          <option value="EG">egypt</option>
          <option value="SV">el salvador</option>
          <option value="GQ">equatorial guinea</option>
          <option value="ER">eritrea</option>
          <option value="EE">estonia</option>
          <option value="ET">ethiopia</option>
          <option value="FK">falkland islands (malvinas)</option>
          <option value="FO">faroe islands</option>
          <option value="FJ">fiji</option>
          <option value="FI">finland</option>
          <option value="FR">france</option>
          <option value="GF">french guiana</option>
          <option value="PF">french polynesia</option>
          <option value="TF">french southern territories</option>
          <option value="GA">gabon</option>
          <option value="GM">gambia</option>
          <option value="GE">georgia</option>
          <option value="DE">germany</option>
          <option value="GH">ghana</option>
          <option value="GI">gibraltar</option>
          <option value="GR">greece</option>
          <option value="GL">greenland</option>
          <option value="GD">grenada</option>
          <option value="GP">guadeloupe</option>
          <option value="GU">guam</option>
          <option value="GT">guatemala</option>
          <option value="GG">guernsey</option>
          <option value="GN">guinea</option>
          <option value="GW">guinea-bissau</option>
          <option value="GY">guyana</option>
          <option value="HT">haiti</option>
          <option value="HM">heard island and mcdonald islands</option>
          <option value="VA">holy see (vatican city state)</option>
          <option value="HN">honduras</option>
          <option value="HK">hong kong</option>
          <option value="HU">hungary</option>
          <option value="IS">iceland</option>
          <option value="IN">india</option>
          <option value="ID">indonesia</option>
          <option value="IR">iran, islamic republic of</option>
          <option value="IQ">iraq</option>
          <option value="IE">ireland</option>
          <option value="IM">isle of man</option>
          <option value="IL">israel</option>
          <option value="IT">italy</option>
          <option value="JM">jamaica</option>
          <option value="JP">japan</option>
          <option value="JE">jersey</option>
          <option value="JO">jordan</option>
          <option value="KZ">kazakhstan</option>
          <option value="KE">kenya</option>
          <option value="KI">kiribati</option>
          <option value="KP">korea, democratic people's republic of</option>
          <option value="KR">korea, republic of</option>
          <option value="KW">kuwait</option>
          <option value="KG">kyrgyzstan</option>
          <option value="LA">lao people's democratic republic</option>
          <option value="LV">latvia</option>
          <option value="LB">lebanon</option>
          <option value="LS">lesotho</option>
          <option value="LR">liberia</option>
          <option value="LY">libyan arab jamahiriya</option>
          <option value="LI">liechtenstein</option>
          <option value="LT">lithuania</option>
          <option value="LU">luxembourg</option>
          <option value="MO">macao</option>
          <option value="MK">macedonia, the former yugoslav republic of</option>
          <option value="MG">madagascar</option>
          <option value="MW">malawi</option>
          <option value="MY">malaysia</option>
          <option value="MV">maldives</option>
          <option value="ML">mali</option>
          <option value="MT">malta</option>
          <option value="MH">marshall islands</option>
          <option value="MQ">martinique</option>
          <option value="MR">mauritania</option>
          <option value="MU">mauritius</option>
          <option value="YT">mayotte</option>
          <option value="MX">mexico</option>
          <option value="FM">micronesia, federated states of</option>
          <option value="MD">moldova, republic of</option>
          <option value="MC">monaco</option>
          <option value="MN">mongolia</option>
          <option value="ME">montenegro</option>
          <option value="MS">montserrat</option>
          <option value="MA">morocco</option>
          <option value="MZ">mozambique</option>
          <option value="MM">myanmar</option>
          <option value="NA">namibia</option>
          <option value="NR">nauru</option>
          <option value="NP">nepal</option>
          <option value="NL">netherlands</option>
          <option value="AN">netherlands antilles</option>
          <option value="NC">new caledonia</option>
          <option value="NZ">new zealand</option>
          <option value="NI">nicaragua</option>
          <option value="NE">niger</option>
          <option value="NG">nigeria</option>
          <option value="NU">niue</option>
          <option value="NF">norfolk island</option>
          <option value="MP">northern mariana islands</option>
          <option value="NO">norway</option>
          <option value="OM">oman</option>
          <option value="PK">pakistan</option>
          <option value="PW">palau</option>
          <option value="PS">palestinian territory, occupied</option>
          <option value="PA">panama</option>
          <option value="PG">papua new guinea</option>
          <option value="PY">paraguay</option>
          <option value="PE">peru</option>
          <option value="PH">philippines</option>
          <option value="PN">pitcairn</option>
          <option value="PL">poland</option>
          <option value="PT">portugal</option>
          <option value="PR">puerto rico</option>
          <option value="QA">qatar</option>
          <option value="RE">reunion</option>
          <option value="RO">romania</option>
          <option value="RU">russian federation</option>
          <option value="RW">rwanda</option>
          <option value="BL">saint barthelemy</option>
          <option value="SH">saint helena</option>
          <option value="KN">saint kitts and nevis</option>
          <option value="LC">saint lucia</option>
          <option value="MF">saint martin</option>
          <option value="PM">saint pierre and miquelon</option>
          <option value="VC">saint vincent and the grenadines</option>
          <option value="WS">samoa</option>
          <option value="SM">san marino</option>
          <option value="ST">sao tome and principe</option>
          <option value="SA">saudi arabia</option>
          <option value="SN">senegal</option>
          <option value="RS">serbia</option>
          <option value="SC">seychelles</option>
          <option value="SL">sierra leone</option>
          <option value="SG">singapore</option>
          <option value="SK">slovakia</option>
          <option value="SI">slovenia</option>
          <option value="SB">solomon islands</option>
          <option value="SO">somalia</option>
          <option value="ZA">south africa</option>
          <option value="GS">south georgia and the south sandwich islands</option>
          <option value="ES">spain</option>
          <option value="LK">sri lanka</option>
          <option value="SD">sudan</option>
          <option value="SR">suriname</option>
          <option value="SJ">svalbard and jan mayen</option>
          <option value="SZ">swaziland</option>
          <option value="SE">sweden</option>
          <option value="CH">switzerland</option>
          <option value="SY">syrian arab republic</option>
          <option value="TW">taiwan</option>
          <option value="TJ">tajikistan</option>
          <option value="TZ">tanzania, united republic of</option>
          <option value="TH">thailand</option>
          <option value="TL">timor-leste</option>
          <option value="TG">togo</option>
          <option value="TK">tokelau</option>
          <option value="TO">tonga</option>
          <option value="TT">trinidad and tobago</option>
          <option value="TN">tunisia</option>
          <option value="TR">turkey</option>
          <option value="TM">turkmenistan</option>
          <option value="TC">turks and caicos islands</option>
          <option value="TV">tuvalu</option>
          <option value="UG">uganda</option>
          <option value="UA">ukraine</option>
          <option value="AE">united arab emirates</option>
          <option value="GB">united kingdom</option>
          <option value="UM">united states minor outlying islands</option>
          <option value="UY">uruguay</option>
          <option value="UZ">uzbekistan</option>
          <option value="VU">vanuatu</option>
          <option value="VE">venezuela, bolivarian republic of</option>
          <option value="VN">viet nam</option>
          <option value="VG">virgin islands, british</option>
          <option value="VI">virgin islands, u.s.</option>
          <option value="WF">wallis and futuna</option>
          <option value="EH">western sahara</option>
          <option value="YE">yemen</option>
          <option value="ZM">zambia</option>
          <option value="ZW">zimbabwe</option>
        </FormControl>
      </FormGroup>);
  }
}

Country.propTypes ={
  value: PropTypes.string,
  ...Country.propTypess
};

Country.defaultProps = {
  componentName: 'country',
  value: 'US',
  ...Country.defaultProps
};

export default Country;
