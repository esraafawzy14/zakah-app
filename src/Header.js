import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.querySelector('header')?.classList.toggle('dark', theme === 'dark');
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.toggle('dark', theme === 'dark'));
    document.querySelector('.theme-toggle')?.classList.toggle('dark', theme === 'dark');
  }, 
  [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>احسب زكاتك</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <Link to="/Main">
            <li><a href="#home">الرئيسية</a></li>
          </Link>
          <li><a href="#contact">تواصل معنا</a></li>
          <li>
            {theme === 'light' ? (
              <FaMoon size={24} onClick={toggleTheme} />
            ) : (
              <FaSun size={24} onClick={toggleTheme} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
