# PropTypes

As your app scales, you can catch a lot of bugs with type checking. For some applications, you can use JavaScript extensions like Flow or TypeScript to type check your entire application. 

If you don’t use those, React has some built-in type checking abilities. To run type checking on the props for a component, you can assign the special ```propTypes``` property:

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  render() {
    return (
      <h1>Your cart has {this.props.quantity} items</h1>
    );
  }
}

Checkout.propTypes = {
  quantity: PropTypes.number
};

```

```PropTypes``` allows a range of validators that can be used to check if the data you receive is the correct type of data. In the above example, we are using ```PropTypes.number``` that checks if the incoming value is a ```integer```. When an invalid prop is passed down a warning will be shown in the console. ```PropTypes``` is only checked in development mode for performance reasons. 