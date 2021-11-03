export const isValidImage = (imageUrl) =>
  imageUrl === '' ? './icons8-no-image-100.png' : imageUrl;

export const isValidDescription = (description) =>
  typeof description !== 'string' ? 'no description' : description;

export const isValidPortfolioUrl = (description) =>
  typeof description !== 'string' ? 'no portfolio' : description;
