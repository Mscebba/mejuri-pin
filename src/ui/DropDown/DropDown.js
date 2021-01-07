import React, { useState, useEffect, useRef } from 'react';
import { BackDrop } from 'ui';

import {
  DropDownContainer,
  Trigger,
  DropDownItemContainer,
  DropDownTitle,
  Menu,
  ItemsContainer,
} from './DropDown.styled';

export const DropDownItem = ({ children, onClick }) => {
  return (
    <DropDownItemContainer
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </DropDownItemContainer>
  );
};

export const DropDown = ({ dropdownLink, dropdownTitle, children }) => {
  const [show, setShow] = useState(false);
  const node = useRef();

  function handleClickOutside(e) {
    if (node.current.contains(e.target)) {
      return;
    }
    // outside click
    setShow(false);
    document.body.removeAttribute('style');
  }

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <BackDrop show={show} />
      <DropDownContainer ref={node}>
        <Trigger
          onClick={() => {
            setShow(!show);
            document.body.style.overflow = 'hidden';
          }}
        >
          {dropdownLink}
        </Trigger>
        {show && (
          <Menu>
            {dropdownTitle && <DropDownTitle>{dropdownTitle}</DropDownTitle>}
            <ItemsContainer
              onClick={() => {
                setShow(!show);
                document.body.removeAttribute('style');
              }}
            >
              {children}
            </ItemsContainer>
          </Menu>
        )}
      </DropDownContainer>
    </>
  );
};
