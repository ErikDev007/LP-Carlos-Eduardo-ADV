import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.section`
  background: url('https://img.freepik.com/fotos-gratis/close-up-da-estatua-da-lei_23-2151889554.jpg?ga=GA1.1.1802699551.1728265965&semt=ais_hybrid') no-repeat center center;
  background-size: cover;
  margin-top: 96px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(224, 214, 214, 0.493);
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <h1>Defendemos seus direitos com excelência</h1>
    </BannerWrapper>
  );
};

export default Banner;
