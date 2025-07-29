import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;

  background-image: url('/hero-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0rem 1.6rem;
  height: 100%;

  background: linear-gradient(45deg, hsl(240 3.7% 15.9%), hsl(270 95% 75% / .1));
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: #e07fec;
  font-family: sans-serif;
  padding-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: #b1b1b1ff;
  text-align: center;
  padding-bottom: 3.2rem;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ScrollAnimation = styled(motion.div)`
  position: absolute;
  bottom: 4rem;

  background: url('/arrow-down.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 4rem;
  height: 4rem;
`