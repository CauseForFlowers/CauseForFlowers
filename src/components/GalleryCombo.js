import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../index.css';

const GalleryCombo = ({ photos }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
    }, 5000); // Adjust the interval as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    }
  }, [photos.length]);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const galleryStyle = {
    transform: `translateX(-${slideIndex * (220 + 20)}px)`, // Adjust based on photo width and margin
    zIndex: 0, // Set a base z-index for the gallery
  };

  return (
    <div>
      <div className="gallery-container">
        <div className="arrow-buttons left">
          <button className="arrow-button" onClick={handlePrevClick}>
            <IoIosArrowBack size={100}></IoIosArrowBack> {/* Unicode left arrow */}
          </button>
        </div>
        <div className="gallery" style={galleryStyle}>
          {photos.map((photo, index) => (
            <Link to={`/photo/${index}`} key={index} style={{ textDecoration: 'inherit' }}>
              <Photo src={photo.src} alt={photo.alt} price={photo.price} caption={photo.caption}/>
            </Link>
          ))}
        </div>
        <div className="arrow-buttons right">
          <button className="arrow-button" onClick={handleNextClick}>
            <IoIosArrowForward size={100}></IoIosArrowForward> {/* Unicode right arrow */}
          </button>
        </div>
        <div className="indicators">
          {photos.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === slideIndex ? 'active' : ''}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default GalleryCombo;