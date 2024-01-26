import { Overlay, ModalStl } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ src, alt, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClick);
    return () => window.removeEventListener('keydown', onClick);
  });

  return (
    <Overlay onClick={onClick}>
      <ModalStl>
        <img src={src} alt={alt} />
      </ModalStl>
    </Overlay>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
