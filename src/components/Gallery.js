import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({images, searching, searchTerm}) => {

  return (
      <div className="photo-container">
      <h2>{searchTerm} Results</h2>
      <ul>
        { ! searching && images.length 
        ? images.map(img => <GalleryItem url={img.url} key={img.id} />)
        : <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        }        
      </ul>
    </div>
  )    
}

export default Gallery;