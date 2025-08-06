import { useModals } from '@/ui/context/modals/context';
import * as S from './styled';
import { useRef } from 'react';

const SettingsButton = () => {
  const { open, modals } = useModals((state) => state);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    const modalAlreadyIsOpen = modals.find(modal => modal === 'settings');

    if (!buttonRef || !buttonRef.current || !!modalAlreadyIsOpen)
      return;

    const { top, left } = buttonRef.current.getBoundingClientRect()

    const adjustedTop = `${top - 95}px`
    const adjustedLeft = `${left - 120}px`

    open('settings', { position: { top: adjustedTop, left: adjustedLeft } }) 
  }

  return (
    <S.Button
      id='settings-button'
      ref={buttonRef}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.75 }}
      onClick={openModal}
    />
  )
}

export default SettingsButton;