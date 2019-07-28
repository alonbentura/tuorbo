import React from 'react';
import Row from 'react-bootstrap/Row';
import { GridItem } from '../assets/GridItem';
import '../assets/CityBlock.css';

export const Footer = props => {
  const data = props.data;
  const mappedData = data.map(d => {
    return <GridItem city={d} />;
  });
  return (
    <div style={styles.container}>
      <div className="city-block-spacer" />
      <div style={styles.gridContainer}>{mappedData}</div>
      <div className="city-block-spacer" />
    </div>
  );
};
const styles = {
  container: { display: 'flex', flexDirection: 'row', marginBottom: 10 },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 7,
    justifyContent: 'start',
  },
};
