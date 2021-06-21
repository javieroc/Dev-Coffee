import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Footer(): JSX.Element {
  return (
    <Flex bg="gray.700" padding="1em" justifyContent="flex-end">
      <Text
        fontSize="md"
        as="i"
        color="white"
      >
        {'Dev by Dev&Coffee'}
      </Text>
    </Flex>
  );
}

export { Footer }
