import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 33.4rem;
  height: 100%;

  background-color: #212124;
  border-radius: 1.2rem;
  border: 1px solid #27272A;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 33.2rem;
  background-color: #fff;
  border-radius: 1.2rem 1.2rem 0rem 0rem;
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

export const NameDetails = styled.p`
  color: #fafafa;
  font-size: 2rem;
  font-weight: 700;
`;

export const DescriptionDetails = styled.p`
  color: #a1a1aa;
  font-size: 1.4rem;
  padding-top: 0.5rem;
`;

export const PriceDetails = styled.p`
  font-size: 2.4rem;
  font-weight: 700;

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const MoreDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.6rem;
`;