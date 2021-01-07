import React from 'react';

import { MainLayoutContainer, Navigation, Content } from './MainLayout.styled';

function MainLayout({ leftNav, mainContent, children, empty }) {
  return (
    <MainLayoutContainer>
      <Navigation>{leftNav}</Navigation>
      <Content>
        {mainContent}
        {children}
      </Content>
    </MainLayoutContainer>
  );
}

export default MainLayout;
