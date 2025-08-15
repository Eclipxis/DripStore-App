/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createContext, PropsWithChildren, useContext } from "react";
import { IQueryContext, useQueryContext } from "./use-query-context";

export interface StoreContract {
  queryContext: IQueryContext
}

const StoreContext = createContext<StoreContract>({} as StoreContract);

const Store = ({ children }: PropsWithChildren<{}>) => {
  const queryContext = useQueryContext();

  return (
    <StoreContext.Provider
      value={{
        queryContext
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = <T extends (context: StoreContract) => any, >(selector?: T): ReturnType<T> => {
  const context = useContext(StoreContext);

  if (!selector)
    return context as ReturnType<T>

  return selector(context);
}

export default Store;