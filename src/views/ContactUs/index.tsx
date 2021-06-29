import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';
import { useAppContext } from '../../context';

function ContactUs(): JSX.Element {
  // form-id
  const [state, handleSubmit] = useForm("mbjqkgor");
  const { contactUsSectionRef } = useAppContext()!;
  const toast = useToast()

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Thank you!",
        description: "We've received your message.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })
    }
  }, [state.succeeded]);

  return (
    <Box bg="gray.800">
      <Center marginTop="2em" ref={contactUsSectionRef}>
        <Text fontSize={['2xl', '3xl', '4xl']} color="white">Contact Us</Text>
      </Center>
      <Center padding="1em">
        <form onSubmit={handleSubmit}>
          <Flex width="800px" direction="column">
            <Input name="fullname" placeholder="Full name" size="md" marginBottom="1em" color="white" isRequired />
            <Input name="email" placeholder="Email" type="email" size="md" marginBottom="1em" color="white" isRequired />
            <Input name="subject" placeholder="Subject" size="md" marginBottom="1em" color="white" isRequired />
            <Textarea name="message" placeholder="Message" size="md" marginBottom="1em" color="white" minHeight="150px" isRequired />
            <Button type="submit" colorScheme="green" isLoading={state.submitting}>
              Send
            </Button>
          </Flex>
        </form>
      </Center>
    </Box>
  );
}

export { ContactUs };
