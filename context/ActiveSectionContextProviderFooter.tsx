'use client';
import { useState, createContext, useContext } from 'react';

type ActiveSectionContextProviderFooterProps = {
  children: React.ReactNode;
};

type ActiveSectionContextTypeFooter = {
  activeSectionFooter: SectionNameFooter;
//   activeSection: SectionNameFooter;
//   setActiveSectionFooter: React.Dispatch<React.SetStateAction<any>>;
  setActiveSectionFooter: React.Dispatch<React.SetStateAction<SectionNameFooter>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContextFooter =
  createContext<ActiveSectionContextTypeFooter | null>(null);

// Provider for the ActiveSectionContext
export default function ActiveSectionContextProviderFooter({
  children,
}: ActiveSectionContextProviderFooterProps) {
//   const [activeSection, setActiveSectionFooter] = useState<any>('Home');
  const [activeSectionFooter, setActiveSectionFooter] = useState<SectionNameFooter>('Email Me');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContextFooter.Provider
      value={{
        activeSectionFooter,
        setActiveSectionFooter,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContextFooter.Provider>
  );
}

// Custom hook to use the ActiveSectionContext
export function useActiveSectionContextFooter() {
  const context = useContext(ActiveSectionContextFooter);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProviderFooter',
    );
  }
  return context;
}