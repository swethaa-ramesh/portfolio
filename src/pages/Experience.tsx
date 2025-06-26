import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  color: var(--text);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  letter-spacing: -0.5px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #FF0000, #00E5FF);
    border-radius: 2px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem 0;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: calc(100% - 100px);
    background: linear-gradient(180deg, 
      var(--accent) 0%, 
      rgba(0, 229, 255, 0.5) 50%,
      rgba(0, 229, 255, 0.1) 100%
    );
    opacity: 0.7;

    @media (max-width: 768px) {
      left: 1rem;
    }
  }
`;

const ExperienceCard = styled(motion.div)<{ $isLeft: boolean }>`
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: calc(50% - 2.5rem);
  margin: ${props => props.$isLeft ? '0 auto 2.5rem 0' : '0 0 2.5rem auto'};
  position: relative;
  transform: translateZ(0);
  will-change: transform;
  transition: all 0.2s ease-out;
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 8px 30px rgba(0, 229, 255, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--accent);
    border-radius: 50%;
    top: 2rem;
    ${props => props.$isLeft ? 'right: -2.8rem' : 'left: -2.8rem'};
    box-shadow: 0 0 10px var(--accent);
    z-index: 2;

    @media (max-width: 768px) {
      left: -1.5rem;
      width: 8px;
      height: 8px;
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin: 0 0 2rem 2rem;
    padding: 1.25rem;
  }
`;

const CardWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  
  &:hover {
    text-decoration: none;
  }
`;

const CompanyTitle = styled.h2`
  font-size: 1.4rem;
  background: linear-gradient(90deg, var(--accent), #00E5FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem;
  font-weight: 600;
  letter-spacing: -0.3px;
  transition: all 0.2s ease;
`;

const Role = styled.h3`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.3rem;
  opacity: 0.9;
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
`;

const Duration = styled.div`
  font-size: 0.85rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0.9;

  &:before {
    content: '🗓';
    font-size: 0.9rem;
  }
`;

const Location = styled.div`
  font-size: 0.85rem;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0.7;

  &:before {
    content: '📍';
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  color: var(--text);
  line-height: 1.5;
  margin-bottom: 1rem;
  opacity: 0.85;
  font-size: 0.9rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const TechTag = styled.span`
  background: rgba(0, 229, 255, 0.06);
  color: var(--accent);
  padding: 0.25rem 0.7rem;
  border-radius: 12px;
  font-size: 0.75rem;
  border: 1px solid rgba(0, 229, 255, 0.15);
  transition: all 0.2s ease;
  letter-spacing: 0.2px;

  &:hover {
    background: rgba(0, 229, 255, 0.1);
    border-color: var(--accent);
  }
`;

const experienceData = [
  {
    id: 1,
    company: "Emotive Computing LLC",
    companyUrl: "https://www.emotivecomputingplatform.com/",
    role: "Software Engineer",
    duration: "May 2024 - June 2025",
    location: "Virginia, United States",
    description: "Developed an AI-powered content recommendation system for neurodivergent users, using a RAG pipeline with FAISS and a fine-tuned DistilBERT model. Built a scalable FastAPI backend on AWS for real-time, context-aware multimedia search, leading to a 67% boost in user engagement and 30% lower latency.",
    technologies: ["RAG", "DistilBERT", "FAISS", "AI", "FastAPI", "AWS", "Python"]
  },
  {
    id: 2,
    company: "Commonwealth Cyber Initiative (CCI)",
    companyUrl: "https://cyberinitiative.org/",
    role: "Teaching Assistant",
    duration: "Jan 2024 - May 2024",
    location: "Virginia, United States",
    description: "Mentored students in cybersecurity, covering cryptography, network security, and ethical hacking through hands-on labs and real-world simulations. Helped improve conceptual understanding by 40% and guided them in building secure systems and analyzing attack scenarios.",
    technologies: ["Cryptography", "Network Security", "Cybersecurity","Communication"]
  },
  {
    id: 3,
    company: "Vodafone",
    companyUrl: "https://www.vodafone.com/",
    role: "Machine Learning Engineer",
    duration: "Sep 2022 - Jan 2023",
    location: "Chennai, India",
    description: "Automated insight generation from 1.4 TB of user complaint data using SQL and Python, cutting manual analysis by 70%. Built an NLP framework with LDA to extract key themes from feedback, boosting service delivery efficiency by 45%.",
    technologies: ["Python", "NLP", "SQL", "Machine Learning","Data Mining","Analytics"]
  },
  {
    id: 4,
    company: "KRION CONSULTING",
    companyUrl: "https://krionconsulting.com/",
    role: "Data Science Intern",
    duration: "Apr 2022 - Aug 2022",
    location: "Chennai, India",
    description: "Built a GRU-based deep learning model in TensorFlow to extract insights from 10K+ user reviews, driving product improvements and a 20% increase in engagement. Conducted A/B testing and behavioral analysis to optimize user flows, reducing bounce rates by 18%.",
    technologies: ["TensorFlow", "Deep Learning", "A/B Testing", "Python","Design Thinking"]
  },
  {
    id: 5,
    company: "KrypC",
    companyUrl: "https://krypc.com/",
    role: "Software Engineer Intern",
    duration: "Jun 2021 - Sep 2021",
    location: "Bangalore, India",
    description: "Enhanced smart contract functionality on the KrypCore platform by implementing optimized templates, reducing deployment time by 28%. Built and documented a RESTful API layer with 5 endpoints for external integrations. Led code reviews, wrote 30+ unit tests (70% coverage), and resolved 10+ bugs to ensure a stable, high-quality release.",
    technologies: ["Software Development", "REST API", "Testing","Automation"]
  }
];

const Experience = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <Container>
        <ContentWrapper>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Work Experience
          </Title>
          <TimelineContainer>
            {experienceData.map((exp, index) => (
              <CardWrapper
                key={exp.id}
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExperienceCard
                  $isLeft={index % 2 === 0}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CompanyTitle>{exp.company}</CompanyTitle>
                  <Role>{exp.role}</Role>
                  <MetaInfo>
                    <Duration>{exp.duration}</Duration>
                    <Location>{exp.location}</Location>
                  </MetaInfo>
                  <Description>{exp.description}</Description>
                  <TechStack>
                    {exp.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ExperienceCard>
              </CardWrapper>
            ))}
          </TimelineContainer>
        </ContentWrapper>
      </Container>
    </PageTransition>
  );
};

export default Experience; 