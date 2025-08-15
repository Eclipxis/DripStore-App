/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from "react";
import { useModals } from "./context";
import SignInModal from "@/ui/modals/sign-in";
import FilterModal from "@/ui/modals/filter";

export type ModalIds = 'sign-in' | 'filter';

const ListModals: Record<ModalIds, any> = {
  "sign-in": SignInModal,
  filter: FilterModal
};

const Modals = () => {
  const { modalId, data } = useModals((state) => state);

  if (!modalId) return;

  return createElement(ListModals[modalId], data);
};

export default Modals;