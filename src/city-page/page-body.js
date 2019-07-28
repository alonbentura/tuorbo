import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Faker from 'faker';
import CityBlock from '../assets/CityBlock';
import { data } from '../items';
import { Footer } from '../city-page/page-footer';

export const PageBody = () => {
  return (
    <Row>
      <Col style={{ paddingTop: '50px' }}>
        <CityBlock img={Faker.image.food()} cityName={'Paris'} />
        <Footer data={data} />
      </Col>
    </Row>
  );
};
