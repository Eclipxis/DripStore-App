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
  align-items: center;
  gap: 4rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0rem 3.2rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 900;
  font-family: 'Poppins';
  text-align: center;

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: #b1b1b1ff;
  text-align: center;
  padding-bottom: 3.2rem;
`;

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.8rem;
  width: 100%;
  padding: 0rem 1.6rem;
`;