import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpinnerContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Spinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid var(--accent);
  border-top: 3px solid transparent;
  border-radius: 50%;
`;

const spinTransition = {
  repeat: Infinity,
  ease: "linear" as const,
  duration: 1
};

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner = ({ size = 'medium' }: LoadingSpinnerProps) => {
  const dimensions = {
    small: '24px',
    medium: '40px',
    large: '56px'
  };

  return (
    <SpinnerContainer>
      <Spinner
        role="status"
        aria-label="Loading"
        style={{ width: dimensions[size], height: dimensions[size] }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 