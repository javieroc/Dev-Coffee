import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import BackgroundImage from '../../assets/panel.jpg';
import Background2Image from '../../assets/gate.jpg';

function Team(): JSX.Element {
  return (
    <Flex direction="column">
      <Box
        background="blue.600"
        height={["30px", "40px", "60px"]}
        width="100%"
        position="relative"
      >
        <Box
          width="0px"
          height="0px"
          borderTop="50px solid #2b6cb0"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
          position="absolute"
          left="50%"
          top={["30px", "40px", "60px"]}
          transform="translate(-50%, 0)"
          zIndex="4"
        />
      </Box>
      <Box
        background="white"
        height={["10px", "20px", "30px"]}
        width="100%"
        position="relative"
      >
        <Box
          width="0px"
          height="0px"
          borderTop="55px solid white"
          borderLeft="55px solid transparent"
          borderRight="55px solid transparent"
          position="absolute"
          left="50%"
          top={["10px", "20px", "30px"]}
          transform="translate(-50%, 0)"
          zIndex="2"
        />
      </Box>
      <Box
        background="#2D3748"
        height={["10px", "20px", "30px"]}
        width="100%"
        position="relative"
      >
        <Box
          width="0px"
          height="0px"
          borderTop="60px solid #2D3748"
          borderLeft="60px solid transparent"
          borderRight="60px solid transparent"
          position="absolute"
          left="50%"
          top={["10px", "20px", "30px"]}
          transform="translate(-50%, 0)"
        />
      </Box>
      <Image src={BackgroundImage} maxHeight="400px" objectFit="cover" />
      <Box
        background="#2D3748"
        height={["15px", "15px", "20px"]}
        width="100%"
        position="relative"
      >
        <Box
          width="150px"
          height="0px"
          borderBottom="25px solid #2D3748"
          borderLeft="25px solid transparent"
          borderRight="25px solid transparent"
          position="absolute"
          left="50%"
          bottom={["15px", "15px", "20px"]}
          transform="translate(-50%, 0)"
        />
      </Box>
      <Box
        background="#A0AEC0"
        height={["10px", "20px", "30px"]}
        width="100%"
        position="relative"
      >
        <Box
          width="150px"
          height="0px"
          borderBottom="25px solid #A0AEC0"
          borderLeft="30px solid transparent"
          borderRight="30px solid transparent"
          position="absolute"
          left="50%"
          bottom={["10px", "20px", "30px"]}
          transform="translate(-50%, 0)"
          zIndex="4"
        />
      </Box>
    </Flex>
  );
}

export { Team };

