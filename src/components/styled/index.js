import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.muted};
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.card};
  }
`;

export const Section = styled.section`
  padding: 5rem 0;
`;

export const HeroSection = styled(Section)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card};
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const HighlightIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
`;

export const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 28rem;
  width: 100%;
`;

export const Footer = styled.footer`
  padding: 3rem 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  text-align: center;
`;

