import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';

const ResumeContainer = styled.div`
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
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  background: var(--gradient-1);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 245, 255, 0.3);

    &:before {
      opacity: 1;
    }
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const PreviewSection = styled(motion.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  text-align: left;
`;

const PreviewTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const PreviewText = styled.p`
  color: var(--text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Resume = () => {
  return (
    <PageTransition>
      <ResumeContainer>
        <ParticlesBackground />
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Resume
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Download my resume to learn more about my experience, skills, and achievements.
          </Description>
          <DownloadButton
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </DownloadButton>

          <PreviewSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <PreviewTitle>Resume Preview</PreviewTitle>
            <PreviewText>Education: Bachelor's in Computer Science</PreviewText>
            <PreviewText>Experience: 2+ years in Full Stack Development</PreviewText>
            <PreviewText>Skills: React, Node.js, TypeScript, AWS</PreviewText>
            <PreviewText>Languages: JavaScript, Python, Java</PreviewText>
          </PreviewSection>
        </ContentWrapper>
      </ResumeContainer>
    </PageTransition>
  );
};

export default Resume; 