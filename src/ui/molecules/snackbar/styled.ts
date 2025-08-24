import styled, { css } from "styled-components";
import { TFeedback } from ".";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const SnackBar = styled.div<{ feedback: TFeedback }>`
  position: fixed;
  left: 12%;
  width: 80%;
  height: max-content;
  min-height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding: 1.2rem;
  border-radius: 0rem 0rem 0.8rem 0.8rem;

  ${(props) => {
    switch(props.feedback) {
      case 'ERROR':
        return css`
          background-color: #f72d2dff;
        `;

      case 'WARNING':
        return css`
          background-color: #f6cd2bff;
        `;

      case 'SUCCESS':
        return css`
          background-color: #3df859ff;

          & > p {
            color: #023f0bff !important;
          }
        `;

      default:
        return css`
          background-color: #3691faff;
        `;
    }
  }}
`;

export const Icon = styled.div<{ feedback: TFeedback }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;

  ${props => props.feedback !== 'LOADING' && css`
    width: 2rem;
    height: 2rem;
  `}

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #f0f0f0;
`;