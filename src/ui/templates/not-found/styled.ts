import { poppins } from "@/styles/globalStyled";
import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.6rem;
`;

export const Wrapper = styled(Container)`
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: ${poppins.style.fontFamily};
  font-weight: 700;
  text-align: center;

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 3rem;
  color: #0d0d0d;
  text-align: center;
`;