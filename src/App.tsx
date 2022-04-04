import React, { useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  About,
  ContactUs,
  Projects,
  Services,
  Technologies,
  Team,
} from './views';
import { Footer, Header } from './components';
import { AppContext } from './context';

function App(): JSX.Element {
  const stackSectionRef = useRef<HTMLDivElement | null>(null);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactUsSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{
      stackSectionRef,
      teamSectionRef,
      projectsSectionRef,
      contactUsSectionRef,
    }}
    >
      <Flex direction="column">
        <Header />
        <About />
        <Services />
        <Technologies />
        <Team />
        <Projects />
        <ContactUs />
        <Footer />
      </Flex>
    </AppContext.Provider>
  );
}

export { App };
