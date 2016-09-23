import React, { Component } from 'react';
import './HelloWorld.css'

// defines class of Component
class HelloWorld extends Component {

  // sets initial state of property 'greeting' with value of 'Hello'
  constructor(props) {
    super(props);
    this.state = { greeting: 'Holla' };

    // defines 'this' when using frenchify to use THIS component. weird workaround
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  // function of frenchify that changes greeting to french
  frenchify() {
    this.setState({
      greeting: 'Bonjour'
    });
  }

  // what the component will render
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.frenchify}>
          Frenchify!
        </button>
        <button onClick={this.removeGreeting}>
          Remove Me!
        </button>
      </div>
    );
  }
}

// exports defined class so other files can use it
export default HelloWorld;
