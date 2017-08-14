import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Email from './components/Email';
import PaymentInfo from './components/PaymentInfo';
import { Grid, FormGroup, Col } from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    console.log("PARENT: ", name, value);

    console.log("Current state: ", this.state);

    var s = this.state[name] ? Object.assign({}, this.state[name], value) : value;

    console.log(s);
    var new_state = this.state;
    new_state[name] = s;
    this.setState(new_state);
  }

  render() {
    const payment_info = this.state.payment_info ? this.state.payment_info : {};
    const name = this.state.name ? this.state.name : {};
    const email = this.state.email ? this.state.email : {};

    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

        <Grid>
          <form className="form-horizontal">
            <FormGroup>
              <Col lg={12}>
                <Name
                  onChange={this.handleChange}
                  first_name={name.first_name}
                  last_name={name.last_name} />
              </Col>
            </FormGroup>
            <Col lg={12}>
              <Email
                onChange={this.handleChange}
                email={email.email} />
            </Col>
            <FormGroup>
              <Col lg={12}>
                <PaymentInfo
                  onChange={this.handleChange}
                  {...payment_info}
                />
              </Col>
            </FormGroup>
          </form>
        </Grid>
      </div>
    );
  }
}

export default App;
