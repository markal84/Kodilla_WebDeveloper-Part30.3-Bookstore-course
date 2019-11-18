import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import Footer from '../../common/Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
    <Footer />
  </div>
);

export default MainLayout;