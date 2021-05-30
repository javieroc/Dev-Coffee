import React from 'react';
import { Flex, Text, Center, Box, Stack } from "@chakra-ui/react";

function About(): JSX.Element {
  return (
    <Stack
      spacing="24px"
      bg="white"
      padding="1em"
      minHeight={["20vw", "25vw"]}
      direction="row"
      justify="center"
      align="center"
    >
      <Flex width={["8em", "10em", "12em"]} height={["8em", "10em", "12em"]} position="relative">
        <Center
          bg="gray.800"
          width={["4em", "5em", "6em"]}
          height={["4em", "5em", "6em"]}
          borderRadius="4px"
          zIndex="4"
          position="absolute"
          top="0"
          left="0"
        >
          <Box fontSize="2xl" color="orange.400">D</Box>
        </Center>
        <Center
          bg="gray.200"
          width={["4em", "5em", "6em"]}
          height={["4em", "5em", "6em"]}
          borderRadius="4px"
          position="absolute"
          top="25%"
          left="25%"
          zIndex="5"
          opacity=".9"
        >
          <Box fontSize="2xl" color="gray.600">&</Box>
        </Center>
        <Center
          bg="gray.400"
          width={["4em", "5em", "6em"]}
          height={["4em", "5em", "6em"]}
          borderRadius="4px"
          position="absolute"
          top="50%"
          left="50%"
          zIndex="6"
          opacity=".9"
        >
          <Box fontSize="2xl" color="white">C</Box>
        </Center>
      </Flex>
      <Box width="300px">
        <Text fontSize={["md", "lg", "xl"]} textAlign="justify">We are a Team of developers ready to help you to delivery your product.</Text>
      </Box>
    </Stack>
  );
}

export { About };
