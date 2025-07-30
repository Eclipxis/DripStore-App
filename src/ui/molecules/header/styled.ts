import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.6rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 6.4rem;

  background-color: rgba(13, 13, 13, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const Heading = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  font-family: 'Poppins';

  background: linear-gradient(90deg, #ff9aef, #cd94f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;