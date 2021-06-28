import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppContext } from '../../context';

function Navbar(): JSX.Element {
  const {
    contactUsSectionRef,
    projectsSectionRef,
    stackSectionRef,
    teamSectionRef,
  } = useAppContext()!;

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
          cursor="pointer"
          onClick={() => {
            stackSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Stack
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
          cursor="pointer"
          onClick={() => {
            teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Team
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
          cursor="pointer"
          onClick={() => {
            projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Projects
        </Text>
        <Text
          border="2px solid rgb(247,250,252, .85)"
          borderRadius="4px"
          padding="4px"
          color="rgb(247,250,252, .85)"
          margin="0 4px"
          cursor="pointer"
          onClick={() => {
            contactUsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Contact Us
        </Text>
      </Flex>
    </Flex>
  )
}

export { Navbar };
