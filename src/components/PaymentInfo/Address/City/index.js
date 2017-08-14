import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Base from '../../../Base';

class City extends Base {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    super.handleChange('city', e.target.value);
  }

  render() {
    return (<FormGroup>
      <ControlLabel>City</ControlLabel>
      <FormControl
        id="billing_contry"
        name="billing_country"
        onChange={this.handleChange}
        placeholder="City"
        value={this.props.city}
      />
    </FormGroup>);
  }
}

City.defaultProps = {
  componentName: 'city',
  city: '',
  ...City.defaultProps
};

export default City;
