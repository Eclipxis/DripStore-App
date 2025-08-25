import { poppins } from "@/styles/globalStyled";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100dvw;
  height: 100dvh;
  
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f4f4f4;
  z-index: 60;
  padding: 3rem;

  width: 100dvw;
  height: 100dvh;

  @media (min-width: 630px) {
    width: 90%;
    max-width: 500px;
    height: auto;
    max-height: 90dvh;

    border-radius: 1rem;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
  }
`;

export const ReturnButton = styled(FaArrowLeft)`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;

  @media (min-width: 630px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: ${poppins.style.fontFamily};
  padding-bottom: 5rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

export const WrapperTexts = styled.div`
  display: flex;
  background-color: #a5d2f1d7;
  border: 1px solid #0095ffff;
  padding: 1.5rem;
  border-radius: 0.8rem;
`

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 5rem;
  width: 90%;
`

export const Input = styled.input`
  height: 5rem;
  border-radius: 1rem;
  padding: 1.6rem;
  font-size: 1.8rem;
  font-family: ${poppins.style.fontFamily};
  background: #d4d4d4;
  width: 100%;
`;

export const LoginButton = styled.button`
  margin-top: 2rem;
  padding: 1.4rem;
  font-size: 1.8rem;
  font-family: ${poppins.style.fontFamily};
  border: none;
  border-radius: 1rem;
  background-color: #0095ff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007acc;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 55%;
  right: 1.6rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
`;