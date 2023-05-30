import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <main>
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default Layout;
