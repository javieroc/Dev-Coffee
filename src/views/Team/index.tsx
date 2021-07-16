import React from 'react';
import {
  Box, Center, Flex, Img, Tag, Text,
} from '@chakra-ui/react';
import { useAppContext } from '../../context';
import Background from '../../assets/panel.jpg';

function Team(): JSX.Element {
  const { teamSectionRef } = useAppContext()!;

  return (
    <Flex direction="column">
      <Box
        background="blue.600"
        height={['30px', '40px', '60px']}
        width="100%"
        position="relative"
      >
        <Center ref={teamSectionRef}>
          <Text fontSize={['2xl', '3xl', '4xl']} color="white">Team</Text>
        </Center>
        <Box
          width="0px"
          height="0px"
          borderTop="50px solid #2b6cb0"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
          position="absolute"
          left="50%"
          top={['30px', '40px', '60px']}
          transform="translate(-50%, 0)"
          zIndex="4"
        />
      </Box>
      <Box
        background="white"
        height={['10px', '20px', '30px']}
        width="100%"
        position="relative"
      >
        <Box
          width="0px"
          height="0px"
          borderTop="55px solid white"
          borderLeft="55px solid transparent"
          borderRight="55px solid transparent"
          position="absolute"
          left="50%"
          top={['10px', '20px', '30px']}
          transform="translate(-50%, 0)"
          zIndex="3"
        />
      </Box>
      <Box
        background="#2D3748"
        height={['10px', '20px', '30px']}
        width="100%"
        position="relative"
      >
        <Box
          width="0px"
          height="0px"
          borderTop="60px solid #2D3748"
          borderLeft="60px solid transparent"
          borderRight="60px solid transparent"
          position="absolute"
          left="50%"
          top={['10px', '20px', '30px']}
          transform="translate(-50%, 0)"
          zIndex="2"
        />
      </Box>

      <Box
        backgroundImage={`url(${Background})`}
        width="100%"
        minHeight="400px"
        backgroundSize="cover"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        _after={{
          content: '""',
          display: 'block',
          width: '100%',
          minHeight: '400px',
          background: `linear-gradient(
            40deg,
            #fff2 0%,
            #fff2 10%,
            #fff6 15%,
            #fff2 20%,
            #fff2 30%,
            #fff2 30%,
            #fff2 40%,
            #fff6 45%,
            #fff2 50%,
            #fff2 60%,
            #fff2 60%,
            #fff2 70%,
            #fff6 75%,
            #fff2 80%,
            #fff2 100%
          )`,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        {[
          {
            name: 'Dani',
            title: 'Frontend Developer',
          },
          {
            name: 'Facu',
            title: 'Software Engineer',
          },
          {
            name: 'Matt',
            title: 'Software Developer',
          },
          {
            name: 'Connan',
            title: 'Software Developer',
          },
        ].map((member) => (
          <Box display="flex" flexDirection="column" alignItems="center" key={member.name}>
            <Img
              boxSize="140px"
              borderRadius="xl"
              backgroundColor="gray.50"
              src={`https://robohash.org/${member.name}`}
            />
            <Tag
              size="lg"
              variant="solid"
              colorScheme="blue"
              marginTop="8px"
            >
              {`${member.name} | ${member.title}`}
            </Tag>
          </Box>
        ))}
      </Box>

      <Box
        background="#2D3748"
        height={['15px', '15px', '20px']}
        width="100%"
        position="relative"
      >
        <Box
          width="150px"
          height="0px"
          borderBottom="25px solid #2D3748"
          borderLeft="25px solid transparent"
          borderRight="25px solid transparent"
          position="absolute"
          left="50%"
          bottom={['15px', '15px', '20px']}
          transform="translate(-50%, 0)"
        />
      </Box>
      <Box
        background="#A0AEC0"
        height={['10px', '20px', '30px']}
        width="100%"
        position="relative"
      >
        <Box
          width="150px"
          height="0px"
          borderBottom="25px solid #A0AEC0"
          borderLeft="30px solid transparent"
          borderRight="30px solid transparent"
          position="absolute"
          left="50%"
          bottom={['10px', '20px', '30px']}
          transform="translate(-50%, 0)"
          zIndex="4"
        />
      </Box>
    </Flex>
  );
}

export { Team };
