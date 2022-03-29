import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import Morning from '../../assets/morning-0.jpg';

function Header(): JSX.Element {
  return (
    <Box
      minHeight={['30vw', '30vw', '20vw']}
      backgroundImage={`url(${Morning})`}
      backgroundSize="cover"
      backgroundPosition="bottom"
      top="0px"
      left="0px"
    >
      <Navbar />
    </Box>
  );
}

export { Header };
