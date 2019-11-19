import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import Footer from '../../common/Footer/Footer';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ({ children }) => ( 
  <div>
    <PageContainer>
      <MainMenu />
      {children}
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;