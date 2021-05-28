import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Navbar(): JSX.Element {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1em"
    >
      <Flex bg="rgb(247,250,252, .85)" padding="4px" borderRadius="4px">
        <Text fontSize="xl" color="orange.400">Dev</Text>
        <Text fontSize="xl" color="gray.400">&</Text>
        <Text fontSize="xl" color="black">Coffee</Text>
      </Flex>
      <Flex>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
        >
          Team
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
        >
          Stack
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
        >
          Projects
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
        >
          Contact Us
        </Text>
      </Flex>
    </Flex>
  )
}

export { Navbar };
