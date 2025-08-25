import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
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
  height: max-content;

  @media (min-width: 550px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 0 4rem;
    height: 100%;
  }
`;

export const WrapperCarousel = styled.div`
  width: 100%;
  height: 60%;

  @media (min-width: 550px) {
    max-width: max-content;
  }

  @media (min-width: 1024px) {
    flex: 1;
    height: 70%;
    border-radius: 1.2rem;
    overflow: hidden;
  }
`;

export const WrapperInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 3rem 1.6rem;

  @media (min-width: 1024px) {
    flex: 1;
    max-width: 50rem;
    justify-content: center;
  }
`;

export const UpdateButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  display: flex;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 4.8rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  display: flex;
`

export const WrapperProductTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const WrapperCategoryAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding-top: 3rem;

  & > div {
    display: flex;
    gap: 0.5rem;
  }

  .price-and-contact {
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      padding: 1rem;

      @media (min-width: 600px) {
        padding: 1rem 2.4rem !important;
      }
    }
  }
`;

export const ProductName = styled.h1`
  font-family: 'Poppins';
  font-size: 3rem;
  font-weight: 600;
  color: #0d0d0d;
`;

export const ProductDescription = styled.p`
  font-size: 1.8rem;
  color: #3f3f3fff;
  text-align: justify;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ProductCategory = styled.p`
  font-size: 2rem;
  color: #0d0d0d;
`;

export const ProductCategoryStrong = styled(ProductCategory)`
  font-weight: 800;
`;

export const ProductPrice = styled.p`
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Poppins';
`;