import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Link from 'next/link';
import QS from 'qs';
import { getImageSmall } from '../../lib/helper';
import Layouts from '../../components/Layouts';

export default function Projet({ projects }) {
  return (
    <Layouts>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects &&
              projects.length > 0 &&
              projects.map((project) => (
                <div className="project" key={project.id}>
                  <Link href={`/project/${project.slug}`}>
                    <div className="image-wrapper">
                      <img src={getImageSmall(project.image)} alt="project" />
                      <div className="caption">
                        <div className="caption-text">
                          <h4 className="text-white text-base md:text-xl px-4 py-2">
                            {project.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layouts>
  );
}

Projet.propTypes = {
  projects: PropTypes.array,
};

export async function getServerSideProps() {
  const optionEncode = { encode: false };
  const query = QS.stringify(
    {
      _where: {
        status: 1,
      },
      _sort: 'created_at:DESC',
    },
    optionEncode,
  );
  const res = await axios.get(`${process.env.API_URL}/projects?${query}`);
  const projects = res.data;
  return {
    props: {
      projects,
    },
  };
}
