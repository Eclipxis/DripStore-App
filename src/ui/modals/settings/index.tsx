import * as S from './styled'
import { useClickOutside } from '@/ui/hooks/use-click-outside';
import { Dispatch, SetStateAction, useRef } from 'react';
import { useRouter } from 'next/navigation';
import SessionUtils from '@/utils/session';
import { useModals } from '@/ui/context/modals/context';

interface Props {
  setIsOpenSettings: Dispatch<SetStateAction<boolean>>
}

const SettingsModal = ({ setIsOpenSettings }: Props) => {
  const { open } = useModals((state) => state);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeModal = () => setIsOpenSettings(false);

  useClickOutside(modalRef, closeModal, ['settings-button'])

  const getItems = () => {
    const items = [
      {
        label: 'Página inicial',
        onClick: () => {
          closeModal();
          router.replace('/');
        }
      }
    ]

    if (!!SessionUtils.getSession()) {
      items.push({
        label: 'Sair',
        onClick: () => {
          closeModal();
          SessionUtils.removeSession();
          window.location.reload();
        }
      })
    } else {
      items.push({
        label: 'Login',
        onClick: () => {
          closeModal();
          open('sign-in');
        }
      })
    }

    return items;
  }

  return (
    <S.Container
      ref={modalRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {getItems().map((item, index) => (
        <S.Item 
          key={`${item.label}-${index}`}
          isLastItem={(getItems().length - 1) === index}
          onClick={item.onClick}
        >
          <S.Text>
            {item.label}
          </S.Text>
        </S.Item>
      ))}
    </S.Container>
  )
}

export default SettingsModal;