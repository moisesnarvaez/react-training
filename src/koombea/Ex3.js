// Ponerlo bonito, 

import React, { Component } from 'react';

function Profile(props) {
  return React.createElement(
    'div',
    null,
    props.first_name,
    ' ',
    props.last_name
  )
}

const users = [
  {
    first_name: 'Moises',
    last_name: 'Narvaez'
  },
  {
    first_name: 'David',
    last_name: 'Cabrera'
  }
];

export default function Ex3() {
  return (
    <ul>
      {
        users.map(({ first_name, last_name }) => <li key={ first_name }>
            <TareaItem first_name={first_name} last_name={last_name} />
          </li>)
      }
    </ul>
  )
}


class TareaItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: new Date().toLocaleTimeString()
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    var { first_name, last_name } = this.props
    var { time } = this.state
    return (
      <span>
        {first_name} {last_name}
        <br />
        {time}
      </span>
    )
  }
}
