import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
    background: 'transparent',
  },
};

export default function ModalSlider({ isOpen, closeModal, images }) {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <div className="relative">
        <div className="modal-header">
          <button onClick={closeModal} type="button" className="btn btn-close-modal">
            <Icon.X size={60} />
          </button>
        </div>
        <div className="modal-body">
          <AwesomeSlider bullets={false}>
            {images.map((item) => (
              <div className="galerry-item grid-item" key={item.id}>
                <img src={`${process.env.API_URL}${item.url}`} alt={item.name} />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </Modal>
  );
}

Modal.setAppElement('#main-content');

ModalSlider.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  images: PropTypes.array,
};
