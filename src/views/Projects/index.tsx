import React, { useState } from 'react';
import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '../../context';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function Projects(): JSX.Element {
  const [[page, direction], setProject] = useState([0, 0]);
  const { projectsSectionRef } = useAppContext()!;

  const projects = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1/800/600',
      title: 'Adidas web',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate dicta aliquam eligendi quasi omnis autem, alias quia eum hic?',
    },
    {
      id: 2,
      title: 'Adidas web',
      src: 'https://picsum.photos/id/10/800/600',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate dicta aliquam eligendi quasi omnis autem, alias quia eum hic?',
    },
    {
      id: 3,
      title: 'Adidas web',
      src: 'https://picsum.photos/id/20/800/600',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate dicta aliquam eligendi quasi omnis autem, alias quia eum hic?',
    },
    {
      id: 4,
      title: 'Adidas web',
      src: 'https://picsum.photos/id/30/800/600',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate dicta aliquam eligendi quasi omnis autem, alias quia eum hic?',
    },
  ];

  const paginate = (newDirection: number) => {
    setProject([page + newDirection, newDirection]);
  };

  const project = projects[Math.abs(page % 4)];
  return (
    <AnimatePresence custom={direction} initial={false}>
      <Center
        bg="blue.900"
        position="relative"
        flexDirection="column"
        padding="3em 1em"
      >
        <Heading ref={projectsSectionRef}>Services</Heading>
        <motion.div
          key={project.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <Flex
            maxWidth="1024px"
            justifyContent="center"
            alignItems="center"
          >
            <ChevronLeftIcon onClick={() => paginate(-1)} />
            <VStack>
              <Heading>{project.title}</Heading>
              <Text>{project.text}</Text>
            </VStack>
            <Image src={project.src} />
            <ChevronRightIcon onClick={() => paginate(1)} />
          </Flex>
        </motion.div>
      </Center>
    </AnimatePresence>
  );
}

export { Projects };
