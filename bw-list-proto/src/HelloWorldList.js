import React, { Component } from 'react';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';


class HelloWorldList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greetings : ['jim', 'Sally', 'Bender']
    };
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }

  // passing down to the child
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld
        key={name}
        name={name}
        removeGreeting={this.removeGreeting}
      />
    ));
  }

  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    );
  }
}

export default HelloWorldList;
