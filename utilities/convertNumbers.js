// Easily convert number to em, rem or px.
const em = (px) => `${px / 16}em`;
const rem = (px) => `${px / 16}rem`;
const px = (num) => `${num}px`;
const remKey = (px) => ({ [px]: `${px / 16}rem` });
const pxKey = (num) => ({ [num]: `${num}px` });

module.exports = { em, rem, px, remKey, pxKey };
