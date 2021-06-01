import { Link, useParams } from 'react-router-dom';

import './Header.css';
import './App.css';
import React, { Component } from 'react';

const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link ' : '';
  className += 'headerlink-title';
/* Use this code to show dot below the active header name
<div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
        •
      </div>
*/
  return (
    <Link to={`/${page}`} className={className}>
      {title}
      
    </Link>
  );
};

const Header = () => {
  const page = useParams().page || 'home';

  return (

    
   
    <div className='header'>



     
      <HeaderLink page='home' selected={page === 'home'} />
     
      <HeaderLink page='about' selected={page === 'about'} />
      <HeaderLink page='work' selected={page === 'work'} />
      <HeaderLink page='resume' selected={page === 'resume'} />
      <HeaderLink page='blog' selected={page === 'blog'} />
      <HeaderLink page='contact' selected={page === 'contact'} />

    </div>
  );
};

export default Header;
