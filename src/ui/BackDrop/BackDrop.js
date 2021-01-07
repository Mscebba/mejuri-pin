import React from 'react';
import { BackDropContainer } from './BackDrop.styled';

function BackDrop({ show, onClick }) {
  return show && <BackDropContainer onClick={onClick} />;
}

export default BackDrop;
