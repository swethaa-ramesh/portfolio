import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled(motion.button)`
  background: rgba(0, 245, 255, 0.1);
  border: 2px solid var(--accent);
  border-radius: 30px;
  width: 50px;
  height: 26px;
  position: relative;
  cursor: default;
  padding: 2px;
  display: flex;
  align-items: center;
`;

const ToggleThumb = styled(motion.div)`
  width: 18px;
  height: 18px;
  background: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 12px;
  margin-left: 24px;
`;

const ThemeToggle = () => {
  useTheme(); // Keep the hook to maintain context subscription

  return (
    <ToggleButton
      aria-label="Dark theme indicator"
      initial={false}
    >
      <ToggleThumb>
        🌙
      </ToggleThumb>
    </ToggleButton>
  );
};

export default ThemeToggle; 