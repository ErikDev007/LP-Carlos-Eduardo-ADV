import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #1f1f1f;
  margin-top: 40px;
`;

const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: background 0.3s;
  
  &:nth-child(1) {
    background: #25D366;
  }

  &:nth-child(2) {
    background: #007bff;
  }

  &:nth-child(3) {
    background: #dc3545;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const FormWrapper = styled.div`
  margin-top: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background: #111217;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background: #007bff;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Contato = () => {
  return (
    <ContactSection>
      <h2>Entre em Contato</h2>
      <ContactButtons>
        <ContactButton href="https://wa.me/558193283738" target="_blank">WhatsApp</ContactButton>
        <ContactButton href="tel:+558193283738">Ligar</ContactButton>
        <ContactButton href="mailto:dr.carloseduardocordeiro@gmail.com">E-mail</ContactButton>
      </ContactButtons>

      <FormWrapper>
        <h3>Envie-nos uma mensagem</h3>
        <Form>
          <Input type="text" placeholder="Seu Nome" required />
          <Input type="email" placeholder="Seu Email" required />
          <Textarea rows="5" placeholder="Sua Mensagem" required></Textarea>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormWrapper>
    </ContactSection>
  );
};

export default Contato;