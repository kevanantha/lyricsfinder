import React from 'react'
import { Card } from 'semantic-ui-react'

const Track = (props) => {
  console.log(props)
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
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
    <Card
      link
      style={{ margin: 'auto' }}
      color={randomColor}
      header={props.track.track_name}
      meta={props.track.artist_name}
      description={`Genre: ${genres}`}
    />
  )
}

export default Track
