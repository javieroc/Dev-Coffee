import { useState } from 'react';
import {
  Flex,
  Heading,
  Image,
  IconButton,
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
  const { projects: projectsRef } = useAppContext()!;

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

  const project = projects[Math.abs(page % projects.length)];
  return (
    <AnimatePresence custom={direction} initial={false}>
      <VStack
        spacing="24px"
        bg="white"
        padding="3em 1em"
        justify="center"
        align="center"
      >
        <Heading ref={projectsRef}>Projects</Heading>
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
            backgroundColor="gray.50"
            boxShadow="md"
            gap="12px"
          >
            <IconButton
              aria-label="Prev"
              icon={<ChevronLeftIcon />}
              onClick={() => paginate(1)}
              variant="link"
              fontSize="64px"
            />
            <VStack
              width="50%"
              align="flex-start"
            >
              <Heading>{project.title}</Heading>
              <Text>{project.text}</Text>
            </VStack>
            <Image
              src={project.src}
              width="40%"
              minHeight="500px"
              objectFit="cover"
            />
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              onClick={() => paginate(-1)}
              variant="link"
              fontSize="64px"
            />
          </Flex>
        </motion.div>
      </VStack>
    </AnimatePresence>
  );
}

export { Projects };
