import React from 'react';

import { TitleContainer } from './Title.styled';

function Title({ children }) {
  return <TitleContainer>{children}</TitleContainer>;
}

export default Title;
