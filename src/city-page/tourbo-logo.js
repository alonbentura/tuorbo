import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const TourboLogo = () => {
  return (
    <Row marginRight={0}>
      <Col>
        <img
          src={process.env.PUBLIC_URL + '/tourbo_log.png'}
          className="logo"
          alt="logo"
        />
      </Col>
    </Row>
  );
};
