import React from 'react';
import Image from 'react-bootstrap/Image';
import './CityBlock.css';

const CoverImage = props => {
  const imgStyle = {
    width: '100%',
    objectFit: 'fill',
    paddingRight: 20,
  };
  return (
    <div className="city-block-container">
      <div className="city-block-spacer" />
      <div className="city-block-text">
        <div className="cityblock-text-span">{props.cityName}</div>
        <div className="sub-text">
          dsfkjhdsfkjdsnfkjdsfndskfndsfns54564a6656555555555555555555555555as4fa4fadk
        </div>
      </div>
      <div className="city-block-image">
        <Image src={props.img} style={imgStyle} />
      </div>
      <div className="city-block-spacer" />
    </div>
  );
};

export default CoverImage;
