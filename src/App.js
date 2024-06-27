import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Gallery from './components/Gallery';
import Photo from './components/Photo';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import ContactUs from './components/ContactUs';

const photos = [
  { src: 'photos/flowers1.png',  alt: 'Photo 1', price: 'Design 1 - $199.99', caption: 'Description...' },
  { src: 'photos/flowers2.png',  alt: 'Photo 2', price: 'Design 2 - $199.99', caption: 'Description...' },
  { src: 'photos/flowers3.png',  alt: 'Photo 3', price: 'Design 3 - $199.99', caption: 'Description...' },
  { src: 'photos/flowers4.png',  alt: 'Photo 4', price: 'Design 4 - $199.99', caption: 'Description...' },
  { src: 'photos/flowers5.png',  alt: 'Photo 5', price: 'Design 5 - $199.99', caption: 'Description...' },
  // { src: 'photos/flowers5.png',       alt: 'Photo 6', price: 'Design 6 - $199.99', caption: 'Description...' },
  // { src: 'logo192.png',       alt: 'Photo 7', price: 'Design 7 - $199.99', caption: 'Description...' },
  // Add more photos as needed
];

const App = () => {
  return (
    <Router>
      <header className="header">
        <Logo />
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Gallery photos={photos} />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      
      
      <footer >
        <div style={{color:'white'}}>
          kkha
        </div>
        
      </footer>
    </Router>
  );
};

const PhotoDetails = () => {
  // TODO: Implement details page
  const { id } = useParams();
  const photo = photos[id];
  console.log(photos[id])
  if (!photo) {
    return <div>Error: Photo not found</div>;
  }

  return (
    <div>
      <h2>{photo.alt}</h2>
      <img src={photo.src} />
    </div>

  );
};



export default App;