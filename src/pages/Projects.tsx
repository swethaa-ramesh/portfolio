import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaImage, FaExternalLinkAlt } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 4rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1400px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  text-align: left;
  
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

const ProjectCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 400px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    .project-image::after {
      transform: scale(1.05);
      opacity: 1;
    }

    .project-title {
      color: var(--accent);
    }
  }
`;

const ProjectImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background-color: rgba(42, 42, 42, 0.95);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'var(--gradient-1)'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    transition: all 0.5s ease;
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text);
  margin: 0;
  font-weight: 600;
  transition: color 0.3s ease;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.08);
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--text);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: var(--background);
  }
`;

const IconOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.8rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: var(--accent);
    transform: scale(1.1);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
  imageLink?: string;
}

const projects: Project[] = [
  
  {
    id: 1,
    title: "Airline Traffic Intelligence System",
    description: "LLaMA-2 powered analytics platform enhancing flight operations through real-time traffic monitoring and intelligent anomaly detection.",
    techStack: ["LLaMA-2", "React.js", "PostgreSQL", "Node.js"],
    imageUrl: "/airline.jpg",
    githubLink: "https://code.vt.edu/cs5934-capstone-project-group-4/aviation_analytics_dashboard"
  },
  {
    id: 2,
    title: "Urban Parking Violations Predictor",
    description: "Machine learning solution for optimizing urban parking enforcement through predictive analytics and violation pattern recognition.",
    techStack: ["Machine Learning", "Python", "Data Visualization"],
    imageUrl: "/parking.jpg",
    githubLink: "https://github.com/swethaa-ramesh/Predicting-Parking-Violations"
  },
  {
    id: 6,
    title: "E-Commerce Dashboard",
    description: "Interactive visualization platform driving sales growth through real-time inventory insights and predictive analytics.",
    techStack: ["Python", "Dash", "Chart.js", "Plotly", "GCP"],
    imageUrl: "/ecommerce.jpg",
    githubLink: "https://github.com/swethaa-ramesh/E-Commerce-Dashboard"
  },
  {
    id: 3,
    title: "Cloud Adoption Strategy",
    description: "Comprehensive AWS migration framework optimizing cost efficiency while enhancing system reliability and scalability.",
    techStack: ["AWS", "Cloud Computing", "CI/CD", "Docker"],
    imageUrl: "/aws.jpg",
    imageLink: "/Architecture Diagram (Hosting Department Website).jpeg",
  },
  {
    id: 4,
    title: "CareerGateway.io UX Analysis",
    description: "Strategic UX research driving engagement through data-driven design improvements and user journey optimization.",
    techStack: ["Figma", "UI Design", "UX Research", "A/B Testing"],
    imageUrl: "/career.png",
    liveLink: "https://www.figma.com/proto/RLfTwy4ZSdb0qbEGo8KLoF/Usability-Project5?type=design&node-id=4-4&t=PosG7BvjBe6sjrAv-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A4"
  },
  {
    id: 5,
    title: "Blood Bank Management",
    description: "Automated healthcare system streamlining blood bank operations with real-time monitoring and enhanced donor engagement.",
    techStack: ["Java", "React.js", "Azure", "MYSQL", "Figma"],
    imageUrl: "/blood.jpg",
    githubLink: "https://github.com/swethaa-ramesh/Blood-Bank-System"
  },
  {
    id: 7,
    title: "NIRF Rank Transformer",
    description: "ML-driven ranking analysis platform providing strategic recommendations through automated data processing and insights.",
    techStack: ["Python", "Machine Learning", "Web Scraping"],
    imageUrl: "/logo.jpg",
    imageLink: "/nirf_cert.jpg"
  },
  {
    id: 8,
    title: "A Deep Dive into Machine Learning Fundamentals",
    description: "Blog series exploring ML concepts, algorithms, and math fundamentals with hands-on code examples and practical implementations.",
    techStack: ["Machine Learning", "Python", "Data Visualization"],
    imageUrl: "/machine.jpg",
    liveLink: "https://swethaa-ramesh.github.io/ML_FinalAssignment_CS-5805/"
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <ProjectsContainer>
        <ParticlesBackground />
        <ContentWrapper>
          <Title>My Projects</Title>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectImage imageUrl={project.imageUrl}>
                  <IconOverlay>
                    {project.githubLink && (
                      <IconLink 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub />
                      </IconLink>
                    )}
                    {project.liveLink && (
                      <IconLink 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                      >
                        <FaExternalLinkAlt />
                      </IconLink>
                    )}
                    {project.imageLink && (
                      <IconLink 
                        href={project.imageLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View Project Image"
                      >
                        <FaImage />
                      </IconLink>
                    )}
                  </IconOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle className="project-title">{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ContentWrapper>
      </ProjectsContainer>
    </PageTransition>
  );
};

export default Projects; 