import { RefObject, useRef, useState } from 'react';
import * as S from './styled'
import { useClickOutside } from '@/ui/hooks/use-click-outside';

interface Props {
  wrapperRef: RefObject<HTMLDivElement | null>
}

const Search = ({ wrapperRef }: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const searchRef = useRef<HTMLDivElement>(null);

  const openInput = () => {
    setFocused(true)
  }

  const closeInput = () => {
    setFocused(false)
    setSearch('')
  }

  const getWidth = () => `${(wrapperRef?.current?.getBoundingClientRect().width ?? 0) - 100}px`;

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
          value={search}
          onFocus={openInput}
          transition={{ duration: 0.3 }}
          initial={{ width: "5rem" }}
          animate={{
            width: !focused ? "5rem" : getWidth(),
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
          initial={{ opacity: 1 }}
          animate={{ opacity: !focused ? 1 : 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1
          }}
          whileHover={{ scale: 0.2 }}
          whileTap={{ scale: 0.75 }}
          onClick={() => {}}
        />
      )}

      {focused && (
        <S.SearchButton
          icon='search.svg'
          initial={{ opacity: 0 }}
          animate={{ opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 0.2 }}
          whileTap={{ scale: 0.75 }}
          onClick={() => {}}
        />
      )}
    </S.Container>
  )
}

export default Search;