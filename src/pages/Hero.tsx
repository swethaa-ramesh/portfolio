import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticlesBackground from '../components/ParticlesBackground';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem 0;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 0;
    min-height: calc(100vh - 80px);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  gap: 12rem;
  gap: 12rem;

  .text-content {
    transform: translateX(-6rem);
    flex: 1;
  }

  @media (max-width: 1400px) {
    gap: 10rem;
    .text-content {
      transform: translateX(-4rem);
    }
  }

  @media (max-width: 1200px) {
    gap: 8rem;
    .text-content {
      transform: translateX(-2rem);
    }
  }

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
    margin-top: 1rem;
    padding: 0;
    
    .text-content {
      transform: none;
    }
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 600px;
`;

const ProfileImageSection = styled(motion.div)`
  flex-shrink: 0;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(6, 182, 212, 0.4);
  box-shadow: 
    0 0 30px rgba(6, 182, 212, 0.15),
    inset 0 0 20px rgba(6, 182, 212, 0.1);
  position: relative;
  transform: translateX(24rem);
  margin-left: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: 
      0 0 35px rgba(6, 182, 212, 0.2),
      inset 0 0 25px rgba(6, 182, 212, 0.15);
    img {
      transform: scale(1.03);
    }
  }

  @media (max-width: 1400px) {
    transform: translateX(20rem);
    width: 420px;
    height: 420px;
  }

  @media (max-width: 1200px) {
    width: 380px;
    height: 380px;
    transform: translateX(16rem);
  }

  @media (max-width: 968px) {
    width: 340px;
    height: 340px;
    transform: none;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;

const Introduction = styled(motion.div)`
  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    line-height: 1.1;
    
    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.75rem;
    }

    @media (max-width: 480px) {
      font-size: 2.25rem;
      margin-bottom: 1rem;
    }
  }

  .static-text {
    color: #ffffff;
  }

  .gradient-text {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    line-height: 1.7;
    font-weight: 300;
    max-width: 600px;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  background: #06b6d4;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.15);

  &:hover {
    background: #0891b2;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(6, 182, 212, 0.25);
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  a {
    color: #94a3b8;
    font-size: 1.75rem;
    transition: all 0.3s ease;
    opacity: 0.8;

    &:hover {
      color: #06b6d4;
      transform: translateY(-2px);
      opacity: 1;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ParticlesBackground />
      <ContentWrapper>
        <LeftSection>
          <Introduction
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              <span className="static-text">Hey, I'm</span>
              <span className="gradient-text">Swethaa</span>
            </h1>
            <h2>Aspiring Software Engineer | AI & ML Enthusiast</h2>
            <p>
            I'm a CS graduate passionate about building smart, AI-powered applications. I focus on software development and enjoy working on impactful, innovative projects.
            </p>
          </Introduction>

          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ResumeButton 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </ResumeButton>
          </ButtonContainer>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/swethaa-ramesh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://leetcode.com/u/swethaasr2002/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a 
              href="https://www.linkedin.com/in/swethaa-ramesh/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:swethaashanmur23@vt.edu"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </SocialLinks>
        </LeftSection>

        <ProfileImageSection
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/profile.png" alt="Swethaa Ramesh" />
        </ProfileImageSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero; 