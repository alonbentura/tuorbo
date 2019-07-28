import React from 'react';
import Image from 'react-bootstrap/Image';
import './CoverImage.css';

const CoverImage = props => {
  const imgStyle = { width: '100%', height: 'auto', object_fit: 'none' };
  return (
    <div className={`cover-image-container`}>
      <Image src={props.img} style={imgStyle} />
      <div className={`over-image-centered-text`}>
        <h1>{props.mainText}</h1>
        <p>{props.subText}</p>
      </div>
    </div>
  );
};

export default CoverImage;
