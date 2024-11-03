import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Gallery from './components/Gallery';
import GalleryCombo from './components/GalleryCombo';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import ContactUs from './components/ContactUs';

const photos = [
  { src: 'photos/Assortment1.png',  alt: 'Photo 1', price: 'Design 1', caption: 'Heart - Red and White Roses' },
  { src: 'photos/Assortment2.png',  alt: 'Photo 2', price: 'Design 2', caption: 'Circular - Red and White Roses' },
  { src: 'photos/Assortment3.png',  alt: 'Photo 3', price: 'Design 3', caption: 'Circular - White Lilies, Roses, Peonies, etc.' },
  { src: 'photos/Assortment4.png',  alt: 'Photo 4', price: 'Design 4', caption: 'Circular - White Peonies and Orchids' },
  { src: 'photos/Assortment5.png',  alt: 'Photo 5', price: 'Design 5', caption: 'Assortment - Sunflowers, Orange and White Peonies' },
  { src: 'photos/Assortment6.png',  alt: 'Photo 6', price: 'Design 6', caption: 'Cross - White Lilies, Roses, and Peony' },
  // { src: 'photos/flowers5.png',       alt: 'Photo 6', price: 'Design 6 - $199.99', caption: 'Description...' },
  // { src: 'logo192.png',       alt: 'Photo 7', price: 'Design 7 - $199.99', caption: 'Description...' },
  // Add more photos as needed
];
 
const photos3 = [
  { src: 'photos/test1.png',  alt: 'Photo 1', price: 'Design 1', caption: 'Heart - Red and White Roses' },
  { src: 'photos/test2.png',  alt: 'Photo 2', price: 'Design 2', caption: 'Circular - Red and White Roses' },
  { src: 'photos/test3.png',  alt: 'Photo 3', price: 'Design 3', caption: 'Description...' },
  { src: 'photos/test4.png',  alt: 'Photo 4', price: 'Design 4', caption: 'Description...' },
];

const photosCombo = [
  { src: 'photos/AssortmentCombo1.png',  alt: 'Photo 1', price: 'Design 1', caption: 'Heart - Red and White Roses' },
  { src: 'photos/AssortmentCombo2.png',  alt: 'Photo 2', price: 'Design 2', caption: 'Circular - Red and White Roses' },
  { src: 'photos/AssortmentCombo3.png',  alt: 'Photo 3', price: 'Design 3', caption: 'Circular - White Lilies, Orchids, Roses, Peonies, etc.' },
];

const App = () => {
  return (
    <Router>
      <header className="header">
        <Logo />
        <Navigation />
      </header>
      <Routes>
      { /* <Route path="/" element={<><Gallery photos={photos} photos2={photos2} /> */}
        <Route path="/" element={
          <>
            <Gallery photos={photos} />
            <GalleryCombo photos={photosCombo} />
          </>
        } />
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