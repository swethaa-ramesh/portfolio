import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding-right: 0;
`;

const DesktopMenu = styled.div`
  display: none;
  gap: 1.5rem;
  margin-right: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--accent)' : 'var(--text)'};
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background: var(--gradient-1);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(42, 42, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  z-index: 100;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0;
`;

const AnimatedLogo = styled(motion.div)`
  font-family: 'Consolas', monospace;
  font-size: 1.2rem;
  color: #06b6d4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: auto;
  padding-left: 1rem;
`;

const CodeBracket = styled(motion.span)`
  color: #06b6d4;
`;

const TypedText = styled(motion.span)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #06b6d4;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'developer';
  const location = useLocation();

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setText('');
        }, 2000);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <AnimatedLogo>
          <CodeBracket
            animate={{ 
              rotate: [-5, 0, 5, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >{`<`}</CodeBracket>
          <TypedText>{text}</TypedText>
          <CodeBracket
            animate={{ 
              rotate: [-5, 0, 5, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >{`/>`}</CodeBracket>
        </AnimatedLogo>

        <DesktopMenu>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </DesktopMenu>

        <NavActions>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavActions>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 