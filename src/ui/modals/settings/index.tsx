import { useModals } from '@/ui/context/modals/context'
import * as S from './styled'
import { useClickOutside } from '@/ui/hooks/use-click-outside';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import SessionUtils from '@/utils/session';

interface Props {
  position: { top: string, left: string }
}

const SettingsModal = ({ position }: Props) => {
  const { open, closeAll } = useModals((state) => state);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickOutside(modalRef, closeAll, ['settings-button'])

  const getItems = () => {
    if (!!SessionUtils.getSession()) {
      return [
        {
          label: 'Página inicial',
          onClick: () => {
            closeAll();
            router.replace('/');
          }
        }
      ]
    }

    return [
      {
        label: 'Login',
        onClick: () => {
          closeAll();
          open('sign-in');
        }
      },
      {
        label: 'Página inicial',
        onClick: () => {
          closeAll();
          router.replace('/');
        }
      }
    ];
  }

  return (
    <S.Container
      ref={modalRef}
      top={position.top} 
      left={position.left} 
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