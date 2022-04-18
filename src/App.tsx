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
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{
      services: servicesRef,
      projects: projectsRef,
      team: teamRef,
      contactUs: contactUsRef,
    }}
    >
      <Flex direction="column">
        <Header />
        <About />
        <Services />
        <Projects />
        <Team />
        <Technologies />
        <ContactUs />
        <Footer />
      </Flex>
    </AppContext.Provider>
  );
}

export { App };
