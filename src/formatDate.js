'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // write code here
  const separator = toFormat[3];
  const part = date.split(fromFormat[3]);
  const slovar = {
    YYYY: part[0],
    MM: part[1],
    DD: part[2],
  };
  let newDate = '';

  for (let i = 0; i < toFormat.length; i++) {
    if (toFormat[i] === 'DD') {
      newDate += slovar['DD'];
    } else if (toFormat[i] === 'MM') {
      newDate += slovar['MM'];
    } else if (toFormat[i] === 'YYYY') {
      newDate += slovar['YYYY'];
    } else if (toFormat[i] === 'YY') {
      const year = slovar['YYYY'];
      const shortYear = parseInt(year, 10) % 100;

      const formattedYear = shortYear < 30 ? '20' + shortYear : '19' + shortYear;
      newDate += formattedYear;
    }

    if (i < toFormat.length - 1) {
      newDate += separator;
    }
  }

  return newDate;
}

module.exports = formatDate;
