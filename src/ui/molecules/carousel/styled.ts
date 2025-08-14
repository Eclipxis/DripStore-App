import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 40rem;
`;

export const TrashButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  display: flex;
`;
export const WrapperCarousel = styled.label`
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
    height: 100%;
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