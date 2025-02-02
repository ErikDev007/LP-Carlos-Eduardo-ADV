import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: #111217;
  color: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  padding-right: 50px;

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

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #111217;
    padding: 20px 0px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  margin-right: 35px;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" />
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <NavLinks isOpen={menuOpen}>
        <li><a href="#home">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
