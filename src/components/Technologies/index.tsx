import React from 'react';
// import styled from '@emotion/styled';
import { Flex, Box, Image } from '@chakra-ui/react';
import PythonLogo from '../../assets/python.png';
import JSLogo from '../../assets/js.png';
import NodeLogo from '../../assets/node.png';
import ReactLogo from '../../assets/react.png';
import ReduxLogo from '../../assets/redux.png';
import GraphqlLogo from '../../assets/graphql.png';
import DockerLogo from '../../assets/docker.png';

// const ContainerDiv = styled.div({
//   fontSize: 0,
//   '&:before': {
//     content: '""',
//     width: 'calc(100px/2 + 4px)',
//     float: 'left',
//     height: '100%',
//     shapeOutside: 'repeating-linear-gradient(transparent 0 calc((100px*3*1.1547/2 + 4*4px) - 3px), #fff 0 calc(100px*3*1.1547/2 + 4*4px))'
//   }
// })

// const HexagonDiv = styled.div({
//   width: "100px",
//   height: "calc(100px*1.1547)",
//   margin: "4px",
//   clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
//   marginBottom: "calc(4px - 100px*0.2885)",
//   display: 'inline-block',
//   background: "red",
// });

function Technologies(): JSX.Element {
  return (
    <Flex background="blue.600" padding="3em 1em 7em 1em" margin={["1em 0", "2em 0", "3em 0"]}>
      <Box fontSize="0" _before={{
        content: '""',
        width: 'calc(100px/2 + 4px)',
        float: 'left',
        height: '100%',
        shapeOutside: 'repeating-linear-gradient(transparent 0 calc((100px*3*1.1547/2 + 4*4px) - 3px), #fff 0 calc(100px*3*1.1547/2 + 4*4px))'
      }}>
        {Array(2).fill(0).map((_) => (
          <Box
            width="100px"
            height="calc(100px*1.1547)"
            margin="4px"
            clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
            marginBottom="calc(4px - 100px*0.2885)"
            display='inline-block'
            background="gray.500"
          />
        ))}
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={ReactLogo}
            width="70%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={ReduxLogo}
            width="70%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={GraphqlLogo}
            width="70%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        {Array(3).fill(0).map((_) => (
          <Box
            width="100px"
            height="calc(100px*1.1547)"
            margin="4px"
            clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
            marginBottom="calc(4px - 100px*0.2885)"
            display='inline-block'
            background="gray.500"
          />
        ))}
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={PythonLogo}
            width="70%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={DockerLogo}
            width="80%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        {Array(4).fill(0).map((_) => (
          <Box
            width="100px"
            height="calc(100px*1.1547)"
            margin="4px"
            clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
            marginBottom="calc(4px - 100px*0.2885)"
            display='inline-block'
            background="gray.500"
          />
        ))}
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={NodeLogo}
            width="70%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
          />
        </Box>
        <Box
          width="100px"
          height="calc(100px*1.1547)"
          margin="4px"
          clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
          marginBottom="calc(4px - 100px*0.2885)"
          display='inline-block'
          background="white"
          position="relative"
        >
          <Image
            src={JSLogo}
            width="60%"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
            border="2px solid black"
            borderRadius="3px"
          />
        </Box>
        {Array(2).fill(0).map((_) => (
          <Box
            width="100px"
            height="calc(100px*1.1547)"
            margin="4px"
            clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
            marginBottom="calc(4px - 100px*0.2885)"
            display='inline-block'
            background="gray.500"
          />
        ))}
      </Box>
    </Flex>
  );
}

export { Technologies };
