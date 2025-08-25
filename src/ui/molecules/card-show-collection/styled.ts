import { poppins } from "@/styles/globalStyled";
import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 30rem;

  background-color: #212124;
  border-radius: 1.2rem;
  border: 1px solid #27272A;

  @media (min-width: 700px) {
    max-width: 31.8rem;
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 33.2rem;
  border-radius: 1.2rem 1.2rem 0rem 0rem;

  & > .swiper {
    min-height: 0rem !important;
    border-radius: 1.2rem 1.2rem 0rem 0rem;
  }

  @media (min-width: 700px) {
    min-height: 31.8rem;
  }
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  @media (min-width: 700px) {
    min-height: 23.2rem;
    justify-content: space-between;
  }
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
  white-space: pre-wrap;
  word-break: break-word;
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
`;

export const SoldOutLabel = styled.div`
  color: #f2f2f2;
  font-size: 4rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  font-family: ${poppins.style.fontFamily};
`;