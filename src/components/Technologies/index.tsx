import React from 'react';
import { Flex, Box, Image, Text, Center } from '@chakra-ui/react';
import PythonLogo from '../../assets/python.png';
import JSLogo from '../../assets/js.png';
import NodeLogo from '../../assets/node.png';
import ReactLogo from '../../assets/react.png';
import ReduxLogo from '../../assets/redux.png';
import GraphqlLogo from '../../assets/graphql.png';
import DockerLogo from '../../assets/docker.png';
import TypescriptLogo from '../../assets/typescript.png';
import PHPLogo from '../../assets/php.png';
import PostgresLogo from '../../assets/postgres.png';
import MongoLogo from '../../assets/mongo.png';

function Technologies(): JSX.Element {
  const images = [
    <Image
      src={TypescriptLogo}
      width="60%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
      borderRadius="4px"
    />,
    <Image
      src={ReactLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={ReduxLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={GraphqlLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={PythonLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={PHPLogo}
      width="75%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={DockerLogo}
      width="80%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={NodeLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={JSLogo}
      width="60%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
      border="2px solid black"
      borderRadius="3px"
    />,
    <Image
      src={PostgresLogo}
      width="60%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
    <Image
      src={MongoLogo}
      width="70%"
      position="absolute"
      top="50%"
      right="50%"
      transform="translate(50%, -50%)"
    />,
  ];

  return (
    <Box background="blue.600">
      <Center marginTop="2em">
        <Text fontSize={['2xl', '3xl', '4xl']} color="white">Our Skills</Text>
      </Center>
      <Flex
        background="blue.600"
        padding="3em 1em 7em 1em"
        margin="auto"
        width={['100%', '80%', '60%']}
      >
        <Box fontSize="0" _before={{
          content: '""',
          width: 'calc(100px/2 + 4px)',
          float: 'left',
          height: '100%',
          shapeOutside: 'repeating-linear-gradient(transparent 0 calc((100px*3*1.1547/2 + 4*4px) - 3px), #fff 0 calc(100px*3*1.1547/2 + 4*4px))'
        }}>
          {images.map((image, index: number) => (
            <Box
              key={index}
              width="100px"
              height="calc(100px*1.1547)"
              margin="4px"
              clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
              marginBottom="calc(4px - 100px*0.2885)"
              display='inline-block'
              background="white"
              position="relative"
            >
              {image}
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export { Technologies };
