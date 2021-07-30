import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({images, searching}) => {

  return (
      <div className="photo-container">
        { !searching && !(!images.length)
          ? <h2>Results</h2>
          : <div className="not-found">
              <h3>No Results Found</h3>
              <p>You search did not return any results. Please try again.</p>
            </div>
        }
      <ul>
        { !searching && images.length && images.map(img => <GalleryItem url={img.url} key={img.id} />)}        
      </ul>
    </div>
  )    
}

export default Gallery;