import {
  Box, Flex, Heading, VStack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { useAppContext } from '../../context';

function Navbar(): JSX.Element {
  const {
    contactUsSectionRef,
    projectsSectionRef,
    stackSectionRef,
    teamSectionRef,
  } = useAppContext()!;

  const links = [
    {
      label: 'Stack',
      action: () => {
        stackSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Team',
      action: () => {
        teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Projects',
      action: () => {
        projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Contact Us',
      action: () => {
        contactUsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <Box position="absolute" zIndex="10" width="100%">
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
          {links.map((link) => (
            <Text
              key={link.label}
              border="2px solid #2D3748"
              borderRadius="4px"
              backgroundColor="gray.50"
              padding="4px 8px"
              color="gray.700"
              fontWeight="bold"
              margin="0 4px"
              cursor="pointer"
              onClick={link.action}
              _hover={{
                backgroundColor: 'gray.100',
              }}
            >
              {link.label}
            </Text>
          ))}
        </Flex>
      </Flex>
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
          <Heading size="sm" color="white" padding="4px">We Make Your Ideas Come True</Heading>
        </VStack>
      </Flex>
    </Box>
  );
}

export { Navbar };
