import React from 'react';
import { FooterContainer } from './Footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <section>
        <h4>Support</h4>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Return policy</li>
        </ul>
      </section>
      <section>
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>©2020 react cart</li>
        </ul>
      </section>
    </FooterContainer>
  );
}

export default Footer;
