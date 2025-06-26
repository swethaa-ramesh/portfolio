import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

// Initialize EmailJS
emailjs.init('gzvixw2Ysv3njj8pz');

const ContactContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeText = styled(motion.div)`
  h1 {
    font-size: 2.5rem;
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
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }

    svg {
      font-size: 1.25rem;
      color: #06b6d4;
    }
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  color: #ffffff;
  padding-left: 10%;
  text-align: left;

  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
  }
`;

const FormPanel = styled(motion.div)`
  width: 100%;
  max-width: 450px;
  background: #18181B;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  justify-self: center;
  grid-column: 2;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    grid-column: 1;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
`;

const Subtitle = styled.p`
  margin: 0 0 2.5rem 0;
  color: #71717a;
  font-size: 0.95rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::after {
    content: '*';
    color: #06b6d4;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #27272a;
  background: #27272a;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus, &:hover {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.1);
    background: #18181b;
  }

  &::placeholder {
    color: #52525b;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #27272a;
  background: #27272a;
  color: #ffffff;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus, &:hover {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.1);
    background: #18181b;
  }

  &::placeholder {
    color: #52525b;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: #06b6d4;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 0.75rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #0891b2;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled(motion.div)`
  color: #10b981;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled(motion.div)`
  color: #ef4444;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Swethaa',
      };

      await emailjs.send(
        'service_mndnedb', // Service ID
        'template_01y6zwq', // Template ID
        templateParams,
        'gzvixw2Ysv3njj8pz' // Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <PageTransition>
      <ParticlesBackground />
      <ContactContainer>
        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>Let's Connect!</h1>
            <p>Have an exciting opportunity or project in mind? I'm always eager to explore new challenges and collaborations. Whether you're looking for a dedicated developer or want to discuss tech innovations, I'd love to hear from you!</p>
          </WelcomeText>
          <SocialLinks>
            <a href="mailto:swethaashanmur23@vt.edu">
              <FaEnvelope />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/swethaa-ramesh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
          </SocialLinks>
        </ContactInfo>
        
        <FormPanel
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Get in Touch</Title>
          <Subtitle></Subtitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Write your message here."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </InputGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status === 'success' && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
            {status === 'error' && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {errorMessage}
              </ErrorMessage>
            )}
          </Form>
        </FormPanel>
      </ContactContainer>
    </PageTransition>
  );
};

export default Contact;