export const normalize = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

normalize(560555550); // '1,000'
