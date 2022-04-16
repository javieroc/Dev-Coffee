import { Flex, Box, Image } from '@chakra-ui/react';
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
    TypescriptLogo,
    ReactLogo,
    ReduxLogo,
    GraphqlLogo,
    PythonLogo,
    PHPLogo,
    DockerLogo,
    NodeLogo,
    JSLogo,
    PostgresLogo,
    MongoLogo,
  ];

  return (
    <Box background="gray.800">
      <Flex
        background="gray.800"
        padding="1em"
        margin="auto"
        width={['100%', '90%', '75%']}
      >
        <Box
          fontSize="0"
          _before={{
            content: '""',
            width: ['calc(70px/2 + 4px)', 'calc(100px/2 + 4px)'],
            float: 'left',
            height: '100%',
            shapeOutside: [
              'repeating-linear-gradient(transparent 0 calc((70px*3*1.1547/2 + 4*4px) - 3px), #fff 0 calc(70px*3*1.1547/2 + 4*4px))',
              'repeating-linear-gradient(transparent 0 calc((100px*3*1.1547/2 + 4*4px) - 3px), #fff 0 calc(100px*3*1.1547/2 + 4*4px))',
            ],
          }}
        >
          {images.map((image: string) => (
            <Box
              key={image}
              width={['70px', '100px']}
              height={['calc(70px*1.1547)', 'calc(100px*1.1547)']}
              margin="4px"
              clipPath="polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
              marginBottom={['calc(4px - 70px*0.2885)', 'calc(4px - 100px*0.2885)']}
              display="inline-block"
              background="white"
              position="relative"
            >
              <Image
                src={image}
                width="55%"
                position="absolute"
                top="50%"
                right="50%"
                transform="translate(50%, -50%)"
              />
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export { Technologies };
