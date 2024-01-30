import React from 'react';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onImageClick}>
      <img className="ImageGalleryItem-image" src={imageUrl} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
