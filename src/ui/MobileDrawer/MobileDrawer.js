import React from 'react';
import { BackDrop } from 'ui';

import {
  HelloUser,
  MobileDrawerContainer,
  NavLinks,
} from './MobileDrawer.styled';

function MobileDrawer({ children, onClick, userName, show }) {
  return (
    <>
      <BackDrop show={show} onClick={onClick} />
      <MobileDrawerContainer show={show}>
        {userName ? (
          <HelloUser>Hello {userName && <small>{userName}!</small>}</HelloUser>
        ) : (
          <HelloUser>Hello!</HelloUser>
        )}
        <NavLinks onClick={onClick}>{children}</NavLinks>
      </MobileDrawerContainer>
    </>
  );
}
export default MobileDrawer;
