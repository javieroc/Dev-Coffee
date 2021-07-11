import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '@emotion/css';
import Morning from '../../assets/morning-1.jpg';
import Afternoon from '../../assets/afternoon-1.jpg';
import Night from '../../assets/night-1.jpg';

const imageCss = css({
  position: 'absolute',
  width: '100%',
  height: '35vw',
});

const variants = {
  enter: {
    opacity: 0
  },
  center: {
    zIndex: 1,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    opacity: 0
  }
};

function Header(): JSX.Element {
  const images: string[] = [Morning, Afternoon, Night];
  const [image, setImage] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setImage((image + 1) % 3), 10000);
    return () => clearInterval(intervalId);
  }, [image, setImage]);

  return (
    <Box minHeight="35vw" >
      <AnimatePresence>
        <motion.img
          key={images[image]}
          className={imageCss}
          src={images[image]}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>
      <Navbar />
    </Box>
  )
}

export { Header }
