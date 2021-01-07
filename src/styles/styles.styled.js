import { css } from 'styled-components';

export const Shadow = css`
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const SidePadd = css`
  @media screen and (min-width: ${({ theme }) => theme.largeBreakpoint}) {
    padding: 3rem 4vw;
  }
  @media screen and (max-width: ${({ theme }) => theme.largeBreakpoint}) {
    padding: 3rem 4vw;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    padding: 3rem 2vw;
  }
  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    padding: 2rem 1rem;
  }
`;

export const HeaderPadd = css`
  @media screen and (min-width: ${({ theme }) => theme.mediumBreakpoint}) {
    padding: 0 3rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    padding: 0 2vw;
  }
  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    padding: 0 1rem;
  }
`;

export const MaterialIcons = css`
  font-family: ${({ theme }) => theme.icons};
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
`;
