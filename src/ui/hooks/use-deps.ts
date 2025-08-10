import { iocContainer } from "@/infra/ioc";
import { useMemo } from "react";

const useDeps = <DepType, >(depName: string): DepType => {
  const dep = useMemo(() => iocContainer.get<DepType>(depName), []);
  return dep;
}

export default useDeps;