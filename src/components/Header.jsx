import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: #111217;
  color: white;
  padding: 23px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  & li {
    display: inline;
  }

  & a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  & a:hover {
    color: #f8b400;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" />
      <NavLinks>
        <li><a href="#home">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
