import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemStld,
  ImageGalleryImageStld,
} from 'components/ImageGallery/ImageGallery.styled';

export const ImageGalleryItem = ({ src, alt, srcLarge }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalTungle = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <>
      <ImageGalleryItemStld>
        <ImageGalleryImageStld
          src={src}
          alt={alt}
          onClick={handleModalTungle}
        />
      </ImageGalleryItemStld>
      {isModalOpen && (
        <Modal src={srcLarge} alt={alt} onClick={handleModalTungle} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcLarge: PropTypes.string.isRequired,
};
