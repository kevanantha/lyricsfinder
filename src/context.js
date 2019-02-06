import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { id: 1, track_name: 'asd' },
      { id: 2, track_name: 'qwe' },
    ],
    header: "Top 10 Songs",
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
