import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Header } from 'semantic-ui-react';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, header } = value;
          //console.log(value)
          return (
            <>
              <Header as='h1'>{header}</Header>
              {track_list.map(item => (
                <Track key={item.track.track_id} track={item.track} />
              ))}
            </>
          )
        }}
      </Consumer>
    )
  }
}

export default Tracks;
