# WePay-React-Checkout
_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)._

**Table of Contents**
- [WePay-React-Checkout](#wepay-react-checkout)
  - [How to Use](#how-to-use)
  - [PaymentForm and Library Architecture](#paymentform-and-library-architecture)
  - [Passing Values Down/Lifting State Up](#passing-values-downlifting-state-up)
  - [PaymentForm Properties](#paymentform-properties)
    - [Base](#base)
    - [PaymentForm](#paymentform)
      - [Amount](#amount)
      - [Email](#email)
      - [Name](#name)
      - [PaymentInfo](#paymentinfo)
        - [Card Number](#card-number)
        - [CVC](#cvc)
        - [Expiration](#expiration)
        - [Address](#address)
          - [BillingAddress](#billingaddress)
          - [City](#city)
          - [Country](#country)
          - [PostalCode](#postalcode)
          - [State](#state)
  - [Extending the Form](#extending-the-form)
  - [Building Your Own Template](#building-your-own-template)
  - [TO-DOs](#to-dos)

WePay-React-Checkout is a React component that renders a full checkout form and uses WePay to tokenize credit card information.  You **must** have a [WePay](https://go.wepay.com/) app to use this library.

The purpose is to provide a pre-made and out of the box checkout form that works for lots of different use cases.  Building a checkout form that handles all of the nuances of payments can be challenging and time consuming.  WePay offers an iFrame based checkout form that is meant to take care of everything, but it lacks customization.  This library provides an out-of-the-box solution that can be configured to meet your specific needs.

The default form here is not perfect, and will not work for everyone, but it wil hopefully serve as a good starting point for lots of platforms looking to accept payments.  This library will hopefully grow and expand over time, and offer different flavors of the checkout form.  They will all use the same data flow architecture, but offer different features and cosmetic looks to fit more specific needs.  For example, the default form doesn't handle the process of collecting shipping information.  The WePay API doesn't care about shipping info, but it can be an integral part of your payment flow anyway.

## How to Use
The top level, default form is called `PaymentForm`, and is importable by:

```javascript
import {PaymentForm} from 'wepay-react-checkout'
```

From there, you can insert the `PaymentForm` into a render function.  PaymentForm doesn't use any internal state to set it's own values.  Everything must come down as a `prop`.  This allows you to easily prefill info that you may already have.

The snippet below is from an `App.js` file created by `create-react-app`.  We've then imported the `PaymenForm` and basic state management.  We discuss this in more detail later in the README.

```javascript
import React, { Component } from 'react';
import './App.css';
import {PaymentForm} from 'wepay-react-checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_form: {
        payment_info: {},
        name: {},
        email: {},
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTokenized = this.handleTokenized.bind(this);
  }

  handleChange(name, value) {
    var new_state = this.state;
    new_state[name] = value;
    this.setState(new_state);
  }

  // on success occurs when the card is tokenized
  // at this point, you need to send the tokenized card to your backend server
  // along with the payment information (such as cost)
  handleTokenized(response) {
    // we are going to re-package the info
    // this is all we need to call WePay's /checkout/create
    var payload = {
      credit_card_id:response.credit_card_id,
      amount: this.state.payment_form.amount.value,
      currency: this.state.payment_form.amount.currency,
    };
    alert(`Submit to backend: ${JSON.stringify(payload)}`);
  }
  render() {
    const payment_form = this.state.payment_form ? this.state.payment_form : {};
    return (<PaymentForm
      client_id="YOUR APP ID"
      production={false}
      onChange={this.handleChange}
      onTokenized={this.handleTokenized}
      name={payment_form.name}
      email={payment_form.email}
      amount={payment_form.amount}
      payment_info={payment_form.payment_info}
    />);
  }
}

export default App;
```


## PaymentForm and Library Architecture
The top level, default form is called `PaymentForm`, and is importable by:

```javascript
import {PaymentForm} from 'wepay-react-checkout'
```

The `PaymentForm` itself is a collection of several other subobjects:
  - `Amount`
    * the amount that the payer will be paying
  - `Email`
    * the payer's email
  - `Name`
    * the payer's first and last name
  - `PaymentInfo`
    * a collection of even more objects that gather all of the credit card related info
    * `CardNumber`
      * The payer's credit card number
    * `CVC`
      * The card's CVC
    * `Expiration`
      * The card's expiration month and year
    * `Address`
      * a collection of objects that gather all address based information
      * `BillingAddress`
        * The street address of the payer
      * `City`
        * The city of the payer
      * `State`
        * The state (or region depending on country) of the payer
      * `PostalCode`
        * The zip-code (or postal-code depending on country) of the payer

Not all of this information is required for working with WePay depending on your integration.  The address information is the most variable.  It is recommended that you collect a full address for a payer not located in the US, but only `Country` and `PostalCode` are required.

Each of these components extends our `Base` component which is responsible for the basic data flow.  All of these components take values in as `props` and do use an internal state to set their own values.

The `Base` component is extremely simply and the most important part is that it contains a `handleChange` function.  This function is responsible for aggregating state values and passing them up to the parent component.  All values are passed up as _objects_ of the format:
  - `{componentName:{key1: 'someValue', key2: 'anotherValue'}}`

The `componentName` is a property assigned to each component.  For example, the `Name` component has a default prop set as `name`.  Then, each component decides how the key/value pairs are organized.  Again, in our `Name` component, we have two input fields: `first_name` and `last_name`.  When the input field controlling the `first_name` changes, the `Name` component calls:

```javascript
super.handleChange("first_name", e.target.value);
```

This assigns the value from the input field (`e.target.value`) to the key `first_name`.  So the full state looks like:

```javascript
{
  name: {
    'first_name': 'First'
  }
}
```

The `last_name` value is handled in the same way, except the key passed is `last_name`.  Other components only have one value, and they all pass their value up with the key `value`.

This is also important for how you pass state down to the individual components via `props`.  Each component consumes values in exactly the same format that it raises them.

## Passing Values Down/Lifting State Up
As you can see in our original example, the `PaymentForm` takes a collection of objects in as it's properties.  Each object is state information for each sub-object (and in some cases, sub-sub-objects) that make up the `PaymentForm`.

You **must** include all of the different properties as shown in the example above. We lift all state up, so if you do not pass any properties back down into the `PaymentForm` none of the user's input will display.

This might seem cumbersome at first, but this allows your component that is renndering the `PaymentForm` to have complete insight into the values inside the form.  You can then pick and choose what values you chose to send to your backend, and how they are formatted.

The `Base` component (and therefore, by extension, every component) has an `onChange` property.  Use this property to pass a function to the child component that will manage state changes.  Typically, this is just the `Base` object's `handleChange` function.  Some functions, such as the `PostalCode` component, need to do extra formatting on the input data before passing it up, so the `handleChange` function can be overriden.

## PaymentForm Properties
This next section will lay out all of the different properties for each component.  All `propTypes` and `defaultProps` included in the `Base` element are preserved in every element that extends it.

You have to be careful when preserving these though.  `propTypes` are inherited, but they are exteremly easy to override.  You should do something like the following:

```javascript
Name.propTypes = {
  value: PropTypes.string,
  ... Name.propTypes  // include any existing, inherited propTypes
}

Name.defaultProps = {
  value: '',
  ... Name.propTypes  //include any existing, inherited defaultProps
}
```

### Base
The `Base` object is our basic building block for all other components.  All components that extend `Base` also have these properties.

By default, we set `onChange` to do nothing.  This prevents breaking errors when you forget to include an `onChange` event.

```javascript
Base.propTypes = {
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired
};

Base.defaultProps = {
  onChange: () => {return;}
};
```

### PaymentForm
The `PaymentForm` is our default full PaymentForm.  It wraps all of the other components.

The important part about `PaymentForm` is it is also responsible for tokenizing credit card information using WePay's tokenization library.  This requires a WePay *client_id*.  You also have to signal if this on their *Production* or *Stage* environment.  This is done using the `production` boolean.

It also comes with `onTokenized` and `onError` events.  `onTokenized` is fired when the card tokenization process is successful. `onError` occurs if the tokenization process fails.  You can pass functions to these events to handle these events in a way that makes sense for you and your users.

Typically, after `onTokenized` you would want to send the token to your backend so that you can use WePay's `/checkout/create` endpoint to actually charge the card.  For `onError`, you will want to provide error messages to your users.

**NOTE**:
  We need to examine how to make error handling universal.  It may be that `PaymentForm` can provide a utility function for handling common WePay errors and inserting helpful tooltips to tell the user what to fix.

```javascript
PaymentForm.propTypes = {
  client_id: PropTypes.string.isRequired,
  production: PropTypes.bool,
  name: PropTypes.object,
  email: PropTypes.object,
  onTokenized: PropTypes.func,
  onError: PropTypes.func,
  payment_info: PropTypes.object,
  amount:PropTypes.object,
  ...PaymentForm.propTypes
};

PaymentForm.defaultProps = {
  production: false,
  componentName: 'payment_form',
  payment_info: {},
  name: { first_name: '', last_name: '' },
  email: { email: '' },
  amount: {},
  onError: (err) => {console.log(err);},
  ...PaymentForm.defaultProps
};
```

### Amount
The `Amount` component manages the amount the payer is paying.  You can allow the user to enter an amount in this field (for a Crowdfunding site for example) or make it static (for an e-commerce site for example).

It has built in validation to make sure any user input is actually a number.

```javascript
Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string,
  editable: PropTypes.bool,
  ...Amount.propTypes
};

Amount.defaultProps = {
  currency: 'USD',
  value: '',
  componentName: 'amount',
  editable: false,
  ...Amount.defaultProps
};
```

### Email
This component manages email input.  It has built in validation to confirm that the user input is actually an email.

```javascript
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
```

### Name
The `Name` component is really two input fields, one for `first_name` and one for `last_name`.

If you want to try and merge this into one field, please make sure to raise the value as an object with both `first_name` and `last_name` keys.

```javascript
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
```

### PaymentInfo
The `PaymentInfo` component is a collection of more sub-components.  It is responsible for collecting all fields that are tied to the actual credit card, such as the card number itself, the billing address, CVC, and expiration date.

Most of these components have special formatting and validation that is handled by the [payment](https://github.com/jessepollak/payment) library.

```javascript
PaymentInfo.defaultProps = {
  componentName: 'payment_info',
  address: {
    billing_address: undefined,
    city: undefined,
    country: undefined,
    postal_code: undefined,
    state:undefined
  },
  card_number: { value: '' },
  cvc: { value: '' },
  expiration: { value: '' },
  ...PaymentInfo.defaultProps
};
```

### Card Number
Collects and validates card number.  By "validate" we mean we check to verify that the number *could* be valid.  The actually validity of the card cannot be tested until you call WePays `/checkout/create` endpoint.

```javascript
CardNumber.defaultProps = {
  value:PropTypes.string,
  ...CardNumber.defaultProps
};

CardNumber.defaultProps = {
  componentName: 'card_number',
  value: '',
  ...CardNumber.defaultProps
};
```

### CVC
The CVC is also referred to as CVV or CVV2.

```javascript
CVC.propTypes.value = PropTypes.string;

CVC.defaultProps = {
  componentName: 'cvc',
  value: '',
  ...CVC.defaultProps
};
```

### Expiration
The expiration month and year for the card.  This is collected in a single input box.

```javascript
Expiration.propTypes = {
  value: PropTypes.string,
  ...Expiration.propTypes
};

Expiration.defaultProps = {
  componentName: 'expiration',
  value: '',
  ...Expiration.defaultProps
};
```

### Address
The `Address` component has several sub-components.  Some of the values are extremely advised although, not required, if the payer is based out of the US.

```javascript
Address.propTypes = {
  country: PropTypes.object,
  billing_address: PropTypes.object,
  postal_code: PropTypes.object,
  state: PropTypes.object,
  ...Address.propTypes
};

Address.defaultProps = {
  componentName: 'address',
  country: { value: 'US' },
  billing_address: { value: '' },
  postal_code: { value: '' },
  state: { value: '' },
  ...Address.defaultProps
};
```

### BillingAddress
This is the street address of the payer.  Strongly recommended that this information be collected if the user is based outside of the US.

```javascript
BillingAddress.propTypes = {
  value:PropTypes.string,
  ...BillingAddress.propTypes
};

BillingAddress.defaultProps = {
  componentName: 'billing_address',
  value: '',
  ...BillingAddress.defaultProps
};
```

### City
The city that the payer is based in.  Strongly recommended that this information be collected if the user is based outside of the US.

```javascript
City.propTypes = {
  value: PropTypes.string,
  country: PropTypes.string
};

City.defaultProps = {
  componentName: 'city',
  value: '',
  country: 'US',
  ...City.defaultProps
};
```

### Country
The country that the payer is based in.  This is required for all payers.
```javascript
Country.propTypes ={
  value: PropTypes.string,
  ...Country.propTypess
};

Country.defaultProps = {
  componentName: 'country',
  value: 'US',
  ...Country.defaultProps
};
```

### PostalCode
The postal code (or zip-code) that the payer is based in.  This is required for all payers.

```javascript
PostalCode.propTypes = {
  country: PropTypes.string,
  value: PropTypes.string,
  ...PostalCode.propTypes
};

PostalCode.defaultProps = {
  country: 'US',
  value: '',
  componentName: 'postal_code',
  ...PostalCode.defaultProps
};
```

### State
The state/region that the payer is based in.

```javascript
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
```

## Extending the Form
The default form may not look the way you want it to, but this architecture was built with the idea that you can modify the cosmetic elements, but keep the underlying data flow the same.

`PaymentForm` actually has references to all of it's children component classes, and each of those children component classes has references to their children.  This means all you have to do is import `PaymentForm` and extend it's render function.

For example, if we want to move the `Amount` field to the top of the screen instead of the bottom:

```javascript
// using react-bootstrap
import React, { Component } from 'react';
import {PaymentForm} from 'wepay-react-checkout';
import { Grid, FormGroup, Col, Button } from 'react-bootstrap';

import './App.css';

class PaymentForm2 extends PaymentForm {
  render() {
    const payment_info = this.props.payment_info ? this.props.payment_info : {};
    const name = this.props.name ? this.props.name : {};
    const email = this.props.email ? this.props.email : {};
    const amount = this.props.amount ? this.props.amount: {};

    // move the amount field up top
    return (<div className="App">
      <Grid>
        <form
          className="form-horizontal"
          onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col lg={12}>
              <PaymentForm.Amount
                onChange={this.handleChange}
                {...amount}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col lg={12}>
              <PaymentForm.Name
                onChange={this.handleChange}
                {...name} />
            </Col>
          </FormGroup>
          <Col lg={12}>
            <PaymentForm.Email
              onChange={this.handleChange}
              {...email} />
          </Col>
          <FormGroup>
            <Col lg={12}>
              <PaymentForm.PaymentInfo
                onChange={this.handleChange}
                {...payment_info}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col lg={12}>
              <Button
                type="submit"
                bsStyle="success"
                block>
            Pay
              </Button>
            </Col>
          </FormGroup>
        </form>
      </Grid>
    </div>)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_form: {
        payment_info: {},
        name: {},
        email: {},
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTokenized = this.handleTokenized.bind(this);
  }

  handleChange(name, value) {
    var new_state = this.state;
    new_state[name] = value;
    this.setState(new_state);
  }

  // on success occurs when the card is tokenized
  // at this point, you need to send the tokenized card to your backend server
  // along with the payment information (such as cost)
  handleTokenized(response) {
    // we are going to re-package the info
    // this is all we need to call WePay's /checkout/create
    var payload = {
      credit_card_id:response.credit_card_id,
      amount: this.state.payment_form.amount.value,
      currency: this.state.payment_form.amount.currency,
    };
    alert(`Submit to backend: ${JSON.stringify(payload)}`);
  }
  render() {
    const payment_form = this.state.payment_form ? this.state.payment_form : {};
    // this remains the same except its a different object name
    return(
      <PaymentForm2
        client_id="YOUR APP ID"
        production={false}
        onChange={this.handleChange}
        onTokenized={this.handleTokenized}
        name={payment_form.name}
        email={payment_form.email}
        amount={payment_form.amount}
        payment_info={payment_form.payment_info}
      />
    )
  }
}

export default App;
```

This can be repeated to modify the entire checkout form, but keep the data pipeline the same.  Simply override the `render` method and make sure to pass the appropriate props down to the right components.

## Building Your Own Template
It may be that you want to build a different template than you can extend and override the render methods for **all** components.  You can also add new components that extend `Base` and follow the same data flow rules.

You should create a directory under `components` with the name of your template.  You can then import `PaymentForm` from the `PaymentForm` directory and extend each component and override the `render` method.

## TO-DOs
 - Make setting `required` on components a property instead of hardcoded
 - Improve validation on components
 - Create new templates
