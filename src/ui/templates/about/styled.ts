import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #201a26;
  padding: 8rem 1.6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 3.2rem;
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

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  border-radius: 1.2rem;
  background-color: #262629;
  padding: 3.2rem;
  margin-top: 3.2rem;
  width: 100%;
  max-width: 89.6rem;
`;

export const StrongDescription = styled.strong`
  font-size: 1.8rem;
  font-weight: 600;
  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: #A1A1AA;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Maps = styled.iframe`
  width: 100%;
  height: 40rem;
  border: 0;
  border-radius: 1.2rem;
`;