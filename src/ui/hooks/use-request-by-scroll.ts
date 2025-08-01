/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef, useState } from "react"

export const useRequestByScroll = (initialPerPage?: number) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [perPage, setPerPage] = useState<number>(initialPerPage ?? 5);
  const [lastItem, setLastItem] = useState<number>(0);

  const lastElementRef = useCallback((node: HTMLElement | null, index: number) => {
    if (observer.current)
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && index !== lastItem) {
        setPerPage(oldPerPage => oldPerPage + 5);
        setLastItem(index);
      }
    });

    if (node) observer.current.observe(node);
  }, [lastItem]);

  const updateDuplicates = (array: any[], key: string) => {
    return array.reduce((arr, item) => {
      const index = arr.findIndex((i: any) => i[key] === item[key]);

      if (index !== -1) {
        arr[index] = item;
      } else {
        arr.push(item);
      }

      return arr;
    }, []);
  }

  return { perPage, lastElementRef, updateDuplicates }
}