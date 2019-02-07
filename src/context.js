import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    header: "Top 15 Indonesia",
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=15&country=id&f_has_lyrics=1&apikey=ecef669ac8af054a844b4ef2ca923ecb`
      )
      .then(res => {
        this.setState({ track_list: res.data.message.body.track_list })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
