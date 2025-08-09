import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 28rem;
  min-width: 30rem;
  height: 58rem;
  cursor: pointer;

  background-color: transparent;
  border-radius: 1.2rem;
  border: 5px dashed #239cddff;

  @media (min-width: 700px) {
    max-width: 31.8rem;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: #239cddff;
  text-align: center;
`;