import React from 'react';
import { Flex } from '@chakra-ui/react';
import { About, Header } from './components';

function App(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <About />
    </Flex>
  )
}

export { App }
