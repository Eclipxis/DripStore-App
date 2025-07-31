/* eslint-disable @typescript-eslint/no-explicit-any */
import { TargetAndTransition, Transition, VariantLabels } from 'motion';
import { CSSProperties } from 'react';
import * as S from './styled';

export type TButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
  styles?: CSSProperties
  initial?: boolean | TargetAndTransition | VariantLabels
  animate?: boolean | TargetAndTransition | VariantLabels
  transition?: Transition<any> | undefined
}

const Button = ({ 
  label, 
  variant, 
  onClick,
  styles,
  initial,
  animate,
  transition
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
    >
      {label}
    </S.Container>
  );
}

export default Button;