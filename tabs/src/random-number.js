const randomNumber = (min = 1000, max = 9999) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default randomNumber;