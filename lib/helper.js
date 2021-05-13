export const makePaginate = (total, currentPage, slug) => {
  const pageSize = process.env.LIMIT;
  const totalPage = Math.ceil(total / pageSize);
  return {
    totalPage,
    currentPage,
    total,
    path: `${process.env.URL}/${slug}`,
  };
};

export const generateLinkPost = (post, categories) => {
  let url = '';
  if (post && categories && categories.length > 0) {
    const parent = categories.find((item) => item.id === post.category_id.parent_id);
    if (parent) {
      url = `/${parent.slug}/${post.category_id.slug}/${post.slug}`;
    }
  }
  return url;
};

export const getImageThumbnail = (image) => {
  if (image && image.formats && image.formats.thumbnail) {
    return `${process.env.API_URL}${image.formats.thumbnail.url}`;
  }
  return `${process.env.API_URL}${image.url}`;
};

export const getImageMedium = (image) => {
  if (image.formats && image.formats.medium) {
    return `${process.env.API_URL}${image.formats.medium.url}`;
  }
  return `${process.env.API_URL}${image.url}`;
};

export const getImageSmall = (image) => {
  if (image.formats && image.formats.small) {
    return `${process.env.API_URL}${image.formats.small.url}`;
  }
  return `${process.env.API_URL}${image.url}`;
};

export const sliceWords = (words, length) => {
  if (words) {
    const regex = /(<([^>]+)>)/gi;
    const wordsNoneTag = words.replace(regex, '');
    const wordsSlice = wordsNoneTag.slice(0, length);
    return `${wordsSlice} ...`;
  }
  return '';
};

export const formatPrice = (price) => {
  price = Math.trunc(price);
  return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

export const parseOnlyNumber = (expression) => expression.replace(/[^0-9\\-]+/g, '');
