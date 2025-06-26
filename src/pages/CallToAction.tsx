import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  text-align: center;
  z-index: 1;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const GlowingButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text);
  background: var(--gradient-1);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: var(--gradient-2);
    z-index: -1;
    border-radius: 32px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);

    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const buttonVariants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const CallToAction = () => {
  return (
    <PageTransition>
      <CTAContainer>
        <ParticlesBackground />
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Create Something Amazing Together
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </Description>
          <GlowingButton
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </GlowingButton>
        </ContentWrapper>
      </CTAContainer>
    </PageTransition>
  );
};

export default CallToAction; 