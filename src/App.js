import React from 'react';
import Container from 'react-bootstrap/Container';
import { PageBody } from './city-page/page-body';
import { Header } from './city-page/page-header';
import { TourboLogo } from './city-page/tourbo-logo';

export class App extends React.Component {
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <TourboLogo />
        <Header />
        <PageBody />
      </Container>
    );
  }
}
