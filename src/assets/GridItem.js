import React from 'react';
import Image from 'react-bootstrap/Image';
import './GridItem.css';
import Col from 'react-bootstrap/Col';

export const GridItem = props => {
  return (
    <div style={styles.gridItemContainer}>
      <Image src={props.city.img} style={styles.img} />
      <span className="grid-text">{props.city.city}</span>
      <div style={{ fontSize: 10, color: 'lightGrey', textAlign: 'end' }}>
        Per person
      </div>
      <div style={styles.priceText}>$ {props.city.Price}</div>
    </div>
  );
};

const styles = {
  gridItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    paddingRight: 20,
    width: '20%',
  },
  img: {
    width: '100%',
    height: 150,
    marginTop: 10,
    marginBottom: 20,
    objectFit: 'fill',
  },
  priceText: {
    color: '#4fc7ce',
    textAlign: 'end',
    fontWeight: 'bold',
    fontSize: 20,
  },
};

export default GridItem;
