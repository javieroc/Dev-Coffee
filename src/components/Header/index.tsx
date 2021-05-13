import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Header(): JSX.Element {
  return (
    <Flex
      justifyContent="space-between"
      padding="1em"
      bgGradient="linear(to-b, gray.100, white)"
    >
      <Flex>
        <Text fontSize="xl" color="orange.400">Dev</Text>
        <Text fontSize="xl" color="gray.400">&</Text>
        <Text fontSize="xl" color="black">Coffee</Text>
      </Flex>
      <Flex>
        <Text>Team</Text>
      </Flex>
    </Flex>
  )
}

export { Header }
