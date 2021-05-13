import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BackgroundSlider from 'react-background-slider';
import Meta from '../components/Layouts/Meta';

export default function Home({ images }) {
  return (
    <>
      <Meta />
      <header className="">
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-end items-end py-6 md:space-x-10">
              <Link href="/project">
                <a className="pl-6">
                  <img className="h-10 w-auto sm:h-20" src="/images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div>
        {images.length > 0 && <BackgroundSlider images={images} duration={5} transition={2} />}
      </div>
    </>
  );
}

Home.propTypes = {
  images: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_URL}/banners?status=1`);
  const banners = res.data;
  let images = [];
  if (banners && banners.length > 0) {
    images = banners.map((banner) => {
      return `${process.env.API_URL}${banner.image.url}`;
    });
  }
  return {
    props: {
      images,
    },
  };
}
