"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Next Watch</h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart
          style={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
        />
      </nav>
    </header>
  );
};

export default Header;
