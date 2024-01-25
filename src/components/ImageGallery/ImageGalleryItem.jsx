import { Component, React } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemStld,
  ImageGalleryImageStld,
} from 'components/ImageGallery/ImageGallery.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleModalTungle = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    }
  };

  render() {
    const { src, alt, srcLarge } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageGalleryItemStld>
          <ImageGalleryImageStld
            src={src}
            alt={alt}
            onClick={this.handleModalTungle}
          />
        </ImageGalleryItemStld>
        {isModalOpen && (
          <Modal src={srcLarge} alt={alt} onClick={this.handleModalTungle} />
        )}
      </>
    );
  }
}
