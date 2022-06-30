export const normalize = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
