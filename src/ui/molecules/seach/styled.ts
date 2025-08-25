import { poppins } from "@/styles/globalStyled";
import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 30;
`;

export const WrapperInput = styled.div`
  position: relative;
  flex: 1;
`;

export const InputIcon = styled(motion.img)`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 3.5rem;
  height: 3.5rem;
  pointer-events: none;
  opacity: 0.5;
`;

export const SearchInput = styled(motion.input)`
  height: 5rem;
  border-radius: 1rem;
  padding: 1.6rem;
  font-size: 1.8rem;
  font-family: ${poppins.style.fontFamily};
  background: #d4d4d4;
  box-shadow:  2rem 2rem 6rem #b4b4b4,
              -2rem -2rem 6rem #f4f4f4;
`;

export const SearchButton = styled(motion.button)<{ icon: string }>`
  min-width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: #d4d4d4;
  box-shadow:  2rem 2rem 6rem #b4b4b4,
              -2rem -2rem 6rem #f4f4f4;

  background-image: ${props => `url(/${props.icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 4rem;
  cursor: pointer;
`;