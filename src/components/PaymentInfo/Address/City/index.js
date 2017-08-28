import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../Base';

class City extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange('value', e.target.value);
  }

  render() {
    return (<FormGroup>
      <ControlLabel>City</ControlLabel>
      <FormControl
        id="billing_contry"
        name="billing_country"
        onChange={this.handleChange}
        placeholder="City"
        value={this.props.value}
      />
    </FormGroup>);
  }
}

City.defaultProps = {
  componentName: 'city',
  value: '',
  country: 'US',
  ...City.defaultProps
};

export default City;
