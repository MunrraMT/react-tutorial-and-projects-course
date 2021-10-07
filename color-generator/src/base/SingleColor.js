/* eslint-disable */
import { useState } from 'react';

import { arrayOf, number, string } from 'prop-types';

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

SingleColor.propTypes = {
  rgb: arrayOf(number).isRequired,
  weight: number.isRequired,
  hex: string.isRequired,
  index: number.isRequired,
};

export default SingleColor;
