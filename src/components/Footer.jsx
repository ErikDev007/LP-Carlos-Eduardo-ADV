import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1919;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  max-width: 50%;

  & p {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const MapWrapper = styled.div`
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 200px;
  border: 0;
  allowfullscreen: "";
  loading: "lazy";
`;

const Credits = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
  
  & a {
    color: inherit;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContactInfo>
        <h3>Contato</h3>
        <p><strong>WhatsApp:</strong> (81) 9328-3738</p>
        <p><strong>Telefone:</strong> (81) 9328-3738</p>
        <p><strong>Email:</strong> dr.carloseduardocordeiro@gmail.com</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
      </ContactInfo>
      <MapWrapper>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373631531694!3d-37.81627977975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df2b3f7d7%3A0x5045675218ce6e0!2sMelbourne%2C%20Austr%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1622834774514!5m2!1spt-BR!2sbr" />
      </MapWrapper>
      <Credits>
        &copy; {currentYear} - Todos os direitos reservados para Carlos Eduardo Cordeiro Advogados.
        <br/>
        Criado por <a href='https://eriklima.vercel.app'>Erik Lima.</a>
      </Credits>
    </FooterContainer>
  );
};

export default Footer;
