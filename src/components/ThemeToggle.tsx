import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled(motion.button)`
  background: none;
  border: 2px solid var(--accent);
  border-radius: 30px;
  width: 50px;
  height: 26px;
  position: relative;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(0, 245, 255, 0.1);
  }
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
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label="Toggle theme"
      initial={false}
      animate={{ backgroundColor: theme === 'dark' ? 'rgba(0, 245, 255, 0.1)' : 'transparent' }}
    >
      <ToggleThumb
        initial={false}
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </ToggleThumb>
    </ToggleButton>
  );
};

export default ThemeToggle; 