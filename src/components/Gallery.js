import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../index.css';

const Gallery = ({ photos }) => {
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

    <div className='table, centered'>
      <div className='row'>
        <div className='column'>
          <div style={{paddingBottom: '50px'}}>
        
            <div class="flip-card" style={{paddingTop: '20px', paddingBottom: '50px'}}>
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Deposit</p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ fontSize: 24}}>
                      The flowers are free for rental, but there is a $500 deposit for each flower you want to borrow.
                    </p>
                  </div>
                </div>
            </div>
            <div style={{padding: '25px'}}></div>
            <div class="flip-card" style={{paddingTop: '20px', paddingBottom: '50px'}}>
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Beautiful</p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ fontSize: 24}}>
                    {/* I know many people have kind hearts.  We give the 25% donation to the family or the charity of their choice.  But we want to do the funeral in honor of the deceased, so we want to combine the two purposes.   
                    We want to beautify the funeral with all of the lovely flowers plus a significant portion of the purchase price goes to a good cause.  God bless you!  Please help me change the current tradition and start a new way of doing it.  Let’s embrace a new change! */}
                    </p>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
      <div style={{padding: '50px'}}></div>
      <div className='row'>
        <div className='column'>
          <div  style={{paddingBottom: '50px'}}>
                  
              <div class="flip-card" style={{paddingTop: '20px', paddingBottom: '50px'}}>
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Money</p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ fontSize: 24}}>
                    {/* Real flowers are much more expensive to purchase.  It can range from $100 to $300 for a funeral.  When you purchase artificial flowers, the cost ranges from $100 to $200.  
                    And remember, 25% of that will go to a good cause when I return to take back the flowers!  This kills two birds with one stone.  I feel sure the deceased would be glad to know they had a chance to give something back. */}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{padding: '25px'}}></div>
              <div class="flip-card" style={{paddingTop: '20px', paddingBottom: '50px'}}>
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">Real Versus Artificial Flowers</p>
                  </div>
                  <div class="flip-card-back">
                    <p style={{ fontSize: 24}}>
                    {/* Why do I use artificial flowers?  I use artificial flowers because they can be reusable.  Real flowers expire after only seven days, but artificials won’t.  When I come back to the Funeral Home to take them back, 
                    I will distribute a check for 25% of the value of the purchase.  It can be used for themselves or the family.  Some families need help to offset the costs of the funeral, and others can donate it to any charity of their choice. */}
                    </p>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default Gallery;