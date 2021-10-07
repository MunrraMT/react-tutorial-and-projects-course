/* eslint-disable */
import { useState, useRef, useEffect } from 'react';

import { FaBars, FaTwitter } from 'react-icons/fa';

import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <section className="nav-center">
        <header className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </header>

        <section className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
          </ul>
        </section>

        <ul className="social-icons">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
