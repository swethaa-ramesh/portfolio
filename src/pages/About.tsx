import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';
import type { FC } from 'react';

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
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: var(--text);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #FF0000, #00E5FF);
    border-radius: 2px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 1.5rem;
  width: 100%;
`;

const ContactText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2rem;
  width: 100%;
  
  a {
    color: #00E5FF;
    text-decoration: underline;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InfoCard = styled(motion.div)`
  background: rgba(2, 6, 23, 0.5);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 229, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 229, 255, 0.2);
    box-shadow: 0 8px 20px rgba(0, 229, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #00E5FF;
  margin-bottom: 1rem;
`;

const CardLabel = styled.h3`
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  opacity: 0.9;
`;

const SkillsSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 2.5rem;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #FF0000, #00E5FF);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillBar = styled(motion.div)`
  margin-bottom: 1.2rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25));
`;

const ProgressBarContainer = styled.div`
  height: 28px;
  background: rgba(2, 6, 23, 0.5);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 229, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: rgba(2, 6, 23, 0.8);
  border-radius: 50px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateZ(0);
  will-change: transform, width;
`;

const SkillName = styled.span`
  font-size: 0.95rem;
  color: #00E5FF;
  padding: 0.4rem 1.2rem;
  z-index: 1;
  position: absolute;
  left: 1rem;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ProgressText = styled.span`
  color: #00E5FF;
  font-size: 0.95rem;
  z-index: 1;
  position: absolute;
  right: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const About: FC = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <Container>
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Swethaa, a Computer Science graduate from Virginia Tech with a specialization in Artificial Intelligence and Machine Learning. I build intelligent, scalable systems that transform complex data into actionable insights.
          </Description>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            What drives me is the opportunity to solve real-world problems through clean architecture and data-driven solutions. I am currently seeking new graduate roles where I can contribute to high-impact products and continue learning from the best.
          </Description>

          <ContactText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            You can reach me at <a href="mailto:swethaashanmur23@vt.edu">swethaashanmur23@vt.edu</a> or connect with me on <a href="https://www.linkedin.com/in/swethaa-ramesh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </ContactText>

          <InfoGrid>
            <InfoCard>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <CardLabel>Lives in</CardLabel>
              <CardText>Washington DC, USA</CardText>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <CardLabel>Education</CardLabel>
              <CardText>
                <span>Virginia Tech - MS, Computer Science</span><br />
                <span>Anna University - B.Tech, Computer Science</span>
              </CardText>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <FaBriefcase />
              </IconWrapper>
              <CardLabel>Looking for</CardLabel>
              <CardText>Full-time opportunities<br />Available from June 2025</CardText>
            </InfoCard>
          </InfoGrid>

          <SkillsSection>
            <SkillsTitle>My Skills</SkillsTitle>
            <SkillsGrid>
              <div>
                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    <SkillName>C++</SkillName>
                    <ProgressText>90%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <SkillName>Python</SkillName>
                    <ProgressText>90%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                    <SkillName>SQL</SkillName>
                    <ProgressText>95%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <SkillName>Machine Learning/AI</SkillName>
                    <ProgressText>90%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>
              </div>

              <div>
                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    <SkillName>PowerBI/Tableau</SkillName>
                    <ProgressText>90%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <SkillName>React</SkillName>
                    <ProgressText>75%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                    <SkillName>Node.js</SkillName>
                    <ProgressText>75%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>

                <SkillBar>
                  <ProgressBarContainer>
                    <ProgressBarFill
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <SkillName>Deep Learning</SkillName>
                    <ProgressText>90%</ProgressText>
                  </ProgressBarContainer>
                </SkillBar>
              </div>
            </SkillsGrid>
          </SkillsSection>
        </ContentWrapper>
      </Container>
    </PageTransition>
  );
};

export default About; 