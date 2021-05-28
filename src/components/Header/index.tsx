import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar';

const images = import.meta.globEager('/src/assets/*.jpg');

function Header(): JSX.Element {
  return (
    <Box
      background={`url(${images['/src/assets/morning-1.jpg'].default}) no-repeat`}
      backgroundPosition=""
      backgroundSize="100% 100%, cover"
      minHeight="35vw"
    >
      <Navbar />
    </Box>
  )
}

export { Header }
