import React, { Component } from 'react';


const ListItem = ({ number }) => (
  <li>{number}</li>
);

const NumberList = ({ numbers }) => (
  <ul>
    {
      numbers.map((number) =>
        <ListItem key={number.toString()} number={number} />
      )
    }
  </ul>
);

const numbers = [1,2,3,4,5,6,7,8];

class ListKeys extends Component{
  render() {
    return (
      <NumberList numbers={numbers} />
    );
  }
}

export default ListKeys;
