import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  width: 16rem;
  height: 12rem;
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  background-color: #f4f4f4;
  border-radius: 0.6rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.2), 
              0 0.5rem 1rem rgba(0, 0, 0, 0.15),
              0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);

  z-index: 40;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div<{ isLastItem: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${props => !props.isLastItem && css`
    border-bottom: 1px solid #777777ff;
  `}
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #0d0d0d;
  text-align: center;
`;