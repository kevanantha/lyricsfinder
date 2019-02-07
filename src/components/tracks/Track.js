import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const Track = (props) => {
  console.log(props)
  return (
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Card
            link
            header={props.track.track_name}
            meta={props.track.artist_name}
            description={[
              'Rick is a genius scientist whose alcoholism and reckless,',
              ' nihilistic behavior are a source of concern for his family.',
            ].join('')}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Track
