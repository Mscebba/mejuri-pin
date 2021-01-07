import styled, { css } from 'styled-components';

const Hidden = css`
  transform: translateX(-100vw);
`;
const Shown = css`
  transform: translateX(0);
`;

const showDrawer = (props) => {
  return props.show ? Shown : Hidden;
};

export const MobileDrawerContainer = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1.5rem;
  position: absolute;
  height: 100vh;
  width: 80vw;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: 1000;
  transition: all ease-in-out 0.64s;
  ${showDrawer}
`;

export const HelloUser = styled.h1`
  small {
    font-size: 1.3rem;
    display: block;
    overflow: hidden;
    max-width: calc(80vw - 2rem);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-flow: column;

  > * {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px dashed ${({ theme }) => theme.greyLight};
  }
  i {
    font-size: 1.2rem;
  }
`;
