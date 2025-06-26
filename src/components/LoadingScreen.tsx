import styled from 'styled-components';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingText = styled(motion.h2)`
  color: var(--accent);
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const containerVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

interface LoadingScreenProps {
  text?: string;
}

const LoadingScreen = ({ text = 'Loading...' }: LoadingScreenProps) => {
  return (
    <LoadingContainer
      variants={containerVariants}
      exit="exit"
    >
      <LoadingSpinner size="large" />
      <LoadingText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {text}
      </LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen; 