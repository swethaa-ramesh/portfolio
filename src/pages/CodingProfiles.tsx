import type { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaGithub } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--text);
`;

const ProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProfileCardWrapper = styled(motion.a)`
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
`;

const ProfileIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--accent);
`;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--accent);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const ProfileDescription = styled.p`
  text-align: center;
  color: var(--text-secondary);
`;

interface ProfileCardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
  stats: Array<{ value: string; label: string }>;
}

const ProfileCard = ({ title, description, link, icon, stats }: ProfileCardProps) => {
  return (
    <ProfileCardWrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <ProfileIcon>{icon}</ProfileIcon>
      <ProfileName>{title}</ProfileName>
      <ProfileStats>
        {stats.map((stat, index) => (
          <Stat key={index}>
            <StatNumber>{stat.value}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </ProfileStats>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileCardWrapper>
  );
};

interface ProfileData {
  id: number;
  name: string;
  description: string;
  link: string;
  icon: ReactNode;
  stats: Array<{ value: string; label: string }>;
}

const profiles: ProfileData[] = [
  {
    id: 1,
    name: 'GitHub',
    description: 'Open source contributions and personal projects',
    link: 'https://github.com/yourusername',
    icon: <FaGithub size={40} />,
    stats: [
      { value: '50+', label: 'Repositories' },
      { value: '100+', label: 'Contributions' },
    ],
  },
];

const CodingProfiles = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <Container>
        <Title>Coding Profiles</Title>
        <ProfilesGrid>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              title={profile.name}
              description={profile.description}
              link={profile.link}
              icon={profile.icon}
              stats={profile.stats}
            />
          ))}
        </ProfilesGrid>
      </Container>
    </PageTransition>
  );
};

export default CodingProfiles; 