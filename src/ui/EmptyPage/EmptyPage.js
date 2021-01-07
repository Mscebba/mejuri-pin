import React from 'react';

import {
  EmptyPageContainer,
  EmptyTitle,
  Icon,
  Description,
} from './EmptyPage.styled';

function EmptyPage({ children, icon, description, title }) {
  return (
    <EmptyPageContainer>
      {icon && <Icon>{icon}</Icon>}
      {title && <EmptyTitle>{title}</EmptyTitle>}
      {description && <Description>{description}</Description>}
      <div>{children}</div>
    </EmptyPageContainer>
  );
}

export default EmptyPage;
