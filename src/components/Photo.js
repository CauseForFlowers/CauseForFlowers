import React from 'react';

const Photo = ({ src, alt, price, caption }) => {
  return (
    <div className="photo">
      <a href="#" className="photo-link">
        <img src={src} alt={alt} />
        <div className='a'>
          {price && <p className="price">{price}</p>}
          {caption && <p className="caption">{caption}</p>}
        </div>
      </a>
    </div>
  );
};

export default Photo;