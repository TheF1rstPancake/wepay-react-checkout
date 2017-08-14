import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../Base';

class Email extends Base {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    // email regex
  }
  handleChange(e) {
    var text = e.target.value;
    super.handleChange('email', text);
  }
  validate() {
    var email = this.props.email;
    var pattern = new RegExp( '.+@.+\.[^\s]+');

    return email === '' || !email ? null : pattern.test(email) ? 'success' : 'error';

  }

  render() {
    return (
      <FormGroup validationState={this.validate()}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="envelope" />
          </InputGroup.Addon>
          <FormControl
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.handleChange}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

Email.propTypes = {
  componentName: PropTypes.string.isRequired
};

Email.defaultProps = {
  componentName: 'email'
};
export default Email;
