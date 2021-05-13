import React from 'react';
import PropTypes from 'prop-types';

export default function GlobalLoading({ isLoading }) {
  return (
    isLoading === true && (
      <div className="loading-box">
        <div className="spinner">
          <div className="spinner__item1" />
          <div className="spinner__item2" />
          <div className="spinner__item3" />
          <div className="spinner__item4" />
        </div>
      </div>
    )
  );
}

GlobalLoading.propTypes = {
  isLoading: PropTypes.bool,
};
