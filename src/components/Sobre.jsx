import React from 'react';
import styled from 'styled-components';

const EscritorioWrapper = styled.section`
  padding: 60px 20px;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  color: #ffffff;

  & h1 {
    color: #ffffff;
    margin-bottom: 20px;
  }

  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const EscritorioImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Escritorio = () => {
  return (
    <EscritorioWrapper>
      <h1>Sobre o Escritório Cordeiro</h1>
      <p>
        O Escritório de Advocacia Cordeiro tem uma trajetória marcada pela excelência e comprometimento 
        com a justiça. Nossa equipe altamente qualificada atua em diversas áreas do Direito, sempre buscando 
        oferecer o melhor suporte e orientação para nossos clientes.
      </p>
      <p>
        Com anos de experiência, prezamos pela ética, transparência e dedicação, garantindo um serviço 
        de alta qualidade e soluções jurídicas eficazes.
      </p>
      <EscritorioImage 
        src="https://source.unsplash.com/800x500/?law,office" 
        alt="Escritório de Advocacia Cordeiro"
      />
    </EscritorioWrapper>
  );
};

export default Escritorio;
