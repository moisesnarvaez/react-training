import React, { Component } from 'react';

class ToggleButton extends Component{
  constructor(props) {
    super(props);
    this.state = { currentStatus: false };
  }

  toggleState = () => {
    this.setState(prevState =>({
      currentStatus: !prevState.currentStatus
    }))
  }

  render() {
    return (
      <button onClick={this.toggleState}>
        { this.state.currentStatus ? 'ON' : 'OFF' }
      </button>
    );
  }
}

class HandingEvents extends Component {
  render() {
    return (
      <div>
        <h1>Change me! </h1>
        <ToggleButton />
      </div>
    );
  }
}

export default HandingEvents;
