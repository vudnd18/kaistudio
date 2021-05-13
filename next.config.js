const webpack = require('webpack');
require('dotenv').config();

const path = require('path');

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    URL: process.env.URL,
    LIMIT: process.env.LIMIT,
    LIMIT_SEARCH: process.env.LIMIT_SEARCH,
  },
  images: {
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost'],
    path: '/_next/image',
    // loader: 'default',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules')],
  },
};
