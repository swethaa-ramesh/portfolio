import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoadingScreen: (text?: string) => void;
  hideLoadingScreen: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [loadingText, setLoadingText] = useState<string | undefined>(undefined);

  // Simulate initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const showLoadingScreen = (text?: string) => {
    setLoadingText(text);
    setIsLoading(true);
  };

  const hideLoadingScreen = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, showLoadingScreen, hideLoadingScreen }}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen text={loadingText} />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 