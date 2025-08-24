/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiHelpCircle } from 'react-icons/fi';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

export type TFeedback = 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS' | 'LOADING';

interface Props {
  message: string;
  feedback: TFeedback;
  autoHide?: number;
}

const icons: Record<TFeedback, any> = {
  INFO: <FiHelpCircle color='#f0f0f0' />,
  WARNING: <FiAlertTriangle color='#f0f0f0' />,
  ERROR: <FiAlertCircle color='#f0f0f0' />,
  SUCCESS: <FiCheckCircle color='#023f0bff' />,
  LOADING: <CircularProgress color='inherit' />
}

const SnackBar = ({ message, feedback, autoHide }: Props) => {
  const [hide, setHide] = useState<number>(autoHide ?? 5000);

  useEffect(() => {
    setInterval(() => setHide(old => old - 1000), 1000)
  }, []);

  return (hide > 0) && (
    <S.Container>
      <S.SnackBar feedback={feedback}>
        <S.Icon feedback={feedback}>
          {icons[feedback]}
        </S.Icon>

        <S.Text>
          {message}
        </S.Text>
      </S.SnackBar>
    </S.Container>
  )
}

export default SnackBar;