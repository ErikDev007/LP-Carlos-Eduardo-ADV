import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 60px 20px;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  color: #ffffff;

  & h2 {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #111217;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  & h3 {
    margin-bottom: 10px;
    color: #ffffff;
  }

  & p {
    font-size: 1rem;
    color: #ffffff;
  }
`;

const Servicos = () => {
  const services = [
    { title: "Direito Civil", img: "https://source.unsplash.com/400x300/?law,civil", desc: "Atuação em casos de responsabilidade civil e contratos." },
    { title: "Direito Trabalhista", img: "https://source.unsplash.com/400x300/?law,work", desc: "Defesa dos direitos trabalhistas de empregados e empregadores." },
    { title: "Direito Penal", img: "https://source.unsplash.com/400x300/?law,crime", desc: "Assessoria em processos criminais e defesa penal." },
    { title: "Direito Empresarial", img: "https://source.unsplash.com/400x300/?law,business", desc: "Consultoria para empresas e contratos corporativos." },
    { title: "Direito Imobiliário", img: "https://source.unsplash.com/400x300/?law,realestate", desc: "Atuação em compra, venda e locação de imóveis." },
    { title: "Direito de Família", img: "https://source.unsplash.com/400x300/?law,family", desc: "Acompanhamento em divórcios, guarda e pensão alimentícia." }
  ];

  return (
    <SectionWrapper>
      <h2>Nossos Serviços</h2>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Card>
        ))}
      </CardsContainer>
    </SectionWrapper>
  );
};

export default Servicos;
