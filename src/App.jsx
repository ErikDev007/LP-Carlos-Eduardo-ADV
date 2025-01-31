import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Serviços from './components/Serviços';
import Contato from './components/Contato';
import Footer from './components/Footer';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  background-color: #1f1f1f;
  color: #ffffff;
`;

const App = () => {
  return (
    <Container>
      <Header />

      <Banner/>

      <Serviços/>

      <Sobre/>

      <Contato/>

      <Footer/>
      
    </Container>
  );
};

export default App;
