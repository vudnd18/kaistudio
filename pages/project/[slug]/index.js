/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import QS from 'qs';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Layouts from '../../../components/Layouts';
import axiosService from '../../../lib/axiosService';
import ModalSlider from './components/ModalSlider';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { getImageSmall } from '../../../lib/helper';

export default function ProjectDetail({ project }) {
  console.log(project);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Layouts>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:grid grid-cols-4 gap-6">
            <div className="">
              <h3 className="text-2xl">{project.name}</h3>
              <p className="text-sm my-5 md:mt-10  break-words text-gray">{project.description}</p>
            </div>
            <div className="col-span-3">
              <Gallery>
                <Masonry
                  breakpointCols={3}
                  columnClassName="my-masonry-grid_column"
                  className="my-masonry-grid"
                >
                  {project &&
                    project.images.length > 0 &&
                    project.images.map((item) => (
                      <Item
                        original={`${process.env.API_URL}${item.url}`}
                        thumbnail={getImageSmall(item)}
                        key={item.id}
                        width={item.width}
                        height={item.height}
                      >
                        {({ ref, open }) => (
                          <div className="galerry-item grid-item">
                            <img
                              ref={ref}
                              onClick={open}
                              src={getImageSmall(item)}
                              alt={item.name}
                              className="w-full"
                            />
                          </div>
                        )}
                      </Item>
                    ))}
                </Masonry>
              </Gallery>
            </div>
          </div>
        </div>
        <ModalSlider
          isOpen={isOpenModal}
          closeModal={() => setIsOpenModal(false)}
          images={project.images}
        />
      </div>
    </Layouts>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const optionEncode = { encode: false };
  const query = QS.stringify(
    {
      _where: {
        slug,
      },
    },
    optionEncode,
  );
  const res = await axiosService.get(`${process.env.API_URL}/projects?${query}`);
  return {
    props: {
      project: res.data[0],
    },
  };
}
