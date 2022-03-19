export const formatPrice = (number) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    number / 100,
  );

export const getUniqueValues = (products, key) => {
  const uniqueList = new Set(products.map((product) => product[key]).flat());

  const uniqueListWithAll = ['all', ...uniqueList];

  return uniqueListWithAll;
};
