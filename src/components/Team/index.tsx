import React from 'react';
import { css } from '@emotion/css';
import { Box, Flex } from '@chakra-ui/react';

const arrowDownCss = css({
  width: 0,
  height: 0,
  borderTop: '50px solid #2b6cb0',
  borderLeft: '50px solid transparent',
  borderRight: '50px solid transparent',
  position: 'absolute',
  left: '50%',
  top: '100px',
  transform: 'translate(-50%, 0)'
});

function Team(): JSX.Element {
  return (
    <Flex>
      <Box
        background="blue.600"
        height="100px"
        width="100%"
        position="relative"
      >
        <Box className={arrowDownCss} />
      </Box>
    </Flex>
  );
}

export { Team };

