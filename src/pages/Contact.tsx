import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaEnvelope, FaLinkedin, FaCheckCircle } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 4rem;
  gap: 6rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
    gap: 3rem;
  }
`;

const WelcomeText = styled(motion.div)`
  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
    line-height: 1.2;
    margin-bottom: 1.5rem;
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
  }

  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 500px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text);
    text-decoration: none;
    font-size: 1.1rem;
    padding: 1rem 1.25rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    width: fit-content;

    svg {
      font-size: 1.25rem;
    }

    &:hover {
      background: var(--accent);
      color: var(--background);
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
`;

const FormPanel = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: #18181B;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  justify-self: center;
  grid-column: 2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    grid-column: 1;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Required = styled.span`
  color: var(--accent);
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: var(--accent);
  color: var(--background);
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(42, 42, 42, 0.95);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  svg {
    font-size: 3rem;
    color: #10b981;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  button {
    background: var(--accent);
    color: var(--background);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 229, 255, 0.2);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    try {
      emailjs.init("gzvixw2Ysv3njj8pz");
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Attempting to send email...");
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      console.log("Template params:", templateParams);

      const result = await emailjs.send(
        'service_mndnedb',
        'template_01y6zwq',
        templateParams,
        'gzvixw2Ysv3njj8pz'
      );

      console.log("EmailJS Response:", result);
      
      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`Unexpected status: ${result.status}`);
      }
    } catch (error: any) {
      console.error('Detailed error sending email:', error);
      const errorMessage = error.text || error.message || 'Unknown error occurred';
      console.error('Error message:', errorMessage);
      alert(`Failed to send message: ${errorMessage}. Please try again or contact me directly via LinkedIn.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <ParticlesBackground />
      <Container>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeText>
            <h1>Let's Connect!</h1>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </WelcomeText>
          <SocialLinks>
            <a href="mailto:swethaaramesh2002@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://www.linkedin.com/in/swethaa-ramesh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </SocialLinks>
        </ContactInfo>
        <FormPanel
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title>Send me a message</Title>
          <Subtitle>Have a question or want to work together?</Subtitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>
                Full Name
                <Required>*</Required>
              </Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Email Address
                <Required>*</Required>
              </Label>
              <Input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Message
                <Required>*</Required>
              </Label>
              <TextArea
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </InputGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </FormPanel>
      </Container>
      <AnimatePresence>
        {showSuccess && (
          <SuccessOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SuccessMessage
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <FaCheckCircle />
              </motion.div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon!</p>
              <button onClick={() => setShowSuccess(false)}>Close</button>
            </SuccessMessage>
          </SuccessOverlay>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Contact;