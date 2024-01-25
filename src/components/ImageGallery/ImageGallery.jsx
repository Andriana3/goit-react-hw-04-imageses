import { React } from 'react';
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
              image={image}
            />
          );
        })}
      </ImageGalleryStld>
    </div>
  );
};
