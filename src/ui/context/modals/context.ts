/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { ModalIds } from '.';

interface useModalsProps {
  modalId: ModalIds | null;
  data?: any;
  modals: ModalIds[];
  open: (modalId: ModalIds, data?: any) => void;
  goTo: (modalId: ModalIds, data?: any) => void;
  close: (modalId?: ModalIds) => void;
  closeAll: () => void;
}

export const useModals = create<useModalsProps>((set) => ({
  modalId: null,
  data: {} as any,
  modals: [],
  closeAll: () => set({ modalId: null, modals: [], data: {} }),
  open: (modalId: ModalIds, data?: any) =>
    set((props) => {
      props.modals.push(modalId);
      return { modalId, modals: props.modals, data };
    }),
  close: (modalId?: ModalIds) =>
    set((props) => {
      if (modalId) {
        props.modals = props.modals.filter((_modalId) => _modalId !== modalId);
        return { modals: props.modals };
      }

      props.modals.pop();
      return { modals: props.modals };
    }),
  goTo: (modalId: ModalIds, data?: any) =>
    set((props) => {
      if (props.modalId === modalId) return {};

      const modalIndex = props.modals.findIndex(
        (_modalId) => _modalId === props.modalId
      );
      props.modals.splice(modalIndex, -1, modalId);

      return { modalId, modals: props.modals, data };
    }),
}));