import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Faker from 'faker';
import CoverImage from '../assets/CoverImage';

export const Header = () => {
  return (
    <Row>
      <Col style={{ height: '400px' , padding: 0 }}>
        <CoverImage
          img={Faker.image.city()}
          mainText="Come Travel With Us!"
          subText="Join now!"
        />
      </Col>
    </Row>
  );
};
