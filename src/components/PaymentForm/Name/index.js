/*The NAME component contains both first and last name fields*/

import React from 'react';
import { FormGroup, Col, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

class Name extends Base {
  constructor(props) {
    super(props);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }
  handleFirstNameChange(e) {
    super.handleChange("first_name", e.target.value);
  }
  handleLastNameChange(e) {
    super.handleChange("last_name", e.target.value);
  }

  render() {
    return (<FormGroup>
      <Col
        lg={6}
        xs={6}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="user" />
          </InputGroup.Addon>
          <FormControl
            id="firstname"
            name="firstname"
            type="text"
            value={this.props.first_name}
            onChange={this.handleFirstNameChange}
            placeholder="First Name"
            required="true" />
        </InputGroup>
      </Col>
      <Col
        lg={6}
        xs={6}>
        <FormControl
          id="lastname"
          name="lastname"
          type="text"
          value={this.props.last_name}
          onChange={this.handleLastNameChange}
          placeholder="Last Name"
          required="true" />
      </Col>
    </FormGroup>);
  }
}

Name.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  ...Name.propTypes
};

Name.defaultProps = {
  componentName: 'name',
  first_name: '',
  last_name: '',
  ...Name.defaultProps
};

export default Name;
