import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { About, Header, Technologies } from './components';

function App(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <About />
      <Technologies />
    </Flex>
  )
}

export { App }
