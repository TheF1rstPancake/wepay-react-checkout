import { Component } from 'react';
import PropTypes from 'prop-types';

class Base extends Component {
  constructor(props) {
    super(props);

    // these are the values we want to pass up
    this.pass_up = JSON.parse(JSON.stringify(props));
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name, value) {
    // we use the objects state to preserve all of the values in an object.
    // there is an issue with trying to pass nested objects up one value at a time
    this.pass_up[[name]] = value;
    var s = this.pass_up;
    //var s =  { [name]: value };
    console.log("HANDLE CHANGE: ", name, s);
    this.props.onChange(this.props.componentName, s);
  }
}

Base.propTypes = {
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired
};

Base.defaultProps = {
  onChange: () => {return;}
};

export default Base;
