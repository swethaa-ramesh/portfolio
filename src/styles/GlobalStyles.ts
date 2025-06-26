import { createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const GlobalStyles = createGlobalStyle`
  :root[data-theme="light"] {
    --primary: ${lightTheme.primary};
    --secondary: ${lightTheme.secondary};
    --accent: ${lightTheme.accent};
    --text: ${lightTheme.text};
    --text-secondary: ${lightTheme.textSecondary};
    --gradient-1: ${lightTheme.gradient1};
    --gradient-2: ${lightTheme.gradient2};
    --card-bg: ${lightTheme.cardBg};
    --card-border: ${lightTheme.cardBorder};
    --shadow: ${lightTheme.shadow};
    --nav-bg: ${lightTheme.navBg};
  }

  :root[data-theme="dark"] {
    --primary: ${darkTheme.primary};
    --secondary: ${darkTheme.secondary};
    --accent: ${darkTheme.accent};
    --text: ${darkTheme.text};
    --text-secondary: ${darkTheme.textSecondary};
    --gradient-1: ${darkTheme.gradient1};
    --gradient-2: ${darkTheme.gradient2};
    --card-bg: ${darkTheme.cardBg};
    --card-border: ${darkTheme.cardBorder};
    --shadow: ${darkTheme.shadow};
    --nav-bg: ${darkTheme.navBg};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--primary);
    color: var(--text);
    line-height: 1.5;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  /* Improved focus styles for accessibility */
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Remove focus outline for mouse users */
  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible),
  input:focus:not(:focus-visible),
  textarea:focus:not(:focus-visible) {
    outline: none;
  }

  /* Fallback for backdrop-filter */
  @supports not (backdrop-filter: blur(10px)) {
    .blur-bg {
      background-color: rgba(18, 18, 18, 0.95) !important;
    }
  }

  /* Improved text rendering */
  @media screen and (-webkit-min-device-pixel-ratio: 2),
         screen and (min-resolution: 2dppx) {
    body {
      -webkit-font-smoothing: subpixel-antialiased;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }

  /* Selection styling */
  ::selection {
    background: var(--accent);
    color: var(--primary);
  }

  /* Improved button reset */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  /* Image rendering */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Link transitions */
  a {
    transition: color 0.2s ease, opacity 0.2s ease;
    text-decoration: none;
    color: inherit;
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles; 