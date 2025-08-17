import styled from "styled-components";

export const WrapperFeedback = styled.div<{ darkmode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: 2px solid ${props => props.darkmode ? '#0d0d0d' : '#b1b1b1ff'};
  padding: 1.8rem;
  border-radius: 0.8rem;

  & > p {
    color: ${props => props.darkmode ? '#0d0d0d' : '#b1b1b1ff'};
  }
`

export const FeedbackText = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: #b1b1b1ff;
  text-align: center;
`