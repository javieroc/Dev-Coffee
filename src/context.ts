import { createContext, useContext } from 'react';

type ContextType = {
  stackSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  teamSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  contactUsSectionRef: React.MutableRefObject<HTMLDivElement | null>;
}

const AppContext = createContext<ContextType | undefined>(undefined);
const useAppContext = () => useContext(AppContext);

export { useAppContext, AppContext };