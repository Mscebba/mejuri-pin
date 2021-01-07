import styled from 'styled-components';

import { MaterialIcons } from 'styles/styles.styled';

export const ProductContainer = styled.div`
  margin-bottom: 6rem;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    margin-bottom: 3rem;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.imgContainer};
  position: relative;
  padding-top: 100%;

  &:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImageContainerHover = styled.span`
  opacity: 0;
  ${ImageContainer}:hover & {
    opacity: 1;
    transition: opacity ease-in-out 0.54s;
  }
`;

export const FavoriteIcon = styled.i`
  ${MaterialIcons}
  position: absolute;
  margin-top: 0.4rem;
  right: 0.2rem;
  opacity: 0.15;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: all ease-in-out 0.24s;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    font-size: 1.2rem;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 0.5rem;
`;
export const ProductDescriptionName = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  padding-right: 1.7rem;
  @media screen and (max-width: ${({ theme }) => theme.largeBreakpoint}) {
    font-size: 0.86rem;
    padding-right: 25px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    font-size: 0.8rem;
  }
`;
export const ProductDescriptionPrice = styled.div`
  font-family: ${({ theme }) => theme.sansFamily};
  color: ${({ theme }) => theme.greyMed};
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    padding-left: 0;
  }
`;
