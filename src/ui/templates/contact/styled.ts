import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  padding: 8rem 1.6rem;

  background-color: #0d0d0d;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 3.2rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
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

  @media (min-width: 768px) {
    & > br {
      display: none;
    }
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.8rem;
  width: 100%;
  margin-bottom: 4.8rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.2rem;
  background-color: #262629;
  border: 1px solid #27282A80;
  padding: 2.4rem;
  width: 100%;

  & > button {
    width: 100%;
  }

  @media (min-width: 768px) {
    & > button {
      padding: 1rem;
    }
  }
`;

export const Icon = styled.div<{ icon: string }>`
  width: 3.6rem;
  height: 3.6rem;
  background: ${props => `url('/${props.icon}.png')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardTitle = styled.p`
  color: #fafafa;
  font-size: 2rem;
  font-weight: 700;
  
  @media (min-width: 768px) {
    & > br {
      display: none;
    }
  }
`;

export const CardSubtitle = styled.p`
  color: #a1a1aa;
  font-size: 1.4rem;
  padding-top: 0.5rem;
  padding-bottom: 1.6rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;