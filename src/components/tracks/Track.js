import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Track = (props) => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { track } = props;
  console.log(track)
  
  const { music_genre_list } = props.track.primary_genres;
  const genres = music_genre_list.map(item => {
    const { music_genre_name } = item.music_genre;
    if (music_genre_name.length !== 0) {
      return item.music_genre.music_genre_name;
    } else {
      return "Unavailable";
    }
  }).join(", ")

  return (
  <Link to={`lyrics/track/${track.track_id}`}>
    <Card
      style={{ margin: 'auto' }}
      color={randomColor}
    >
      <Card.Content>
        <Card.Header>{track.artist_name}</Card.Header>
        <Card.Meta>
          <span>{track.track_name}</span>
        </Card.Meta>
        <Card.Description>{genres}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='music' />
        {track.album_name}
      </Card.Content> 
    </Card>
  </Link>
  )
}

export default Track
