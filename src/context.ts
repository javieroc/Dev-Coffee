import { createContext, useContext } from 'react';

type Sections = 'services' | 'projects' | 'team' | 'contactUs';

type ContextType = {
  [section in Sections]: React.MutableRefObject<HTMLDivElement | null>;
};

const AppContext = createContext<ContextType | undefined>(undefined);
const useAppContext = () => useContext(AppContext);

export { useAppContext, AppContext };
