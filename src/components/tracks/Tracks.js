import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Header, Grid } from 'semantic-ui-react';
import Loader from 'react-loader-spinner';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, header } = value;
          return (
            <>
              {track_list.length === 0 || track_list === undefined ?
                <Header textAlign='center'>
                  <Loader 
                    type='Bars'
                    color='#212121'
                    height={70}
                    width={70}
                  />
                </Header>
                :
                <>
                  <Header as='h1' textAlign='center' style={{ marginBottom: 25 }}>{header}</Header>
                  <Grid columns={3}>
                    <Grid.Row>
                      {track_list.map(item => (
                        <Grid.Column style={{ marginBottom: 30 }} key={item.track.track_id}>
                          <Track track={item.track} />
                        </Grid.Column>
                      ))}
                    </Grid.Row>
                  </Grid>
                </>
              }
            </>
          )
        }}
      </Consumer>
    )
  }
}

export default Tracks;
