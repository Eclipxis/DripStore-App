import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  padding: 8rem 1.6rem;
`;

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  padding: 0rem 3.2rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 900;
  font-family: 'Poppins';

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: #b1b1b1ff;
  text-align: center;
  padding-bottom: 3.2rem;
`;