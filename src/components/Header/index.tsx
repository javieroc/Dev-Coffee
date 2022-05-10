import {
  Box, Flex, Heading, VStack,
} from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import Morning from '../../assets/morning-0.jpg';

function Header(): JSX.Element {
  return (
    <Box
      minHeight={['40vw', '35vw', '30vw']}
      backgroundImage={`url(${Morning})`}
      backgroundSize="cover"
      backgroundPosition="bottom"
      top="0px"
      left="0px"
    >
      <Navbar />

      <Flex marginTop="5%" marginLeft="10%">
        <VStack align="flex-start">
          <Heading
            fontSize={['xl', 'xx-large', 'xxx-large']}
            padding="4px"
            backgroundColor="gray.100"
            opacity="0.8"
          >
            The Support You Need
          </Heading>
          <Heading
            size="sm"
            color="white"
            padding="4px"
            backgroundColor="gray.700"
          >
            We Make Your Ideas Come True
          </Heading>
        </VStack>
      </Flex>
    </Box>
  );
}

export { Header };
