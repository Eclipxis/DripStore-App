import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  width: 100dvw;
  height: 100dvh;
  padding: 5rem 1.6rem;
  overflow-y: auto;

  @media (min-width: 768px) {
    height: 100dvh;
  }
`;

export const ReturnButton = styled(FaArrowLeft)`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 0 4rem;
  }
`;

export const WrapperCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 100%;
  height: 40%;
  min-height: 40rem;
  background-color: transparent;
  border-radius: 1.2rem;
  border: 5px dashed #239cddff;

  @media (min-width: 768px) {
    margin-top: 0rem;
    flex: 1;
    height: 70%;
    max-width: 50rem;
    border-radius: 1.2rem;
    overflow: hidden;
  }
`;

export const TitleImages = styled.p`
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: #239cddff;
  text-align: center;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  max-width: 45rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    max-width: 30rem;
  }
`

export const WrapperSelectAndSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  resize: vertical;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  box-sizing: border-box;
  line-height: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  padding-bottom: 1rem;
`;