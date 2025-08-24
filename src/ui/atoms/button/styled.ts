import styled, { css } from "styled-components";
import { TButtonVariant } from ".";
import { motion } from "motion/react";

export const Container = styled(motion.button)<{
  variant: TButtonVariant
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.4rem;
  cursor: pointer;
  color: #0D0D0D;
  min-width: 15rem;

  ${props => {
    switch (props.variant) {
      case "ghost":
        return css`
          background: transparent;
          border: none;
          color: #ffffff;
          font-weight: 500;
          cursor: pointer;
          padding: 0.8rem 1.6rem;
          transition: color 0.3s ease;

          &:hover {
            color: #ff66cc;
          }
        `;

      case "secondary":
        return css`
          background-color: #0D0D0D;
          color: #ff66cc;
          border: 0.2rem solid #ff66cc;
          border-radius: 1.2rem;
          font-weight: 600;
          font-size: 1.8rem;
          transition: 
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;

          &:hover {
            background-color: #ff66cc;
            color: #0D0D0D;
            transform: scale(1.03);
          }
        `;

      default:
        return css`
          border-radius: 1rem;
          background: linear-gradient(90deg, #b388ff, #ff80ab);
          font-weight: 500;
          font-size: 1.4rem;
          box-shadow: 0 0 8px rgba(179, 136, 255, 0.5);
          transition: 
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;

          &:hover {
            background: linear-gradient(90deg, #c299ff, #ff99c2);
            transform: scale(1.05);
            box-shadow: 0 0 16px rgba(255, 128, 171, 0.8), 0 0 24px rgba(179, 136, 255, 0.6);
          }
        `;
    }
  }}
`;