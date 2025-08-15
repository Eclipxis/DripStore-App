import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled(motion.button)`
  position: fixed;
  bottom: 1.3em;
  right: 1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #d4d4d4;
  z-index: 50;

  background-image: url('/settings.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 4rem;
  cursor: pointer;
`;