import { React } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem';
import { ImageGalleryStld } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageGalleryStld>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              srcLarge={image.largeImageURL}
              alt={image.tags}
            />
          );
        })}
      </ImageGalleryStld>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
