import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value)
          return <div>test</div>
        }}
      </Consumer>
    )
  }
}

export default Tracks;
