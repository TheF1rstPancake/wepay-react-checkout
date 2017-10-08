import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Base from '../../Base';

class Email extends Base {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    this.defaultValues = {
      id:"email",
      name:"email",
      type:"email",
      placeholder:"Email",
      required:"true",
    };
  }
  handleChange(e) {
    var text = e.target.value;
    super.handleChange('value', text);
  }
  validate() {
    var email = this.props.value;
    var pattern = /.+@.+\.[^\s]+/;

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
            {...this.defaultValues}
            value={this.props.value}
            onChange={this.handleChange}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

Email.propTypes = {
  componentName: PropTypes.string.isRequired,
  value: PropTypes.string,
  ...Email.propTypes
};

Email.defaultProps = {
  componentName: 'email',
  value:'',
  ...Email.defaultProps
};
export default Email;
