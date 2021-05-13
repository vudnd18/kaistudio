import React from 'react';
import PropTypes from 'prop-types';
import '../public/styles/scss/style.scss';
import '../public/styles/css/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  pageProps: PropTypes.any,
};
