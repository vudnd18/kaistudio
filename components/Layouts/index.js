import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

export default function Layouts({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta />
      <Header />
      <main className="mb-auto" id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

Layouts.propTypes = {
  children: PropTypes.object,
};
