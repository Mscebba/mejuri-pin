import styled from 'styled-components';
import { WithFade } from 'styles/mixins.styled';
import * as styles from 'styles/styles.styled';

export const DropDownContainer = styled.div`
  display: inline-block;
  margin-left: 0.3rem;
  position: relative;
`;

export const DropDownItemContainer = styled.li`
  color: ${({ theme }) => theme.primaryColor};
  list-style: none;
  padding: 0.3rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: underline;
  }
`;

export const Trigger = styled.span`
  cursor: pointer;
  position: relative;
  z-index: 1000;
`;

export const Menu = styled(WithFade)`
  background: #fff;
  position: absolute;
  margin-top: 5px;
  right: 0;
  min-width: 200px;
  z-index: 1000;
  ${styles.Shadow};

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
  }
`;

export const ItemsContainer = styled.ul`
  border-radius: 5px;
  margin: 0;
  padding: 0;
`;

export const DropDownTitle = styled.h3`
  color: #000;
  padding: 0.5rem 1rem 0;
`;
