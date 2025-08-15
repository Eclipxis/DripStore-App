import { RefObject, useRef, useState } from 'react';
import * as S from './styled'
import { useClickOutside } from '@/ui/hooks/use-click-outside';
import useIsMobile from '@/ui/hooks/use-is-mobile';
import { useModals } from '@/ui/context/modals/context';
import { useStore } from '@/ui/context/store';

interface Props {
  wrapperRef: RefObject<HTMLDivElement | null>
}

const Search = ({ wrapperRef }: Props) => {
  const { search, setSearch } = useStore(({ queryContext }) => queryContext);
  const [focused, setFocused] = useState<boolean>(false);

  const { open, modals } = useModals((state) => state);

  const searchRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLButtonElement>(null);

  const isMobile = useIsMobile();

  const openModal = () => {
    const modalAlreadyIsOpen = modals.find(modal => modal === 'filter');

    if (!filterRef || !filterRef.current || !!modalAlreadyIsOpen || focused)
      return;

    const { top, left } = filterRef.current.getBoundingClientRect()

    const adjustedTop = `${top + 30}px`
    const adjustedLeft = `${left + 35}px`

    open('filter', { position: { top: adjustedTop, left: adjustedLeft } }) 
  }

  const openInput = () => {
    setFocused(true)
  }

  const closeInput = () => {
    setFocused(false)
  }

  const getWidthByRef = () => `${(wrapperRef?.current?.getBoundingClientRect().width ?? 0) - 50}px`;

  const getWidthInput = () => {
    if (isMobile && focused)
      return getWidthByRef();

    if (!isMobile && focused)
      return "32rem"

    return "5rem";
  }

  useClickOutside(searchRef, closeInput)

  return (
    <S.Container ref={searchRef}>
      <S.WrapperInput>
        {!focused && (
          <S.InputIcon
            src="/input-search.svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}

        <S.SearchInput
          autoFocus={false}
          value={focused ? search : ''}
          onFocus={openInput}
          transition={{ duration: 0.3 }}
          initial={{ width: "5rem" }}
          animate={{
            width: getWidthInput(),
            cursor: !focused ? "pointer" : "text",
          }}
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
      </S.WrapperInput>

      {!focused && (
        <S.SearchButton
          icon='filter.svg'
          ref={filterRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: !focused ? 1 : 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.75 }}
          onClick={openModal}
        />
      )}
    </S.Container>
  )
}

export default Search;