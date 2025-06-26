import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  background: var(--background);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  text-align: center;
  color: var(--text);
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    color: #ff6b6b;
    display: inline-flex;
    align-items: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        Swethaa Ramesh © 2025. Made with<span>❤️</span>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 