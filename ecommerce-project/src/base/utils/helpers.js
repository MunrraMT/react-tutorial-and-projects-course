export const formatPrice = (number) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    number,
  );

export const getUniqueValues = () => {};
