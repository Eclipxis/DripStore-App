import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #27272a;
  padding: 3.2rem 1.6rem;
`;

export const LogoTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  font-family: 'Poppins';

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const LogoSubtitle = styled.p`
  color: #a1a1aa;
  font-size: 1.6rem;
  padding: 1.6rem;
  text-align: center;
`;

export const WrapperCopyright = styled.div`
  display: flex;
  align-items: center;
`;