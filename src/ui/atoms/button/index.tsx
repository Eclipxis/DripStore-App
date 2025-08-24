/* eslint-disable @typescript-eslint/no-explicit-any */
import { TargetAndTransition, Transition, VariantLabels } from 'motion';
import { CSSProperties } from 'react';
import * as S from './styled';
import { CircularProgress } from '@mui/material';

export type TButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
  styles?: CSSProperties;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition<any> | undefined;
  isLoading?: boolean;
}

const Button = ({ 
  label, 
  variant, 
  onClick,
  styles,
  initial,
  animate,
  transition,
  isLoading = false
}: Props) => {
  return (
    <S.Container
      aria-label={label}
      variant={variant}
      onClick={onClick}
      style={styles}
      initial={initial}
      animate={animate}
      transition={transition}
      disabled={isLoading}
    >

      {isLoading ? <CircularProgress size={25} color='secondary' /> : label}
    </S.Container>
  );
}

export default Button;