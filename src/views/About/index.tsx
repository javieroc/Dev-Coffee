import { motion } from 'framer-motion';
import {
  Flex, Text, Box, Stack,
} from '@chakra-ui/react';
import { css, cx } from '@emotion/css';

const animatedBoxCss = css({
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

function About(): JSX.Element {
  return (
    <Stack
      spacing="24px"
      bg="white"
      padding="4em 1em"
      direction="row"
      justify="center"
      align="center"
    >
      <Flex width={['8em', '10em', '12em', '16em']} height={['8em', '10em', '12em', '16em']} position="relative">
        <Box
          width={['4em', '5em', '6em', '8em']}
          height={['4em', '5em', '6em', '8em']}
          zIndex="4"
          position="absolute"
          top="0"
          left="0"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: [0, 0, 270, 270, 0] }} className={cx(animatedBoxCss, css({ backgroundColor: '#1A202C' }))}>
            <Text fontSize="2xl" color="orange.400">D</Text>
          </motion.div>
        </Box>
        <Box
          width={['4em', '5em', '6em', '8em']}
          height={['4em', '5em', '6em', '8em']}
          borderRadius="4px"
          position="absolute"
          top="25%"
          left="25%"
          zIndex="5"
          opacity=".9"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: [0, 0, 270, 270, 0] }} className={cx(animatedBoxCss, css({ backgroundColor: '#E2E8F0' }))}>
            <Text fontSize="2xl" color="gray.600">&</Text>
          </motion.div>
        </Box>
        <Box
          width={['4em', '5em', '6em', '8em']}
          height={['4em', '5em', '6em', '8em']}
          borderRadius="4px"
          position="absolute"
          top="50%"
          left="50%"
          zIndex="6"
          opacity=".9"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: [0, 0, 270, 270, 0] }} className={cx(animatedBoxCss, css({ backgroundColor: '#A0AEC0' }))}>
            <Text fontSize="2xl" color="white">C</Text>
          </motion.div>
        </Box>
      </Flex>
      <Box width={['300px', '300px', '400px', '600px']}>
        <Text fontSize={['md', 'lg', 'xl', '2xl']} textAlign="justify">
          Dev & Coffee is a multi-disciplinary Team.
          We enjoy by helping our customers to make their ideas comes true
          by developing awesome software applications.
        </Text>
      </Box>
    </Stack>
  );
}

export { About };
