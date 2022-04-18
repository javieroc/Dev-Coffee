import React, { useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';
import { useAppContext } from '../../context';
import Background from '../../assets/contact-us/wave.svg';
import GuyImage from '../../assets/contact-us/guy.png';

function ContactUs(): JSX.Element {
  // form-id
  const [state, handleSubmit] = useForm('mbjqkgor');
  const { contactUs } = useAppContext()!;
  const toast = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Thank you!',
        description: "We've received your message.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  }, [state.succeeded]);

  return (
    <HStack
      backgroundImage={`url(${Background})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      spacing="64px"
      padding="10em 1em 3em 1em"
      justify="center"
      align="flex-start"
    >
      <form onSubmit={handleSubmit}>
        <Flex minWidth="500px" direction="column">
          <Input
            name="fullname"
            placeholder="Full name"
            size="md"
            marginBottom="1em"
            borderColor="gray.800"
            _hover={{
              borderColor: 'gray.800',
            }}
            borderWidth={2}
            isRequired
          />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            size="md"
            marginBottom="1em"
            borderColor="gray.800"
            _hover={{
              borderColor: 'gray.800',
            }}
            borderWidth={2}
            isRequired
          />
          <Input
            name="subject"
            placeholder="Subject"
            size="md"
            marginBottom="1em"
            borderColor="gray.800"
            _hover={{
              borderColor: 'gray.800',
            }}
            borderWidth={2}
            isRequired
          />
          <Textarea
            name="message"
            placeholder="Message"
            size="md"
            marginBottom="1em"
            minHeight="150px"
            borderColor="gray.800"
            _hover={{
              borderColor: 'gray.800',
            }}
            borderWidth={2}
            isRequired
          />
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={state.submitting}
          >
            Send
          </Button>
        </Flex>
      </form>
      <VStack justify="flex-start">
        <Heading ref={contactUs}>Contact Us</Heading>
        <Image
          boxSize="256px"
          src={GuyImage}
          alt="Contact Us"
        />
      </VStack>
    </HStack>
  );
}

export { ContactUs };
