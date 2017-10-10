import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../../../Base';

class State extends Base {
  constructor(props) {
    super(props);
    console.log("STATE PROPS: ", props);
    this.handleChange = this.handleChange.bind(this);
    this.renderStates = this.renderStates.bind(this);
  }

  handleChange(e) {
    super.handleChange('value', e.target.value);
  }

  renderStates(country) {
    var states = country === 'US' ? State.US_STATES : State.CA_PROVINCES;

    return states.map((item)=> {
      return (<option
        key={item.value}
        value={item.value}>
        {item.name}
      </option>);
    });
  }

  componentDidMount() {
    super.handleChange('value', this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    // if the country values change, and the prop is not unmounted, then we need to make sure we raise state properly
    if (nextProps.country !== this.props.country){
      super.handleChange('state', nextProps.country === 'CA'
        ? State.CA_PROVINCES[0].value
        : nextProps.country === 'US'
          ? State.US_STATES[0].value
          : ''
      );
    }
  }

  render() {
    const label = this.props.country === 'CA'
      ? 'Province' : this.props.country === 'US' ? 'State' : 'Region';

    return (<FormGroup>
      <ControlLabel>
        {label}
      </ControlLabel>
      <FormControl
        id="billing_state"
        name="billing_state"
        componentClass={
          this.props.country === 'US' || this.props.country === 'CA'
            ? 'select' : "input"
        }
        placeholder={label}
        value={this.props.value}
        onChange={this.handleChange}>
        {
          this.props.country === 'CA' || this.props.country === 'US'
            ? this.renderStates(this.props.country)
            : null
        }
      </FormControl>
    </FormGroup>);
  }
}

State.CA_PROVINCES = [
  { 'name': 'Alberta', 'value': 'AB' },
  { 'name': 'British Columbia', 'value': 'BC' },
  { 'name': 'Manitoba', 'value': 'MB' },
  { 'name': 'New Brunswick', 'value': 'NB' },
  { 'name': 'Newfoundland and Labrador', 'value': 'NL' },
  { 'name': 'Northwest Territories', 'value': 'NW' },
  { 'name': 'Nova Scotia', 'value': 'NS' },
  { 'name': 'Nunavut', 'value': 'NU' },
  { 'name': 'Ontario', 'value': 'ON' },
  { 'name': 'Prince Edward Island', 'value': 'PE' },
  { 'name': 'Quebec', 'value': 'QC' },
  { 'name': 'Saskatchewan', 'value': 'SK' },
  { 'name': 'Yukon', 'value': 'YU' }
];

State.US_STATES = [
  { 'name': 'Alabama', 'value': 'AL' },
  { 'name': 'Alaska', 'value': 'AK' },
  { 'name': 'American Samoa', 'value': 'AS' },
  { 'name': 'Arizona', 'value': 'AZ' },
  { 'name': 'Arkansas', 'value': 'AR' },
  { 'name': 'California', 'value': 'CA' },
  { 'name': 'Colorado', 'value': 'CO' },
  { 'name': 'Connecticut', 'value': 'CT' },
  { 'name': 'Delaware', 'value': 'DE' },
  { 'name': 'District Of Columbia', 'value': 'DC' },
  { 'name': 'Federated States Of Micronesia', 'value': 'FM' },
  { 'name': 'Florida', 'value': 'FL' },
  { 'name': 'Georgia', 'value': 'GA' },
  { 'name': 'Guam', 'value': 'GU' },
  { 'name': 'Hawaii', 'value': 'HI' },
  { 'name': 'Idaho', 'value': 'ID' },
  { 'name': 'Illinois', 'value': 'IL' },
  { 'name': 'Indiana', 'value': 'IN' },
  { 'name': 'Iowa', 'value': 'IA' },
  { 'name': 'Kansas', 'value': 'KS' },
  { 'name': 'Kentucky', 'value': 'KY' },
  { 'name': 'Louisiana', 'value': 'LA' },
  { 'name': 'Maine', 'value': 'ME' },
  { 'name': 'Marshall Islands', 'value': 'MH' },
  { 'name': 'Maryland', 'value': 'MD' },
  { 'name': 'Massachusetts', 'value': 'MA' },
  { 'name': 'Michigan', 'value': 'MI' },
  { 'name': 'Minnesota', 'value': 'MN' },
  { 'name': 'Mississippi', 'value': 'MS' },
  { 'name': 'Missouri', 'value': 'MO' },
  { 'name': 'Montana', 'value': 'MT' },
  { 'name': 'Nebraska', 'value': 'NE' },
  { 'name': 'Nevada', 'value': 'NV' },
  { 'name': 'New Hampshire', 'value': 'NH' },
  { 'name': 'New Jersey', 'value': 'NJ' },
  { 'name': 'New Mexico', 'value': 'NM' },
  { 'name': 'New York', 'value': 'NY' },
  { 'name': 'North Carolina', 'value': 'NC' },
  { 'name': 'North Dakota', 'value': 'ND' },
  { 'name': 'Northern Mariana Islands', 'value': 'MP' },
  { 'name': 'Ohio', 'value': 'OH' },
  { 'name': 'Oklahoma', 'value': 'OK' },
  { 'name': 'Oregon', 'value': 'OR' },
  { 'name': 'Palau', 'value': 'PW' },
  { 'name': 'Pennsylvania', 'value': 'PA' },
  { 'name': 'Puerto Rico', 'value': 'PR' },
  { 'name': 'Rhode Island', 'value': 'RI' },
  { 'name': 'South Carolina', 'value': 'SC' },
  { 'name': 'South Dakota', 'value': 'SD' },
  { 'name': 'Tennessee', 'value': 'TN' },
  { 'name': 'Texas', 'value': 'TX' },
  { 'name': 'Utah', 'value': 'UT' },
  { 'name': 'Vermont', 'value': 'VT' },
  { 'name': 'Virgin Islands', 'value': 'VI' },
  { 'name': 'Virginia', 'value': 'VA' },
  { 'name': 'Washington', 'value': 'WA' },
  { 'name': 'West Virginia', 'value': 'WV' },
  { 'name': 'Wisconsin', 'value': 'WI' },
  { 'name': 'Wyoming', 'value': 'WY' }
];


State.propTypes = {
  country: PropTypes.string,
  value: PropTypes.string,
  ...State.propTypes
};


State.defaultProps = {
  country: 'US',
  componentName: 'state',
  value: State.US_STATES[0],
  ...State.defaultProps
};

export default State;
