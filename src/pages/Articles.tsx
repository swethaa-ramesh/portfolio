import { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';

const ArticlesContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ArticlesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ArticleCard = styled(motion.article)`
  background: rgba(42, 42, 42, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ArticleImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const ArticleExcerpt = styled.p`
  color: var(--text);
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
  opacity: 0.6;
  font-size: 0.9rem;
`;

const ReadMoreLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications with modern architecture patterns.",
    imageUrl: "https://source.unsplash.com/random/800x600?react",
    date: "March 15, 2024",
    readTime: "8 min read",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    imageUrl: "https://source.unsplash.com/random/800x600?coding",
    date: "March 10, 2024",
    readTime: "6 min read",
    link: "#",
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    excerpt: "A comprehensive guide to using TypeScript effectively in your projects.",
    imageUrl: "https://source.unsplash.com/random/800x600?typescript",
    date: "March 5, 2024",
    readTime: "10 min read",
    link: "#",
  },
  {
    id: 4,
    title: "Modern CSS Techniques",
    excerpt: "Advanced CSS techniques and tricks for creating stunning user interfaces.",
    imageUrl: "https://source.unsplash.com/random/800x600?css",
    date: "March 1, 2024",
    readTime: "7 min read",
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Articles = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <PageTransition>
      <ArticlesContainer>
        <ParticlesBackground />
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Articles
          </Title>
          <ArticlesGrid
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {articles.map((article) => (
              <ArticleCard key={article.id} variants={cardVariants}>
                <ArticleImage imageUrl={article.imageUrl} />
                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ArticleMeta>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </ArticleMeta>
                  <ReadMoreLink
                    href={article.link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read More →
                  </ReadMoreLink>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </ContentWrapper>
      </ArticlesContainer>
    </PageTransition>
  );
};

export default Articles; 