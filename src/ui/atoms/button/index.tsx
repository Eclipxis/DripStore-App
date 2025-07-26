import * as S from './styled';

export type TButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props {
  label: string;
  variant: TButtonVariant;
  fontSize: number;
  onClick: () => void;
}

const Button = ({ 
  label, 
  variant, 
  onClick,
  fontSize
}: Props) => {
  return (
    <S.Container
      aria-label={label}
      fontSize={fontSize}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </S.Container>
  );
}

export default Button;