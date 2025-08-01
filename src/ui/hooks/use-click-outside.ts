/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect } from 'react';

export function useClickOutside(
  ref: RefObject<any>,
  fnAfterClick: () => void,
  excludedElementsIds?: string[],
  ...someStates: any[]
) {
  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) return;

      const elementId = (event as any).toElement.id;

      if ((excludedElementsIds ?? []).includes(elementId)) return;

      fnAfterClick();
    };

    const handleWindowBlur = () => {
      if (!(document.activeElement instanceof HTMLIFrameElement)) return;

      fnAfterClick();
    };

    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('mousedown', handleClickOut);

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [ref, fnAfterClick, excludedElementsIds, ...someStates]);
}