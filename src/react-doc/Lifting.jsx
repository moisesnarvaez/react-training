import React, { Component } from 'react';


const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = ({ celsius }) => (
  celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>
)

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temp = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input 
          type='number'
          value={temp}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Lifting extends Component{
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Lifting;
