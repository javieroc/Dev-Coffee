import React from 'react';
import { Flex } from '@chakra-ui/react';
import { About, Header, Technologies, Team } from './components';

function App(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <About />
      <Technologies />
      <Team />
    </Flex>
  )
}

export { App }
