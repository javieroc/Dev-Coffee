import React, { useState } from 'react';
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

function Projects(): JSX.Element {
  const [[project, direction], setProject] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setProject([project + newDirection, newDirection]);
  };

  return (
    <AnimatePresence custom={direction} initial={false}>
      <Center bg="blue.900" position="relative">
        <motion.div
          key={project}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
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
              <Image
                src="https://picsum.photos/800/600"
                borderRadius={["8px 8px 0px 0px", "8px 8px 0px 0px", "8px"]}
              />
            </Box>
            <Box
              width={["100%", "100%", "38%"]}
              bg="white"
              borderRadius={["0px 0px 4px 4px", "0px 0px 4px 4px", "4px"]}
              padding="16px"
            >
              <Text fontSize="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit alias et dicta tempora culpa, voluptate ab blanditiis esse eius itaque dolore asperiores sunt, tenetur enim commodi exercitationem in. Dolorum expedita provident aut quas dolor aperiam amet assumenda placeat! Ea impedit, cum rerum ducimus dignissimos odio amet! Officiis, minus cupiditate?</Text>
            </Box>
          </Flex>
        </motion.div>
        <HStack
          spacing="24px"
          position="absolute"
          left="50%"
          bottom="12%"
          transform="translate(-50%, 0)"
          zIndex="4"
        >
          <IconButton
            colorScheme="orange"
            aria-label="left"
            size="md"
            icon={<ChevronLeftIcon />}
            onClick={() => paginate(-1)}
          />
          <IconButton
            colorScheme="teal"
            aria-label="right"
            size="md"
            icon={<ChevronRightIcon />}
            onClick={() => paginate(1)}
          />
        </HStack>
      </Center>
    </AnimatePresence>
  )
}

export { Projects }
