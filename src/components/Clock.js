import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.update = setInterval(
      () => {this.setState({ time: new Date() });},
      1*1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
