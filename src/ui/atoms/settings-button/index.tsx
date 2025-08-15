import * as S from './styled';
import { useRef, useState } from 'react';
import SettingsModal from '@/ui/modals/settings';

const SettingsButton = () => {
  const [openSettings, setIsOpenSettings] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <S.Container>
      {openSettings && <SettingsModal setIsOpenSettings={setIsOpenSettings} />}

      <S.Button
        id='settings-button'
        ref={buttonRef}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.75 }}
        onClick={() => { setIsOpenSettings(true) }}
      />
    </S.Container>
  )
}

export default SettingsButton;