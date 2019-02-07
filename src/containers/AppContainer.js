import React from 'react'
import { Container } from 'semantic-ui-react'
import Tracks from '../components/tracks/Tracks';

const AppContainer = () => (
  <Container text style={{ marginTop: '7em', marginBottom: '45rem' }}>
    <Tracks />
  </Container>
)

export default AppContainer;
