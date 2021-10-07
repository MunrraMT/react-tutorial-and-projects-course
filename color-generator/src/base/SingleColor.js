import { useState } from 'react';

import { arrayOf, number, string } from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <button
      type="button"
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert">copied to clipboard</p>}
    </button>
  );
};

SingleColor.propTypes = {
  rgb: arrayOf(number).isRequired,
  weight: number.isRequired,
  hex: string.isRequired,
  index: number.isRequired,
};

export default SingleColor;
