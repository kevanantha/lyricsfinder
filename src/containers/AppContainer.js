import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Tracks from '../components/tracks/Tracks';

const AppContainer = () => (
  <Container text style={{ marginTop: '7em', marginBottom: '45rem' }}>
    <Header as='h1'>Semantic UI React Fixed Template</Header>
    <Tracks />
  </Container>
)

export default AppContainer;
