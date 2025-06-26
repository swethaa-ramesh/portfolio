import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styled from 'styled-components';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
    },
  },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <PageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </PageContainer>
  );
};

export default PageTransition; 