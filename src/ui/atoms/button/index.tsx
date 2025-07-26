import { CSSProperties } from 'react';
import * as S from './styled';

export type TButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
  styles?: CSSProperties
}

const Button = ({ 
  label, 
  variant, 
  onClick,
  styles
}: Props) => {
  return (
    <S.Container
      aria-label={label}
      variant={variant}
      onClick={onClick}
      style={styles}
    >
      {label}
    </S.Container>
  );
}

export default Button;