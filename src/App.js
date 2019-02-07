import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import TopBar from './components/layouts/TopBar';
import Lyrics from './components/tracks/Lyrics';

import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <TopBar />
            <Switch>
              <Route exact path="/" component={AppContainer} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
