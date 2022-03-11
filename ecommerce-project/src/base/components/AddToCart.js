/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { string, number, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ id, stock, colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleClick = (color) => {
    setMainColor(color);
  };

  const increase = () => {
    if (amount === stock) return;
    setAmount((prev) => prev + 1);
  };

  const decrease = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((color, index) => (
            <button
              type="button"
              className={mainColor === color ? 'color-btn active' : 'color-btn'}
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => handleClick(color)}
            >
              {mainColor === color ? <FaCheck /> : ''}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

AddToCart.propTypes = {
  id: string.isRequired,
  stock: number.isRequired,
  colors: arrayOf(string).isRequired,
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
