'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import SearchModal from './SearchModal';

const ModalContext = createContext({ open: () => {}, close: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen ? <SearchModal onClose={close} /> : null}
    </ModalContext.Provider>
  );
}
