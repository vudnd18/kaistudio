import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

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
    width: '400px',
  },
};

export default function ResultModal({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="modal-body py-4">
        <p className="text-3xl text-green font-medium text-center">Send Message Success!</p>
        <img src="/images/success.png" alt="success" className="w-36 mx-auto py-10" />
        <div className="text-center">
          <button
            onClick={closeModal}
            type="submit"
            className="bg-green focus:outline-none text-white py-2 px-4"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

ResultModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
