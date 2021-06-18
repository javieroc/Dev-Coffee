import React from 'react';
import { Box, Center, Flex, Image, VStack, HStack, Text } from '@chakra-ui/react';

function Projects(): JSX.Element {
  return (
    <Center bg="blue.900">
      <Flex
        maxWidth="1024px"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="top"
        padding="1em"
        margin="2em .5em"
        borderRadius="8px"
        border="2px solid white"
      >
        <Box width={["100%", "100%", "60%"]}>
          <Image src="https://picsum.photos/800/600" borderRadius={["8px 8px 0px 0px", "8px 8px 0px 0px", "8px"]} />
        </Box>
        <Flex
          direction="column"
          wrap="wrap"
          width={["100%", "100%", "38%"]}
          bg="white"
          borderRadius={["0px 0px 4px 4px", "0px 0px 4px 4px", "4px"]}
          padding="8px"
        >
          <Text fontSize="md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit alias et dicta tempora culpa, voluptate ab blanditiis esse eius itaque dolore asperiores sunt, tenetur enim commodi exercitationem in. Dolorum expedita provident aut quas dolor aperiam amet assumenda placeat! Ea impedit, cum rerum ducimus dignissimos odio amet! Officiis, minus cupiditate?</Text>
          <Text fontSize="md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit alias et dicta tempora culpa, voluptate ab blanditiis esse eius itaque dolore asperiores sunt, tenetur enim commodi exercitationem in. Dolorum expedita provident aut quas dolor aperiam amet assumenda placeat! Ea impedit, cum rerum ducimus dignissimos odio amet! Officiis, minus cupiditate?</Text>
        </Flex>
      </Flex>
    </Center>
  )
}

export { Projects }
